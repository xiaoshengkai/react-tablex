/** @format */

import { get, isUndefined, omit, compact, isEqual } from 'lodash';
import {
  IEmitListensProps,
  IGetListensItemReturn,
  IGetListensProps,
  IGetListensReturn,
  IMergeWatchToSource,
  IReactionRegister,
  RecordType,
} from '../type';
import { setStoreField } from '../config';
import { Operate, Way } from '../constants';

/** 平铺所有config */
export const getAllConfig = (config, obj = [] as any, level = 0) => {
  config?.forEach(item => {
    if (item.children) {
      getAllConfig(item.children, obj, level + 1);
      return;
    }

    obj.push({ ...item, level });
  });

  return obj;
};

/** 修改config */
const genConfig = (config, name, value) =>
  config.reduce((total, item) => {
    if (name === item.fieldkey) {
      total.push({ ...item, ...value });
      return total;
    }

    if (item.children) {
      total.push({ ...item, children: genConfig(item.children, name, value) });
      return total;
    }

    total.push(item);
    return total;
  }, []);

/** 更新表单config */
export const updateConfigRegister = ({
  config,
  setConfig,
  fieldsStoreRef,
}) => {
  return (params: RecordType, name: string, ssid) => {
    // fieldShow 控制元素显隐，单独处理
    if (!isUndefined(params.fieldShow)) {
      setStoreField(
        fieldsStoreRef,
        { ssid, fieldkey: name },
        { fieldShow: params.fieldShow },
      );
    }

    // fieldDisabled 控制元素显隐，单独处理
    if (!isUndefined(params.fieldDisabled)) {
      setStoreField(
        fieldsStoreRef,
        { ssid, fieldkey: name },
        { fieldDisabled: params.fieldDisabled },
      );
    }

    const newConfig = genConfig(
      config,
      name,
      omit(params, 'fieldShow', 'fieldDisabled'),
    );

    setConfig(newConfig);
    const { fieldForceUpdate } = get(fieldsStoreRef?.current || {}, [ssid, name])
    fieldForceUpdate?.({ emitWatch: false });
  };
};

/** 更新数据 */
export const updateCellDataRegister = ({
  operate,
  dataSource,
  fieldsStoreRef,
}) => {
  /** 更新当前单元格数据 */
  const updateCellData = async (value, { ssid, name, store }) => {
    const field = get(fieldsStoreRef.current, [ssid, name]);

    if (isEqual([value], [field.value])) {
      return;
    }

    await operate({
      type: Operate.Change,
      fieldkey: name,
      ssid,
      value,
      dataSource,
    });

    /** 触发链式监听 */
    emitListens(value, {
      fieldsStoreRef,
      ssid,
      fieldkey: name,
      store,
      isPassive: true,
    });
  };

  /** 更新当前列数据 */
  const updateColData = (value, { name, store }) => {
    operate({
      type: Operate.ChangeCol,
      fieldkey: name,
      value,
      dataSource,
    });
  };

  return {
    updateCellData,
    updateColData,
  };
};

/** 校验当前项 */
const validateSelf = async ({
  name,
  ssid,
  fieldsStoreRef,
}) => {
  const { validate, value } = get(fieldsStoreRef.current, [ssid, name]);
  !isUndefined(value) && (await validate?.(value));
};

/** 校验当前列所有项 */
const validateCol = ({ name, fieldsStoreRef }) => {
  fieldsStoreRef.current.forEach(async item => {
    const { validate, value } = item[name];
    !isUndefined(value) && (await validate?.(value));
  });
};

/** 合并成为field */
const mergeWatchToSource = ({
  watch,
  sourceName,
  result,
}: IMergeWatchToSource) => {
  const { store, handle, deps = [], way = Way.Cell, ...rest } = watch;

  //当前项依赖对应的值
  const getDepOfValue = ssid => {
    const rowData = store.find(item => item.ssid === ssid);

    return deps.reduce((total, key) => {
      total[key] = rowData[key];
      return total;
    }, {});
  };

  return deps.forEach(name => {
    const fn = (value, config) => {
      if (deps.length === 0) {
        throw new Error('依赖项必须存在至少一项');
      }

      if (deps.length === 1) {
        return handle(value, config);
      }

      const depOfValue = getDepOfValue(config.ssid);
      return handle({ ...depOfValue, [name]: value }, config);
    };

    if (result[name]) {
      result[name].fns.push({
        fn,
        sourceName,
        way,
      });
      return;
    }

    result[name] = {
      store,
      fns: [
        {
          fn,
          sourceName,
          way,
        },
      ],
      ...rest,
    };
  });
};

/** 收集监听响应 */
export const getListens: (
  {
    config,
    store,
    emitFns,
  }: IGetListensProps & {
    emitFns: (v: any) => void;
  },
  result?: RecordType,
) => IGetListensReturn = ({ config, store, emitFns }, result = {}) => {
  config?.forEach(({ watch, children, fieldkey }) => {
    if (watch && typeof watch === 'object') {
      if (!Array.isArray(watch)) {
        mergeWatchToSource({
          watch: { store, emitFns, ...watch },
          sourceName: fieldkey,
          result,
        })
      } else {
        watch.forEach(watch =>
          mergeWatchToSource({
            watch: { store, emitFns, ...watch },
            sourceName: fieldkey,
            result,
          }),
        );
      }
    }

    if (children) {
      return getListens({ config: children, store, emitFns }, result);
    }
  });

  return result;
};

/** 收集监听响应 */
export const collectListens = ({
  dataSource,
  operate,
  sourceConfig: config,
  setConfig,
  fieldsStoreRef,
}: IReactionRegister) => {
  /** 更新当前列config配置 */
  const updateSelfConfig = updateConfigRegister({
    config,
    setConfig,
    fieldsStoreRef,
  });

  /** 更新当前行数据 */
  const { updateCellData, updateColData } = updateCellDataRegister({
    operate,
    dataSource,
    fieldsStoreRef,
  });

  /**
   * 执行handle
   *
   * 核心字段解读：
   * sourceName - 被更改的字段
   * ssid - 被更改的字段所在行ssid
   * emitSsid - 被触发的字段所在行ssid
   */
  const emitFns = params => {
    const { value, fn, ssid, sourceName, emitSsid, store, rowIndex } =
      params || {}

    fn(value, {
      updateSelfConfig: params => updateSelfConfig(params, sourceName, ssid),
      updateCellData: value =>
        updateCellData(value, {
          ssid,
          name: sourceName,
          store,
        }),
      updateColData: value =>
        updateColData(value, {
          store,
          name: sourceName,
        }),
      validateCol: () =>
        validateCol({ name: sourceName, fieldsStoreRef }),
      validateSelf: () =>
        validateSelf({
          ssid,
          name: sourceName,
          fieldsStoreRef,
        }),
      store,
      ssid,
      rowIndex,
      emitSsid,
    });
  };

  /** 收集 watch */
  const listens = getListens({ config, store: dataSource, emitFns });

  return listens;
};

/** 触发响应监听 */
export const emitListens = (
  valueProps,
  { fieldsStoreRef, ssid, fieldkey, store, isPassive }: IEmitListensProps,
  coverListensProps?: IGetListensItemReturn, // 复写属性
) => {
  const {
    fns = coverListensProps?.fns || [],
    emitFns = coverListensProps?.emitFns,
    rowIndex,
    ...rest
  } = get(fieldsStoreRef?.current, [ssid, fieldkey]) || {};
  const value = !isUndefined(valueProps) ? valueProps : rest.value;

  for (const { fn, sourceName, way } of fns) {
    // 如果是被动消费事件更新，判断是否为同一个字段，防止死循环
    if (isPassive && fieldkey === sourceName) {
      return;
    }

    /** 当前行消费事件 */
    if (way === Way.Cell) {
      emitFns?.({ value, fn, sourceName, ssid, store, rowIndex, way });
    }

    /**
     * 指定列消费事件 
     * ---------------------
     * 遍历指定列所有行的事件消费
    */
    if (way === Way.Col) {
      for (const row of fieldsStoreRef.current) {
        row?.[fieldkey].emitFns({
          ...row[fieldkey],
          fn,
          sourceName,
          value,
          emitSsid: rest.ssid,
        });
      }
    }

    /**
     * 静态指定行数消费事件
    */
    if (typeof way === 'number' && rowIndex === way) {
      emitFns?.({ value, fn, sourceName, ssid, store, way });
    }

    /**
     * 动态指定行数消费事件
    */
    if (typeof way === 'function' && way(rowIndex)) {
      emitFns?.({ value, fn, sourceName, ssid, store, rowIndex, way });
    }

    /**
     * 指定列当前行监听上一行，进行消费事件 
     * ---------------------
     * 遍历当前行之下的所有行事件进行消费 
    */
    if (way === Way.Pre) {
      const compactStore = compact(fieldsStoreRef.current);
      const sliceArr = compactStore.slice(rowIndex + 1);

      for (const [index, row] of sliceArr.entries()) {
        /** 第一个执行直接取当前值 */
        if (index === 0) {
          /** 初始值为当前触发行的值 */
          const value = compactStore[rowIndex][fieldkey].value || null

          /** 执行 */
          row?.[fieldkey].emitFns({
            ...row[fieldkey],
            fn,
            sourceName,
            value,
          });
        } else {
          /** 实时的获取上一个值 */
          const newCompactStore = compact(fieldsStoreRef.current);
          const { value } = newCompactStore[rowIndex + index]?.[fieldkey] || {};
          /** 执行 */
          row?.[fieldkey].emitFns({
            ...row[fieldkey],
            fn,
            sourceName,
            value,
          });
        }
      }
    }


    /**
     * 指定列当前行监听下一行，进行消费事件 
     * ---------------------
     * 遍历当前行之上的所有行事件进行消费 
    */
    if (way === Way.Next) {
      const compactStore = compact(fieldsStoreRef.current);
      /** 数组反转处理 */
      const sliceArr = compactStore.slice(0, rowIndex).reverse();

      for (const [index, row] of sliceArr.entries()) {
        /** 第一个执行直接取当前值 */
        if (index === 0) {
          /** 执行 */
          row?.[fieldkey].emitFns({
            ...row[fieldkey],
            fn,
            sourceName,
            value,
          });
        } else {
          /** 实时的获取下一个值 */
          const newCompactStore = compact(fieldsStoreRef.current);
          const { value } = newCompactStore[rowIndex - index]?.[fieldkey] || {};
          /** 执行 */
          row?.[fieldkey].emitFns({
            ...row[fieldkey],
            fn,
            sourceName,
            value,
          });
        }
      }
    }
  }
};
