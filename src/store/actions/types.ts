import * as authActions from './auth';

export enum ActionTypes {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
}

export type Actions = authActions.SetUserAction | authActions.LogoutAction;
