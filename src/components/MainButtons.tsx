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
import PostfixNotationExpression from '../utils/PostfixNotationExpression';

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
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#F0F0F0"
        },
    },
    label: {
        color: '#808080'
    }
});


const MainButtons = ({expression, setExpression, setResult}: { expression: string; setExpression: (value: string) => void; setResult: (value: string) => void; }) => {

    const addToExpression = (value: string) => {
        let result = expression;
        if (value === '0@') {
            if (result.match(/0@[\d.]+$/)) {
                result = result.replace(/0@([\d.]+)$/, '$1');
            } else {
                result = result.replace(/([\d.]+)$/, '0@$1');
            }
            const evalResult = PostfixNotationExpression.result(result);
            if (evalResult !== undefined) {
                setResult(evalResult);
            }
            setExpression(result);
            return;
        }

        if (value === '%') {
            if (!result.match(/[+x-](0@)?[\d.]+$/) && !result.match(/^(0@)?[\d.]+$/)) {
                return;
            }
        }
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
        const evalResult = PostfixNotationExpression.result(result);
        if (evalResult !== undefined) {
            setResult(evalResult);
        }
        setExpression(result);
    };

    const backSpace = () => {
        if (expression.length > 0) {
            if (expression.length === 1) {
                clear();
            } else {
                let newExpression;
                if (expression.match(/0@[\d.]+$/)) {
                    newExpression = expression.replace(/0@([\d.]+)$/, '$1');
                } else {
                    newExpression = expression.substr(0, expression.length - 1);
                }

                const evalResult = PostfixNotationExpression.result(newExpression);
                if (evalResult !== undefined) {
                    setResult(evalResult);
                }
                setExpression(newExpression);
            }
        }
    };

    const clear = () => {
        setResult('0');
        setExpression('');
    };

    const run = () => {
        if (expression.length > 0) {
            const result = PostfixNotationExpression.result(expression);
            if (result !== undefined) {
                setResult(result);
                let expression = result.replace('-', '');
                if (parseFloat(result) < 0) {
                    expression = '0@' + expression;
                }
                setExpression(expression)
            }
        }
    };

    const classes = useStyles();

    return (
        <Grid container item xs={12}>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} style={{backgroundColor: '#eec5ed'}} onClick={clear}>
                        <AlphaCCircleOutline/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression(Operators.MULT)}>
                        <Close/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression(Operators.DIV)}>
                        <Division/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={backSpace}>
                        <BackspaceOutline/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression('7')}>
                        <Numeric7/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression('8')}>
                        <Numeric8/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression('9')}>
                        <Numeric9/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression('0@')}>
                        <PlusMinus/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression('4')}>
                        <Numeric4/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression('5')}>
                        <Numeric5/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression('6')}>
                        <Numeric6/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression(Operators.SUB)}>
                        <Minus/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression('1')}>
                        <Numeric1/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression('2')}>
                        <Numeric2/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression('3')}>
                        <Numeric3/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression(Operators.ADD)}>
                        <Plus/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression(Operators.PRC)}>
                        <PercentOutline/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression('0')}>
                        <Numeric0/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => addToExpression('.')}>
                        <CircleSmall/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button aria-label={'keyboard-button'} classes={classes} onClick={() => run()} style={{backgroundColor: '#87CEFA'}}>
                        <Equal/>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default MainButtons;


