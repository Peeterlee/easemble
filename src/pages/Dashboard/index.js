import React from 'react';
import Sidebar from '../../comps/Sidebar';
// import '../../App.scss';


import PageTitle from '../../comps/PageTitle';
import Section from '../../comps/Section';


// ICON IMPORTS
import accountIcon from '../../assets/Icons/account.svg';
import albumsIcon from '../../assets/Icons/album.svg';
import analyticsIcon from '../../assets/Icons/analytics.svg';
import calendarIcon from '../../assets/Icons/calendar.svg';
import downloadIcon from '../../assets/Icons/download.svg';
import homeIcon from '../../assets/Icons/home.svg';
import postIcon from '../../assets/Icons/post.svg';
import settingsIcon from '../../assets/Icons/settings.svg';
///////////////


function Dashboard(){

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
            submenus:["Hashtags", "Tagged In", "Mentioned In"]
        },
        {
            menu:"Media Library",
            icon: <img src={albumsIcon} alt="icon" className="menuIcon"/>,
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

    return(
        <div className="dash_container">

            <div className="sidebar-cont">
            <Sidebar menus={menus}/>
            </div>
            
            <div className="main_cont">
                    <PageTitle title="home" message="Good Afternoon" user="Love Note" />
                    <Section sectionType="Posts"/>
                    <Section sectionType="Hashtags" isSectionExpanded={true}/>
                    <Section sectionType="Tagged"/>
            </div>

        </div>
    )
}

export default Dashboard;