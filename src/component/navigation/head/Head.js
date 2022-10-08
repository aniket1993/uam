import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Yu_logo from '../../../assets/images/yu_logo.png';
import MenuListComposition from './profileDropDown/MenuListComposition';
import './Head.css';

const Head = (props) =>{
    return(
        <Auxiliary>
            <div className="TopBar">
                <img src={Yu_logo} alt="Yashussunlimited" className="company_logo"/>
                <div>
                     <MenuListComposition />
                </div>
                <div className="ellipse-shape"></div>
            </div>
        </Auxiliary>
    )
}


export default Head;