import React from 'react';
import Menu from './Menu';
import UserAvatar from '../UserAvatar';
import Logo from '../Logo';

function Sidebar({menus}){

    var icon = "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-19/s320x320/44830262_283764312257453_2342436053266202624_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=w55K5CRe9JEAX_Ll8kM&oh=2509ee9ed425a025e9a644f25297cc46&oe=5F02941C";
    return(
        <div className="sidebar">
            <Logo color="#F9F9F9" justifycontent="center" />
            <div style={{ paddingTop:"25px", paddingLeft:'10px', paddingBottom:'15px'}}>
            <UserAvatar class_name="avatar_sidebar" user_icon={icon} />
            </div>
            {menus.map((o,i)=>{
                return <Menu key={i} {...o} />
            })}
        </div>
    )
} 

export default Sidebar;