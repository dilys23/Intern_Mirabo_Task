import React from 'react';
import { Input } from 'antd';

const AInput = ({ placeholder, type, id, value, prefix, onChange, disabled }) => {
  return (
    <div>
      <Input
        prefix={prefix}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled = {disabled}
      />
    </div>
  );
}

export default AInput;
