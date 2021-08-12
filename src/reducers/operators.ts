import {ActionType, CalculatorAction, Operators} from '../actions';


const operatorReducer = (state = Operators.NULL, action: CalculatorAction) => {
    switch (action.type) {
        case ActionType.SET_CURRENT_OPERATOR:
            return action.payload;
        default:
            return state;
    }
};

export default operatorReducer;
