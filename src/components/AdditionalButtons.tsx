import {Button, Grid, makeStyles, SvgIcon} from '@material-ui/core';
import {
    AlphaE,
    Exclamation,
    Exponent,
    FormatSuperscript,
    MathCos,
    MathLog,
    MathSin,
    MathTan,
    Pi,
    SquareRoot
} from 'mdi-material-ui';

const useStyles = makeStyles({
    root: {
        background: '#F0F0F0',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        fontSize: '10px!important',
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
                    <Button disabled classes={classes}>
                        <SvgIcon>
                            <path fill="currentColor" d="M12 4 Q2 12 12 20Q6.5 12 12 4Z" />
                        </SvgIcon>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes} >
                        <SvgIcon>
                            <path fill="currentColor" d="M12 4 Q22 12 12 20Q17.5 12 12 4Z" />
                        </SvgIcon>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes} style={{background:'red'}} >1/x</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <FormatSuperscript/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes} >
                        <SvgIcon>
                            <path  fill="currentColor" d="M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41
M18 3.8Q19.37 3 20.75 3.8Q21.33 5 20.5 6 Q22.33 7 20.5 8.75Q19.12 9.75 18 9V8.25Q19.12 9 19.7 8Q20.9 7 19.6 6.3H18.5V5.7H19.7Q20.66 5 20 4.2Q19.25 3.6 18 4.6V3.8 Z" />
                        </SvgIcon>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <Exponent/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <Exclamation/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <SquareRoot/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes} style={{background:'red'}} >ySQRT(x)</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <AlphaE/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <SvgIcon>
                            <path fill="currentColor" d="M4 7V17H10V15H6V7H4Z M12 7V17H14V10L18 17H20V7H18V14L14 7H12"/>
                        </SvgIcon>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <MathLog/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <MathSin/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <MathCos/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <MathTan/>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <SvgIcon>
                            <path fill="currentColor" d="M2 6V16H4V6H2Z M6 6V16H8V9L12 16H14V6H12V13L8 6H6Z M15 6L17.5 16 H19.5L22 6H20L18.5 14L17 6H16Z" />
                        </SvgIcon>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes} style={{background:'red'}}  >Rad</Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <Pi/>
                    </Button>
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


