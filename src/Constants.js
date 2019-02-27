export const appRoutes = {
  HOME_PAGE: '/',
  PROFILE_PAGE: '/profile',
  OTHER_PAGE: '/other-page',
  PRIVATE_PAGE: '/private-page',
};

export const actionType = {
  ADD_TO_CART: 'ADD_TO_CART',

  PROFILE_GITHUB_RESULT: 'PROFILE_GITHUB_RESULT',
  PROFILE_GITHUB_LOADING: 'PROFILE_GITHUB_LOADING',

  AUTH: 'AUTH',
};

export const appConfig = {
  API_URL: process.env.REACT_APP_API_URL,
};
