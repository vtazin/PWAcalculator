import {Button, Grid, makeStyles} from '@material-ui/core';
import {
    CircleSmall, Division, Equal,
    Minus,
    Numeric0,
    Numeric1,
    Numeric2,
    Numeric3,
    Numeric4,
    Numeric5,
    Numeric6,
    Numeric7,
    Numeric8,
    Numeric9, PercentOutline,
    Plus, PlusMinus, Close, BackspaceOutline, AlphaCCircleOutline
} from 'mdi-material-ui';

enum Operators {
    ADD = '+',
    SUB = '-',
    MULT = 'x',
    DIV = '/',
    PRC = '%'
}


const useStyles = makeStyles({
    root: {
        background: '#F0F0F0',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#F0F0F0"
        }
    },
    label: {
        color: '#808080'
    }
});


const MainButtons = ({expression, setExpression, result, setResult}: { expression: string; setExpression: (value: string) => void; result: number; setResult: (value: number) => void; }) => {

    const addToExpression = (value: string) => {
        let result = expression;
        if (value === '0' && result === '0') {
            return;
        }
        if (value === '.' && result.length > 1 && result[result.length - 1] === '.') {
            return;
        }
        if (['x', '+', '-', '/'].includes(value) && result.length > 1 && ['x', '+', '-', '/'].includes(result[result.length - 1])) {
            result = result.slice(0, result.length - 2) + value;
        } else {
            if (result.length === 0 && ['x', '+', '-', '/'].includes(value)) {
                result += '0';
            }
            result += value;
        }
        const evalResult = calc(result);
        if (!isNaN(evalResult)) {
            setResult(evalResult);
        }
        setExpression(result);
    };

    const backSpace = () => {
        if (expression.length > 0) {
            let newExpression = expression.substr(0, expression.length - 1);
            if (newExpression.length === 0 || (newExpression.length === 1 && newExpression[0] === '-')) {
                clear();
            } else {
                const evalResult = calc(newExpression);
                if (!isNaN(evalResult)) {
                    setResult(evalResult);
                }
                setExpression(newExpression);
            }
        }
    };

    const calc = (expression: string): number => {

        let operator, currentResult;

        if (currentResult === undefined) {
            operator = Operators.PRC;
            currentResult = calcOperation(operator, expression);
        }

        if (currentResult === undefined) {
            operator = Operators.ADD;
            currentResult = calcOperation(operator, expression);
        }
        if (currentResult === undefined) {
            operator = Operators.SUB;
            currentResult = calcOperation(operator, expression);
        }
        if (currentResult === undefined) {
            operator = Operators.DIV;
            currentResult = calcOperation(operator, expression);
        }
        if (currentResult === undefined) {
            operator = Operators.MULT;
            currentResult = calcOperation(operator, expression);
        }

        if (currentResult === undefined) {
            currentResult = parseFloat(expression);
        }

        return currentResult;
    };

    const calcOperation = (operator: Operators, expression: string) => {
        const operatorIndex = expression.indexOf(operator);

        if (operatorIndex !== -1) {
            let value1=0,value2=0;
            if (operator !== Operators.PRC) {
                value1 = calc(expression.substring(0, operatorIndex));
                value2 = calc(expression.substring(operatorIndex + 1));
            }
            switch (operator) {
                case Operators.MULT:
                    return value1 * value2;
                case Operators.DIV:
                    return value1 / value2;
                case Operators.ADD:
                    return value1 + value2;
                case Operators.SUB:
                    return (value1 || 0) - value2;
                case Operators.PRC:
                    const beforPRC = expression.substring(0, operatorIndex);
                    const kInd = Math.max(beforPRC.lastIndexOf('+'), beforPRC.lastIndexOf('-'));

                    const k = parseFloat(beforPRC.substring(kInd + 1)) / 100;

                    const operBefore = beforPRC.substr(kInd, 1);

                    const expressionBefore=beforPRC.substring(0,kInd);

                    const operBeforeInd = Math.max(expressionBefore.lastIndexOf('+'), expressionBefore.lastIndexOf('-'));
                    const x = calc(expressionBefore.substring(operBeforeInd + 1, kInd));
                    const y = k * x;
                    return calc(expressionBefore.substring(0, operBeforeInd + 1) + x + operBefore + y + expression.substring(operatorIndex + 1));
                default:
                    return result;
            }
        }
        return undefined;
    };

    const clear = () => {
        setResult(0);
        setExpression('');
    };

    const negative = () => {
        if (expression.length > 0) {
            let result = calc(expression);
            result *= -1;
            setResult(result);
            setExpression(result.toString())
        }
    };

    const run = () => {
        if (expression.length > 0) {
            const result = calc(expression);
            if (!isNaN(result)) {
                setResult(result);
                setExpression(result.toString())
            }
        }
    };

    const classes = useStyles();

    return (
        <Grid container item xs={12}>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} style={{backgroundColor: '#eec5ed'}} onClick={clear}>
                        <AlphaCCircleOutline/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression(Operators.MULT)}>
                        <Close/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression(Operators.DIV)}>
                        <Division/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={backSpace}>
                        <BackspaceOutline/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression('7')}>
                        <Numeric7/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression('8')}>
                        <Numeric8/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression('9')}>
                        <Numeric9/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={negative}>
                        <PlusMinus/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression('4')}>
                        <Numeric4/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression('5')}>
                        <Numeric5/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression('6')}>
                        <Numeric6/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression(Operators.SUB)}>
                        <Minus/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression('1')}>
                        <Numeric1/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression('2')}>
                        <Numeric2/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression('3')}>
                        <Numeric3/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression(Operators.ADD)}>
                        <Plus/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression(Operators.PRC)}>
                        <PercentOutline/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression('0')}>
                        <Numeric0/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addToExpression('.')}>
                        <CircleSmall/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => run()} style={{backgroundColor: '#87CEFA'}}>
                        <Equal/>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default MainButtons;


