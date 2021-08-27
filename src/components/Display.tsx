import {Box, makeStyles, TextField} from '@material-ui/core';
import {useEffect, useState} from 'react';

// A style sheet
const useStyles = makeStyles({
    root: {
        height: '95%',
        display: 'flex!important',
        flexFlow: 'column wrap!important',
        padding: '5px!important',
    },
    expression: {
        flexGrow: 2,
        textAlign: 'end',
        color: 'white',
        position: 'relative',
        '& div': {
            position: 'absolute',
            bottom: '5px',
            right: '5px'
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
                color: '#DDDDDD',
                fontSize: '18px',
                position: 'absolute',
                bottom: '5px',
                right: 0,
            }
        }
    }
});

const Display = ({expression, result}: { expression: string; result: number; }) => {

    const [fontSize, setFontSize] = useState('28px');
    useEffect(() => {
        if(expression.length>23){
            setFontSize('16px');
        } else if (expression.length > 18) {
            setFontSize('24px');
        }
    }, [expression]);

    const classes = useStyles();
    // const displayValue = () => {
    //     let textValue = result.toString();
    //     let additionalValue = '';
    //     if (textValue.indexOf('e') !== -1) {
    //         additionalValue = textValue.slice(textValue.indexOf('e'));
    //     }
    //     textValue = textValue.slice(0, 14 - additionalValue.length);
    //     return parseFloat(textValue + additionalValue);
    // };

    return (
        <div className={classes.root}>
            <Box component="div" className={classes.expression}>
                <div style={{fontSize}}>
                    {expression.replaceAll(/0@([\d.]+)/g, '(-$1)')}
                </div>
            </Box>
            <TextField id="value" className={classes.display} value={result.toString()}
                       variant="filled" fullWidth margin="dense" disabled={true}/>
        </div>
    );
};

export default Display;
