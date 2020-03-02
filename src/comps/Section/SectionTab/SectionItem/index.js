import React, {useState} from 'react';

function SectionItem({tabTitle, active, type }){

    var tabClass= "";
    var TextClass = "tab-title"; var TextClassActive = "tab-title tab-title-active"
    var HashtagClass = "tab-title-hashtag"; var HashtagClassActive = "tab-title-hashtag tab-title-hashtag-active";
    var deleteTagButton = null;
    
    function setActive(){
        
            if (type === "text"){ tabClass= TextClass } else if (type === "btn"){ tabClass= HashtagClass };
            if(type === "text" && active){ tabClass= TextClassActive } else if (type === "btn" && active){ tabClass= HashtagClassActive };
    }
    

    setActive();

    function clickTab(){
        console.log(tabTitle);
        if (tabTitle === "Week"){
            active=true;
            tabClass="HashtagClassActive"
        } else {
            tabClass="HashtagClass"
        }
    }


    return(
    <div onClick={()=>{clickTab()}}  className={tabClass}>{tabTitle} {deleteTagButton}</div>
    )
}

SectionItem.defaultProps = {
    tabTitle:"Default Title",
    type:"text",
    active:false
};

export default SectionItem;