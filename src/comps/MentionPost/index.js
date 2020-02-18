import React from 'react';
import UserAvatar from '../UserAvatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


function MentionPost({post_img, tagged_user, user_icon, acc_name, post_desc}){
    return(
        <div className="mentionpost">
            <img alt="img1" src={post_img} /> 
            
            <div className="mention_content">
                <div style={{marginBottom:'10px'}}>
                <UserAvatar class_name="avatar_post" acc_name={acc_name} user_icon={user_icon} />
                </div>
                {post_desc} <span>{tagged_user}</span>
                <div className="like_comment">
                    <FavoriteIcon color="secondary" />
                    <ChatBubbleOutlineIcon />
                </div>
            </div>   
        </div>
    )
}

MentionPost.defaultProps = {
    acc_name:"username",
    tagged_user:"@lovenotebride",
    user_icon:"https://iubmb.org/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
    post_img:"https://www.okea.org/wp-content/uploads/2019/10/placeholder.png",
    post_desc:'default message here',
};

export default MentionPost;
