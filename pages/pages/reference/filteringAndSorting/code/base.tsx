import VirtualTable from 'react-tablex';
import React, { useState } from 'react';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '年龄',
    fieldkey: 'age',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'InputNumber',
    sortDirections: ['ascend', 'descend'],
    sorter: (a, b) => a.age - b.age,
  },
  {
    label: '姓名',
    fieldkey: 'name',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
  },
  {
    label: '内容',
    fieldkey: 'content',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([
    { age: 38, name: '喜羊羊', content: '我是一只狼' },
    { age: 28, name: '沸羊羊', content: '我是一只牛' },
    { age: 18, name: '美羊羊', content: '我是一只猪' },
    { age: 8, name: '懒羊羊', content: '我是一只小可爱' },
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
