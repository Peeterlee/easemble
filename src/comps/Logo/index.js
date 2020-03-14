import React from 'react';
import {Link} from 'react-router-dom';

function Logo({color, justifycontent, marginbottom, margintop}){

    return(
        <div className="logo_container" style={{color:color, justifyContent:justifycontent, marginBottom:marginbottom, marginTop:margintop}}>
        <Link className="linkStyle" style={{color:color,}} to={'/'}>
            easemble
        </Link>
        </div>
    )
}

Logo.defaultProps = {
    color:'black',
    justifycontent:'left',
    marginbottom:0,
    marginTop:0
};

export default Logo;