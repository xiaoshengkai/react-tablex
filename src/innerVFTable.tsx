/** @format */

import { Button, Empty, message } from 'antd';
import { useMount, useUpdateEffect } from 'ahooks';
import { cloneDeep, compact, get, isEqual, isUndefined } from 'lodash';
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  add,
  allFieldsOperate,
  change,
  changeCol,
  changeRow,
  del,
  getColumns,
  moveDown,
  moveUp,
  registerFieldsStore,
  setSSIDForDate,
} from './common/config';
import {
  ADD_TEXT,
  COMPONENT_NAME,
  DDE_TEXT,
  MAX_HEIGHT,
  MOVE_DOWN_TEXT,
  MOVE_UP_TEXT,
  Operate,
} from './common/constants';
import {
  IFieldsStore,
  IVirtualTableExtendProps,
  IVirtualTableProps,
  RecordType,
} from './common/type';
import { createNextTick } from './common/util';
import RalVirtualTable from './components/VirtualTable';
import { Components } from './builtInUI/antd/element';

import './style/index.less';

// 支持大数据动态增减 [🆗]
// 支持滑动定位 [🆗]
// debounce change 优化 [🆗]
// 上移，下移，添加，删除，添加 [🆗]
// watch 基本 cell[🆗]
// 全列 & 指定列 [🆗]
// 支持 多deps [🆗]
// 支持 立即执行 [🆗]
// 支持 立即执行（父级） [🆗]
// 父子(跨 VirtualTable 监听，邦一块) [🆗]
// 支持全局 ｜ 自定义行禁用 [🆗]
// 支持 无数据状态 [🆗]
// 外部更新数据API [🆗]
// 页面宽度动态自适应 [🆗]
// 页面行高动态自适应 [🆗]
// 支持改变当前单元格数据 [🆗]
// 支持改变当前列数据 [🆗]
// 支持多field字段，行/列布局 [🆗]
// 支持单元格多children渲染嵌套 [🆗]

const nextTick = createNextTick();

export const VirtualContext = React.createContext<{
  operate?: ({
    type,
    ...params
  }: {
    [x: string]: any;
    type: any;
  }) => Promise<unknown[] | RecordType[]> | RecordType[];
  dataSourceMemo: RecordType[];
  fieldsStoreRef: { current: IFieldsStore[] };
  id?: string;
}>({} as any);

/** 虚拟表格 */
const InnerVFTable = (
  {
    defaultValue,
    value,
    onChange,
    columns = [],
    scrollWidth = undefined,
    maxHeight = MAX_HEIGHT,
    addText = ADD_TEXT,
    delText = DDE_TEXT,
    // addChildText = ADD_CHILD_TEXT,
    moveUpText = MOVE_UP_TEXT,
    moveDownText = MOVE_DOWN_TEXT,
    operateItems = [{ type: Operate.Del }, { type: Operate.Add }],
    operateConfig,
    isOperationBtnVisible = false,
    customCellRender,
    disabled,
    readonly,
    // getRefAndMethod,
    empty,
    addLimit,
    addLimitText,
    onMounted,
    BaseComponents = Components,
    ...rest
  }: IVirtualTableProps & IVirtualTableExtendProps,
  refInstance,
) => {
  const virtualRef = useRef<any>(null);
  const virtualTableRef = useRef<any>(null);

  const listensRef = useRef<any>(null);
  /** 表单字段集合 */
  const fieldsStoreRef = useRef<IFieldsStore[]>([]);
  /** 表单字段key集合 */
  const fieldsStoreKeysRef = useRef<string[]>([]);
  /** 当前滑动位置 */
  const scrollTopRef = useRef(0);
  /** 表格数据 */
  const [dataSource, setDataSource] = useState(() =>
    setSSIDForDate(defaultValue || value || [], customCellRender),
  );

  // 记录前次dataSource表格数据;
  const preDataSourceRef = useRef<RecordType[]>(undefined);
  /** 表格配置 */
  const [config, updateConfig] = useState(columns || []);
  // 表格表单真实数据
  const dataSourceMemo = useMemo(() => {
    return compact(dataSource);
  }, [dataSource]);
  // 是否空态
  const isEmpty = useMemo(() => !dataSourceMemo?.length, [dataSourceMemo]);

  // 添加按钮展示项
  const addBtnProps = useMemo(() => {
    return operateItems.find(({ type }) => type === Operate.Add);
  }, [operateItems]);

  // 设置表格配置数据
  const setConfig = (newConfig) => {
    if (!isEqual(config, newConfig)) {
      updateConfig(newConfig);
    }
  };

  // 滑动指定位置 | 指定行
  const scrollToY = (params: { index?: number; top?: number }) => {
    nextTick(() => {
      const { index, top } = params;
      virtualTableRef.current?.scrollTo({ index });
      top && virtualTableRef.current?.scrollTo({ top });
    });
  };
  /**
   * 数据操作
   */
  const operate = async ({ type, ...params }) => {
    const update = (fn) => {
      if (
        type === Operate.Add &&
        !isUndefined(addLimit) &&
        dataSourceMemo.length >= addLimit
      ) {
        if (typeof addLimitText === 'function') {
          addLimitText();
          return dataSource;
        }
        message.warn(`超过指定数量${addLimit}条`);
        return dataSource;
      }

      if (type === Operate.Add) {
        const data = fn();
        scrollToY({ index: data.length + 1 });
        return data;
      }

      return fn();
    };

    const handle = {
      [Operate.Add]: add,
      [Operate.Change]: change,
      [Operate.ChangeRow]: changeRow,
      [Operate.ChangeCol]: changeCol,
      [Operate.Del]: del,
      [Operate.MoveUp]: moveUp,
      [Operate.MoveDown]: moveDown,
    }[type];

    const data = update(() => handle?.({ dataSource, ...params, config }));
    const compactData = compact(data);
    // @ts-ignore
    setDataSource(compactData);

    const fieldsStore = registerFields(compactData);
    /**
     * 非字段编辑情况下，再次更新字段
     * -----------------------------------
     * 更新内容包括：
     * 1、重新渲染当前字段组件状态
     * 2、重新触发重新触发监听事件：emitListens
     */
    if (![Operate.Change, Operate.ChangeRow].includes(type)) {
      /** 重新注册Field */
      await allFieldsForceUpdate(fieldsStore);
    }
    return compactData;
  };

  /**
   * 表单配置
   */
  const columnsMemo = getColumns(config, operate, fieldsStoreRef.current, {
    delText,
    moveUpText,
    moveDownText,
    operateItems,
    operateConfig,
    isOperationBtnVisible,
    customCellRender,
    disabled,
    readonly,
    BaseComponents,
  });

  const provideMemo = () => ({
    operate,
    dataSourceMemo,
    fieldsStoreRef,
  });

  /**
   * 监听滑动
   */
  const onScroll = (event) => {
    scrollTopRef.current = event.target.scrollTop;
    rest?.onScroll?.({
      clientHeight: event.target.clientHeight,
      scrollHeight: event.target.scrollHeight,
      scrollTop: event.target.scrollTop,
    });
  };

  /**
   * 校验
   */
  const validate = () => {
    return new Promise((resolve) => {
      /**
       * @todo Loading
       * 同步代码异步化，优化大数据问题
       */
      let count = 0;
      let errors: RecordType[] = [];
      if (!fieldsStoreKeysRef.current.length) {
        return resolve(null);
      }

      fieldsStoreKeysRef.current.forEach((key) => {
        nextTick(async () => {
          const field = get(fieldsStoreRef.current, key);
          const { value, validate } = field;
          const error = await validate?.(value);
          if (error) {
            errors.push({ [key]: error, field });
          }
          count++;

          if (fieldsStoreKeysRef.current.length === count) {
            /** 滑动到错误行 */
            const { rowIndex } = Object.values(errors?.[0] || {})?.[0] || {};
            !isUndefined(rowIndex)
              ? scrollToY({ index: rowIndex })
              : scrollToY({ top: scrollTopRef.current });
            // 返回值
            resolve(errors.length ? errors : null);
            errors.forEach(({ field }) =>
              field.fieldForceUpdate?.({ emitWatch: false }),
            );
          }
        });
      });
    });
  };

  /**
   * 全字段校验 & 触发watch
   * 直接修改 fieldsStore
   */
  const allFieldsForceUpdate = async (
    fieldsStore: IFieldsStore[],
    updateOptions = {},
  ) => {
    await allFieldsOperate(fieldsStore, async (item) => {
      item.fieldForceUpdate?.(updateOptions);
    });
  };

  /** 重新注册 fieldsStore */
  const registerFields = (dataSource) => {
    const params = {
      dataSource,
      operate,
      config,
      sourceConfig: config,
      setConfig,
      fieldsStoreRef,
    };
    const { fieldsStore, fieldsKeys, listens } = registerFieldsStore(params);

    fieldsStoreRef.current = fieldsStore;
    fieldsStoreKeysRef.current = fieldsKeys;
    listensRef.current = listens;

    return fieldsStore;
  };

  /**
   * 更新数据
   */
  const updateData = (data) => {
    const ssidData = setSSIDForDate(data, customCellRender);
    setDataSource(ssidData);
  };

  /** column的变化，设置回内置的config的state里面 */
  useEffect(() => {
    setConfig(columns);
  }, [columns]);

  /** 受当前数据变化-更新 */
  useUpdateEffect(() => {
    if (
      dataSourceMemo.length &&
      isEqual(dataSourceMemo, preDataSourceRef.current)
    ) {
      return;
    }
    preDataSourceRef.current = dataSourceMemo;
    onChange?.(dataSourceMemo);
  }, [dataSourceMemo]);

  /** 受控组件 */
  useEffect(() => {
    (async () => {
      if (value && !isEqual(preDataSourceRef.current, value)) {
        const ssidData = setSSIDForDate(value, customCellRender);

        /** 外部value变化注册 */
        const fieldsStore = registerFields(ssidData);
        await allFieldsForceUpdate(fieldsStore, {
          emitValid: true,
        });
        setDataSource(ssidData);
      }
    })();
  }, [value]);


  /** 初始化 */
  useMount(async () => {
    /** 生命周期 */
    onMounted?.();
  });

  /** 组件实例方法/变量 */
  useImperativeHandle(refInstance, () => ({
    componentName: COMPONENT_NAME,
    validate,
    getDataSource: () => cloneDeep(dataSourceMemo),
    updateData,
    listens: listensRef,
    fieldsStore: fieldsStoreRef,
    dom: virtualRef.current,
    scrollToY,
    addRow: (value) => operate({ value, type: Operate.Add }),
  }));

  return (
    <div className="virtualTable" ref={virtualRef}>
      <div
        className={`virtualTable_wrap ${isEmpty ? 'virtualTable_wrap--empty' : ''}`}
      >
        <VirtualContext.Provider value={provideMemo()}>
          <RalVirtualTable
            ref={virtualTableRef}
            className="table"
            scroll={{ y: maxHeight, x: scrollWidth }}
            bordered
            rowKey="ssid"
            {...rest}
            {...(rest?.rowSelection
              ? {
                  rowSelection: {
                    columnWidth: 36,
                    ...(rest?.rowSelection || {}),
                  },
                }
              : {})}
              {...(rest?.expandable
                ? {
                  expandable: {
                      columnWidth: 52,
                      ...(rest?.expandable || {}),
                    },
                  }
                : {})}
            dataSource={dataSourceMemo}
            onScroll={onScroll}
            columns={columnsMemo}
            pagination={false}
            // 空数据状态
            locale={{
              emptyText:
                isEmpty && !readonly ? (
                  <div className="virtualTable_empty">
                    {empty || (
                      <Empty
                        description={
                          <div>
                            <span>暂无数据 {isOperationBtnVisible ? '' : '，' }</span>
                            {!isOperationBtnVisible && addBtnProps && (
                              <React.Fragment>
                                <Button
                                  disabled={disabled || addBtnProps.disabled}
                                  onClick={() => operate({ type: Operate.Add })}
                                  type="link"
                                >
                                  新增一行
                                </Button>
                              </React.Fragment>
                            )}
                          </div>
                        }
                        imageStyle={{
                          height: 72,
                        }}
                      />
                    )}
                  </div>
                ) : null,
            }}
          />
        </VirtualContext.Provider>
      </div>
      {/* 添加操作 */}
      {addBtnProps && !isOperationBtnVisible && !readonly && !isEmpty ? (
        <div
          className="virtualTable_footer"
          onClick={() => operate({ type: Operate.Add })}
        >
          <Button type="link" disabled={disabled || addBtnProps.disabled}>
            + {addText}
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default InnerVFTable;
