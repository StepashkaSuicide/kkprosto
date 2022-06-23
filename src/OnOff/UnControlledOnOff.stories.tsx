import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {NotOnOff} from './NotOnOff'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledOnOff',
    component: NotOnOff,
}

export const onMode = () => <NotOnOff onChange={x => x}/>
export const offMode = () => <NotOnOff onChange={x => x}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <NotOnOff onChange={() => !value}/>
}
