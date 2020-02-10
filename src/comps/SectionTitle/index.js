import React from 'react';

function SectionTitle({title,}){

    return(
        <div className='TitleContainer'>
            <p className="SectionTitle">{title}</p>
        </div>
    )
}

SectionTitle.defaultProps = {
  title:'Default Section Title',
};

export default SectionTitle;