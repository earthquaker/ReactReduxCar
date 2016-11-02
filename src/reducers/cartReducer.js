export default function reducer(state={}, action) {
    switch(action.type) {
        case "UPDATE_PRODUCT_AMOUNT": {
            const prodAmount = Object.assign(state[action.payload.key], { amount: action.payload.value });
            return Object.assign({}, state, {
                [action.payload.key]: prodAmount
            });
        }
        default:
            return state;
    }
};