import React from "react";
import './index.less'

/** 必填样式 */
const VirtualRequireItem = ({ label }) => {
  return (
    <div className="virtual-require-item">
      <span className="x">*</span>
      <span>{label}</span>
    </div>
  );
};

export default VirtualRequireItem;