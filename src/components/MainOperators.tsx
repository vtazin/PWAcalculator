import React, {Component} from 'react';
import {Button, ButtonGroup, withStyles, WithStyles} from '@material-ui/core';
import {
    addToExpression,
    Operators,
    resetExpression,
    setCurrentResult
} from '../actions';
import {connect, ConnectedProps} from 'react-redux';
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


class MainOperators extends Component<ConnectedProps<typeof connector> & WithStyles<typeof styles>> {

    activateOperator(value: Operators) {
        this.props.addToExpression(value);
        if (this.props.expression.length > 0) {
            this.props.setCurrentResult(eval(this.props.expression.replace('x', '*')));
        }
    }

    run() {
        if (this.props.expression.length > 0) {
            const result = eval(this.props.expression.replace('x', '*'));
            this.props.setCurrentResult(result);
            this.props.resetExpression();
            this.props.addToExpression(result.toString())
        }
    }

    render() {
        // const color = ["#ADD8E6", "#87CEEB", "87CEFA"];

        const {classes} = this.props;
        return (
            <ButtonGroup orientation={'vertical'}>
                <Button classes={classes} onClick={() => this.activateOperator(Operators.DIV)}>/</Button>
                <Button classes={classes} onClick={() => this.activateOperator(Operators.MULT)}>X</Button>
                <Button classes={classes} onClick={() => this.activateOperator(Operators.SUB)}>-</Button>
                <Button classes={classes} onClick={() => this.activateOperator(Operators.ADD)}>+</Button>
                <Button classes={classes} onClick={() => this.run()} style={{backgroundColor: '#87CEFA'}}>=</Button>
            </ButtonGroup>
        );
    }
}

const mapStateToProps = (state: ProviderState) => {
    return {
        operator: state.operator,
        display: state.display,
        result: state.result,
        expression: state.expression
    };
};

const connector = connect(mapStateToProps, {
    setCurrentResult,
    addToExpression,
    resetExpression
});

export default withStyles(styles)(connector(MainOperators));
