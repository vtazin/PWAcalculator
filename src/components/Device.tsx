import {Container, Grid, makeStyles} from '@material-ui/core';
import Display from './Display';
import Digits from './Digits';
import StaticOperators from './StaticOperators';
import MainOperators, {Operators} from './MainOperators';
import {useState} from 'react';

const useStyle = makeStyles(() => ({
    root: {
        height: '100%',
        maxWidth: 'calc(100vw - 20px)',
        display: 'flex!important',
        flexFlow: 'column wrap!important',
        padding: '5px!important',
        margin: '0 10px!important'
    },
    displayPanel: {
        margin: 0,
        flexGrow: 4,
        borderRadius: '20px 20px 0 0',
        background: '#141414',
    },
    buttonsPanel: {
        flexBasis: 'auto!important',
        background: '#F0F0F0',
        padding: '20px!important',
        borderRadius: '0 0 20px 20px!important'
    }
}));

export default function Device() {

    const [result, setResult] = useState(0);
    const [expression, setExpression] = useState('');


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
            const result = eval(expression.replace('x', '*'));
            setResult(result);
            setExpression(result.toString())
        }
    };

    const classes = useStyle();
    return (
        <Container className={classes.root}>
            <div className={classes.displayPanel}>
                <Display result={result} expression={expression}/>
            </div>
            <Grid container className={classes.buttonsPanel}>
                <Grid container item xs={9}>
                    <StaticOperators clear={clear} percent={percent} negative={negative}/>
                    <Digits addToExpression={addToExpression}/>
                </Grid>
                <Grid container item xs={3}>
                    <MainOperators activateOperator={activateOperator} run={run}/>
                </Grid>
            </Grid>
        </ Container>
    );
}

