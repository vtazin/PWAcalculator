import {Box, makeStyles} from '@material-ui/core';
import Display from './Display';
import MainButtons from './MainButtons';
import {useState} from 'react';

const useStyle = makeStyles(() => ({
    root: {
        height: 'calc(100vh - 16px)',
        maxWidth: 'calc(100vw - 20px)',
    },
    displayPanel: {
        margin: 0,
        borderRadius: '20px 20px 0 0',
        background: '#141414',
    },
    buttonsPanel: {
        background: '#F0F0F0',
        borderRadius: '0 0 20px 20px!important',
    }
}));

export default function Device() {

    const [result, setResult] = useState(0);
    const [expression, setExpression] = useState('');

    const classes = useStyle();
    return (
        <Box className={classes.root} display="flex" flexDirection="column" p={1}>
            <Box className={classes.displayPanel} flexGrow={1}>
                <Display result={result} expression={expression}/>
            </Box>
            <Box
                className={classes.buttonsPanel}
                display="flex"
                p={2}
                m={0}
            >
                {/*<Box display={{xs: 'none', sm: 'block'}} flexShrink={1}>*/}
                {/*    /!*result={result} setResult={setResult} expression={expression}setExpression={setExpression}*!/*/}
                {/*    <AdditionalButtons/>*/}
                {/*</Box>*/}
                <Box flexShrink={1}>
                    <MainButtons setResult={setResult} expression={expression}
                                 setExpression={setExpression}/>
                </Box>
            </Box>
        </Box>
    );
}

