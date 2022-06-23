import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {RatingControlled, RatingValueType} from './RatingControlled'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating stories',
    component: RatingControlled,
}

export const EmptyStars = ()=>   <RatingControlled  value={0} onClick={()=> {}}/>
export const Rating1 = ()=>     <RatingControlled value={1} onClick={()=> {}}/>
export const Rating2 = ()=>     <RatingControlled value={2} onClick={()=> {}}/>
export const Rating3 = ()=>     <RatingControlled value={3} onClick={()=> {}}/>
export const Rating4 = ()=>     <RatingControlled value={4} onClick={()=> {}}/>
export const Rating5 = ()=>     <RatingControlled value={5} onClick={()=> {}}/>

export const RatingChanged = ()=> {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <RatingControlled value={rating} onClick={setRating}/>
}
