import React, { useState } from 'react';
import VirtualTable, { Layout } from 'react-tablex';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '内容',
    require: true,
    fieldkey: 'type',
    layoutMode: Layout.Horizontal,
    children: [
      {
        label: '你好',
        fieldkey: 'type1',
        rules: [{ required: true, message: '必填' }],
        type: 'Input',
      },
      {
        label: '你想吃什么呢？',
        fieldkey: 'type2',
        rules: [{ required: true, message: '必填' }],
        type: 'Input',
      },
    ]
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([{}]);
  const onChange = (value) => {
    setDataSource(value);
  };

  return (
    <div>
      <VirtualTable
        columns={columns}
        value={dateSource}
        onChange={onChange}
      />
    </div>
  );
};

export default Demo;
