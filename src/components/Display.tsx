import {makeStyles, TextField} from '@material-ui/core';

// A style sheet
const useStyles = makeStyles({
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

const Display = ({expression, result}: { expression: string; result: number; }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField id="value1" className={classes.expression} value={expression}
                       variant="filled" fullWidth margin="dense" disabled={true}/>
            <TextField id="value" className={classes.display} value={result.toString()}
                       variant="filled" fullWidth margin="dense" disabled={true}/>
        </div>
    );
};

export default Display;
