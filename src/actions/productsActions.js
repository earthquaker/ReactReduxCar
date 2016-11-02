export function loadProductsSuccess(data) {
    return {
        type: 'UPDATE_PRODUCTS',
        payload: data
    }
}

export function clearProducts() {
    return {
        type: 'CLEAR_PRODUCTS',
        payload: []
    }
}

export function getProducts() {
    return function(dispatch, ) {
        dispatch(loadProductsSuccess());
    }
}