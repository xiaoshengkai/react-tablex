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
  },
  {
    label: '姓名',
    fieldkey: 'name',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    filters: [
      {
        text: '喜羊羊',
        value: '喜羊羊',
      },
      {
        text: '懒羊羊',
        value: '懒羊羊',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
  },
  {
    label: '内容',
    fieldkey: 'content',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    filterSearch: true,
    filters: [
      {
        text: '我是一只狼',
        value: '我是一只狼',
      },
      {
        text: '我是一只牛',
        value: '我是一只牛',
      },
      {
        text: '小可爱',
        value: '小可爱',
      },
    ],
    onFilter: (value, record) => record.content.indexOf(value as string) > -1,
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
