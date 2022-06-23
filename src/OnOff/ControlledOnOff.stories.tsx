import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ControlledOnOff} from './ControlledOnOff'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ControlledOnOff',
    component: ControlledOnOff,
}

export const onMode = ()=>   <ControlledOnOff    on={true} setOn={ x=> x}/>
export const offMode = ()=>   <ControlledOnOff    on={false} setOn={ x=> x}/>


export const ModeChanging = ()=> {
    const [value, setValue] = useState<boolean>(false)
    return <ControlledOnOff on={value} setOn={setValue} />
}
 