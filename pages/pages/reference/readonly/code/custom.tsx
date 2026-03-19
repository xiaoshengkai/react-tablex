/** @format */

import React, { useState } from 'react';
import VirtualTable from 'react-VFormTable';
import { Radio, Input } from 'antd';

const RadioGroup = Radio.Group;

/**
 * 自定义组件
 * 自动接收value, onChange
 */
const Custom = ({ value, onChange, width }) => {
  const { type, content } = value || {};

  const onSelfChange = (params: { type?: boolean; content?: string }) => {
    onChange({ ...value, ...params });
  };

  return (
    <div
      className="custom"
      style={{ display: 'flex', alignItems: 'center', height: '30px' }}
    >
      <RadioGroup
        onChange={e => onSelfChange({ type: e.target.value })}
        value={type}
      >
        <Radio value={true}>显示</Radio>
        <Radio value={false}>隐藏</Radio>
      </RadioGroup>
      {type ? (
        <Input
          value={content}
          onChange={e => onSelfChange({ content: e.target.value })}
          style={{ width: `${width}px` }}
        />
      ) : null}
    </div>
  );
};

Custom.display = ({ value }) => {
  return <div>{value.type && value.content ? value.content : '-'}</div>;
};

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '自定义组件',
    fieldkey: 'custom',
    require: true,
    rules: [{ required: true, message: '必填' }],
    custom: {
      edit: Custom,
      display: Custom.display,
    },
    attrs: {
      width: 150,
    },
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([
    {
      custom: {
        type: true,
        content: '坚持不懈，即使进展缓慢，也要记得前进的每一步都在向目标靠近。',
      },
    },
    {
      custom: {
        type: false,
        content: '坚持不懈，即使进展缓慢，也要记得前进的每一步都在向目标靠近。',
      },
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
