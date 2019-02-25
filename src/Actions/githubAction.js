import request from 'axios';
import { appConfig } from '../Constants';
import { getProfileGithubResult, getProfileGithubLoading } from './index';

export const loadDataProfile = () => (dispatch) => {
  dispatch(getProfileGithubLoading());
  try {
    setTimeout(() => {
      const api_url = `${appConfig.API_URL}/users/ipoool`;
      request.get(api_url).then((response) => {
        console.log(response);
        dispatch(getProfileGithubResult(response.data));
      });
    }, 2000);
  } catch (err) {
    console.log(err);
  }
};
