//reducer import 하기위해
import {combineReducers} from 'redux';
import authReducer from './authReducer';
export default combineReducers({
    auth : authReducer
})