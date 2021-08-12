import {ActionType, CalculatorAction} from '../actions';


const resultReducer = (state = 0, action: CalculatorAction) => {
    switch (action.type) {
        case ActionType.SET_CURRENT_RESULT:
            return action.payload;
        default:
            return state;
    }
};

export default resultReducer;
