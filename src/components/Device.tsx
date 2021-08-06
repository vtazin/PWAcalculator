import React, {MouseEventHandler, useState} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Button, Container, Grid, TextField} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        root: {
            background: "grey",
            maxWidth: "360px",
        },

        display: {},

        staticOperators: {
            border: '1px groove',
            borderRadius: 0,
            backgroundColor: 'orange',
        },
        button: {
            border: '1px groove',
            borderRadius: 0
        },
        operators: {
            backgroundColor: 'yellow',
            border: '1px groove',
            borderRadius: 0
        }
    })
);


enum Operators {
    NULL,
    ADD,
    SUB,
    MULT,
    DIV
}

function Device() {

    const classes = useStyles();

    const [textNumber, setTextNumber] = useState('0');
    const [visibleNumber, setVisibleNumber] = useState('0');
    const [firstValue, setFirstValue] = useState(0);
    const [operator, setOperator] = useState(Operators.NULL);

    const addDigit: MouseEventHandler<HTMLButtonElement> = (event) => {
        let digit = (event.target as HTMLButtonElement)!.innerText;

        let numberValue = parseFloat(textNumber + digit);
        if (textNumber.indexOf('.') === -1 && digit === '.') {
            setTextNumber(numberValue.toString() + digit);
            setVisibleNumber(numberValue.toString() + digit);
        } else {
            setTextNumber(numberValue.toString());
            setVisibleNumber(numberValue.toString());
        }
    };

    const activateOperator = (value: Operators) => {
        run();
        setOperator(value);
        setTextNumber('0');
        setVisibleNumber('0');
    };

    const run = () => {
        let result = parseFloat(textNumber);
        if (operator !== Operators.NULL) {
            const secondValue = parseFloat(textNumber);

            switch (operator) {
                case Operators.ADD:
                    result = firstValue + secondValue;
                    break;
                case Operators.SUB:
                    result = firstValue - secondValue;
                    break;
                case Operators.MULT:
                    result = firstValue * secondValue;
                    break;
                case Operators.DIV:
                    result = firstValue / secondValue;
                    break;
            }
            setOperator(Operators.NULL);
            setTextNumber(result.toString());

            let textResult = result.toString();
            const pointIndex = textResult.indexOf('.');
            if (pointIndex !== -1) {
                textResult = textResult.slice(0, pointIndex + 6);
                result = parseFloat(textResult);
            }
            setVisibleNumber(result.toString());

        }
        setFirstValue(result);
    };

    const clear = () => {
        setFirstValue(0);
        setTextNumber('0');
        setVisibleNumber('0');
        setOperator(Operators.NULL);
    };

    return (
        <Container className={classes.root}>
            <TextField id="value" className={classes.display} value={visibleNumber}
                       inputProps={{style: {textAlign: 'end', fontSize: '32px', color: 'white'}}}
                       variant="filled" fullWidth margin="dense" disabled={true} />
            <Grid container>
                <Grid container item xs={9}>
                    <Grid container item xs={12}>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.staticOperators}
                                    onClick={clear}>AC</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.staticOperators}>+/-</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.staticOperators}>%</Button>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.button}
                                    onClick={addDigit}>7</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.button}
                                    onClick={addDigit}>8</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.button}
                                    onClick={addDigit}>9</Button>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.button}
                                    onClick={addDigit}>4</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.button}
                                    onClick={addDigit}>5</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.button}
                                    onClick={addDigit}>6</Button>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.button}
                                    onClick={addDigit}>1</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.button}
                                    onClick={addDigit}>2</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.button}
                                    onClick={addDigit}>3</Button>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={8}>
                            <Button variant="outlined" fullWidth className={classes.button}
                                    onClick={addDigit}>0</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" fullWidth className={classes.button}
                                    onClick={addDigit}>.</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={3}>
                    <Grid item xs={12}>
                        <Button variant="outlined" fullWidth className={classes.operators}
                                onClick={() => activateOperator(Operators.DIV)}>/</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" fullWidth className={classes.operators}
                                onClick={() => activateOperator(Operators.MULT)}>x</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" fullWidth className={classes.operators}
                                onClick={() => activateOperator(Operators.SUB)}>-</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" fullWidth className={classes.operators}
                                onClick={() => activateOperator(Operators.ADD)}>+</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" fullWidth className={classes.operators} onClick={run}>=</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Device;
