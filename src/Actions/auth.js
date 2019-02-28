import { auth, signout } from './index';
import { SetStorage, RemoveStorage } from '../Helpers';

export const authentication = () => (dispatch) => {
  SetStorage('token', 'FAKE_HASH_TOKEN');
  dispatch(auth());
};

export const logout = () => (dispatch) => {
  RemoveStorage('token');
  dispatch(signout());
};
