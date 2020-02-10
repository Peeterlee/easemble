import React from 'react';
import '../App.scss';
import PageTitle from '../comps/PageTitle';

export default {
    title: 'Page Title',
    component: PageTitle,
  };

  export const HomeWithGreeting1 = () => {
    return <PageTitle title="home" message="Good Morning" user="Love Note"/>
}
  export const HomeWithGreeting2 = () => {
    return <PageTitle title="home"  message="Good Afternoon" user="Love Note"/>
}

export const HomeWithGreeting3 = () => {
  return <PageTitle title="home"  message="Good Evening" user="Love Note"/>
}
