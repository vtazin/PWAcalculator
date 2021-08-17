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


const Digits = ({addToExpression}: { addToExpression: (value: string) => void; }) => {

    const addDigit = (event: any) => {
        const digit = (event.target as HTMLButtonElement)!.innerText;
        addToExpression(digit);
    };

    const classes = useStyles();

    return (
        <Grid container item xs={12}>
            <Grid container item xs={12}>
                <Grid item xs={4}>
                    <Button classes={classes} variant="outlined" fullWidth
                            onClick={addDigit}>7</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button classes={classes} variant="outlined" fullWidth
                            onClick={addDigit}>8</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button classes={classes} variant="outlined" fullWidth
                            onClick={addDigit}>9</Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={4}>
                    <Button classes={classes} variant="outlined" fullWidth
                            onClick={addDigit}>4</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button classes={classes} variant="outlined" fullWidth
                            onClick={addDigit}>5</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button classes={classes} variant="outlined" fullWidth
                            onClick={addDigit}>6</Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={4}>
                    <Button classes={classes} variant="outlined" fullWidth
                            onClick={addDigit}>1</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button classes={classes} variant="outlined" fullWidth
                            onClick={addDigit}>2</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button classes={classes} variant="outlined" fullWidth
                            onClick={addDigit}>3</Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={4}/>
                <Grid item xs={4}>
                    <Button classes={classes} variant="outlined" fullWidth
                            onClick={addDigit}>0</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button classes={classes} variant="outlined" fullWidth
                            onClick={addDigit}>.</Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Digits;


