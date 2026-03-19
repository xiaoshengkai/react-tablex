import { InputNumber } from 'antd';
import React, { useState } from 'react';
import VirtualTable, { Operate, Way } from 'react-VFormTable';

const InputNumberRange = ({ value, onChange }) => {
  const [f, l] = value || [];

  const onChangeHandle = (l) => {
    onChange([f, l]);
  };

  return (
    <div style={{ display: 'flex', width: '300px' }}>
      <InputNumber disabled value={f} />
      <span>~</span>
      <InputNumber value={l} onChange={onChangeHandle} />
    </div>
  );
};

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '价格区间',
    fieldkey: 'range',
    rules: [{ required: true, message: '必填' }],
    custom: InputNumberRange,
    watch: [
      {
        handle(value, { updateCellData, store, rowIndex }) {
          // 获取当前field数据
          const [, l] = store[rowIndex]?.range || [];
          // 获取上一个field数据
          const [, perL] = value || [];
          updateCellData([perL && perL + 1, l]);
        },
        deps: ['range'],
        way: Way.Pre,
        immediately: true,
      },
    ],
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([
    ...[
      {
        range: [0, 1],
      },
      {
        range: [],
      },
    ],
  ]);

  const onChange = (value) => {
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
        {
          type: Operate.Del,
          disabled: (cellProps) => cellProps.rowIndex === 0,
        },
      ]}
    />
  );
};

export default Demo;
