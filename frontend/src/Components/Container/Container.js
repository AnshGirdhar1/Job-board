import './Container.css';

const Container = ({ children, padding }) => {
  return (
    <div className='container' style={{ padding }}>
      {children}
    </div>
  );
};

export default Container;

Container.defaultProps = {
  padding: '0 150px',
};
