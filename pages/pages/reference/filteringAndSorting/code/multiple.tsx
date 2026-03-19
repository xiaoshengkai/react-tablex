import VirtualTable from '@xiaoshengkai/react-tablex';
import React, { useState } from 'react';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '年龄(第一优先级)',
    fieldkey: 'age',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'InputNumber',
    sortDirections: ['ascend', 'descend'],
    sorter: {
      compare: (a, b) => a.age - b.age,
      multiple: 2,
    },
  },
  {
    label: '姓名',
    fieldkey: 'name',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
  },
  {
    label: '分数(第一优先级)',
    fieldkey: 'score',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'InputNumber',
    sorter: {
      compare: (a, b) => a.age - b.age,
      multiple: 1,
    },
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([
    { age: 38, score: 90, name: '喜羊羊' },
    { age: 28, score: 70, name: '沸羊羊' },
    { age: 18, score: 80, name: '美羊羊' },
    { age: 8, score: 100, name: '懒羊羊' },
  ]);

  const onChange = (value) => {
    console.log('valuevalue', value);
    setDataSource(value);
  };

  return (
    <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
  );
};

export default Demo;
