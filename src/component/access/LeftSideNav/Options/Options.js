import React from 'react';
import './Options.css'

const options = (props) =>{
    return (
        <React.Fragment>
            <div className="Option">
                <p>{props.title}</p>
            </div>
             
        </React.Fragment>
    );  
};
export default options;