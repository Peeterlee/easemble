import React from 'react';
import '../App.scss';
import LimitMessage from '../comps/LimitMessage';

export default {
    title: 'LimitMessage',
    component: LimitMessage
}

export const DefaultLimitMessage = () => {
    return <LimitMessage />
}
export const TaggedLimitMessageAtHome = () => {
    return <LimitMessage type="tagged" atHome={true}/>
}
