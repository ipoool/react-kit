import { combineReducers } from 'redux';

import { addToCartReducer } from './cart';

// combine reducers
const rootReducers = combineReducers({
    addToCartReducer,
});

export default rootReducers;
