import React from 'react';
import SectionItem from './SectionItem'

function SectionTab({tabs, canDeleteTag}){

    var addDelete = "false";

    if (canDeleteTag === "true") {
        addDelete="true"
    }
    
    return(
        <div id="tab-container">
            {tabs.map((o,i)=>{
                return <SectionItem key={i} {...o} canDelete={addDelete} />
            })}            
        </div>
    )
}

SectionTab.defaultProps = {
    tabs:[{
        tabTitle:"Today",
        type:"text",
        active:true,
        hashtag:false,
    },{
        tabTitle:"Week",
        type:"text",
        hashtag:false,
    },
    {
        tabTitle:"Month",
        type:"text",
        hashtag:false,
    }],

    canDeleteTag: false

};

export default SectionTab;