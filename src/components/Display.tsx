import React, {Component} from 'react';
import {TextField, withStyles} from '@material-ui/core';
import {ProviderState} from '../reducers';
import {connect, ConnectedProps} from 'react-redux';
import {WithStyles} from '@material-ui/core/styles/withStyles';

// A style sheet
const useStyles = () => ({
    root: {
        height: '95%',
        display: 'flex!important',
        flexFlow: 'column wrap!important',
        padding: '5px!important',
    },
    expression: {
        marginTop: '0!important',
        flexGrow: 3,
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
    },
    display: {
        marginTop: '0!important',
        flexBasis: 'auto!important',
        flexGrow: 1,
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

    get expression() {
        return this.props.expression;
    }

    get displayResult() {
        return this.props.result.toString();
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <TextField id="value1" className={classes.expression} value={this.expression}
                           variant="filled" fullWidth margin="dense" disabled={true}/>
                <TextField id="value" className={classes.display} value={this.displayResult}
                           variant="filled" fullWidth margin="dense" disabled={true}/>
            </div>
        );
    }
}


const mapStateToProps = (state: ProviderState) => {
    return {
        result: state.result,
        expression: state.expression
    };
};

const connector = connect(mapStateToProps, {});

export default withStyles(useStyles)(connector(Display));
