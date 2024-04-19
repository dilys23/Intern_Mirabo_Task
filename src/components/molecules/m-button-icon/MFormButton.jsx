import React from 'react';
import AButton from '../../atoms/a-button/AButton';

const MFormButton = ({
  children,
  className,
  htmlType,
  type,
  size,
  loadingIcon,
  onclick
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
      >
        {children}
      </AButton>
    </div>
  );
};

export default MFormButton;
