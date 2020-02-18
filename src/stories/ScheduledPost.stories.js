import React from 'react';
import '../App.scss';
import ScheduledPost from '../comps/ScheduledPost';


export default {
    title:"ScheduledPost",
    component:ScheduledPost
}

export const DefaultScheduledPost = () => {
    return <ScheduledPost />
}