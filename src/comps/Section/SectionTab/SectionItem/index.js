import React, {useState} from 'react';

import {ReactComponent as DeleteIcon }from '../../../../assets/Icons/delete.svg';


function SectionItem({tabTitle, canDelete, active, type }){

    var tabClass= "";
    var TextClass = "tab-title"; 
    var TextClassActive = "tab-title tab-title-active"
    var HashtagClass = "tab-title-hashtag dashboard"; 
    var HashtagClassActive = "tab-title-hashtag tab-title-hashtag-dashboard-active";
    var taggedClass = 'tab-title-hashtag tagged';
    var taggedClassActive = "tab-title-hashtag tab-title-hashtag-tagged-active"
    var deleteTagButton = "none";
            
    if (type === "text"){ tabClass= TextClass } 
    else if (type === "btn"){ tabClass= HashtagClass }
    else if (type === "tagged"){ tabClass= taggedClass };

    if(type === "text" && active){ tabClass= TextClassActive } 
    else if (type === "btn" && active){ tabClass= HashtagClassActive }
    else if (type === "tagged" && active){ tabClass= taggedClassActive};

    if (canDelete === "true" ){
        deleteTagButton = ""
    } else {
        deleteTagButton = "none"
    }

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
    <div onClick={()=>{clickTab()}}  className={tabClass}>
        {tabTitle} 
        <DeleteIcon style={{display:deleteTagButton}} className="deleteIcon"/>
    </div>

    )
}

SectionItem.defaultProps = {
    tabTitle:"Default Title",
    type:"text",
    active:false,
    canDelete:"false"
};

export default SectionItem;