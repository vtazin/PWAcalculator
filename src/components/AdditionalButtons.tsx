import {Button, Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        background: '#F0F0F0',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        fontSize:'10px!important',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#F0F0F0"
        }
    },
    label: {
        color: '#808080'
    }
});

//{expression, setExpression, result, setResult}: { expression: string; setExpression: (value: string) => void; result: number; setResult: (value: number) => void; }
const AdditionalButtons = () => {

    // const addDigit = (event: any) => {
    //     const digit = (event.target as HTMLButtonElement)!.innerText;
    //     addToExpression(digit);
    // };
    //
    //
    // const addToExpression = (value: string) => {
    //     let result = expression;
    //     if (value === '0' && result === '0') {
    //         return;
    //     }
    //     if (value === '.' && result.length > 1 && result[result.length - 1] === '.') {
    //         return;
    //     }
    //     if (['x', '+', '-', '/'].includes(value) && result.length > 1 && ['x', '+', '-', '/'].includes(result[result.length - 1])) {
    //         result = result.slice(0, result.length - 2) + value;
    //     } else {
    //         result = expression + value;
    //         if (result.length > 0 && !['x', '+', '-', '/'].includes(value)) {
    //             setResult(eval(result.replace('x', '*')));
    //         }
    //     }
    //     setExpression(result);
    // };
    //
    // const clear = () => {
    //     setResult(0);
    //     setExpression('');
    // };
    //
    //
    // const percent = () => {
    //     if (expression.length > 0) {
    //         let result = eval(expression.replace('x', '*'));
    //         result /= 100;
    //         setResult(result);
    //         setExpression(result.toString());
    //     }
    // };
    //
    // const negative = () => {
    //     if (expression.length > 0) {
    //         let result = eval(expression.replace('x', '*'));
    //         result *= -1;
    //         setResult(result);
    //         setExpression(result.toString())
    //     }
    // };
    //
    // const activateOperator = (value: Operators) => {
    //     addToExpression(value);
    //     if (expression.length > 0) {
    //         setResult(eval(expression.replace('x', '*')));
    //     }
    // };
    //
    // const run = () => {
    //     if (expression.length > 0) {
    //         const result = eval(expression.replace('x', '*'));
    //         setResult(result);
    //         setExpression(result.toString())
    //     }
    // };

    const classes = useStyles();

    return (
        <Grid container item xs={12}>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>(</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>)</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>1/x</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>x^2</Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>x^3</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>x^y</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>x!</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>sqrt</Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>ySQRT(x)</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>e</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>ln</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>log</Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>sin</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>cos</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>tan</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>Inv</Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>Rad</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>pi</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}/>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}/>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default AdditionalButtons;


