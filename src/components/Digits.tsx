import React, {Component} from 'react';
import {Button, Grid, WithStyles, withStyles} from '@material-ui/core';
import {connect, ConnectedProps} from 'react-redux';
import {addToExpression, setCurrentResult} from '../actions';
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


class Digits extends Component<ConnectedProps<typeof connector> & WithStyles<typeof styles>> {

    addDigit = (event: any) => {
        const digit = (event.target as HTMLButtonElement)!.innerText;
        this.props.addToExpression(digit);
        window.setTimeout(() => {
            if (this.props.expression.length > 0) {
                this.props.setCurrentResult(eval(this.props.expression.replace('x','*')));
            }
        }, 3);
    };

    render() {
        const {classes} = this.props;
        return (
            <Grid container item xs={12}>
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <Button classes={classes} variant="outlined" fullWidth
                                onClick={this.addDigit}>7</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button classes={classes} variant="outlined" fullWidth
                                onClick={this.addDigit}>8</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button classes={classes} variant="outlined" fullWidth
                                onClick={this.addDigit}>9</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <Button classes={classes} variant="outlined" fullWidth
                                onClick={this.addDigit}>4</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button classes={classes} variant="outlined" fullWidth
                                onClick={this.addDigit}>5</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button classes={classes} variant="outlined" fullWidth
                                onClick={this.addDigit}>6</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <Button classes={classes} variant="outlined" fullWidth
                                onClick={this.addDigit}>1</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button classes={classes} variant="outlined" fullWidth
                                onClick={this.addDigit}>2</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button classes={classes} variant="outlined" fullWidth
                                onClick={this.addDigit}>3</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <Button classes={classes} variant="outlined" fullWidth
                                onClick={this.addDigit}>0</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button classes={classes} variant="outlined" fullWidth
                                onClick={this.addDigit}>.</Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state: ProviderState) => {
    return {
        expression: state.expression
    }
};

const connector = connect(mapStateToProps, {
    addToExpression,
    setCurrentResult
});

export default withStyles(styles)(connector(Digits));


