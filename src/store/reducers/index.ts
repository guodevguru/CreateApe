import { combineReducers } from 'redux';
import { RootState } from './interface';
import authReducer from './auth';

export default combineReducers<RootState>({
  auth: authReducer,
});

export * from './interface';
