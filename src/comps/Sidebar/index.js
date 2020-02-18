import React from 'react';
import Menu from './Menu';
import UserAvatar from '../UserAvatar';
import Logo from '../Logo';

function Sidebar({menus}){
    return(
        <div className="sidebar">
            <div style={{paddingTop:'60px', paddingBottom:'60px'}}>
            <Logo color="#F9F9F9" justifycontent="center" />
            </div>
            <div style={{paddingBottom:'30px'}}>
            <UserAvatar class_name="avatar_sidebar" />
            </div>
            {menus.map((o,i)=>{
                return <Menu {...o} />
            })}
        </div>
    )
} 

export default Sidebar;