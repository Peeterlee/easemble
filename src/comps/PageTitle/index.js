import React from 'react';

function PageTitle({title, message, user}){

    return(
        <div className='TitleContainer'>
            <p className='PageTitle'>{title}</p>

            <div className="greeting">
            <hr/>
            <p className="title-msg">{message} <span className="title-msg-user">{user}!</span></p>
            </div>
        </div>
    )
}

PageTitle.defaultProps = {
  title:'Default',
  message: "Message",
  user: "Username",
};

export default PageTitle;