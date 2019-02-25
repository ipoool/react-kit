import { actionType } from '../Constants';

const defaultState = {
  data: {},
  is_loading: false,
};

export const profileGithubReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.PROFILE_GITHUB_RESULT:
      return {
        is_loading: false,
        data: action.result,
      };
    case actionType.PROFILE_GITHUB_LOADING:
      return {
        is_loading: true,
      };
    default:
      return state;
  }
};
