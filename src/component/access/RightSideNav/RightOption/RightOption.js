import React, { useState } from 'react';
import Sub from './Sub/Sub';
import { Divider } from '@material-ui/core';
import MultiSelectDropDown from '../../../multiSelectDropDown/MultiSelectDropDown';
import Grid from '@material-ui/core/Grid';
// import data from '../../../../../data/uam.json';
import ToggleSwitch from '../../../toggleSwitch/ToggleSwitch';
import uamData from '../../../../data/uam.json'
import { Dropdown } from 'react-multi-select-component';
const RightOption= (props) =>{
    // const loadTitle = () => {
    //     let moduleArray = [];
    //     data.map(module => {
    //         moduleArray.push(module.module);
    //     })
    //     let title = data.map(d => {
    //         return <h3 className="ModuleTitle">{d.departmen_name}</h3>
    //     })
    //     console.log(moduleArray.length);
    //     for(let i= 0; i > moduleArray.length; i++) {
    //         for (let index = 0; index < i.length; index++) {
    //             const element = moduleArray[index];
    //         }
    //     }
    //     let modulesJSX = moduleArray.map((m, index) => {
    //         console.log("outer", index);
    //        return  m.map((module,i) => {
    //            console.log("inner", i);
    //             return (
    //                 <div id={index}>
    //                 <Grid container>
    //                     <Grid item xs={3}  className="padding-cls">
    //                         <div className="SubOption">
    //                             <p className="Sub_P">
    //                                 {module}
    //                             </p>
    //                             <ToggleSwitch />
    //                         </div>
    //                     </Grid>
    //                     <Grid item xs={3} className="padding-cls">
    //                         <MultiSelectDropDown />
    //                     </Grid>
    //                 </Grid>
    //                 <Divider />
    //                 </div>
    //             )
    //         })
    //     })
    //     // return title;
    //     console.log(modulesJSX);
    //     return modulesJSX;
    // }
    const [state,setState] = useState({
        showDropDown:true
    });
    const toggleDropDown = () => {
        const doesShow = state.showDropDown;
        setState({ showDropDown:!doesShow });
    }
    
    let Dropdown = null ;
    if(state.showDropDown){
        Dropdown = <MultiSelectDropDown />
    }

   
    return(
        
        <React.Fragment>

            {uamData.map((d,index) =>{
                    
            return(

                <div id={index}>
                    <div>
                        <h3 className="ModuleTitle">{d.departmen_name}</h3>
                    </div>
                    <Grid container>
                        <Grid item xs={3}  className="padding-cls">
                            <div className="SubOption">
                                <p className="Sub_P">
                                    {/* {data.module.map((m,index) =>{
                                        return <div id={index}>{m.m}</div>
                                    })} */}
                                    {d.module.map((m,i) => {
                                        return <span key={i}>{m.name}</span>
                                    })}
                                </p>
                                <div id = {index} className="toggleDiv" onClick={toggleDropDown}>
                                <ToggleSwitch />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3} className="padding-cls">
                            {/* {state.showDropDown ? < MultiSelectDropDown /> : null } */}
                            <div id = {index} className="dropDownDiv">
                                {Dropdown}
                            </div>
                        </Grid>
                    </Grid>
                    <Divider />
                </div>
            );
        })}

        </React.Fragment>
    );
}

export default RightOption;

