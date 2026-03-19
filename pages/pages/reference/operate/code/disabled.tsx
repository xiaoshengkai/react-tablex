import React, { useState } from 'react';
import VirtualTable, { Operate } from '@xiaoshengkai/react-tablex';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
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
  ]);

  const onChange = (value) => {
    setDataSource(value);
  };

  return (
    <div>
      <VirtualTable
        columns={columns}
        value={dateSource}
        onChange={onChange}
        operateItems={[
          /**
           * 控制第一行删除禁用
          */
          { type: Operate.Del, disabled: (cellProps) => cellProps.rowIndex === 0 },
          { type: Operate.Add },
        ]}
        operateConfig={{ width: 160 }}
      />
    </div>
  );
};

export default Demo;
