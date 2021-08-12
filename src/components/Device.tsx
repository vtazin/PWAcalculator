import {Container, Grid} from '@material-ui/core';
import './Device.css';
import Display from './Display';
import Digits from './Digits';
import StaticOperators from './StaticOperators';
import MainOperators from './MainOperators';


export default function Device() {
    return (
        <Container className={"root"}>
            <div className={"buttons"}>
                <Display/>
                <Grid container>
                    <Grid container item xs={9}>
                        <StaticOperators/>
                        <Digits/>
                    </Grid>
                    <Grid container item xs={3}>
                        <MainOperators/>
                    </Grid>
                </Grid>
            </div>
        </ Container>
    );
}
