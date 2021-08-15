import React, {Component} from 'react';
import {Button, Grid, Theme, withStyles, WithStyles} from '@material-ui/core';
import {connect, ConnectedProps} from 'react-redux';
import {Operators, setCurrentOperator, setCurrentResult, setDisplayValue} from '../actions';
import {ProviderState} from '../reducers';


const styles = (theme: Theme) => ({
    staticOperators: {
        background: '#F0F0F0',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
    }
});

class StaticOperators extends Component<ConnectedProps<typeof connector> & WithStyles<typeof styles>> {


    clear = () => {
        this.props.setOperator(Operators.NULL);
        this.props.setResult(0);
        this.props.setTextValue('0');
    };

    percent = () => {
        let result = parseFloat(this.props.display);
        result /= 100;

        let textResult = result.toString();
        const pointIndex = textResult.indexOf('.');
        if (pointIndex !== -1) {
            textResult = textResult.slice(0, pointIndex + 6);
            result = parseFloat(textResult);
        }
        this.props.setTextValue(result.toString());

        this.props.setResult(result);
    };

    negative = () => {
        let result = parseFloat(this.props.display);
        result *= -1;

        let textResult = result.toString();
        const pointIndex = textResult.indexOf('.');
        if (pointIndex !== -1) {
            textResult = textResult.slice(0, pointIndex + 6);
            result = parseFloat(textResult);
        }
        this.props.setTextValue(result.toString());
    };

    render() {
        const {classes} = this.props;
        return (
            <Grid container item xs={12}>
                <Grid item xs={4}>
                    <Button variant="outlined" fullWidth className={classes.staticOperators}
                            onClick={this.clear}>AC</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" fullWidth className={classes.staticOperators}
                            onClick={this.negative}>+/-</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" fullWidth className={classes.staticOperators}
                            onClick={this.percent}>%</Button>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state: ProviderState) => {
    return {
        display: state.display,
    }
};

const connector = connect(mapStateToProps, {
    setOperator: setCurrentOperator,
    setResult: setCurrentResult,
    setTextValue: setDisplayValue
});

export default withStyles(styles)(connector(StaticOperators));
