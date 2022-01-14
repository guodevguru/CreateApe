import { createSelector } from 'reselect';
import { RootState } from '@reducers/interface';
import { IUser } from '@models';

const userSelector = (state: RootState) => state.auth.user;

export const selectUser = createSelector(userSelector, (user: IUser | null) => user);
