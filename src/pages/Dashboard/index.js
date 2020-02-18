import React from 'react';
import Sidebar from '../../comps/Sidebar';
import '../../App.scss';

//icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PhotoAlbumOutlinedIcon from '@material-ui/icons/PhotoAlbumOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PageTitle from '../../comps/PageTitle';


function Dashboard(){

    var menus=[
        {
            menu:"Home",
            icon: <HomeOutlinedIcon  />,
            submenus:[]
        },
        {
            menu:"Account",
            icon: <AccountCircleOutlinedIcon />,
            submenus:["Profile", "Billing&Payments", "Notifications", "Security", "Logout"]
        },
        {
            menu:"Albums",
            icon: <PhotoAlbumOutlinedIcon />,
            submenus:[]
        },
        {
            menu:"Calender",
            icon: <DateRangeOutlinedIcon  />,
            submenus:[]
        },
        {
            menu:"Analytics",
            icon: <AssessmentOutlinedIcon />,
            submenus:[]
        },
        {
            menu:"Settings",
            icon: <SettingsOutlinedIcon style={{fontSize:"16pt", marginRight:"6pt", marginTop:'4px'}} />,
            submenus:[]
        }
    ];

    return(
        <div className="dash_container">
            <Sidebar menus={menus}/>
            <div classname="dash_main_sect">
                <PageTitle />
            </div>

        </div>
    )
}

export default Dashboard;