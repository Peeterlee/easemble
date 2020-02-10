import React from 'react';

function SubMenu({submenu}){
    return(
        <div className="submenu">
            {submenu}
        </div>
    )
}

SubMenu.defaultProps = {
    submenu:"Default Sub Menu"
}

export default SubMenu;