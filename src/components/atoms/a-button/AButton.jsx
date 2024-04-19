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
  isHover,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(loading);
  const [hovered, setHovered] = useState(false);

  const classAntd = clsx('a-button', type, className, {
    isHover: isHover
  });
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
          ...typeButton,
          boxShadow: isHover
            ? 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
            : ''
        }}
        className={classAntd}
        onClick={handleLoading}
        loading={isLoading}
        onMouseEnter={() => setHovered(true)} // Bắt sự kiện di chuột vào
        onMouseLeave={() => setHovered(false)} // Bắt sự kiện di chuột ra
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
