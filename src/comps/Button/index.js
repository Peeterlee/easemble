import React from 'react';

function Button({text, padding, bgcolor, fontSize, fontColor, radius}){
    return(
        <div className="button_container" style={{padding:padding,backgroundColor:bgcolor,fontSize:fontSize, color:fontColor, borderRadius:radius}}>
            {text}
        </div>
    )
}

Button.defaultProps = {
    text:'default',
    padding:'20px 50px 20px 50px',
    bgcolor:'white',
    fontSize:'30px',
    fontColor:'black',
    radius:0
}

export default Button;