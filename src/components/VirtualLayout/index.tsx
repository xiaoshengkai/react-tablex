import React from 'react';
import { isFunction } from 'lodash';
import VirtualRequireItem from '../VirtualRequireItem';

import './index.less';

const VirtualLayout = ({ children, layoutMode, label, require, bottomContent, topContent }) => {
  return (
    <div className='virtualLayout'>
      {isFunction(topContent) ? topContent?.() : topContent}
      {label && (require ? <VirtualRequireItem label={label} /> : <label>{label}：</label>)}
      <div className={`virtual_item--${layoutMode}`}>{children}</div>
      {isFunction(bottomContent) ? bottomContent?.() : bottomContent}
    </div>
  );
};

export default VirtualLayout;
