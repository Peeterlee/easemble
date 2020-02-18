import React from 'react';
import user from '../../assets/naomi.JPG';

function UserAvatar({class_name}){
    return(
        <div className={class_name}>
            <img alt="UserPhoto" src={user} className="userphoto" /> Love Note
        </div>
    )
}

UserAvatar.defaultProps={
    class_name:"avatar_sidebar"
}

export default UserAvatar;