import React, {useState} from 'react';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import SubMenu from './SubMenu';

//default icon
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Menu({menu, icon, submenus}){

    const [active, Setactive] = useState(false);

    var arrow = null;
    var submenu = null;
    if(menu === "Account" || menu === "Albums" || menu === "Settings"){
        if(active === false){
            arrow = <ArrowDropDownOutlinedIcon style={{position:"absolute", right:"20pt"}} />
        }else{
            arrow = <ArrowDropUpOutlinedIcon style={{position:"absolute", right:"20pt"}} />
            submenu = submenus.map((o,i)=>{
                return <SubMenu submenu={o} />
            });
        }
       
    }

    function clickMenu(){
        Setactive(!active);
    }

    return(
        <div>
            <div className="menu" onClick={clickMenu}>
                {icon}
                {menu}
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
    icon:<HelpOutlineIcon style={{fontSize:"16pt", marginRight:"6pt"}} />,
    submenus:["default sub menu", "default sub menu"]
}

export default Menu;