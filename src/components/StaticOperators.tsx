import React, {Component} from 'react';
import {Button, Grid, withStyles, WithStyles} from '@material-ui/core';
import {connect, ConnectedProps} from 'react-redux';
import {
    addToExpression,
    resetExpression,
    setCurrentResult
} from '../actions';
import {ProviderState} from '../reducers';


const styles = () => ({
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

class StaticOperators extends Component<ConnectedProps<typeof connector> & WithStyles<typeof styles>> {


    clear = () => {
        this.props.setCurrentResult(0);
        this.props.resetExpression();
    };

    percent = () => {
        if (this.props.expression.length > 0) {
            let result = eval(this.props.expression.replace('x', '*'));
            result /= 100;
            this.props.setCurrentResult(result);
            this.props.resetExpression();
            this.props.addToExpression(result.toString())
        }
    };

    negative = () => {
        if (this.props.expression.length > 0) {
            let result = eval(this.props.expression.replace('x', '*'));
            result *= -1;
            this.props.setCurrentResult(result);
            this.props.resetExpression();
            this.props.addToExpression(result.toString())
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <Grid container item xs={12}>
                <Grid item xs={4}>
                    <Button classes={classes} fullWidth style={{backgroundColor: '#eec5ed'}}
                            onClick={this.clear}>AC</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button classes={classes} fullWidth
                            onClick={this.negative}>+/-</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button classes={classes} fullWidth
                            onClick={this.percent}>%</Button>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state: ProviderState) => {
    return {
        display: state.display,
        result: state.result,
        expression: state.expression
    }
};

const connector = connect(mapStateToProps, {
    setCurrentResult,
    addToExpression,
    resetExpression
});

export default withStyles(styles)(connector(StaticOperators));
