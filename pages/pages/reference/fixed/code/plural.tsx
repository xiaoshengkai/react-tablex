import VirtualTable from '@xiaoshengkai/react-tablex';
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
    label: 'column1',
    fieldkey: 'column1',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: 'column2',
    fieldkey: 'column2',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: 'column3',
    fieldkey: 'column3',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
    fixed: 'left',
  },
  {
    label: 'column4',
    fieldkey: 'column4',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: 'column5',
    fieldkey: 'column5',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: 'column6',
    fieldkey: 'column6',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
    fixed: 'left',
  },
  {
    label: 'column7',
    fieldkey: 'column7',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: 'column8',
    fieldkey: 'column8',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: 'column9',
    fieldkey: 'column9',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: 'column10',
    fieldkey: 'column10',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: 'column11',
    fieldkey: 'column11',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },
  {
    label: 'column12',
    fieldkey: 'column12',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
    width: 200,
  },

  {
    label: 'column13',
    fieldkey: 'column13',
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
