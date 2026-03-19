import React, { useState } from 'react';
import VirtualTable from 'react-tablex';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '中奖数量',
    fieldkey: 'index',
    type: 'Input',
    prefix: '我有',
    suffix: '个',
  },
  {
    label: '备注',
    fieldkey: 'tip',
    children: [
      {
        prefix: '注意事项：',
        fieldkey: 'tip1',
        rules: [{ required: true, message: '必填' }],
        type: 'TextArea',
      },
      {
        prefix: '通知：',
        fieldkey: 'tip2',
        rules: [{ required: true, message: '必填' }],
        type: 'TextArea',
      }
    ]
  }
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([{}]);

  const onChange = (value) => {
    setDataSource(value);
  };

  return (
    <div>
      <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
    </div>
  );
};

export default Demo;
