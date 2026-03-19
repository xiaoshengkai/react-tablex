/** @format */

import React, { useRef, useState } from 'react';
import VirtualTable from 'react-tablex';
import { Button, message } from 'antd';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '名字（不能重复）',
    fieldkey: 'type',
    require: true,
    rules: [
      { required: true, message: '必填' },
      {
        validator: async (config, value, callback) => {
          const store = config.getStore();

          /**
           * 模拟异步
           * 睡眠1秒钟
           */
          await new Promise(resolve => {
            setTimeout(resolve, 1000);
          });

          /** 判断是否存在重名 */
          const exitRepeat = store.reduce((result, { ssid, type }) => {
            if (config.ssid === ssid) {
              return result;
            }
            if (type === value || result) {
              return true;
            }
            return false;
          }, false);

          callback?.(exitRepeat ? '名字不能重复' : undefined);
        },
      },
    ],
    type: 'InputNumber',
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([]);
  const virtualTableRef = useRef(null);

  const onChange = value => {
    setDataSource(value);
  };

  const submit = () => {
    virtualTableRef.current?.validate().then(error => {
      if (!error) {
        message.success('检验通过');
      }
    });
  };

  return (
    <div>
      <Button onClick={submit} style={{ marginBottom: '20px' }}>
        提交
      </Button>
      <VirtualTable
        ref={virtualTableRef}
        columns={columns}
        value={dateSource}
        onChange={onChange}
      />
    </div>
  );
};

export default Demo;
