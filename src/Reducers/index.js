import { combineReducers } from 'redux';

import { addToCartReducer } from './cart';
import { profileGithubReducer } from './github';
import { authReducer } from './auth';

// combine reducers
const rootReducers = combineReducers({
  addToCartReducer,
  profileGithubReducer,
  authReducer,
});

export default rootReducers;
