import React from 'react';

function SectionTitle({title, buttonTitle}){

    return(
        <div className='SectionTitleContainer'>
            <p className="SectionTitle">{title}</p>
            <p className="SectionButton">{buttonTitle}</p>
        </div>
    )
}

SectionTitle.defaultProps = {
  title:'Default Section Title',
  buttonTitle:'View Calendar'
};

export default SectionTitle;