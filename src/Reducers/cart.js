import { actionType } from '../Constants'

const initialState = {
    count: 0
}
export const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            return {
                count: state.count + 1
            }
        default:
            return state;
    }
}