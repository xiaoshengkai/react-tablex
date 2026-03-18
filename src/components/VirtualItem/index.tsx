/** @format */

import React, {
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { get, set, isFunction } from 'lodash';
import { useDebounceFn } from 'ahooks';
import { VirtualContext } from '../../innerVFTable';
import { Operate } from '../../common/constants';
import { IVirtualItemProps } from '../../common/type';
import { emitListens } from '../../common/util/watcher';
import { setStoreField } from '../../common/config';
import VirtualRequireItem from '../VirtualRequireItem';
import useForceUpdate from '../../common/hooks/useForceUpdate';

import './index.less';

const VirtualItem = ({
  children,
  fieldkey,
  defaultValue,
  ssid,
  label,
  require,
  style,
  className,
  topContent,
  bottomContent,
  prefix,
  suffix,
  attrs,
  columnDisabled,
  disabled,
  fieldShow: configFieldShow,
}: IVirtualItemProps) => {
  const { operate, fieldsStoreRef, dataSourceMemo } =
    useContext(VirtualContext);
  const {
    validate,
    error,
    immediately,
    store,
    fieldShow = configFieldShow,
    firstRender = true,
    fieldDisabled,
    rowIndex,
  } = get(fieldsStoreRef?.current || {}, [ssid, fieldkey]) || {};
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const initialValue = useMemo(
    () =>
      dataSourceMemo?.find(record => record?.ssid === ssid)?.[fieldkey] ??
      defaultValue,
    [dataSourceMemo, defaultValue, ssid, fieldkey],
  );

  const [selfValue, setSelfValue] = useState(initialValue);
  const { forceUpdate }  = useForceUpdate();

  const { run } = useDebounceFn(
    async value => {
      const store =
        await operate?.({
          type: Operate.Change,
          fieldkey,
          ssid,
          value,
        }) || [];

      /** 校验 */
      await validate?.(value);

      /** 触发当前field监听 */
      emitListens(value, { fieldsStoreRef, ssid, fieldkey, store });

      /** 更新 */
      forceUpdate();
    },
    {
      wait: 120,
    },
  );

  /**
   * 劫持表单字段【change】事件
   * 将值透传
   */
  const onChange = e => {
    let value = e;

    /** 兼容 e?.target 处理 */
    if (typeof e?.target === 'object') {
      value = e.target.value;
    }

    setSelfValue(value);
    run(value);
  }

  /**
   * 选择项的label留存
   */
  const onSelect = (_, params) => {
    if (fieldsStoreRef?.current) {
      set(fieldsStoreRef.current, [ssid, fieldkey], {
        ...get(fieldsStoreRef.current, [ssid, fieldkey]),
        selectName: params?.props?.children,
      });
    } 
  }

  /**
   * 更新 Field
   * *****************************
   * emitValid 是否触发校验
   * emitWatch 是否触发监听
  */
  const fieldForceUpdate = async ({
    emitValid = false,
    emitWatch = true
  } = {}) => {
    const { value, immediately } = get(fieldsStoreRef.current, [ssid, fieldkey])
    
   

    if (emitValid) {
      await validate?.(value);
    }

    /** 重新触发监听事件 */
    if (emitWatch && immediately) {
      emitListens(value, { fieldsStoreRef, ssid, fieldkey, store });
    }

    /** 更新组件状态 */
    forceUpdate()
  }

  /**
   * 自身数据更新
   */
  useEffect(() => {
    setSelfValue(initialValue);
  }, [initialValue, setSelfValue]);

  /**
   * 定时器，防止快速滑动无效执行
   * 执行 watch
   */
  useEffect(() => {
    timerRef.current = setTimeout(async () => {
      /**
       * 只执行一次，触发当前field监听
      */
      if (firstRender && immediately) {
        emitListens(selfValue, { fieldsStoreRef, ssid, fieldkey, store });
      }
      setStoreField(fieldsStoreRef, { ssid, fieldkey }, { firstRender: false });

    }, 150);
  }, [
    fieldkey,
    fieldsStoreRef,
    firstRender,
    immediately,
    selfValue,
    ssid,
    store,
  ]);

  useEffect(() => {
    /** 
     * 注册 - fieldForceUpdate
     * 控制当前field强制更新
    */
    if (fieldsStoreRef?.current) {
      set(fieldsStoreRef.current, [ssid, fieldkey], {
        ...get(fieldsStoreRef.current, [ssid, fieldkey]),
        fieldForceUpdate,
      });
    }

    return () => {
      /**
       * 卸载重置状态
       * firstRender 变为初始化
       */
      // setStoreField(fieldsStoreRef, { ssid, fieldkey }, { firstRender: true });
      clearTimeout(timerRef.current);
    };
  }, []);

  /** 渲染元素 */
  const renderChildren = React.cloneElement(children, {
    ...(attrs || {}),
    style: {
      ...(style || {}),
    },
    disabled: disabled || columnDisabled || fieldDisabled,
    onChange,
    onSelect,
    value: selfValue,
    checked: selfValue,
    className: `${className || ''} ${
      error?.message ? 'virtual_item--children' : ''
    }`,
  });

  /** 插槽出参 */
  const slotPropsMemo = useMemo(() => {
    return {
      rowIndex,
      ssid,
      store: dataSourceMemo,
    }
  }, [rowIndex, ssid, dataSourceMemo])

  /** prefix 和 suffix组装 */
  const renderChildrenMemo = useMemo(() => {
    const realRender = [];
    const columnStyle = [];

    if (prefix) {
      realRender.push(
        <div className="virtual_item_children--prefix">
          {isFunction(prefix) ? prefix(selfValue, slotPropsMemo) : prefix}
        </div>,
      );
      columnStyle.push('auto');
    }

    realRender.push(renderChildren);
    columnStyle.push('1fr');

    if (suffix) {
      realRender.push(
        <div className="virtual_item_children--suffix">
          {isFunction(suffix) ? suffix(selfValue, slotPropsMemo) : suffix}
        </div>,
      );
      columnStyle.push('auto');
    }

    return (
      <div
        className="virtual_item_children--wrap"
        style={{
          gridTemplateColumns: columnStyle.join(' '),
          width: realRender.length > 1 ? 'auto': '100%',
        }}
      >
        {realRender}
      </div>
    );
  }, [prefix, renderChildren, suffix, selfValue, slotPropsMemo]);

  return fieldShow ? (
    <div className="virtual_item">
      {/* topContent 插槽区 */}
      {isFunction(topContent)
        ? (topContent as Function)(selfValue, slotPropsMemo)
        : topContent}
      {label ? (
        <div className="virtual_item_label--wrap">
          {require ? (
            <VirtualRequireItem label={label} />
          ) : (
            <label>{label}：</label>
          )}
          {renderChildrenMemo}
        </div>
      ) : (
        renderChildrenMemo
      )}
      {/* 错误展示区 */}
      {error?.message && (
        <div className="virtual_item--error">{error?.message} </div>
      )}
      {/* bottomContent 插槽区 */}
      {isFunction(bottomContent)
        ? (bottomContent as Function)(selfValue, slotPropsMemo)
        : bottomContent}
    </div>
  ) : null;
};

export default memo(VirtualItem);
