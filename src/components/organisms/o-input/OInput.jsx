import React from 'react';
import { Typography } from 'antd';
import MFormInput from '../../molecules/m-form-input/MFormInput';

const { Title } = Typography;

const OInput = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ marginTop: '60px' }}>
        <Title>Default</Title>
        <Title>Selected</Title>
        <Title>Typing</Title>
      </div>
      <div>
        <Title>Default</Title>
        {/* MFormInput mặc định */}
        <MFormInput
          name="inputName"
          placeholder="テキスト"
          type="text"
          id="inputId"
          value=""
        />
        {/* MFormInput có rules */}
        <MFormInput
          name="inputName"
          placeholder="テキスト"
          type="text"
          id="inputId"
          value=""
          rules={[{ required: true }]}
        />
        {/* MFormInput được vô hiệu hóa */}
        <MFormInput
          name="inputName"
          placeholder="テキスト"
          type="text"
          id="inputId"
          value=""
          disabled={true}
        />
      </div>
    </div>
  );
}

export default OInput;
