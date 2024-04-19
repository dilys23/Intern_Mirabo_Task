import React from 'react';
import AButton from '../../atoms/a-button/AButton';

const MFormButton = ({
  children,
  className,
  htmlType,
  type,
  size,
  loadingIcon,
  onclick,
  isHover
}) => {
  return (
    <div>
      <AButton
        type={type}
        size={size}
        className={className}
        htmlType={htmlType}
        loadingIcon={loadingIcon}
        onclick={onclick}
        isHover={isHover}
      >
        {children}
      </AButton>
    </div>
  );
};

export default MFormButton;
