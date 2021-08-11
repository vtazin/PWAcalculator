import React, {Component} from 'react';
import {TextField} from '@material-ui/core';
import {ProviderState} from '../reducers';
import {connect, ConnectedProps} from 'react-redux';


class Display extends Component<ConnectedProps<typeof connector>> {
    render() {
        return (
            <TextField id="value" className={"display"} value={this.props.display}
                       inputProps={{style: {textAlign: 'end', fontSize: '32px', color: 'white'}}}
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

export default connector(Display);

