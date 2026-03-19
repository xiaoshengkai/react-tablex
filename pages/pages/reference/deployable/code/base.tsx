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

  return (
    <VirtualTable
      columns={columns}
      value={dateSource}
      onChange={onChange}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: '8px' }}>{`我：你是我天边最美的云彩~~~~；唱！，你：${record.type || '-'}`}</p>
        ),
        rowExpandable: (record) => record.ssid !== 0,
      }}
    />
  );
};

export default Demo;
