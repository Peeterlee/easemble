import React, {useState} from 'react';
import Button from '../Button';
import Spacer from '../Spacer';

import TaggedArt from '../../assets/artwork/tagged.svg';
import PostsArt from '../../assets/artwork/scheduled.svg';

function LimitMessage({title, atHome, message, popup, inputValue, setInputValue, setLimitContDisp, limitContainerDisplay,type}){

    
    var buttonDirection = "row";
    var buttonAlign = "center";
    var spaceBetween = null;
    var span = null;
    var artwork = null;
    var limitContainerHeight = "215px";

    var messageId = "";
    var justifyContentCont = "center";
    var alignItemsCont = "center";
    var alignItemsButton = "center";
    var textAlignH1 = "center";

    function HideContainer(){
        setInputValue('');
        console.log('blah');
    }


    if (type === "hashtags") {
        title = "You've reached your Hashtag limit";
        message = "Upgrade your plan so you can track up to 50 hashtags!"
        spaceBetween = <Spacer height='15px'/>
        buttonDirection = "column"
    }

    if (type === "tagged") {
        title = "Upgrade Your Plan"
        message = "to view all the posts that you are tagged in this past month!"
        buttonDirection = "column"
        spaceBetween = <Spacer height='15px'/>
        span = <span>Upgrade </span>
    }

    if (type === "posts") {
        title = "Set Up Post Scheduling";
        message = "to organize and schedule your posts!";
        buttonDirection = "column";
        limitContainerHeight = "250px";
        spaceBetween = <Spacer height='15px'/>
        span = <span>Upgrade </span>
    }



    if (popup === true) {
        messageId="messagePopup";
    } 

    var msgButtons = (<div className="buttonsContainer" style={{alignItems:alignItemsCont}}><Button buttonType="later" onClick={()=>{HideContainer()}}/><Spacer height="0px" width="10px"/><Button buttonType="upgrade"/></div>);

    if (atHome === true) {
        justifyContentCont = "center";
        alignItemsCont = "center";
        alignItemsButton = "left";
        textAlignH1 = "left";
        buttonAlign="flex-start"

    var msgButtons = (
    <div className="buttonsContainer">
        <Button buttonType="learn" />
        <Spacer height="0px" width="10px"/>
        <Button buttonType="upgrade"/>
    </div>
    )
    };

    if (atHome === true && type === "tagged"){
        artwork = <img className="artwork" src={TaggedArt} alt="artwork"/>
    } else if (atHome === true && type === "posts") {
        artwork = <img className="artwork" src={PostsArt} alt="artwork"/>
    }

    

    return (
        <div id={messageId} className="limitContainer" style={{display:limitContainerDisplay, height:limitContainerHeight, alignItems:alignItemsCont, justifyContent:justifyContentCont}}>

            {artwork}

            <div className="messageContainer" style={{flexDirection:buttonDirection, alignItems:buttonAlign}}>
                <div className="textContainer">
                    <h1 style={{textAlign:textAlignH1}}>{title}</h1>
                    <div className="spacer"></div>
                    <p>{span}{message}</p>
                </div>
                {spaceBetween}
                {msgButtons}
            </div>
        </div>
    )


}
            LimitMessage.defaultProps = {
                type:'default',
                popup:false,
                title:'This is the default title',
                message:'This is the default message',
                atHome:false,
            }


export default LimitMessage;