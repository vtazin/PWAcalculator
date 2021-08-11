export enum ActionType {
    SET_DISPLAY_VALUE = 'SET_DISPLAY_VALUE',
    ADD_DIGIT = 'ADD_DIGIT',
    DEFAULT = ''
}

export type CalculatorAction = DisplayAction|DigitAction;

type DispatchType = (args: CalculatorAction) => CalculatorAction;

type DisplayAction = {
    type: ActionType.SET_DISPLAY_VALUE;
    payload: string;
}
type DigitAction = {
    type: ActionType.ADD_DIGIT;
    payload: string;
}


export function setDisplayValue(payload: string) {
    const action: DisplayAction = {
        type: ActionType.SET_DISPLAY_VALUE,
        payload,
    };

    return simulateHttpRequest(action)
}

export function addDigit(payload: string) {
    const action: DigitAction = {
        type: ActionType.ADD_DIGIT,
        payload,
    };

    return simulateHttpRequest(action)
}


export function simulateHttpRequest(action: CalculatorAction) {
    return (dispatch: DispatchType) => dispatch(action);
}
