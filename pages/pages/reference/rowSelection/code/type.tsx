/** @format */

import React, { useState } from 'react';
import VirtualTable, { Operate } from '@xiaoshengkai/react-tablex';
import { Divider, Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const columns = [
  {
    label: '内容',
    fieldkey: 'type',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([
    { type: '内容1' },
    { type: '内容2' },
    { type: '内容3' },
    { type: '内容4' },
    { type: '内容5' },
    { type: '内容6' },
    { type: '内容7' },
    { type: '内容8' },
    { type: '内容9' },
  ]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [type, setType] = useState('checkbox');

  const onChange = value => {
    setDataSource(value);
  };

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRowKeys);
    console.log('selectedRowKeys, selectedRows', selectedRowKeys, selectedRows);
  };

  const onTypeChange = e => {
    setType(e.target.value);
    setSelectedRowKeys([]);
  };

  return (
    <div>
      <RadioGroup onChange={onTypeChange} value={type}>
        <RadioButton value="checkbox">多选</RadioButton>
        <RadioButton value="radio">单选</RadioButton>
      </RadioGroup>
      <Divider />
      <VirtualTable
        columns={columns}
        value={dateSource}
        onChange={onChange}
        operateItems={[
          { type: Operate.Add },
          { type: Operate.Del },
          { type: Operate.MoveUp },
          { type: Operate.MoveDown },
        ]}
        operateConfig={{ width: 160 }}
        isOperationBtnVisible
        rowSelection={{
          type,
          selectedRowKeys,
          onChange: onSelectChange,
        }}
      />
    </div>
  );
};

export default Demo;
