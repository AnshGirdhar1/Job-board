import React from 'react';
import PrimaryForm from '../PrimaryForm/PrimaryForm';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/signup/actions';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.signup.loading);

  const fieldsBottomContent = () => {
    return (
      <div>
        <input type='checkbox' />
        <span>I am agree to Terms & Conditions</span>
      </div>
    );
  };

  const formFooterContent = () => {
    return (
      <div>
        <span>Already have account?</span>
      </div>
    );
  };

  const signup = (userData) => {
    dispatch(signupUser(userData, navigate));
  };

  return (
    <PrimaryForm
      formTitle='Signup'
      formFields={[
        {
          name: 'firstname',
          placeholder: 'First Name',
          constraints: { required: 'First name is required' },
        },
        {
          name: 'lastname',
          placeholder: 'Last Name',
          constraints: { required: 'Last name is required' },
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Your Email Address',
          constraints: { required: 'Email is required' },
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          constraints: {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be atleast 8 characters long',
            },
          },
        },
      ]}
      fieldsBottomContent={fieldsBottomContent()}
      submitButtonText={
        loading ? (
          <CircularProgress style={{ color: '#ffffff' }} size='12px' />
        ) : (
          'Signup'
        )
      }
      formFooterContent={formFooterContent()}
      onSubmit={signup}
    />
  );
};

export default Signup;
