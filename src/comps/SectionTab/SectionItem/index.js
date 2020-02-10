import React, {useState} from 'react';

function SectionItem({tabTitle, onClick, active, type, hashtag}){

    
    var tabClass = "tab-title";
    
    if (type === "text"){
        tabClass="tab-title"
    } else if (type === "btn"){
        tabClass="tab-title-hashtag"
    }

    if(type === "text" && active){
        tabClass="tab-title tab-title-active"
    } else if (type === "btn" && active){
        tabClass="tab-title-hashtag tab-title-hashtag-active"
    }


    return(
    <div onClick={onClick} className={tabClass}>{tabTitle}</div>
    )
}

SectionItem.defaultProps = {
    tabTitle:"Default Title",
    onClick:()=>{},
    active:false,
    type:"text",
};

export default SectionItem;