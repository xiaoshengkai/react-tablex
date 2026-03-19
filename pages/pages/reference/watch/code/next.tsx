/** @format */

import React, { useState } from 'react';
import VirtualTable, { Way, Operate } from 'react-tablex';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '权重',
    fieldkey: 'weight',
    require: true,
    type: 'InputNumber',
    rules: [
      { required: true, message: '必填' },
      {
        validator({ getStore, rowIndex }, value, callback) {
          if (rowIndex === 0) {
            return callback();
          }

          const store = getStore();

          if (store[rowIndex + 1]?.weight >= value) {
            return callback('当前权重小于下一列');
          }

          callback();
        },
      },
    ],
    watch: [{
      handle(value, { updateCellData }) {
        updateCellData(value && Number(value) + 1);
      },
      deps: ['weight'],
      way: Way.Next,
    }],
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([{}, {}, {}]);

  const onChange = value => {
    setDataSource(value);
  };

  return (
    <VirtualTable
      columns={columns}
      value={dateSource}
      onChange={onChange}
      operateItems={[
        { type: Operate.Add },
        /**
         * 控制第一行删除禁用
         */
        { type: Operate.Del, disabled: cellProps => cellProps.rowIndex === 0 },
      ]}
    />
  );
};

export default Demo;
