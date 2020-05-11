import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import chat from './reducers/chatReducer';

const rootReducer = combineReducers({
  chat,
});

export default createStore(rootReducer, {}, applyMiddleware(thunk, logger));

