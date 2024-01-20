import './PrimaryBlueButton.css';

const PrimaryBlueButton = ({ children, width, padding, onClick }) => {
  return (
    <button
      className='primary-blue-button'
      onClick={onClick}
      style={{ width, padding }}
    >
      {children}
    </button>
  );
};

export default PrimaryBlueButton;

PrimaryBlueButton.defaultProps = {
  width: 'auto',
  padding: '10px 20px',
};
