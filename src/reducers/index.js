import { combineReducers } from 'redux';
import cart from './cartReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    cart,
    form: formReducer
});