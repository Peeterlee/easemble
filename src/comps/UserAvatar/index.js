import React from 'react';
import user from '../../assets/naomi.JPG';

function UserAvatar({comp}){

    var avaStyle = "avatar " + comp + "_avatar";
    var avaPhoto = "userphoto " + comp + "_userphoto";

    return(
        <div className={avaStyle}>
            <img alt="UserPhoto" src={user} className={avaPhoto} /> Love Note
        </div>
    )
}

UserAvatar.defaultProps={
    comp:"default"
}

export default UserAvatar;