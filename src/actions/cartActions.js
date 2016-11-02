export function updateProdAmount(value, key) {
    if (Number(value) <= 0) {
        console.log("Remove product action", key);
        return function(dispatch) {
            dispatch({
                type: 'REMOVE_PRODUCT',
                payload: {}
            });
        }
    } else {
        const payload = {value, key};
        return function(dispatch) {
            dispatch({
                type: 'UPDATE_PRODUCT_AMOUNT',
                payload: payload
            });
        }
    }
}

export function updateTotalPrice() {
    return function(dispatch) {
        dispatch({
            type: 'UPDATE_TOTAL_PRICE',
            payload: {}
        });
    }
}