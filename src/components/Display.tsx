import {Input, makeStyles} from '@material-ui/core';
import {useEffect, useState} from 'react';

// A style sheet
const useStyles = makeStyles({
    root: {
        height: '95%',
        display: 'flex',
        flexFlow: 'column wrap',
        padding: '3%!important',
    },
    expressionRoot: {
        flexGrow: 2,
    },
    expressionInput: {
        position: 'absolute',
        bottom: '5px',
        color: '#DDDDDD',
        textAlign: 'end',
        fontSize: 'inherit',
    },
    resultRoot: {
        flexBasis: 'auto',
    },
    resultInput: {
        color: '#DDDDDD',
        textAlign: 'end',
        fontSize: '18px',
    }

});

const Display = ({expression, result}: { expression: string; result: string; }) => {

    const [fontSize, setFontSize] = useState('28px');
    useEffect(() => {
        if (expression.length > 23) {
            setFontSize('16px');
        } else if (expression.length > 18) {
            setFontSize('24px');
        } else {
            setFontSize('28px');
        }
    }, [expression]);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Input id="expression" classes={{root: classes.expressionRoot, input: classes.expressionInput}}
                   style={{fontSize}}
                   value={expression.replaceAll(/0@([\d.]+)/g, '(-$1)')}
                   fullWidth margin="dense" disabled={true}/>
            <label htmlFor="expression">Expression</label>
            <Input id="result" classes={{root: classes.resultRoot, input: classes.resultInput}} value={result} fullWidth
                   margin="dense"
                   disabled={true}/>
            <label htmlFor="result">Result value</label>
        </div>
    );
};

export default Display;
