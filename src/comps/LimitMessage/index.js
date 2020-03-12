import React, {useState} from 'react';
import Button from '../Button';
import Spacer from '../Spacer';

function LimitMessage({title, message, type}){

    const [limitContainerDisplay, setLimitContDisp] = useState("flex");

    function HideContainer(){
        setLimitContDisp("none");
    }


    if (type === "hashtags") {
        title = "You've reached your Hashtag limit";
        message = "Upgrade your plan so you can track up to 50 hashtags!"
    }

    return (
        <div className="limitContainer" style={{display:limitContainerDisplay}}>
            <div className="textContainer">
                <h1>{title}</h1>
                <div className="spacer"></div>
                <p>{message}</p>
            </div>
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
                title:'This is the default title',
                message:'This is the default message'
            }


export default LimitMessage;