import {combineReducers} from 'redux';
import displayReducer from './display';
import resultReducer from './result';
import operatorReducer from './operators';

export type ProviderState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    display: displayReducer,
    result:resultReducer,
    operator:operatorReducer,
});

export default rootReducer;
