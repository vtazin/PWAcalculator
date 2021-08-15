import React, {Component} from 'react';
import {Button, Theme, withStyles, WithStyles} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import {Operators, setCurrentOperator, setCurrentResult, setDisplayValue} from '../actions';
import {connect, ConnectedProps} from 'react-redux';
import {ProviderState} from '../reducers';
import {ToggleButtonGroup} from '@material-ui/lab';


const styles = (theme: Theme) => ({
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
    },
    selected: {
        background: '#E6E5E5!important',
        filter: 'none!important',
        boxShadow: 'inset 4px 4px 12px rgba(209, 205, 199, 0.5), inset -4px -4px 12px #FFFFFF!important',
        '& span': {color: '#000000'}
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
        const {classes, operator} = this.props;
        return (
            <ToggleButtonGroup exclusive={true} orientation={'vertical'} value={operator}
                               onChange={(event, value) => this.activateOperator(value)}>
                <ToggleButton classes={classes} value={Operators.DIV}>/</ToggleButton>
                <ToggleButton classes={classes} value={Operators.MULT}>X</ToggleButton>
                <ToggleButton classes={classes} value={Operators.SUB}>-</ToggleButton>
                <ToggleButton classes={classes} value={Operators.ADD}>+</ToggleButton>
                <Button fullWidth style={{backgroundColor: '#FBD928'}} className={classes.root}
                        onClick={this.run}>=</Button>
            </ToggleButtonGroup>
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
