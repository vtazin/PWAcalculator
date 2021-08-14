import React, {Component} from 'react';
import {Button, Grid, Theme, WithStyles, withStyles} from '@material-ui/core';
import {connect, ConnectedProps} from 'react-redux';
import {addDigit} from '../actions';


const styles = (theme: Theme) => ({
    digit: {
        background: '#F0F0F0',
        boxShadow: '-4px -4px 12px #FFFFFF, 4px 4px 12px rgba(209, 205, 199, 0.5)'
    },
    zero: {
        maxWidth: '130px!important',
        width: '130px'
    }
});


class Digits extends Component<ConnectedProps<typeof connector>&WithStyles<typeof styles>> {

    addDigit = (event: any) => {
        let digit = (event.target as HTMLButtonElement)!.innerText;
        this.props.addDigit(digit);
    };

    render() {
        const {classes}=this.props;
        return (
            <Grid container item xs={12}>
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <Button variant="outlined" fullWidth className={classes.digit}
                                onClick={this.addDigit}>7</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" fullWidth className={classes.digit}
                                onClick={this.addDigit}>8</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" fullWidth className={classes.digit}
                                onClick={this.addDigit}>9</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <Button variant="outlined" fullWidth className={classes.digit}
                                onClick={this.addDigit}>4</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" fullWidth className={classes.digit}
                                onClick={this.addDigit}>5</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" fullWidth className={classes.digit}
                                onClick={this.addDigit}>6</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <Button variant="outlined" fullWidth className={classes.digit}
                                onClick={this.addDigit}>1</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" fullWidth className={classes.digit}
                                onClick={this.addDigit}>2</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" fullWidth className={classes.digit}
                                onClick={this.addDigit}>3</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={8}>
                        <Button variant="outlined" fullWidth className={`${classes.digit} ${classes.zero}`}
                                onClick={this.addDigit}>0</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" fullWidth className={classes.digit}
                                onClick={this.addDigit}>.</Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const connector = connect(undefined, {
    addDigit
});

export default withStyles(styles)(connector(Digits));


