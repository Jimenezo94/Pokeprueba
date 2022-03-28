import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Reducer from './Reducer';

const middleware = [thunk];

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

export const store = createStore(Reducer,
    applyMiddleware(...middleware))

export default store; 