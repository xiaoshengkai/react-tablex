import VirtualTable from 'react-tablex';
import React, { useState } from 'react';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
    fixed: 'left',
  },
  {
    label: '金',
    fieldkey: 'type',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: '木',
    fieldkey: 'type',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: '水',
    fieldkey: 'type',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: '火',
    fieldkey: 'type',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: '土',
    fieldkey: 'type',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState(new Array(100).fill({}));

  const onChange = (value) => {
    console.log('valuevalue', value);
    setDataSource(value);
  };

  return (
    <VirtualTable
      columns={columns}
      value={dateSource}
      onChange={onChange}
      operateConfig={{ isFixedOperate: true }}
    />
  );
};

export default Demo;
