import React from 'react';
import {UncontrolledAccordion} from './UncontrolledAccordion'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}







export const ModeChanging = ()=> {

    return <UncontrolledAccordion titleValue={'Users'} />
}
