import React from 'react';
import Sidebar from '../comps/Sidebar';
import '../App.scss';

//icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PhotoAlbumOutlinedIcon from '@material-ui/icons/PhotoAlbumOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

export default {
    title:"Sidebar",
    component:Sidebar
}

export const DefaultSidebar = () => {
    return <Sidebar menus={menus}/>
}

var menus=[
    {
        menu:"Home",
        icon: <HomeOutlinedIcon style={{fontSize:"16pt", marginRight:"6pt", marginTop:'4px'}} />,
        submenus:[]
    },
    {
        menu:"Account",
        icon: <AccountCircleOutlinedIcon style={{fontSize:"16pt", marginRight:"6pt", marginTop:'4px'}} />,
        submenus:["Profile", "Billing&Payments", "Notifications", "Security", "Logout"]
    },
    {
        menu:"Albums",
        icon: <PhotoAlbumOutlinedIcon style={{fontSize:"16pt", marginRight:"6pt", marginTop:'4px'}} />,
        submenus:[]
    },
    {
        menu:"Calender",
        icon: <DateRangeOutlinedIcon style={{fontSize:"16pt", marginRight:"6pt", marginTop:'4px'}} />,
        submenus:[]
    },
    {
        menu:"Analytics",
        icon: <AssessmentOutlinedIcon style={{fontSize:"16pt", marginRight:"6pt", marginTop:'4px'}} />,
        submenus:[]
    },
    {
        menu:"Settings",
        icon: <SettingsOutlinedIcon style={{fontSize:"16pt", marginRight:"6pt", marginTop:'4px'}} />,
        submenus:[]
    }
];

