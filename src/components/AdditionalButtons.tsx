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
                            <path fill="currentColor" d="M12 4 Q2 12 12 20Q6.5 12 12 4Z"/>
                        </SvgIcon>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <SvgIcon>
                            <path fill="currentColor" d="M12 4 Q22 12 12 20Q17.5 12 12 4Z"/>
                        </SvgIcon>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <SvgIcon>
                            <path fill="currentColor"
                                  d="M6,6V8H8V14H10V6H6Z M8,18H10L18,6H16L8,18Z M13,12H15L16.5,14L18,12H20L18,15.5L20,19H18L16.5,17L15,19H13L15,15.5L13,12Z"/>
                        </SvgIcon>
                    </Button>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <FormatSuperscript/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <SvgIcon>
                            <path fill="currentColor" d="M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41
M18 3.8Q19.37 3 20.75 3.8Q21.33 5 20.5 6 Q22.33 7 20.5 8.75Q19.12 9.75 18 9V8.25Q19.12 9 19.7 8Q20.9 7 19.6 6.3H18.5V5.7H19.7Q20.66 5 20 4.2Q19.25 3.6 18 4.6V3.8 Z"/>
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
                    <Button disabled classes={classes}>
                        <SvgIcon>
                            <path fill="currentColor"
                                  d="M11.76,16.83L14.59,14L11.76,11.17L13.17,9.76L16,12.59L18.83,9.76L20.24,11.17L17.41,14L20.24,16.83L18.83,18.24L16,15.41L13.17,18.24L11.76,16.83M2,11H5V11H5L7.29,16.4L10,6H22V8H11.55L8.68,19H6.22L3.68,13H2V11Z M3,3H5L4.8,5.5L7,3H9L5,9H3L5,7L3,3"/>
                        </SvgIcon>
                    </Button>
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
                        {/*<SvgIcon>*/}
                        {/*    <path fill="currentColor"*/}
                        {/*          d="M2 6V16H4V6H2Z M6 6V16H8V9L12 16H14V6H12V13L8 6H6Z M15 6L17.5 16 H19.5L22 6H20L18.5 14L17 6H16Z"/>*/}
                        {/*</SvgIcon>*/}
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                    <Button disabled classes={classes}>
                        <SvgIcon>
                            <path fill="currentColor"
                                  d="M2,7V17H4V13H4.8L6,17H8L6.76,12.85C7.5,12.55 8,11.84 8,11V9A2,2 0 0,0 6,7H2M4,9H6V11H4V9Z M11,7A2,2 0 0,0 9,9V17H11V13H13V17H15V9A2,2 0 0,0 13,7H11M11,9H13V11H11V9Z M16,7V17H20A2,2 0 0,0 22,15V9A2,2 0 0,0 20,7H16M18,9H20V15H18V9Z"/>
                        </SvgIcon>
                    </Button>
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


