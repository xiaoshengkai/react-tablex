

import React, { useState } from 'react';
import VirtualTable, { Way } from 'react-VFormTable';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '角色',
    fieldkey: 'name',
    require: true,
    rules: [
      {
        required: true,
        message: '必填',
      },
    ],
    type: 'Input',
  },
  {
    label: '路人（感受）',
    fieldkey: 'npc',
    type: 'Input',
    watch: [{
      handle(value, { updateCellData }) {
        if (value) {
          updateCellData(value ? '我喜欢' + value : '');
        }
      },
      deps: ['name'],
      way: Way.Col,
      immediately: true,
    }],
  },
];

const Demo = () => {
  const [dateSource, setDataSource] = useState([
    {
      name: '李小龙',
    },
  ]);

  const onChange = value => {
    setDataSource(value);
  };

  return (
    <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
  );
};

export default Demo;
