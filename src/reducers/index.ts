import {combineReducers} from 'redux';
import displayReducer from './display';
import resultReducer from './result';
import operatorReducer from './operators';
import expressionReducer from './expression';

export type ProviderState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    display: displayReducer,
    result: resultReducer,
    operator: operatorReducer,
    expression: expressionReducer
});

export default rootReducer;
