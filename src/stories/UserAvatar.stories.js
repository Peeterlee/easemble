import React from 'react';
import UserAvatar from '../comps/UserAvatar';
import '../App.scss';

export default {
    title:"UserAvatar",
    component:UserAvatar
}

export const DefaultUserAvatar = () => {
    return <UserAvatar />
}