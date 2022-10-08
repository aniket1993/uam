import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import classes from './Layout.module.css';
import SideDrawer from "../../component/navigation/sideDrawer/SideDrawer";
// import Access from "../../component/access/Access";
// import SideDrawer from "./component/navigation/sideDrawer/SideDrawer";
// import {Route, Switch } from "react-router-dom";
// 
class Layout extends Component{
    render(){
        return(
            <Auxiliary>
                {/* <div>Toolbar,Sidebar,Backdrop</div> */}
                {/* <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closeback={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main> */}
                <SideDrawer />            
            </Auxiliary>
        );
    }
} 

export default Layout;