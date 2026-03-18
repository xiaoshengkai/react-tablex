import React from 'react';
import {
  Input,
  InputNumber,
  Radio,
  Select,
  Checkbox,
  Cascader,
  DatePicker,
  MultiCascader,
  Rate,
  Switch,
  Slider,
  TimePicker,
  Space,
} from 'antd';
import dayjs from 'dayjs';
import { CheckboxOptionType } from 'antd/lib/checkbox';
import { TextAreaProps } from 'antd/lib/input';
import { OptionProps } from '../../common/type/index';
import { Type } from '../../common/constants/type';
import VirtualText from '../../components/VirtualText';
import VirtualLink from '../../components/VirtualLink';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

import './style.less'

const Components = {
  [Type.InputName]: <Input />,
  [Type.TextAreaName]: (props: TextAreaProps) => (
    <Input.TextArea
      {...props}
      showCountFloat={false}
      autoSize
      autosize
      allowClear={false}
    />
  ),
  [Type.InputNumberName]: <InputNumber />,
  [Type.RadioName]: (options: OptionProps[]) => (
    <Radio.Group>
      <Space direction="horizontal" size="middle">
        {options.map(({ value, label, disabled }) => (
          <Radio key={String(value)} value={value} disabled={disabled}>
            {label}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  ),
  [Type.SelectName]: (options: OptionProps[]) => (
    <Select>
      {options.map(({ value, label, disabled }) => (
        <Select.Option key={String(value)} value={value} disabled={disabled}>
          {label}
        </Select.Option>
      ))}
    </Select>
  ),
  [Type.CheckboxName]: (options: CheckboxOptionType[]) => (
    <Checkbox.Group options={options} />
  ),
  [Type.CascaderName]: (options: OptionProps[]) => (
    <Cascader options={options} />
  ),
  [Type.DatePickerName]: <DatePicker />,
  [Type.MonthPickerName]: <DatePicker.MonthPicker />,
  [Type.RangePickerName]: <DatePicker.RangePicker />,
  [Type.WeekPickerName]: <DatePicker.WeekPicker />,
  [Type.TimePickerName]: <TimePicker />,

  [Type.SwitchName]: <Switch />,
  [Type.SliderName]: <Slider />,

  /*** 以下为扩展内置组件 */
  // @ts-ignore
  [Type.Text]: <VirtualText />,
  // @ts-ignore
  [Type.Link]: <VirtualLink />,
};

/**
 * 设置基本元素
 * edit    编辑态
 * display 只读态
 */
Object.keys(Components).forEach(name => {
  const element = Components[name];

  Components[name] = {
    edit: element,
    display: props => <VirtualText {...props} componentName={name} />,
  };
});

export { Components, Type };
