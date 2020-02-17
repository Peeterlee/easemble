import React from 'react';

function Logo({color, justifycontent}){

    return(
        <div className="logo_container" style={{color:color, justifyContent:justifycontent}}>
            easemble
        </div>
    )
}

Logo.defaultProps = {
    color:'black',
    justifycontent:'left'
};

export default Logo;