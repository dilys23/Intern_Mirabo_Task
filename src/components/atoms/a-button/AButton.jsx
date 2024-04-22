import React, { useState } from 'react';
import { Button, Row } from 'antd';
import { UpOutlined, LeftOutlined, RightOutlined, LoadingOutlined } from '@ant-design/icons';
import './AButton.scss';
import clsx from 'clsx';

const AButtonPC = ({
  children,
  className,
  type,
  style,
  topIcon = <UpOutlined />,
  leftIcon = <LeftOutlined />,
  rightIcon = <RightOutlined />,
  loading,
  loadingIcon,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(loading);

  const classAntd = clsx('a-button', type, className
);
  let typeButton;

  switch (type) {
    case 'primary':
      typeButton = { backgroundColor: '#FF4500', color: '#fff', border: 'none' };
      break;
    case 'secondary':
      typeButton = { backgroundColor: ' #fff', color: '#FF4500', borderColor: '#FF4500' };
      break;
    case 'ghost':
      typeButton = { backgroundColor: ' #fff', color: '#FF4500', border: 'none' };
      break;
    case 'accent':
      typeButton = { backgroundColor: '#FF6B00', color: '#fff', border: 'none' };
      break;
    default:
      typeButton = {};
  }

  const handleLoading = () => {
    if (loadingIcon) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <div>
      <Button
        style={{
          ...style,
          ...typeButton
        }}
        className={classAntd}
        onClick={handleLoading}
        loading={isLoading}
        {...props}>
        <Row>
          <div>
            {topIcon && <div>{topIcon}</div>}
            <div style={{ display: 'flex' }}>
              {leftIcon && <div>{leftIcon}</div>}
              <div style={{ margin: '0 1rem' }}>{children}</div>
              {isLoading ? <LoadingOutlined /> : rightIcon && <div>{rightIcon}</div>}
            </div>
          </div>
        </Row>
      </Button>
    </div>
  );
};

export default AButtonPC;
