
const ADD_TO_CART = "cart/ADD_TO_CART";

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        produceId: id
    }
};

const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        produceId: id
    }
}


export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const id = action.produceId;
            const newState = {
                ...state,
                [id]: {
                    id,
                    count: 1
                }
            }
            return newState;
        case REMOVE_FROM_CART:
            const removeItemId = action.produceId;
            const { [removeItemId]: removed, ...otherItems } = state;
            return otherItems;
        default:
            return state;
    }
}
