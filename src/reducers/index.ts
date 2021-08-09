import {combineReducers} from 'redux';
import displayReducer from './display';

export type ProviderState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    display: displayReducer
});

export default rootReducer;
