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

export const OnboardingGreeting = () => {
  return <PageTitle title="welcome"  message="Lets get started by choosing hashtags you'd like to track. Pick 3 Hashtags (You can edit this later)" user="@Love Note"/>
}
