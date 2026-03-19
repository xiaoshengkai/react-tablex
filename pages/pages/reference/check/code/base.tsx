import React, { useState, useRef } from 'react';
import VirtualTable from 'react-tablex';
import { Button, message } from 'antd';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '数字类型字符',
    fieldkey: 'type',
    require: true,
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: '请填写数字', pattern: /^-?\d+\.?\d*$/ }
    ],
    type: 'Input',
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([]);
  const virtualTableRef = useRef(null);


  const onChange = (value) => {
    setDataSource(value);
  };

  const submit = () => {
    virtualTableRef.current?.validate().then(error => {
      if (!error) {
        message.success('检验通过');
      }
    });
  };

  return (
    <div>
    <Button onClick={submit} style={{ marginBottom: '20px' }}>
      提交
    </Button>
    <VirtualTable
      ref={virtualTableRef}
      columns={columns}
      value={dateSource}
      onChange={onChange}
    />
  </div>
  );
};

export default Demo;
