import { Collapse, Table } from 'antd';
import React from 'react';
import json from './interface.json';

import './index.less';

const Panel = Collapse.Panel;

const TsInfo = ({ name }) => {
  const dataSource = json[name];

  console.log('json', json);

  const columns = [
    {
      width: 150,
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      width: 200,
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'DefaultValue',
      dataIndex: 'defaultValue',
      key: 'defaultValue',
      width: 150,
    },
  ];

  return (
    <div className='tsInfo'>
      <Table pagination={false} columns={columns} dataSource={dataSource} />
    </div>
    // @ts-ignore
    // <Panel header={name}>
    //   <p>{dataSource}</p>
    // </Panel>
  );
};

export default TsInfo;
