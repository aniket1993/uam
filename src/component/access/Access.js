import React from 'react';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import RightSideNav from './RightSideNav/RightSideNav';
import './Access.css';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const access= () =>{
    return(
        <React.Fragment>
            <div className="AccessMainDiv">
                <Grid container>
                    <Grid className="padding-cls"item xs={2}>
                        <Paper className="PositionFixed">
                                <LeftSideNav />
                        </Paper>
                    </Grid>
                    <Grid className="padding-cls"item xs={10}>
                            <RightSideNav />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}
export default access;