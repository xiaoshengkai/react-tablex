import { Input, Radio, Switch } from 'antd';
import React, { useState } from 'react';
import VirtualTable from 'react-VFormTable';
import './index.less';

const RadioGroup = Radio.Group;

/**
 * 自定义组件
 * 自动接收value, onChange
 */
const Custom = ({ value, onChange, width }) => {
  const { type, content } = value || {};

  const onSelfChange = (params: { type?: boolean; content?: string }) => {
    onChange({ ...value, ...params });
  };

  return (
    <div className="custom">
      <RadioGroup
        onChange={(e) => onSelfChange({ type: e.target.value })}
        value={type}
      >
        <Radio value={true}>显示</Radio>
        <Radio value={false}>隐藏</Radio>
      </RadioGroup>
      {type ? (
        <Input
          value={content}
          onChange={(e) => onSelfChange({ content: e.target.value })}
          style={{ width: `${width}px` }}
        />
      ) : null}
    </div>
  );
};

Custom.Display = ({ value }) => {
  const { type, content } = value || {};
  return <div className="custom-display">{type ? content : '隐藏中'}</div>;
};

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '自定义组件',
    fieldkey: 'custom',
    require: true,
    rules: [{ required: true, message: '必填' }],
    custom: {
      edit: Custom,
      display: Custom.Display,
    },
    attrs: {
      width: 150,
    },
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([{}]);
  const [readonly, setReadonly] = useState(false);

  const onChange = (value) => {
    setDataSource(value);
  };

  return (
    <div>
      <Switch
        style={{ marginBottom: '20px' }}
        checkedChildren="表格编辑"
        unCheckedChildren="表格只读"
        checked={!readonly}
        onChange={(value) => setReadonly(!value)}
      />
      <VirtualTable
        readonly={readonly}
        columns={columns}
        value={dateSource}
        onChange={onChange}
      />
    </div>
  );
};

export default Demo;
