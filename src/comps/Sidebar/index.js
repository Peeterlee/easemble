import React from 'react';
import Menu from './Menu';
import UserAvatar from '../UserAvatar';
import Logo from '../Logo';

function Sidebar({menus}){
    return(
        <div className="sidebar">
            <Logo color="#F9F9F9" justifycontent="center" margintop="60px" marginbottom="60px" />
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