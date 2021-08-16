import {ActionType, CalculatorAction} from '../actions';


const resultReducer = (state = 0, action: CalculatorAction) => {
    switch (action.type) {
        case ActionType.SET_CURRENT_RESULT:
            const text=action.payload.toString();
            const dotIndex=text.indexOf('.');
            if(dotIndex!==-1){
                return parseFloat(text.slice(0,dotIndex+8));
            }
            return action.payload;
        default:
            return state;
    }
};

export default resultReducer;
