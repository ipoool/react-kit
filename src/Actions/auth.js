import { auth } from './index';

export const authentication = () => (dispatch) => {
  dispatch(auth());
};
