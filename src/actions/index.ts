export enum ActionType {
    SET_CURRENT_OPERATOR = 'SET_CURRENT_OPERATOR',
    SET_CURRENT_RESULT = 'SET_CURRENT_RESULT',
    SET_DISPLAY_VALUE = 'SET_DISPLAY_VALUE',
    ADD_DIGIT = 'ADD_DIGIT',
    ADD_TO_EXPRESSION = 'ADD_TO_EXPRESSION',
    RESET_EXPRESSION = 'RESET_EXPRESSION',
}

export enum Operators {
    NULL = '',
    ADD = '+',
    SUB = '-',
    MULT = 'x',
    DIV = '/'
}

export type CalculatorAction =
    DisplayAction
    | DigitAction
    | ResultAction
    | OperatorAction
    | ExpressionAction
    | ResetExpressionAction;

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

type ExpressionAction = {
    type: ActionType.ADD_TO_EXPRESSION;
    payload: string;
}
type ResetExpressionAction = {
    type: ActionType.RESET_EXPRESSION;
    payload: undefined;
}


export function setDisplayValue(payload: string) {
    const action: DisplayAction = {
        type: ActionType.SET_DISPLAY_VALUE,
        payload,
    };

    return (dispatch: DispatchType) => dispatch(action)
}

export function addDigit(payload: string) {
    const action: DigitAction = {
        type: ActionType.ADD_DIGIT,
        payload,
    };

    return (dispatch: DispatchType) => dispatch(action)
}


export const setCurrentResult = (payload: number) => (dispatch: DispatchType) => dispatch({
    type: ActionType.SET_CURRENT_RESULT,
    payload,
});


export function setCurrentOperator(payload: Operators) {
    const action: OperatorAction = {
        type: ActionType.SET_CURRENT_OPERATOR,
        payload,
    };

    return (dispatch: DispatchType) => dispatch(action)
}


export const addToExpression = (payload: string) => (dispatch: DispatchType) => dispatch({
    type: ActionType.ADD_TO_EXPRESSION,
    payload,
});
export const resetExpression = () => (dispatch: DispatchType) => dispatch({
    type: ActionType.RESET_EXPRESSION,
    payload: undefined
});
