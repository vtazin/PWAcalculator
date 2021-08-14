import React, {Component} from 'react';
import {Button, Grid, Theme, withStyles, WithStyles} from '@material-ui/core';
import {Operators, setCurrentOperator, setCurrentResult, setDisplayValue} from '../actions';
import {connect, ConnectedProps} from 'react-redux';
import {ProviderState} from '../reducers';


const styles = (theme: Theme) => ({
    mainOperators: {
        background: '#C9C9C9',
        boxShadow: '-4px -4px 12px #FFFFFF, 4px 4px 12px rgba(209, 205, 199, 0.5)'
    }
});


class MainOperators extends Component<ConnectedProps<typeof connector> & WithStyles<typeof styles>> {

    activateOperator = (value: Operators) => {
        this.run();
        this.props.setOperator(value);
        this.props.setTextValue('0');
    };

    run = () => {
        const currentResult = this.props.result;
        let result = parseFloat(this.props.display);
        if (this.props.operator !== Operators.NULL) {
            const secondValue = parseFloat(this.props.display);

            switch (this.props.operator) {
                case Operators.ADD:
                    result = currentResult + secondValue;
                    break;
                case Operators.SUB:
                    result = currentResult - secondValue;
                    break;
                case Operators.MULT:
                    result = currentResult * secondValue;
                    break;
                case Operators.DIV:
                    result = currentResult / secondValue;
                    break;
            }

            this.props.setOperator(Operators.NULL);

            let textResult = result.toString();
            const pointIndex = textResult.indexOf('.');
            if (pointIndex !== -1) {
                textResult = textResult.slice(0, pointIndex + 6);
                result = parseFloat(textResult);
            }
            this.props.setTextValue(result.toString());

        }

        this.props.setResult(result);

    };

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Grid item xs={12}>
                    <Button variant="outlined" fullWidth className={classes.mainOperators}
                            onClick={() => this.activateOperator(Operators.DIV)}>/</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" fullWidth className={classes.mainOperators}
                            onClick={() => this.activateOperator(Operators.MULT)}>x</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" fullWidth className={classes.mainOperators}
                            onClick={() => this.activateOperator(Operators.SUB)}>-</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" fullWidth className={classes.mainOperators}
                            onClick={() => this.activateOperator(Operators.ADD)}>+</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" fullWidth className={classes.mainOperators} onClick={this.run}>=</Button>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: ProviderState) => {
    return {
        operator: state.operator,
        display: state.display,
        result: state.result
    };
};

const connector = connect(mapStateToProps, {
    setOperator: setCurrentOperator,
    setResult: setCurrentResult,
    setTextValue: setDisplayValue
});

export default withStyles(styles)(connector(MainOperators));
