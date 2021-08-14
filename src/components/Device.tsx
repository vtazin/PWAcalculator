import {Container, Grid, makeStyles} from '@material-ui/core';
import Display from './Display';
import Digits from './Digits';
import StaticOperators from './StaticOperators';
import MainOperators from './MainOperators';

const useStyle = makeStyles(theme => ({
    root: {
        height: '100%',
        maxWidth: 'calc(100vw - 20px)',
        display: 'flex!important',
        flexFlow: 'column wrap!important',
        padding: '5px!important',
        margin: '0 10px!important'
    },
    displayPanel: {
        margin: 0,
        flexGrow: 4,
        borderRadius: '20px 20px 0 0',
        background: '#141414',
    },
    buttonsPanel: {
        flexBasis: 'auto!important',
        background: '#F0F0F0',
        padding: '20px!important',
        borderRadius: '0 0 20px 20px!important'
    }
}));

export default function Device() {
    const classes = useStyle();
    return (
        <Container className={classes.root}>
            <div className={classes.displayPanel}>
                <Display/>
            </div>
            <Grid container className={classes.buttonsPanel}>
                <Grid container item xs={9}>
                    <StaticOperators/>
                    <Digits/>
                </Grid>
                <Grid container item xs={3}>
                    <MainOperators/>
                </Grid>
            </Grid>
        </ Container>
    );
}

