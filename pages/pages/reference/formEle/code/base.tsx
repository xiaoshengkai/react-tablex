

import React, { useRef, useState } from 'react';
import VirtualTable from '@xiaoshengkai/react-tablex';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '输入框',
    fieldkey: 'Input',
    type: 'Input',
    width: 200,
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '多行文本输入框',
    fieldkey: 'TextArea',
    type: 'TextArea',
    width: 200,
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '数字输入框',
    fieldkey: 'InputNumber',
    type: 'InputNumber',
    width: 200,
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '单选框',
    fieldkey: 'Radio',
    type: 'Radio',
    width: 200,
    options: [
      { label: '是', value: true },
      { label: '否', value: false },
    ],
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '选择器',
    fieldkey: 'Select',
    type: 'Select',
    width: 200,
    options: [
      { label: '是', value: true },
      { label: '否', value: false },
    ],
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '多选框',
    fieldkey: 'Checkbox',
    type: 'Checkbox',
    width: 200,
    options: [
      { label: '多选1', value: '1' },
      { label: '多选2', value: '2' },
    ],
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '级联选择',
    fieldkey: 'Cascader',
    type: 'Cascader',
    width: 200,
    options: [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
              },
            ],
          },
        ],
      },
    ],
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '日期选择框',
    fieldkey: 'DatePicker',
    type: 'DatePicker',
    width: 200,
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '月选择框',
    fieldkey: 'MonthPicker',
    type: 'MonthPicker',
    width: 200,
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '日期范围选择框',
    fieldkey: 'RangePicker',
    type: 'RangePicker',
    width: 200,
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '周选择框',
    fieldkey: 'WeekPicker',
    type: 'WeekPicker',
    width: 200,
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '时间选择框',
    fieldkey: 'TimePicker',
    type: 'TimePicker',
    width: 200,
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '开关',
    fieldkey: 'Switch',
    type: 'Switch',
    width: 200,
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '滑动输入条',
    fieldkey: 'Slider',
    type: 'Slider',
    width: 200,
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([{}]);

  const onChange = value => {
    setDataSource(value);
  };

  return (
    <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
  );
};

export default Demo;