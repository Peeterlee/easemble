import React from 'react';
import '../App.scss';

import Section from '../comps/Section/'

export default {
    title: 'Sections',
    component: Section,
  };

  export const Mentions = () => {
    return <Section sectionType="Mentions"/>
}

export const Hashtags = () => {
  return <Section  sectionType="Hashtags"/>
}

export const Posts = () => {
  return <Section  sectionType="Posts"/>
}

export const Tagged = () => {
  return <Section  sectionType="Tagged"/>
}
