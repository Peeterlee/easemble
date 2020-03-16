import React, {useState} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import SubMenu from './SubMenu';

//default icon
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Menu({menu, icon, submenus, menuId}){

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

    var menuActiveClass = "menu-active";

    if (menu === "Home" || menu === "Hashtags" || menu === "Tagged") {
        menuActiveClass = "menu-active";
    } else {
        var menuActiveClass = "menu";
    }

    return(
        <div>
            
            <NavLink exact to={menuId} className="menu" activeClassName={menuActiveClass} onClick={clickMenu} >
                <div className="menuLink">
                    {icon}
                    <p>{menu}</p>
                </div>
                
                {arrow}
            </NavLink>
            <div>
                {submenu}
            </div>
        </div>
    )
}

Menu.defaultProps = {
    menu:"Default Menu",
    menuId:"/",
    icon:<HelpOutlineIcon />,
    submenus:["default sub menu", "default sub menu"]
}

export default withRouter(Menu);