import React, {Component} from 'react';
import {Button, Grid} from '@material-ui/core';
import {connect, ConnectedProps} from 'react-redux';
import {addDigit} from '../actions';

class Digits extends Component<ConnectedProps<typeof connector>> {

    addDigit = (event: any) => {
        let digit = (event.target as HTMLButtonElement)!.innerText;
        this.props.addDigit(digit);
    };

    render() {
        return (
            <Grid container item xs={12}>
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
                        <Button variant="outlined" fullWidth className={"button zero"}
                                onClick={this.addDigit}>0</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" fullWidth className={"button"}
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

export default connector(Digits);
