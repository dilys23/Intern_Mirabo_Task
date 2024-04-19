import React, { useState } from 'react';
import { Button, Row } from 'antd';
import { UpOutlined, LeftOutlined, RightOutlined, LoadingOutlined } from '@ant-design/icons';
import './AButton.scss';
import clsx from 'clsx';

const AButtonPC = ({
  children,
  className,
  type,
  size,
  style,
  topIcon = <UpOutlined />,
  leftIcon = <LeftOutlined />,
  rightIcon = <RightOutlined />,
  loading,
  hoverable,
  disable,
  loadingIcon,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(loading);
  const [isHoverable, setIsHoverable] = useState(false);
  const [isDisable, setIsDisable] = useState(disable);

  const classAntd = clsx('a-button', type, className,
    {
      'hovered': isHoverable,
      'disable': isDisable
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

  const handleHover = () => {
    if (hoverable) {
      
      setIsHoverable(true);
    }
  };

  const handleDisable = () => {
    if (disable) {
      setIsDisable(true);
    }
  }
  return (
    <div>
      <Button
        style={{ ...style, ...typeButton, boxShadow: isHoverable ? 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' : ''}}
        className={classAntd}
        onClick={handleLoading}
        onMouseEnter={handleHover}
        onMouseLeave={() => setIsHoverable(false)}
        loading={isLoading}
        disabled={isDisable}
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
