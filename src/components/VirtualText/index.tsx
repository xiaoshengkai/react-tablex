/** @format */

import React from 'react';
import { flattenChildrenForMap, getLabelsByRecursion } from './common/util';
import moment from 'moment';
import { Type } from '../../common/constants/type';

import './index.less'

/** 单选文本 */
const OptionTypeText = ({ value, options }) => {
  const text = options.find(ele => ele.value === value)?.label || '-';

  return <div>{text}</div>;
};

/** 多选文本 */
const OptionMultipleTypeText = ({ value = [], options }) => {
  const optionsMap = options.reduce((total, { label, value }) => {
    total[value] = label;
    return total;
  }, {});

  const text = value.map(v => optionsMap[v]).join('、');

  return <div>{text}</div>;
};

/** 树结构文本 */
const ChildrenTypeText = ({ value = [], options }) => {
  const text = getLabelsByRecursion(options, value).join(' / ');

  return <div>{text}</div>;
};

/** 树结构多选文本 */
const ChildrenMultipleTypeText = ({ value = [], options }) => {
  const valueForLabel = flattenChildrenForMap(options);
  const text = value?.map?.(v => valueForLabel[v]).join('，');

  return <div>{text}</div>;
};

/** 日期时间文本 */
const DateText = ({ value = [], format }) => {
  return <div>{moment(value).format(format)}</div>;
};

/** 日期时间文本 */
const DateMultipleText = ({ value = [], format }) => {
  const text = value.map(v => moment(v).format(format)).join(' ~ ')

  return <div>{text}</div>;
};

export default ({ componentName, value, options, format, BaseComponents={} }) => {
  let element = null;

  if (['', undefined, null].includes(value)) {
    element = <div>-</div>;
  }

  if ([Type.RadioName, Type.SelectName].includes(componentName)) {
     element = <OptionTypeText value={value} options={options} />;
  }

  if ([Type.CheckboxName].includes(componentName)) {
     element = <OptionMultipleTypeText value={value} options={options} />;
  }

  if ([Type.CascaderName].includes(componentName)) {
     element = <ChildrenTypeText value={value} options={options} />;
  }

  const defaultFormat = {
    [Type.DatePickerName]: 'YYYY-MM-DD',
    [Type.MonthPickerName]: 'YYYY-MM',
    [Type.RangePickerName]: 'YYYY-MM-DD HH:mm:ss',
    [Type.WeekPickerName]: 'YYYY-wo',
    [Type.TimePickerName]: 'HH:mm:ss',
  }[componentName];

  if (
    [
      Type.DatePickerName,
      Type.MonthPickerName,
      Type.WeekPickerName,
      Type.TimePickerName,
    ].includes(componentName)
  ) {
     element = <DateText value={value} format={format || defaultFormat} />;
  }

  if (
    [
      Type.RangePickerName
    ].includes(componentName)
  ) {
     element = <DateMultipleText value={value} format={format || defaultFormat} />;
  }

  if ([
    Type.SwitchName,
    Type.SliderName,
  ].includes(componentName)) {
     element = React.cloneElement(BaseComponents[componentName].edit, {
      value,
      disabled: true
    })
  }

   element = <div>{value}</div>

  return <div className='virtual-text'>{ element }</div>;
};
