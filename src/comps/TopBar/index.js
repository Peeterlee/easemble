import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as StarIcon } from '../../assets/Icons/star.svg';

function TopBar({message, link, message2}){
    return (
    <div className="TopBarCont">
        <StarIcon />
        <p>
        {message}
        <Link style={{color:'white'}} to={'/plans'}>
        <span>{link}</span>
        </Link>
        {message2}
        </p>
    </div>
    )


}

TopBar.defaultProps = {
    message:"You've reached your hashtag limit! ",
    link:"Upgrade your plan",
    message2:" so you can track up to 50 hashtags!"
}

export default TopBar;