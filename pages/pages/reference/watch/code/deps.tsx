import React, { useState } from 'react';
import VirtualTable from '@xiaoshengkai/react-tablex';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '第一道开关',
    fieldkey: 'type1',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Radio',
    options: [
      { label: '是', value: true },
      { label: '否', value: false },
    ],
  },
  {
    label: '第二道开关',
    fieldkey: 'type2',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Radio',
    options: [
      { label: '是', value: true },
      { label: '否', value: false },
    ],
  },
  {
    label: '两个开关开启才能显示',
    fieldkey: 'price1',
    rules: [{ required: true, message: '必填' }],
    type: 'InputNumber',
    attrs: {
      min: 0,
      max: 10,
    },
    fieldShow: false,
    watch: [{
      handle(value, { updateSelfConfig, store }) {
        const { type1, type2 } = value;

        updateSelfConfig({
          fieldShow: type1 && type2,
        });
      },
      deps: ['type1', 'type2'],
    }],
  },
  {
    label: '最后触发开关的为准',
    fieldkey: 'price2',
    rules: [{ required: true, message: '必填' }],
    type: 'InputNumber',
    attrs: {
      min: 0,
      max: 10,
    },
    fieldShow: false,
    watch: [
      {
        handle(value, { updateSelfConfig }) {
          updateSelfConfig({
            fieldShow: value,
          });
        },
        deps: ['type1'],
      },
      {
        handle(value, { updateSelfConfig }) {
          updateSelfConfig({
            fieldShow: value,
          });
        },
        deps: ['type2'],
      },
    ],
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([{}]);

  const onChange = (value) => {
    setDataSource(value);
  };

  return (
    <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
  );
};

export default Demo;
