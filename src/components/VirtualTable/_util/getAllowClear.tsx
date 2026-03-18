// @ts-nocheck
import React from 'react';
import { Icon } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import type { BaseInputProps } from 'rc-input/lib/interface';

export type AllowClear = BaseInputProps['allowClear'];

const getAllowClear = (allowClear: AllowClear): AllowClear => {
  let mergedAllowClear: AllowClear;
  if (typeof allowClear === 'object' && allowClear?.clearIcon) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      // clearIcon: <Icon type="close-circle" />,
      clearIcon: <CloseCircleOutlined />
    };
  }

  return mergedAllowClear;
};

export default getAllowClear;
