import { actionType } from '../Constants';

const initialState = {
  isLoggin: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH:
      return {
        isLoggin: true,
      };
    default:
      return state;
  }
};
