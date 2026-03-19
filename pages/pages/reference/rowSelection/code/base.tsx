/** @format */

import React, { useRef, useState } from 'react';
import VirtualTable, { Operate } from 'react-tablex';

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
  ]);

  const onChange = value => {
    setDataSource(value);
  };

  const onSelectChange = (selectedRowKeys, selectedRows) => {
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
        rowSelection={{
          onChange: onSelectChange,
        }}
      />
    </div>
  );
};

export default Demo;
