/** @format */

import React from 'react';
import VirtualTable from 'react-VFormTable';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '文本',
    fieldkey: 'text',
    type: 'Text',
  },
  {
    label: '文本',
    fieldkey: 'link',
    type: 'Link',
  },
];

const Demo = () => {
  return (
    <VirtualTable
      columns={columns}
      value={[
        {
          text: '你是谁',
          link: {
            text: '跳转zcyutil2.0',
            url: 'https://ipaas.cai-inc.com/quark-index/doc/%40zcy%2Futils/api/array?version=2.0.1-alpha.12&utm=quark.9d3b44.0.0.df6da540321d11efa4e2215e337bdc75',
          },
        },
      ]}
      isOperationBtnVisible
    />
  );
};

export default Demo;
