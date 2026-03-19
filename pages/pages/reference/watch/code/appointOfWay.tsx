import React, { useState } from 'react';
import VirtualTable, { Way } from '@xiaoshengkai/react-tablex';
import { InputNumber } from 'antd';

const Demo = () => {
  const [dateSource, setDataSource] = useState([{}, {}]);
  const [num, setNum] = useState(1);
  
  const getColumns = () => [
    {
      label: '序号',
      fieldkey: 'index',
      width: 80,
      custom: VirtualTable.VirtualNo,
    },
    {
      label: '是否开启',
      fieldkey: 'type',
      require: true,
      rules: [{ required: true, message: '必填' }],
      type: 'Radio',
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    {
      label: '内容',
      fieldkey: 'content',
      require: true,
      rules: [
        {
          required: true,
          message: '必填',
        },
      ],
      type: 'Input',
      watch: [{
        handle(value, {updateSelfConfig}) {
          updateSelfConfig({
            fieldShow: value,
          });
        },
        deps: ['type'],
        way: (index) => index === num,
      }],
    },
  ];

  const onChange = (value) => {
    setDataSource(value);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        指定行触发watch：
        <InputNumber value={num} onChange={(value) => setNum(value)} />
      </div>
      <VirtualTable columns={getColumns()} value={dateSource} onChange={onChange} />
    </div>
  );
};

export default Demo;
