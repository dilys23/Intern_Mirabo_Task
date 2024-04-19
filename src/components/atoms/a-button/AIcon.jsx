import Icon from '@ant-design/icons/lib/components/Icon';
import React from 'react';

type CustomIconComponent = import('antd').GetProps<typeof Icon>

// import { Container } from './styles';

function Icons() {
  return(
    <Icon component={HomeOutlined as React.ForwardRefExoticComponent<any>} />
  )
}

export default Icons;