import React from 'react';
import '../App.scss';
import SectionTab from '../comps/Section/SectionTab'

export default {
    title: 'Section Tabs',
    component: SectionTab,
  };


  export const Period = () => {
    return <SectionTab />
}



var hashtagbuttons = [
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
    tabs={hashtagbuttons}
  />
}

var taggedpeoplebuttons = [
  {
    tabTitle:"@lovenote",
    type:"tagged",
    active:false
  },
  {
    tabTitle:"@lovenotedress",
    type:"tagged",
    active:false
  },
  {
    tabTitle:"@lovenotebabes",
    type:"tagged",
    active:false
  }
]

export const Tagged = () => {
  return <SectionTab
    tabs={taggedpeoplebuttons}
  />
}
