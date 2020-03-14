import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Sidebar from '../../comps/Sidebar';
import {menus} from '../../comps/Sidebar/menuItems';
import Home from '../Home';
import Hashtags from '../Hashtags';
import Tagged from '../Tagged';


///////////////


function Dashboard(){

    return(
        <div className="dash-container">

            <div className="sidebar-cont">
            <Sidebar menus={menus}/>
            </div>
                <Home/>
        </div>
    )
}

export default Dashboard;