import { combineReducers } from 'redux'
import globalErrors from './globalError'
import { connectRouter } from 'connected-react-router'
import authReducer from './authReducer';
import rpc from './rpc';
import {reducer as notifications} from 'react-notification-system-redux';
import { reducer as formReducer } from 'redux-form';

export default (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    notifications,
    globalErrors,
    form: formReducer,
    rpc
})