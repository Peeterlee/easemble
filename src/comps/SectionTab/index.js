import React from 'react';
import SectionItem from './SectionItem'

function SectionTab({tabs}){
    
    return(
        <div id="tab-container">
            {tabs.map((o,i)=>{
                return <SectionItem {...o} />
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

};

export default SectionTab;