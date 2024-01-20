import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { signupReducer } from './signup/signupReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  signup: signupReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
