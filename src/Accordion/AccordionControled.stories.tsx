import React, {useState} from 'react';
import {AccordionControlled} from './AccordionControlled'
import {action} from '@storybook/addon-actions';

export default {
    title: 'AccordionControled',
    component: AccordionControlled,

}


const callBack =  action('accordion click click click')
const onClickCallBack =action('some item was clicked')

export const collapsedMode = () => <AccordionControlled
    onClick={onClickCallBack}
    titleValue={'Menu'}
    collapsed={true}
    accordionClick={callBack} items={[]}/>
export const uncollapsedMode = () => <AccordionControlled
    onClick={onClickCallBack}
    titleValue={'Users'}
    collapsed={false}
    accordionClick={callBack}
    items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {
        title: 'Artem',
        value: 3
    }, {title: 'Alex', value: 4}]}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return (
    <AccordionControlled
        onClick={onClickCallBack}
        titleValue={'Users'}
        collapsed={value}
        accordionClick={() => setValue(!value)}
        items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {
            title: 'Artem', value: 3}, {title: 'Alex', value: 4}]}
    />)
}
