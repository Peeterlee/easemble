import React from 'react';
import '../App.scss';
import SectionTab from '../comps/SectionTab/'

export default {
    title: 'Section Tabs',
    component: SectionTab,
  };

  export const Tagged = () => {
    return <SectionTab />
}



var tagbuttons = [
  {
    tabTitle:"#lovenote",
    type:"btn",
    active:true
  },
  {
    tabTitle:"#lovenotedress",
    type:"btn",
    active:false
  },
  {
    tabTitle:"#lovenotebabes",
    type:"btn",
    active:false
  },

]

export const Hashtags = () => {
  return <SectionTab
    tabs={tagbuttons}
  />
}