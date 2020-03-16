import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Sidebar from '../../comps/Sidebar';
import {menus} from '../../comps/Sidebar/menuItems';
import Home from '../Home';
import Hashtags from '../Hashtags';
import Tagged from '../Tagged';

import Popup from '../../comps/Popup';

///////////////


function Dashboard({postPopupDisplay, setPostPopupDisplay}){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return(
        <div className="dash-container">
            <Popup postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay}/>

            <div className="sidebar-cont">
            <Sidebar menus={menus}/>
            </div>
                <Home postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay}/>
        </div>
    )
}

export default Dashboard;