import React, {useState} from 'react';
import UserAvatar from '../UserAvatar';
import SectionTab from '../Section/SectionTab';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../Button';
import calendarIcon from '../../assets/Icons/calendar_gray.svg';

function Popup({active, }){

    const [savePopup, SetsavePopup] = useState(false);
    const [selectedTo, SetselectedTo] = useState("general");
    const [popupViewMode, SetpoopupViewMode] = useState("read");

    var taggedpeoplebuttons = [
        {
          tabTitle:"@lovenote",
          type:"popup",
          active:false
        },
        {
          tabTitle:"@lovenotedress",
          type:"popup",
          active:false
        },
        {
          tabTitle:"@lovenotebabes",
          type:"popup",
          active:false
        }
      ]

      const selectTo = event => {
          SetselectedTo(event.target.value);
      }

      var layout, popup_container_flex, popup_container_width, leftButTxt, rightButTxt, leftButClass, rightButClass, imgWidth, imgHeight;
      
      if(popupViewMode === 'read'){
        layout = null;
        popup_container_flex = 'column';
        popup_container_width = '500px';
        leftButTxt = 'Exit';
        rightButTxt = 'Edit Post';
        leftButClass = "popupBut exit";
        rightButClass = "popupBut edit";
        imgWidth = '100%';
        imgHeight = '500px';
      }else {
          layout = (
            <div className="right-column">
                <div className="caption-cont">
                    <p className="popup-title">Post Caption</p>
                    <textarea className="popup-desc">Absolutely in love with my dress! Thank you @lovenotebride for making my dreams come true! I would like to thank my wonderful husband @deantaylor for giving me the wedding I’ve dreamed of ever since I was a little girl. You’re my best friend, my partner in crime, and my lover. Till death do us apart...</textarea>
                </div>
                <div className="tagged-cont">
                    <p className="popup-title">Tagged People</p>
                    <div style={{position:'relative'}}>
                        <input type="text" placeholder="Add @username seperated by a space" className="tagged-people-input" />
                        <div className="add-tagged-people">+</div>
                    </div>
                    <SectionTab tabs={taggedpeoplebuttons} canDeleteTag="true" />
                </div>
                <div className="schedule-cont">
                    <p className="popup-title">Schedule Post</p> 
                        <div className="schedule-calendar">Now <img src={calendarIcon} alt="calendarIcon" className="calendarIcon" /> </div>
                </div>
            </div>
          )
          popup_container_flex = 'row';
          popup_container_width = '700px';
          leftButTxt = 'Discard';
          rightButTxt = 'Post Now';
          leftButClass = "popupBut discard";
          rightButClass = "popupBut postnow";
          imgWidth = "300px";
          imgHeight = "100%";
      }

      

      var saveToPopup = (savePopup === true) ? (
        <div className="save-popup">
            <div className="save-popup-title">Save to</div>
            <Select 
                displayEmpty
                value={selectedTo}
                className="save-option"
            >
                <MenuItem value="general">General</MenuItem>
            </Select>
            <Button text="Save" bgcolor="#EBA2A1" fontColor="white" padding="5px 0px 3px 0px" fontSize="20px" />
            <div className="save-popup-text">saved to General!</div>
        </div>
      ) : null;

    return(
        <div className="popup-container" style={{width:popup_container_width}}>
            <div className="top-cont"> 
                <UserAvatar class_name="avatar_popup" user_icon="https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/39938617_262278214396692_7641252861220749312_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_ohc=0sDll4xP3ecAX8Pflxz&oh=5301c9b3ffbccdd314d116420743c3db&oe=5E85C434" acc_name="irvinalcira"/>
            <p className="popupBut" onClick={()=>{SetsavePopup(!savePopup)}}>Save</p>
            </div>
            <div className="mid-cont" style={{flexDirection:popup_container_flex}}> 
                <div className="img-cont">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-3462-1-1576693070.jpg?crop=1.00xw:0.803xh;0,0.181xh&resize=640:*" alt="post image" style={{width:imgWidth, height:imgHeight}} />
                </div>
                {layout}
            </div>

            <div className="bottom-cont"> 

            <p 
                className={leftButClass} 
                onClick={()=>(popupViewMode==="read") ? null : SetpoopupViewMode("read")}>
                {leftButTxt}
            </p>
            <p
                className={rightButClass} 
                onClick={()=>(popupViewMode === 'read') ? SetpoopupViewMode('edit') : null} >
                {rightButTxt}
               
            </p>

            </div>

            {saveToPopup}
        </div>
    )
}

Popup.defaultProps = {
    active:false,

};

export default Popup;