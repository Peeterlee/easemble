import React, {useState} from 'react';

function SectionItem({tabTitle, type, }){

    const [active, setActive] = useState(false);

    var tabClass= "";

    var TextClass = "tab-title"; var TextClassActive = "tab-title tab-title-active"
    var HashtagClass = "tab-title-hashtag"; var HashtagClassActive = "tab-title-hashtag tab-title-hashtag-active";
    
    if (type === "text"){ tabClass= TextClass } else if (type === "btn"){ tabClass= HashtagClass };
    if(type === "text" && active){ tabClass= TextClassActive } else if (type === "btn" && active){ tabClass= HashtagClassActive };

    function clickTab(){
        setActive(!active);
    }


    return(
    <div onClick={clickTab}  className={tabClass}>{tabTitle}</div>
    )
}

SectionItem.defaultProps = {
    tabTitle:"Default Title",
    type:"text",
    active:false
};

export default SectionItem;