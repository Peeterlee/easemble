import React from 'react';

import accountIcon from '../../assets/Icons/account.svg';
import albumsIcon from '../../assets/Icons/album.svg';
import analyticsIcon from '../../assets/Icons/analytics.svg';
import calendarIcon from '../../assets/Icons/calendar.svg';
import homeIcon from '../../assets/Icons/home.svg';
import postIcon from '../../assets/Icons/post.svg';
import taggedIcon from '../../assets/Icons/tagged.svg';
import settingsIcon from '../../assets/Icons/settings.svg';

var menus=[
    {
        menu:"Home",
        menuId:"/",
        icon: <img src={homeIcon} alt="icon" className="menuIcon"/>,
        submenus:[]
    },
    {
        menu:"Account",
        icon: <img src={accountIcon} alt="icon" className="menuIcon"/>,
        submenus:["Profile", "Billing & Payments", "Notifications", "Security", "Logout"]
    },
    // {
    //     menu:"Collected Media",
    //     icon: <img src={postIcon} alt="icon" className="menuIcon"/>,
    //     submenus:["Hashtags", "Tagged In", "Mentioned In"]
    // },
    // {
    //     menu:"Media Library",
    //     icon: <img src={albumsIcon} alt="icon" className="menuIcon"/>,
    //     submenus:["Drafts", "Albums"]
    // },
    {
        menu:"Posts",
        icon: <img src={postIcon} alt="icon" className="menuIcon"/>,
        submenus:["Drafts", "Albums"]
    },
    {
        menu:"Hashtags",
        menuId:"/hashtags",
        icon: <img src={albumsIcon} alt="icon" className="menuIcon"/>,
        submenus:["Drafts", "Albums"]
    },
    {
        menu:"Tagged",
        menuId:"/tagged",
        icon: <img src={taggedIcon} alt="icon" className="menuIcon"/>,
        submenus:["Drafts", "Albums"]
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

export {menus};