import React from 'react';
import Menu from './Menu';
import UserAvatar from '../UserAvatar';

function Sidebar({menus}){
    return(
        <div className="sidebar">
            <UserAvatar comp={"sidebar"} />
            {menus.map((o,i)=>{
                return <Menu {...o} />
            })}
        </div>
    )
} 

export default Sidebar;