import React, {Component} from 'react';
import {TextField, withStyles} from '@material-ui/core';
import {ProviderState} from '../reducers';
import {connect, ConnectedProps} from 'react-redux';
import {WithStyles} from '@material-ui/core/styles/withStyles';

// A style sheet
const useStyles = () => ({
    display: {
        height: '100%',
        marginTop: '0!important',
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

    get displayValue() {
        const {display, result} = this.props;

        if (display === '') {
            let textResult = result.toString();
            const pointIndex = textResult.indexOf('.');
            if (pointIndex !== -1) {
                textResult = textResult.slice(0, pointIndex + 6);
            }
            return textResult;
        }
        return this.props.display;
    }

    render() {
        const {classes} = this.props;
        return (
            <TextField id="value" className={classes.display} value={this.displayValue}
                       variant="filled" fullWidth margin="dense" disabled={true}/>
        );
    }
}


const mapStateToProps = (state: ProviderState) => {
    return {
        display: state.display,
        result: state.result
    };
};

const connector = connect(mapStateToProps, {});

export default withStyles(useStyles)(connector(Display));
