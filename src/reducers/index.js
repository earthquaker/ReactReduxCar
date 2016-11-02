import { combineReducers } from 'redux';
import products from './productsReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    products,
    form: formReducer
});