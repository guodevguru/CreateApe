import { IUser } from '@models';
import { ActionTypes } from '../types';

export interface SetUserAction {
  type: ActionTypes.SET_USER;
  payload: IUser;
}

export interface LogoutAction {
  type: ActionTypes.LOGOUT;
}
