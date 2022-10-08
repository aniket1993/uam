import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import './Sub.css'
import { Divider } from '@material-ui/core';
import MultiSelectDropDown from '../../../../multiSelectDropDown/MultiSelectDropDown';
import Grid from '@material-ui/core/Grid';
import data from '../../../../../data/uam.json';
const sub = (props) =>{
    console.log(data);
    
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={3}  className="padding-cls">
                    <div className="SubOption">
                        <p className="Sub_P">
                            Sub Module - {props.no}
                        </p>
                        <ToggleSwitch />
                    </div>
                </Grid>
                <Grid item xs={3} className="padding-cls">
                    <MultiSelectDropDown />
                </Grid>
            </Grid>
            <Divider />
        </React.Fragment>
    );
}
export default sub;