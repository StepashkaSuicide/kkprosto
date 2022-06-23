import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {AccordionControlled} from './AccordionControlled'
import {action} from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'AccordionControled',
    component: AccordionControlled,
}


const callBack = ()=> action('accordion click click click')

export const collapsedMode = ()=>   <AccordionControlled  titleValue={'Menu'}  collapsed={true}   accordionClick={callBack}/>
export const uncollapsedMode = ()=>   <AccordionControlled   titleValue={'Users'}  collapsed={false}   accordionClick={callBack} />


export const ModeChanging = ()=> {
    const [value, setValue] = useState<boolean>(false)
    return <AccordionControlled titleValue={'Users'} collapsed={value}  accordionClick={()=>setValue(!value)}/>
}
