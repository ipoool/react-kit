import { actionType } from '../Constants'

export function addToCart(result) {
    return {
        type: actionType.ADD_TO_CART,
        result
    }
}