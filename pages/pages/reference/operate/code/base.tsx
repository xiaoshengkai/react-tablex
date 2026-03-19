import React, { useState } from 'react';
import VirtualTable, { Operate } from 'react-tablex';
import { Switch } from 'antd';

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
  ]);
  const [isOperationBtnVisible, setOperationBtnVisible] =
    useState(false);

  const onChange = (value) => {
    setDataSource(value);
  };

  return (
    <div>
      <Switch
        style={{ marginBottom: '20px' }}
        checkedChildren="关闭表格操作项"
        unCheckedChildren="开启表格操作项"
        checked={isOperationBtnVisible}
        onChange={(value) => setOperationBtnVisible(value)}
      />
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
        isOperationBtnVisible={isOperationBtnVisible}
      />
    </div>
  );
};

export default Demo;
