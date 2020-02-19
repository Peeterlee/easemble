import React from 'react';
import '../App.scss';
import Button from '../comps/Button';

export default {
    title: 'Button',
    component: Button
}

export const DefaultButton = () => {
    return <Button />
}

export const DoneactiveButton = () => {
    return <Button bgcolor="#D78B8C" fontColor="white" />
}

export const DoneDeactiveButton = () => {
    return <Button bgcolor="lightgray" fontColor="#939393" />
}