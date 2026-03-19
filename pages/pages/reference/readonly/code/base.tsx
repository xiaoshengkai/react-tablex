/** @format */

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
    label: '输入框',
    fieldkey: 'Input',
    type: 'Input',
    width: 200,
  },
  {
    label: '多行文本输入框',
    fieldkey: 'TextArea',
    type: 'TextArea',
    width: 200,
  },
  {
    label: '数字输入框',
    fieldkey: 'InputNumber',
    type: 'InputNumber',
    width: 200,
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
  },
  {
    label: '级联选择',
    fieldkey: 'Cascader',
    type: 'Cascader',
    width: 200,
    options: [
      {
        value: 'zhejiang',
        label: '浙江',
        children: [
          {
            value: 'hangzhou',
            label: '杭州',
            children: [
              {
                value: 'xihu',
                label: '西湖',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: '江苏',
        children: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'zhonghuamen',
                label: '中华门',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: '日期选择框',
    fieldkey: 'DatePicker',
    type: 'DatePicker',
    width: 200,
    attrs: {
      format: 'YYYY/MM/DD',
    },
  },
  {
    label: '月选择框',
    fieldkey: 'MonthPicker',
    type: 'MonthPicker',
    width: 200,
  },
  {
    label: '日期范围选择框',
    fieldkey: 'RangePicker',
    type: 'RangePicker',
    width: 200,
  },
  {
    label: '周选择框',
    fieldkey: 'WeekPicker',
    type: 'WeekPicker',
    width: 200,
  },
  {
    label: '时间选择框',
    fieldkey: 'TimePicker',
    type: 'TimePicker',
    width: 200,
  },
  {
    label: '开关',
    fieldkey: 'Switch',
    type: 'Switch',
    width: 200,
  },
  {
    label: '滑动输入条',
    fieldkey: 'Slider',
    type: 'Slider',
    width: 200,
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([
    {
      Input: '有时候，人生就像一锅烧开的毒鸡汤，虽然满是苦味，但也许正因为如此，我们才能品尝到生命的酸甜苦辣',
      Search: '当你感到挫败时，记住你的努力不会白费，每一步都是向前迈进的动力',
      TextArea: `在城市的海岸边，有一只名叫Sharky的超级英雄鲨鱼。
        Sharky有着一双闪闪发光的牙齿，他以帮助别人刷牙为使命。
        每天，Sharky穿梭在城市的街道上，寻找需要帮助的人。
        他用自己的牙齿为小朋友们刷牙，让他们拥有健康洁白的笑容。
        每个人都爱戴着Sharky，他成为了城市里最受欢迎的超级英雄之一。`,
      InputNumber: 666,
      Radio: true,
      Select: true,
      Checkbox: ['1', '2'],
      Cascader: ['zhejiang', 'hangzhou', 'xihu'],
      DatePicker: 1714485734000,
      MonthPicker: 1721743336000,
      RangePicker: [1715090538000, 1715436138000],
      WeekPicker: 1713276142000,
      TimePicker: '2024-04-22T16:04:09.000Z',
      Switch: true,
      Slider: 26,
    },
  ]);

  const onChange = value => {
    setDataSource(value);
  };

  return (
    <VirtualTable
      readonly
      columns={columns}
      value={dateSource}
      onChange={onChange}
    />
  );
};

export default Demo;
