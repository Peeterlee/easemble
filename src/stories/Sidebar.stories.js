import React from 'react';
import Sidebar from '../comps/Sidebar';
import '../App.scss';

//icons

// ICON IMPORTS
import accountIcon from '../assets/Icons/account.svg';
import albumsIcon from '../assets/Icons/album.svg';
import analyticsIcon from '../assets/Icons/analytics.svg';
import calendarIcon from '../assets/Icons/calendar.svg';
import downloadIcon from '../assets/Icons/download.svg';
import homeIcon from '../assets/Icons/home.svg';
import postIcon from '../assets/Icons/post.svg';
import settingsIcon from '../assets/Icons/settings.svg';
///////////////


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
        icon: <img src={homeIcon} alt="icon" className="menuIcon"/>,
        submenus:[]
    },
    {
        menu:"Account",
        icon: <img src={accountIcon} alt="icon" className="menuIcon"/>,
        submenus:["Profile", "Billing & Payments", "Notifications", "Security", "Logout"]
    },
    {
        menu:"Collected Media",
        icon: <img src={postIcon} alt="icon" className="menuIcon"/>,
        submenus:[]
    },
    {
        menu:"Media Library",
        icon: <img src={albumsIcon} alt="icon" className="menuIcon"/>,
        submenus:[]
    },
    {
        menu:"Calendar",
        icon: <img src={calendarIcon} alt="icon" className="menuIcon"/>,
        submenus:[]
    },
    {
        menu:"Analytics",
        icon: <img src={analyticsIcon} alt="icon" className="menuIcon"/>,
        submenus:[]
    },
    {
        menu:"Settings",
        icon: <img src={settingsIcon} alt="icon" className="menuIcon"/>,
        submenus:[]
    }
];

