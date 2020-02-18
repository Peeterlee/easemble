import React from 'react';
import UserAvatar from '../UserAvatar';
import SaveAltIcon from '@material-ui/icons/SaveAlt';


function HashtagPost({className, hashtag_img, tagTitle, user_icon, acc_name, }){
    return(
        <div className="HashtagPostCont">

            <img alt="img1" src={hashtag_img} /> 

            <div className="overlay">
                <div className="user_cont">
                    <UserAvatar class_name="hashtag_post" acc_name={acc_name} user_icon={user_icon} />
                </div>
                <div className="button_cont">
                    <div className="post_button">View Post</div>
                </div>
                <div className={className}>
                    <p>{tagTitle}</p>
                    <div className="save_icon"><SaveAltIcon /></div>
                </div>
            </div>

        </div>
    )
}

HashtagPost.defaultProps = {
    acc_name:"username",
    user_icon:"https://iubmb.org/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
    hashtag_img:"https://www.okea.org/wp-content/uploads/2019/10/placeholder.png",
    tagTitle:'#defaultTag',
    className: 'bottom_cont'
};

export default HashtagPost;
