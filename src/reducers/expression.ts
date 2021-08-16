import {ActionType, CalculatorAction} from '../actions';


const expressionReducer = (state = '', action: CalculatorAction) => {
    switch (action.type) {
        case ActionType.ADD_TO_EXPRESSION:
            const value = action.payload;
            if (value === '0' && state === '0') {
                return state;
            }
            if (value === '.' && state.length > 1 && state[state.length - 1] === '.') {
                return state;
            }
            if (['x', '+', '-', '/'].includes(value) && state.length > 1 && ['x', '+', '-', '/'].includes(state[state.length - 1])) {
                return state.slice(0, state.length - 2) + value;
            }
            return state + action.payload;
        case ActionType.RESET_EXPRESSION:
            return '';
        default:
            return state;
    }
};

export default expressionReducer;
