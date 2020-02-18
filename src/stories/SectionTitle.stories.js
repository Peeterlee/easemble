import React from 'react';
import '../App.scss';
import SectionTitle from '../comps/Section/SectionTitle';

export default {
    title: 'Section Title',
    component: SectionTitle,
  };

export const ScheduledPosts = () => {
  return <SectionTitle  title="Scheduled Posts"/>
}

export const Hashtags = () => {
  return <SectionTitle  title="Hashtags"/>
}

export const Tagged = () => {
  return <SectionTitle  title="Tagged"/>
}

export const Mentions = () => {
  return <SectionTitle  title="Mentions"/>
}