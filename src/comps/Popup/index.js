import React, {useState} from 'react';
import UserAvatar from '../UserAvatar';

function Popup({active, }){


    return(
        <div className="popup-container">
            <div className="top-cont"> 
                <UserAvatar class_name="avatar_popup" user_icon="https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/39938617_262278214396692_7641252861220749312_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_ohc=0sDll4xP3ecAX8Pflxz&oh=5301c9b3ffbccdd314d116420743c3db&oe=5E85C434" acc_name="irvinalcira"/>
                <p className="popupBut">Save</p>
            </div>
            <div className="mid-cont"> 
            <div className="img-cont">
            <img src="https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-15/e35/81996231_1060033377683448_5332126779453880759_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-xEHESiq3gwAX_Y70Dz&oh=b492cf097afd62ba0b5927b5bc2892b1&oe=5E888B96" alt="post image" />
            </div>

                <div className="caption-cont">
                <p className="popup-title">Post Caption</p>
                    <p className="popup-desc">Absolutely in love with my dress! Thank you @lovenotebride for making my dreams come true! I would like to thank my wonderful husband @deantaylor for giving me the wedding I’ve dreamed of ever since I was a little girl. You’re my best friend, my partner in crime, and my lover. Till death do us apart...</p>
                </div>
                <div className="tagged-cont">
                    <p className="popup-title">Tagged People</p>
                </div>
            </div>
            <div className="bottom-cont"> 

            <p className="popupBut exit">Exit</p>
            <p className="popupBut edit">Edit Post</p>

            </div>

        </div>
    )
}

Popup.defaultProps = {
    active:false,

};

export default Popup;