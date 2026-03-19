import VirtualTable from '@xiaoshengkai/react-tablex';
import React, { useState } from 'react';

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
  const [dateSource, setDataSource] = useState([{}, {}]);

  const onChange = (value) => {
    console.log('valuevalue', value);
    setDataSource(value);
  };

  const expandedRowRender = () => (
    <VirtualTable
      columns={columns}
      value={[{ type: '让我用心把你留下来' }]}
      readonly
    />
  );

  return (
    <VirtualTable
      columns={columns}
      value={dateSource}
      onChange={onChange}
      expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
    />
  );
};

export default Demo;
