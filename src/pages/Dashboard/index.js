import React from 'react';
import Sidebar from '../../comps/Sidebar';

import {menus} from '../../comps/Sidebar/menuItems';
import Home from '../Home';
import Hashtags from '../Hashtags';

///////////////


function Dashboard(){

    return(
        <div className="dash-container">

            <div className="sidebar-cont">
            <Sidebar menus={menus}/>
            </div>
        
            <Home />
            {/* <Hashtags /> */}

        </div>
    )
}

export default Dashboard;