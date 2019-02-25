import { actionType } from '../Constants';

export function addToCart(result) {
  return {
    type: actionType.ADD_TO_CART,
    result,
  };
}

export function getProfileGithubResult(result) {
  return {
    type: actionType.PROFILE_GITHUB_RESULT,
    result,
  };
}

export function getProfileGithubLoading() {
  return {
    type: actionType.PROFILE_GITHUB_LOADING,
  };
}
