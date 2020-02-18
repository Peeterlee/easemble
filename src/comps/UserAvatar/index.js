import React from 'react';

function UserAvatar({class_name, user_icon, acc_name}){
    return(
        <div className={class_name}>
            <img alt="UserPhoto" src={user_icon} className="userphoto" /> {acc_name}
        </div>
    )
}

UserAvatar.defaultProps={
    user_icon: "https://iubmb.org/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
    class_name:"avatar_sidebar",
    acc_name:"Love Note"
}

export default UserAvatar;