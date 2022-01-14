import { IUser } from '@models';
import { SetUserAction, LogoutAction } from './interface';
import { ActionTypes } from '../types';

export const setUser = (user: IUser): SetUserAction => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};

export const logout = (): LogoutAction => {
  return {
    type: ActionTypes.LOGOUT,
  };
};

export * from './interface';
