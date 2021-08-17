import {Button, ButtonGroup, makeStyles} from '@material-ui/core';

export enum Operators {
    NULL = '',
    ADD = '+',
    SUB = '-',
    MULT = 'x',
    DIV = '/'
}

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


const MainOperators = ({activateOperator, run}: { activateOperator: (value: Operators) => void; run: () => void; }) => {

    const classes = useStyles();
    return (
        <ButtonGroup orientation={'vertical'}>
            <Button classes={classes} onClick={() => activateOperator(Operators.DIV)}>/</Button>
            <Button classes={classes} onClick={() => activateOperator(Operators.MULT)}>X</Button>
            <Button classes={classes} onClick={() => activateOperator(Operators.SUB)}>-</Button>
            <Button classes={classes} onClick={() => activateOperator(Operators.ADD)}>+</Button>
            <Button classes={classes} onClick={() => run()} style={{backgroundColor: '#87CEFA'}}>=</Button>
        </ButtonGroup>
    );
};

export default MainOperators;
