import React, { useState } from 'react';
import VirtualTable from 'react-VFormTable';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '内容',
    require: true,
    fieldkey: 'type',
    topContent: (
      <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px' }}>
        <p>床前明月光</p>
        <p>疑是地上霜</p>
        <p>举头望明月</p>
        <p>低头思故乡</p>
      </div>
    ),
    children: [
      {
        label: '你有什么感悟呢？',
        fieldkey: 'type1',
        rules: [{ required: true, message: '必填' }],
        type: 'TextArea',
        bottomContent: (value, { rowIndex }) => (
          <div style={{ color: '#1677ff', fontSize: '14px', margin: '20px 0' }}>
            我在第{ rowIndex + 1 }山，感悟是: {value || '...'}
          </div>
        ),
      },
    ],
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([{}]);

  const onChange = (value) => {
    setDataSource(value);
  };

  return (
    <div>
      <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
    </div>
  );
};

export default Demo;
