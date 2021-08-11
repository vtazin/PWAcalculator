import React, {Component} from 'react';
import {Button, Container, Grid} from '@material-ui/core';
import {connect, ConnectedProps} from 'react-redux';
import {setDisplayValue} from '../actions';
import {ProviderState} from '../reducers';
import './Device.css';
import Display from './Display';
import Digits from './Digits';

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
                <Display/>
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
                        <Digits/>
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
