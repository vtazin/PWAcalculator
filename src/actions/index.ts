export enum ActionType {
    SET_CURRENT_OPERATOR = 'SET_CURRENT_OPERATOR',
    SET_CURRENT_RESULT = 'SET_CURRENT_RESULT',
    SET_DISPLAY_VALUE = 'SET_DISPLAY_VALUE',
    ADD_DIGIT = 'ADD_DIGIT'
}

export enum Operators {
    NULL,
    ADD,
    SUB,
    MULT,
    DIV
}

export type CalculatorAction = DisplayAction | DigitAction | ResultAction | OperatorAction;

type DispatchType = (args: CalculatorAction) => CalculatorAction;

type DisplayAction = {
    type: ActionType.SET_DISPLAY_VALUE;
    payload: string;
}
type DigitAction = {
    type: ActionType.ADD_DIGIT;
    payload: string;
}
type ResultAction = {
    type: ActionType.SET_CURRENT_RESULT;
    payload: number;
}
type OperatorAction = {
    type: ActionType.SET_CURRENT_OPERATOR;
    payload: Operators;
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


export function setCurrentResult(payload: number) {
    const action: ResultAction = {
        type: ActionType.SET_CURRENT_RESULT,
        payload,
    };

    return simulateHttpRequest(action)
}

export function setCurrentOperator(payload: Operators) {
    const action: OperatorAction = {
        type: ActionType.SET_CURRENT_OPERATOR,
        payload,
    };

    return simulateHttpRequest(action)
}


export function simulateHttpRequest(action: CalculatorAction) {
    return (dispatch: DispatchType) => dispatch(action);
}
