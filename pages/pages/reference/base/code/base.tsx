

import React, { useState } from 'react';
import { InputNumber } from 'antd';
import VirtualTable from 'react-tablex';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '内容',
    fieldkey: 'type',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
  },
];

const MAX = 100000

const Demo = () => {
    const [dateSource, setDataSource] = useState([]);

  const onChange = value => {
    setDataSource(value);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        指定数量：
        <InputNumber
          value={dateSource.length}
          onChange={value => {
            const num = value <= MAX ? value : MAX;
            onChange(new Array(num).fill({}));
          }}
          max={MAX}
        />
      </div>
      <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
    </div>
  );
};

export default Demo;