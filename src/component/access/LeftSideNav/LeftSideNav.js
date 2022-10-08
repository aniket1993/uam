import React from 'react';
import Options from './Options/Options';



const leftsidenav = () =>{
    return (
        <React.Fragment>
           
            <Options title="User Management"/>
            <Options title="Admin"/>
            <Options title="Vendor Management"/>
            <Options title="Master Management"/>
            
        </React.Fragment>
    );  
};

export default leftsidenav;