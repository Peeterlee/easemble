import React from 'react';

import SectionTab from './SectionTab';
import SectionTitle from './SectionTitle';

function Section(){

    var tabCalendar = [
        {
          tabTitle:"Today",
          type:"text",
          active:true
        },
        {
          tabTitle:"Week",
          type:"text",
          active:false
        },
        {
          tabTitle:"Month",
          type:"text",
          active:false
        },
      ]

    return (
    <div className="SectionContainer">
        <SectionTitle title="Scheduled Posts"/>
        <SectionTab tabs={tabCalendar}/>
    </div>

    )
}

export default Section;