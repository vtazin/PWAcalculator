import {Button, Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        background: '#F0F0F0',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#F0F0F0"
        }
    },
    label: {
        color: '#808080'
    }
});

const StaticOperators = ({clear, percent, negative}: { clear: () => void; percent: () => void; negative: () => void; }) => {

    const classes = useStyles();
    return (
        <Grid container item xs={12}>
            <Grid item xs={4}>
                <Button classes={classes} fullWidth style={{backgroundColor: '#eec5ed'}}
                        onClick={clear}>AC</Button>
            </Grid>
            <Grid item xs={4}>
                <Button classes={classes} fullWidth
                        onClick={negative}>+/-</Button>
            </Grid>
            <Grid item xs={4}>
                <Button classes={classes} fullWidth
                        onClick={percent}>%</Button>
            </Grid>
        </Grid>
    );
};


export default StaticOperators;
