import {
  SIGNUP_USER_ERROR,
  SIGNUP_USER_LOADING,
  SIGNUP_USER_SUCCESS,
} from './actionTypes';

const initialState = {
  loading: false,
  success: '',
  error: '',
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER_LOADING:
      return { ...state, loading: true };
    case SIGNUP_USER_SUCCESS:
      return { ...state, loading: false, success: action.payload };
    case SIGNUP_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
