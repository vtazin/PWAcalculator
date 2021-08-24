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
    NULL = '',
    ADD = '+',
    SUB = '-',
    MULT = 'x',
    DIV = '/'
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

    const addDigit = (digit = 0) => {
        addToExpression(digit.toString());
    };


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
            result = expression + value;
            if (result.length > 0 && !['x', '+', '-', '/'].includes(value)) {
                setResult(eval(result.replace('x', '*')));
            }
        }
        setExpression(result);
    };

    const clear = () => {
        setResult(0);
        setExpression('');
    };


    const percent = () => {
        if (expression.length > 0) {
            let result = eval(expression.replace('x', '*'));
            result /= 100;
            setResult(result);
            setExpression(result.toString());
        }
    };

    const negative = () => {
        if (expression.length > 0) {
            let result = eval(expression.replace('x', '*'));
            result *= -1;
            setResult(result);
            setExpression(result.toString())
        }
    };

    const activateOperator = (value: Operators) => {
        addToExpression(value);
        if (expression.length > 0) {
            setResult(eval(expression.replace('x', '*')));
        }
    };

    const run = () => {
        if (expression.length > 0) {
            setResult(eval(expression.replace('x', '*')));
            setExpression(result.toString())
        }
    };

    const backSpace = () => {
        if (expression.length > 0) {
            const newExpression = expression.substr(0, expression.length - 1);
            setExpression(newExpression);
            setResult(eval(newExpression.replace('x', '*')));
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
                    <Button classes={classes} onClick={() => activateOperator(Operators.MULT)}>
                        <Close/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => activateOperator(Operators.DIV)}>
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
                    <Button classes={classes} onClick={() => addDigit(7)}>
                        <Numeric7/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addDigit(8)}>
                        <Numeric8/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addDigit(9)}>
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
                    <Button classes={classes} onClick={() => addDigit(4)}>
                        <Numeric4/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addDigit(5)}>
                        <Numeric5/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addDigit(6)}>
                        <Numeric6/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => activateOperator(Operators.SUB)}>
                        <Minus/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addDigit(1)}>
                        <Numeric1/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addDigit(2)}>
                        <Numeric2/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addDigit(3)}>
                        <Numeric3/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => activateOperator(Operators.ADD)}>
                        <Plus/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={percent}>
                        <PercentOutline/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button classes={classes} onClick={() => addDigit(0)}>
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


