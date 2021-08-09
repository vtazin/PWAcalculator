export enum ActionType {
    SET_DISPLAY_VALUE = 'SET_DISPLAY_VALUE',
    DEFAULT = ''
}

export type CalculatorAction = DisplayAction;

type DispatchType = (args: CalculatorAction) => CalculatorAction;

type DisplayAction = {
    type: ActionType.SET_DISPLAY_VALUE;
    payload: string;
}


export function setDisplayValue(payload: string) {
    const action: DisplayAction = {
        type: ActionType.SET_DISPLAY_VALUE,
        payload,
    };

    return simulateHttpRequest(action)
}


export function simulateHttpRequest(action: CalculatorAction) {
    return (dispatch: DispatchType) => dispatch(action);
}
