import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    products: [{id:123, text:'hello', completed: false}]
};

export default createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);