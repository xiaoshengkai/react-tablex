/** @format */

import VirtualTable, { Operate } from '@xiaoshengkai/react-tablex';
import React, { useState } from 'react';

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
  const [selectedRowKeys, setSelectedRowKeys] = useState([1, 2]);

  const onChange = (value) => {
    setDataSource(value);
  };

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRowKeys);
    console.log('selectedRowKeys, selectedRows', selectedRowKeys, selectedRows);
  };

  return (
    <div>
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
        isOperationBtnVisible
        operateConfig={{ width: 160 }}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
          getCheckboxProps: (record) => {
            return {
              disabled: record.ssid === 0,
              ssid: record.ssid,
            };
          },
        }}
      />
    </div>
  );
};

export default Demo;
