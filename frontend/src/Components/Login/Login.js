import React from 'react';
import PrimaryForm from '../PrimaryForm/PrimaryForm';
import './Login.css';

const Login = () => {
  const fieldsBottomContent = () => {
    return (
      <div className='login-form-fields-bottom-content'>
        <div>
          <input type='checkbox' />
          <span>Remeber Me</span>
        </div>
        <div className='forgot-password-link'>Forgot Password?</div>
      </div>
    );
  };

  const formFooterContent = () => {
    return (
      <div className='login-form-footer-content'>
        <span>New Job Seeker?</span>
        <button className='signup-option-button'>Signup</button>
      </div>
    );
  };
  return (
    <div className='login'>
      <PrimaryForm
        formTitle='Login'
        formFields={[
          {
            name: 'email',
            placeholder: 'Your Email Address',
            constraints: {
              required: 'Email address is required',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Please enter a valid email',
              },
            },
          },
          {
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            constraints: {
              type: 'password',
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be atleast 8 characters',
              },
            },
          },
        ]}
        fieldsBottomContent={fieldsBottomContent()}
        submitButtonText={'Login'}
        formFooterContent={formFooterContent()}
      />
    </div>
  );
};

export default Login;
