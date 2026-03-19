import React, { useState } from 'react';
import VirtualTable from 'react-tablex';
import { Switch } from 'antd';

const Demo = () => {
  const [dateSource, setDataSource] = useState([{}, {}]);
  const [columnDisabled, setColumnDisabled] = useState(false);
  const [columnShow, setColumnShow] = useState(true);

  const getColumns = () => [
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
      columnDisabled,
      columnShow,
    },
  ];

  const onChange = (value) => {
    setDataSource(value);
  };

  return (
    <div>
      <div>
        <Switch
          style={{ marginBottom: '20px' }}
          checkedChildren="禁用内容列"
          unCheckedChildren="开启内容列"
          checked={columnDisabled}
          onChange={(value) => setColumnDisabled(value)}
        />
      </div>
      <div>
        <Switch
          style={{ marginBottom: '20px' }}
          checkedChildren="显示内容列"
          unCheckedChildren="关闭内容列"
          checked={columnShow}
          onChange={(value) => setColumnShow(value)}
        />
      </div>
      <VirtualTable
        columns={getColumns()}
        value={dateSource}
        onChange={onChange}
      />
    </div>
  );
};

export default Demo;
