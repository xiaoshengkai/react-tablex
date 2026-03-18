

import Schema from 'async-validator';
import { set, get, max } from 'lodash';
import { collectListens } from '../util/watcher';
import { IFieldsStore, IConfig, Value, RecordType } from '../type';
import { SSID } from '../constants';

// 设置唯一ID
export const setSSIDForDate = (
  data: Value,
  customCellRender?: (props: any) => React.ReactNode,
) => {
  // 外部覆盖场景，不做数据处理
  if (customCellRender) {
    return data;
  }
  return data.map((params, index) => ({
    ...params,
    ssid: params.ssid ?? index,
  }));
};

// 获取最大SSID
export const getMaxSSID = (
  data: RecordType[] & { ssid: number }[],
) => {
  if (!data.length) return -1;

  const ssids = data.map(({ ssid } = {}) => ssid);
  return max(ssids);
};

/** 设置-表单字段集合字段 */
export const setStoreField = (
  fieldsStore: RecordType,
  { ssid, fieldkey, path }: IConfig,
  params?: RecordType,
) => {
  const objectPath = path || [ssid, fieldkey];

  const item = get(fieldsStore?.current, objectPath) || {};
  set(fieldsStore?.current, objectPath, {
    ...item,
    ...params,
  });
};

/**
 * @todo 能否优化
 * 获取最新数据
 */
const getStoreRegister = fieldsStoreRef => () =>
  fieldsStoreRef.current.reduce((total, item) => {
    if (item) {
      total.push(Object.keys(item).reduce((total, key) => {
        total[key] = item[key].value;
        total[SSID] = item[key].ssid;
        return total;
      }, {}))
    }

    return total;
  }, []);

/** 校验注册 */
const validateRegister = ({
  fieldkey,
  ssid,
  rules,
  fieldsStoreRef,
  rowIndex,
  getStore,
}) => {
  const descriptor = {
    [fieldkey]: rules.map(item => {
      /**
       * validator 改造
       * 注入当前表格数据
       */
      if (item['validator']) {
        return {
          validator: (_, ...rest) =>
            item['validator'](
              {
                ..._,
                ssid,
                rowIndex,
                fieldkey,
                getStore,
              },
              ...rest,
            ),
        };
      }

      return item;
    }),
  };
  const validator = new Schema(descriptor);

  /** 校验执行 */
  return value => {
    const { fieldShow = true } = get(fieldsStoreRef.current, [ssid, fieldkey]);

    return fieldShow
      ? new Promise(resolve => {
          validator
            .validate(
              { [fieldkey]: value },
              {
                first: true,
              },
            )
            .then(() => {
              setStoreField(
                fieldsStoreRef,
                { ssid, fieldkey },
                { error: null },
              );
              resolve(null);
            })
            .catch(({ errors }) => {
              const [err] = errors || [];
              const error = err ? { ...err, rowIndex } : err;
              setStoreField(fieldsStoreRef, { ssid, fieldkey }, { error });
              resolve(error);
            });
        })
      : null;
  };
};

/**
 * 注册表单字段集合
 * -----------------------
 * 返回当前所有field字段集合
 * 返回所有field key值
 * 返回当前所有收集的事件 listens
*/
export const registerFieldsStore = (
  params,
  fieldsKeys: string[] = [],
  fieldsStore = [],
) => {
  const {
    dataSource,
    operate,
    config,
    sourceConfig,
    setConfig,
    fieldsStoreRef,
  } = params;
  const getStore = getStoreRegister(fieldsStoreRef);
  const listens = collectListens(params);

  config.forEach(({ fieldkey, rules, children, initialValue }) => {
    if (children) {
      return registerFieldsStore(
        {
          dataSource,
          fieldsStoreRef,
          operate,
          config: children,
          sourceConfig,
          setConfig,
          listens,
        },
        fieldsKeys,
        fieldsStore,
      );
    }

    if (fieldkey) {
      dataSource.forEach(({ ssid, ...rest }, rowIndex) => {
        const item = get(fieldsStoreRef.current, [ssid, fieldkey]) || {};
        const params = {
          ...(item || {}),
          ssid,
          value: rest[fieldkey],
          ...(listens[fieldkey] || {}),
          rowIndex,
          initialValue,
        };

        if (rules) {
          const validate = validateRegister({
            fieldkey,
            ssid,
            rules,
            fieldsStoreRef,
            rowIndex,
            getStore,
          });
          params.validate = validate;
        }

        set(fieldsStore, [ssid, fieldkey], params);
        fieldsKeys.push(`${ssid}.${fieldkey}`);
      });
    }
  });

  return {
    fieldsKeys,
    fieldsStore,
    listens,
  };
};

/** 全字段操作 */
export const allFieldsOperate = async (fieldsStore: IFieldsStore[], fn) => {
  for (let item of fieldsStore) {
    if (item) {
      const keys = Object.keys(item);

      for (let fieldkey of keys) {
        await fn(item[fieldkey], fieldkey);
      }
    }
  }
};
