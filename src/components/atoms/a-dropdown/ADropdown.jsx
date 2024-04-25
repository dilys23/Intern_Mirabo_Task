import React from 'react';
import { Select } from 'antd';

const ADropdown = ({
  placeholder,
  options,
  value,
  onChange,
  disabled,
  allowClear = true,
 ...props
}) => {
  return (
    <Select
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      allowClear={allowClear}
      {...props}
    >
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default ADropdown;