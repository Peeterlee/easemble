import React from 'react';
import UserAvatar from '../UserAvatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function MentionPost(){
    return(
        <div className="mentionpost">
            <img alt="img1" src="https://junebugweddings.com/wedding-blog/wp-content/uploads/2019/08/mid-century-mercury-hall-wedding-with-southwestern-influence-and-austin-texas-vibes-gloria-goode-photography-41.jpg" /> 
            
            <div className="metion_content">
                <div style={{marginBottom:'10px'}}>
                <UserAvatar class_name="avatar_post" />
                </div>
                Look at these shoes Love Note Bride had on sale! Thank you <span>@lovenotebride</span>
                <div className="like_comment">
                    <FavoriteIcon color="secondary" />
                    <ChatBubbleOutlineIcon />
                </div>
            </div>   
        </div>
    )
}

export default MentionPost;