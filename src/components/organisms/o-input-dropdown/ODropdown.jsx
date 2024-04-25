import React from 'react';
import { Typography } from 'antd';
import MFormDropdown from '../../molecules/m-form-dropdown/MFormDropdown';
const { Title } = Typography;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];
const ODropdown = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ marginTop: '60px' }}>
        <Title>Default</Title>
        <Title>Selected</Title>
        <Title>Typing</Title>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <Title>Default</Title>
        <MFormDropdown placeholder="テキスト" options={options} disabled={false} />

        <MFormDropdown
          placeholder="テキスト"
          options={options}
          disabled={false}
          rules={[{ required: true }]}
        />

        <MFormDropdown placeholder="テキスト" options={options} disabled={true} />
      </div>
    </div>
  );
};
export default ODropdown;
