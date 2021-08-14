import React, {Component} from 'react';
import {TextField, Theme, withStyles} from '@material-ui/core';
import {ProviderState} from '../reducers';
import {connect, ConnectedProps} from 'react-redux';
import {WithStyles} from '@material-ui/core/styles/withStyles';

// A style sheet
const useStyles = (theme: Theme) => ({
    display: {
        height: '100%',
        '& div': {
            background: 'none!important',
            height: '100%',
            '& input': {
                textAlign: 'end',
                fontSize: '36px',
                color: 'white',
                position: 'absolute',
                bottom: '5px',
                right: 0,
            }
        }
    }
});

class Display extends Component<ConnectedProps<typeof connector> & WithStyles<typeof useStyles>> {
    render() {
        const {classes, display} = this.props;
        return (
            <TextField id="value" className={classes.display} value={display}
                       variant="filled" fullWidth margin="dense" disabled={true}/>
        );
    }
}


const mapStateToProps = (state: ProviderState) => {
    return {
        display: state.display
    };
};

const connector = connect(mapStateToProps, {});

export default withStyles(useStyles)(connector(Display));
