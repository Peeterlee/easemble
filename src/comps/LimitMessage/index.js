import React, {useState} from 'react';
import Button from '../Button';
import Spacer from '../Spacer';

function LimitMessage({title, message, popup, inputValue, setInputValue, setLimitContDisp, limitContainerDisplay,type}){

    
    var buttonDirection = "row";
    var spaceBetween = null;

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
        title = "You've discovered a premium feature!"
        message = "Upgrade your plan to view posts all the way from a month ago!"
        buttonDirection = "column"
        spaceBetween = <Spacer height='15px'/>
    }

    var messageId = "";

    if (popup === true) {
        messageId="messagePopup";
    } 

    return (
        <div id={messageId} className="limitContainer" style={{display:limitContainerDisplay, flexDirection:buttonDirection, height:'215px'}}>
            <div className="textContainer">
                <h1>{title}</h1>
                <div className="spacer"></div>
                <p>{message}</p>
            </div>
            
            {spaceBetween}

            <div className="buttonsContainer">
                <Button buttonType="later" onClick={()=>{HideContainer()}}/>
                <Spacer height="0px" width="10px"/>
                <Button buttonType="upgrade"/>
            </div>
        </div>
    )


}
            LimitMessage.defaultProps = {
                type:'default',
                popup:false,
                title:'This is the default title',
                message:'This is the default message'
            }


export default LimitMessage;