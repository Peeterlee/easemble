import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import SubMenu from './SubMenu';

//default icon
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Menu({menu, icon, submenus}){

    const [active, Setactive] = useState(false);

    var arrow = null;
    var submenu = null;
    if(menu === "Account" || menu === "Albums" || menu === "Collected Media"){
        if(active === false){
            arrow = <ArrowDropDownOutlinedIcon />
        }else{
            arrow = <ArrowDropUpOutlinedIcon />
            submenu = submenus.map((o,i)=>{
                return <SubMenu key={i} submenu={o} />
            });
        }
    }
    var linkToPage = "";
    if (menu === "Home"){
        linkToPage= "/"
    } else {
        linkToPage = "/plans";
    }

    function clickMenu(){
        Setactive(!active);
    }

    return(
        <div>
            
            <div className="menu" onClick={clickMenu}>
                <div>
                    {icon}
                    <NavLink activeClassName="menu-active" className="menuText" to={'/'}>
                    {menu}
                    </NavLink>
                </div>
                
                {arrow}
            </div>
            <div>
                {submenu}
            </div>
        </div>
    )
}

Menu.defaultProps = {
    menu:"Default Menu",
    icon:<HelpOutlineIcon />,
    submenus:["default sub menu", "default sub menu"]
}

export default Menu;