import React from 'react';

import './index.less';

const VirtualNo = ({ rowIndex }) => {
    const value = rowIndex + 1;
    return <div className='virtualNo'>{value}</div>;
};

export default VirtualNo;
