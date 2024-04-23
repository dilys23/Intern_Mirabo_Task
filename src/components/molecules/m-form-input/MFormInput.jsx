import React, { useState } from 'react';
import AInput from '../../atoms/a-input/AInput';
import { Form } from 'antd';
import './MFormInput.css';

const MFormInput = ({
  placeholder,
  name,
  type,
  id,
  value,
  prefix,
  rules,
  onChange,
  disabled,
  ...props
}) => {
  const [isEmpty, setIsEmpty] = useState(!value);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
    setIsEmpty(inputValue === '');
  };

  const handleKeyDown = (e) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <Form.Item
        name={name}
        rules={rules}
        validateStatus={isEmpty && rules && rules.some(rule => rule.required) ? 'error' : ''}
        help={isEmpty && rules && rules.some(rule => rule.required) ? 'Please enter your input!' : null}
      >
        <AInput
          prefix={prefix}
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          onKeyDown={handleKeyDown}
        />
      </Form.Item>
    </div>
  );
};

export default MFormInput;
