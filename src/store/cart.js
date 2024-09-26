
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
};

const INCREASE_COUNT = 'cart/INCREASE_COUNT';
export const increaseCount = (id) => {
    return {
        type: INCREASE_COUNT,
        produceId: id

    }
}

const DECREASE_COUNT = 'cart/DECREASE_COUNT';
export const decreaseCount = (id) => {
    return {
        type: DECREASE_COUNT,
        produceId: id
    }
}

const INPUT_COUNT = 'cart/INPUT_COUNT';
export const inputCount = (id, count) => {
    return {
        type: INPUT_COUNT,
        produceId: id,
        count: count
    }
};

const PURCHASE_ACTION = 'cart/PURCHASE_ACTION';
export const purchaseAction = () => {
    return {
        type: PURCHASE_ACTION,
    }
}

export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const id = action.produceId;
            if (state[id]) {
                return {
                    ...state,
                    [id]: {
                        ...state[id],
                        count: state[id].count + 1
                    }
                }
            } else {
                return {
                    ...state,
                    [id]: {
                        id: id,
                        count: 1
                    }
                }
            }

        case REMOVE_FROM_CART:
            const removeItemId = action.produceId;
            const { [removeItemId]: removed, ...otherItems } = state;
            return otherItems;

        case INCREASE_COUNT:
            const increaseCountId = action.produceId;
            if (state[increaseCountId]) {
                return {
                    ...state,
                    [increaseCountId]: {
                        ...state[increaseCountId],
                        count: state[increaseCountId].count + 1
                    },
                };
            }
            return state;
        case DECREASE_COUNT:
            const decreaseCountId = action.produceId;
            const { [decreaseCountId]: decreaseItem, ...reminingItems } = state;

            if (state[decreaseCountId].count === 1) {
                return reminingItems;
            };

            if (state[decreaseCountId]) {
                return {
                    ...state,
                    [decreaseCountId]: {
                        ...state[decreaseCountId],
                        count: state[decreaseCountId].count - 1
                    }
                }
            };

            return state;
        case INPUT_COUNT:
            const inputCountItemId = action.produceId;
            const newCount = action.count;
            return {
                ...state,
                [inputCountItemId]: {
                    ...state[inputCountItemId],
                    count: newCount
                }
            };
        case PURCHASE_ACTION:
            return {

            };
        default:
            return state;
    }
}
