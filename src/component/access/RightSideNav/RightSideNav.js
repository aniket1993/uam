import React,{useRef} from 'react';
import RightOption from './RightOption/RightOption';
import Paper from '@material-ui/core/Paper';
import './RightSideNav.css'

const rightSideNav  = () =>{
    return(
        <React.Fragment>
            <Paper className="MarginAdjust MarginTop0">
                <RightOption moduleTitle="User Management"/>
            </Paper>
            <Paper className="MarginAdjust">
                <RightOption moduleTitle="Administration"/>
            </Paper>
            <Paper className="MarginAdjust">
                <RightOption moduleTitle="Vendor Management"/>
            </Paper>
            <Paper className="MarginAdjust">
                <RightOption moduleTitle="Master Management"/>
            </Paper>
        </React.Fragment>
    );
}

export default rightSideNav; 