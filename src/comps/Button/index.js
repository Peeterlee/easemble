import React from 'react';
import starIcon from '../../assets/Icons/star.svg';


function Button({buttonType, onClick, text, iconDisplay, padding, bgcolor, fontSize, fontColor, radius, icon}){
    var buttonId = null;

    if (buttonType === 'upgrade') {
        text = "Upgrade Now";
        buttonId= "upgrade"
        radius = '5px'
        iconDisplay="inline-flex";
    } else if (buttonType === 'later') {
        text = "Maybe Later";
        buttonId="later"
        radius = '5px'
        bgcolor = "#BDBDBD";
        fontColor = "white"
    } else if (buttonType === 'learn') {
        text = "Learn More";
        buttonId= "learn";
        radius = '5px'
        bgcolor = "rgba(30, 170, 189, 0)";
        fontColor="#939393"
    }

    return(
        <div id={buttonId} onClick={onClick} className='button_container'  style={{padding:padding,backgroundColor:bgcolor,fontSize:fontSize, color:fontColor, borderRadius:radius}} >
            {text}
            <img src={icon} style={{display:iconDisplay}}/>
        </div>
    )
}

Button.defaultProps = {
    text:'default',
    buttonType:"default",
    iconDisplay:'none',
    padding:'20px 50px 20px 50px',
    bgcolor:'white',
    fontSize:'30px',
    fontColor:'black',
    icon:starIcon,
    radius:0
}

export default Button;