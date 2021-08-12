import {ActionType, CalculatorAction} from '../actions';


const displayReducer = (state = '0', action: CalculatorAction) => {
    switch (action.type) {
        case ActionType.SET_DISPLAY_VALUE:
            return action.payload;
        case ActionType.ADD_DIGIT:
            if (action.payload === '.' && state.indexOf('.') !== -1) {
                return state;
            }
            if (state === '0') {
                if (action.payload === '0') {
                    return state;
                }
                if (action.payload !== '.') {
                    return action.payload;
                }
            }
            return state + action.payload;
        default:
            return state;
    }
};

export default displayReducer;
