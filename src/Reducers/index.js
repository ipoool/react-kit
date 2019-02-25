import { combineReducers } from 'redux';

import { addToCartReducer } from './cart';
import { profileGithubReducer } from './github';

// combine reducers
const rootReducers = combineReducers({
  addToCartReducer,
  profileGithubReducer,
});

export default rootReducers;
