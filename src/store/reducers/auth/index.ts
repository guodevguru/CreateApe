import { Actions, ActionTypes } from '../../actions/types';
import { AuthState } from './interface';

const initialState: AuthState = {
  user: null,
};

export default (state: AuthState = initialState, action: Actions): AuthState => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export * from './interface';
