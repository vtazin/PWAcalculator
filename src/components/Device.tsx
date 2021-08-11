import React, {Component} from 'react';
import {Button, Container, Grid} from '@material-ui/core';
import {connect, ConnectedProps} from 'react-redux';
import {setDisplayValue} from '../actions';
import {ProviderState} from '../reducers';
import './Device.css';
import Display from './Display';

enum Operators {
    NULL,
    ADD,
    SUB,
    MULT,
    DIV
}


class Device extends Component<ConnectedProps<typeof connector>> {

    state = {
        textNumber: '0',
        firstValue: 0,
        operator: Operators.NULL
    };


    addDigit = (event: any) => {
        let digit = (event.target as HTMLButtonElement)!.innerText;

        let numberValue = parseFloat(this.state.textNumber + digit);
        if (this.state.textNumber.indexOf('.') === -1 && digit === '.') {
            this.setState({
                ...this.state,
                textNumber: numberValue.toString() + digit,
            });
            this.props.setTextValue(numberValue.toString() + digit);
        } else {
            this.setState({
                ...this.state,
                textNumber: numberValue.toString(),
            });
            this.props.setTextValue(numberValue.toString());
        }
    };


    activateOperator = (value: Operators) => {
        this.run();

        this.setState({
            ...this.state,
            textNumber: '0',
            operator: value
        });
        this.props.setTextValue('0');
    };

    run = () => {
        const firstValue = this.state.firstValue;
        let result = parseFloat(this.state.textNumber);
        if (this.state.operator !== Operators.NULL) {
            const secondValue = parseFloat(this.state.textNumber);

            switch (this.state.operator) {
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
            this.setState({
                ...this.state,
                textNumber: result.toString(),
                operator: Operators.NULL
            });

            let textResult = result.toString();
            const pointIndex = textResult.indexOf('.');
            if (pointIndex !== -1) {
                textResult = textResult.slice(0, pointIndex + 6);
                result = parseFloat(textResult);
            }
            this.props.setTextValue(result.toString());

        }

        this.setState({
            ...this.state,
            firstValue: result
        });
    };


    clear = () => {

        this.setState({
            ...this.state,
            firstValue: 0,
            textNumber: '0',
            operator: Operators.NULL
        });
        this.props.setTextValue('0');
    };

    render() {
        return (
            <Container className={"root"}>
                <Display />
                <Grid container>
                    <Grid container item xs={9}>
                        <Grid container item xs={12}>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"staticOperators"}
                                        onClick={this.clear}>AC</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"staticOperators"}>+/-</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"staticOperators"}>%</Button>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"button"}
                                        onClick={this.addDigit}>7</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"button"}
                                        onClick={this.addDigit}>8</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"button"}
                                        onClick={this.addDigit}>9</Button>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"button"}
                                        onClick={this.addDigit}>4</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"button"}
                                        onClick={this.addDigit}>5</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"button"}
                                        onClick={this.addDigit}>6</Button>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"button"}
                                        onClick={this.addDigit}>1</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"button"}
                                        onClick={this.addDigit}>2</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"button"}
                                        onClick={this.addDigit}>3</Button>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={8}>
                                <Button variant="outlined" fullWidth className={"button"}
                                        onClick={this.addDigit}>0</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" fullWidth className={"button"}
                                        onClick={this.addDigit}>.</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={3}>
                        <Grid item xs={12}>
                            <Button variant="outlined" fullWidth className={"operators"}
                                    onClick={() => this.activateOperator(Operators.DIV)}>/</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" fullWidth className={"operators"}
                                    onClick={() => this.activateOperator(Operators.MULT)}>x</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" fullWidth className={"operators"}
                                    onClick={() => this.activateOperator(Operators.SUB)}>-</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" fullWidth className={"operators"}
                                    onClick={() => this.activateOperator(Operators.ADD)}>+</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" fullWidth className={"operators"} onClick={this.run}>=</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = (state: ProviderState) => {
    return {
        display: state.display
    }
};

const connector = connect(mapStateToProps, {
    setTextValue: setDisplayValue
});

export default connector(Device);
