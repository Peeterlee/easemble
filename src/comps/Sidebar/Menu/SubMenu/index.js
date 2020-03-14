import React from 'react';
import {NavLink} from 'react-router-dom';

function SubMenu({submenu}){
    var subMenuLink= "";
    var subMenuActiveColor = "";

    if (submenu === "Tagged In"){
        subMenuLink = "/tagged";
    } else if (submenu === "Hashtags"){
        subMenuLink = "/hashtags";
    } else {
        subMenuLink="/";
        subMenuActiveColor = "#BDBDBD";
    }

    return(
        <NavLink to={subMenuLink} className="submenu" activeClassName="submenu-active" style={{color:subMenuActiveColor}}>
            {submenu}
        </NavLink>
    )
}

SubMenu.defaultProps = {
    submenu:"Default Sub Menu"
}

export default SubMenu;