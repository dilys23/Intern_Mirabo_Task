import React, { useState, useEffect } from 'react';
import { Form } from 'antd';
import ADropdown from '../../atoms/a-dropdown/ADropdown';

const MFormDropdown = ({
  placeholder,
  name,
  options,
  value,
  rules,
  onChange,
  disabled,
  allowClear = true,
}) => {
  const [isEmpty, setIsEmpty] = useState(!value);

  useEffect(() => {
    setIsEmpty(!value);
  }, [value]);

  const handleKeyDown = (e) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <Form.Item 
      name={name}
      rules={rules}
      validateStatus={isEmpty && rules && rules.some(rule => rule.required) ? 'error' : ''}
      help={isEmpty && rules && rules.some(rule => rule.required) ? 'Please choose your option!' : null}
    >
      <ADropdown
        placeholder={placeholder}
        options={options}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        allowClear={allowClear}
      />
    </Form.Item>
  );
};

export default MFormDropdown;