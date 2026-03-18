import React, { useState } from 'react';
import VirtualTable from 'react-VFormTable';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '是否开启',
    fieldkey: 'type',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Radio',
    options: [
      { label: '是', value: true },
      { label: '否', value: false },
    ],
  },
  {
    label: '价格',
    fieldkey: 'price',
    rules: [{ required: true, message: '必填' }],
    type: 'InputNumber',
    attrs: {
      min: 0,
      max: 10,
    },
    fieldShow: false,
    watch: [{
      handle(value, { updateSelfConfig, updateCellData }) {
        updateSelfConfig({
          fieldShow: value,
        });
        
        updateCellData(1)
      },
      deps: ['type'],
    }],
  },
  {
    label: '备注',
    fieldkey: 'txt',
    type: 'TextArea',
    watch: [{
      handle(value, { updateCellData }) {
        if (value === 1) {
          updateCellData(`${value}块钱`)
        }
      },
      deps: ['price'],
    }],
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
