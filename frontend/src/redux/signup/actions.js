import axios from 'axios';
import {
  SIGNUP_USER_ERROR,
  SIGNUP_USER_LOADING,
  SIGNUP_USER_SUCCESS,
} from './actionTypes';

export const signupUser = (userData, navigate) => async (dispatch) => {
  try {
    console.log('inside');
    dispatch({ type: SIGNUP_USER_LOADING });
    const response = await axios.post(
      'http://localhost:5000/signup',
      userData,
      {
        withCredentials: 'include',
      }
    );
    dispatch({ type: SIGNUP_USER_SUCCESS, payload: response.message });
    navigate('/candidate/jobs');
  } catch (e) {
    alert(e.response.data.message);
    dispatch({ type: SIGNUP_USER_ERROR, payload: e.response?.data?.message });
  }
};
