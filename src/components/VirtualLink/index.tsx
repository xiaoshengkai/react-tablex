import React from 'react';
import { Button } from 'antd';

const VirtualLink = ({ value, onClick, ...restProps }) => {
  const { text, url } = value || {};
  const onJump = () => {
    if (onClick) return onClick(url);

    window.open(url);
  };

  return (
    <Button {...restProps} type="link" onClick={onJump}>
      {text}
    </Button>
  );
};

export default VirtualLink;
