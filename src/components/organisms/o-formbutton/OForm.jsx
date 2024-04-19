import Title from 'antd/es/typography/Title';
import MFormButton from '../../molecules/m-button-icon/MFormButton';

const OForm = () => {
  const handleClick =() => {
    console.log('Click button');
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div>
        <Title>Primary</Title>
        {/* Default */}
        <MFormButton
          type="primary"
          children="Hello Le"
          size="large"
          loadingIcon={false}
          onclick={handleClick}
          
        />

        {/* Hover */}
        <MFormButton
          type="primary"
          children="テキスト"
          size="large"
          loadingIcon={false}
          hoverable={true}
        />

        {/* Disabled */}
        <MFormButton
          type="primary"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Loading */}
        <MFormButton
          type="primary"
          children="テキスト"
          size="large"
          loadingIcon={true}
        />
      </div>

      <div>
        <Title>Secondary</Title>
        {/* Default */}
        <MFormButton
          type="secondary"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Hover */}
        <MFormButton
          type="secondary"
          children="テキスト"
          size="large"
          loadingIcon={false}
          hoverable={true}
        />

        {/* Disabled */}
        <MFormButton
          type="secondary"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Loading */}
        <MFormButton
          type="secondary"
          children="テキスト"
          size="large"
          loadingIcon={true}
        />
      </div>

      <div>
        <Title>Ghost</Title>
        {/* Default */}
        <MFormButton
          type="ghost"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Hover */}
        <MFormButton
          type="ghost"
          children="テキスト"
          size="large"
          loadingIcon={false}
          hoverable={true}
        />

        {/* Disabled */}
        <MFormButton
          type="ghost"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Loading */}
        <MFormButton
          type="ghost"
          children="テキスト"
          size="large"
          loadingIcon={true}
        />
      </div>

      <div>
        <Title>Accent</Title>
        {/* Default */}
        <MFormButton
          type="accent"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Hover */}
        <MFormButton
          type="accent"
          children="テキスト"
          size="large"
          loadingIcon={false}
          hoverable={true}
        />

        {/* Disabled */}
        <MFormButton
          type="accent"
          children="テキスト"
          size="large"
          loadingIcon={false}
        />

        {/* Loading */}
        <MFormButton
          type="accent"
          children="テキスト"
          size="large"
          loadingIcon={true}
        />
      </div>
    </div>
  );
};

export default OForm;