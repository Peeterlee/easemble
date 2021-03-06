import React from 'react';

function PageTitle({title, message, greetingDisplay, user}){

    var flexdir = null,
        home_user = null,
        welcome_user = null,
        line = null,
        msgSize = null;

    if(title === 'home'){
        flexdir='row';
        welcome_user=null;
        home_user = user + '!';
        line = <hr />
        msgSize = '30px';
    }else if (title === 'welcome'){
        flexdir='column'; 
        home_user=null;
        welcome_user=user;
        line = null;
        msgSize = '22px';
    }

    if(message === "Message" ) {
        greetingDisplay="none";
    }

    return(
        <div className='TitleContainer' style={{flexDirection:flexdir}}>
            <div className='PageTitle'>{title} <span className="title-msg-user" style={{fontSize:'45px'}}>{welcome_user}</span></div>

            <div className="greeting" style={{display:greetingDisplay}}>
            {line}
            <div className="title-msg" style={{fontSize:msgSize}}>{message} <span className="title-msg-user">{home_user}</span></div>
            </div>
        </div>
    )
}

PageTitle.defaultProps = {
  title:'Default',
  message: "Message",
  user: "Username",
  greetingDisplay:"flex"
};

export default PageTitle;