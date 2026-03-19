/** @format */

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
    label: '内容',
    fieldkey: 'type',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    fieldShow: false,
    watch: [{
      handle(value, { updateSelfConfig }) {
        updateSelfConfig(value);
      },
      deps: ['fieldDisabled', 'fieldShow'],
      immediately: true,
    }],
  },
  {
    label: '控制',
    fieldkey: 'control',
    children: [
      {
        label: '是否禁用内容',
        fieldkey: 'fieldDisabled',
        type: 'Switch',
        options: [
          { label: '是', value: 1 },
          { label: '否', value: 0 },
        ],
      },
      {
        label: '是否显示内容',
        fieldkey: 'fieldShow',
        type: 'Switch',
        initialValue: 1,
        options: [
          { label: '是', value: 1 },
          { label: '否', value: 0 },
        ],
      },
    ],
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([{}, {}]);

  const onChange = value => {
    setDataSource(value);
  };

  return (
    <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
  );
};

export default Demo;
