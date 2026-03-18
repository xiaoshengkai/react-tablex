/** @format */

import React, { useState } from 'react';
import VirtualTable, { Operate } from 'react-VFormTable';
import { Button } from 'antd'

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
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const onChange = value => {
    setDataSource(value);
  };

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRowKeys)
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
        operateConfig={{ width: 160 }}
        isOperationBtnVisible
        rowSelection={{
          columnWidth: 62,
          selectedRowKeys,
          onChange: onSelectChange,
          selections: [
            'SELECT_ALL',
            'SELECT_INVERT',
            'SELECT_NONE',
            {
              key: 'odd',
              text: <Button type='text'>选择奇数行</Button>,
              onSelect: (changeableRowKeys) => {
                let newSelectedRowKeys = [];
                newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                  if (index % 2 !== 0) {
                    return false;
                  }
                  return true;
                });
                setSelectedRowKeys(newSelectedRowKeys);
              },
            },
            {
              key: 'even',
              text: <Button type='text'>选择双数行</Button>,
              onSelect: (changeableRowKeys) => {
                let newSelectedRowKeys = [];
                newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                  if (index % 2 !== 0) {
                    return true;
                  }
                  return false;
                });
                setSelectedRowKeys(newSelectedRowKeys);
              },
            },
          ],
        }}
      />
    </div>
  );
};

export default Demo;
