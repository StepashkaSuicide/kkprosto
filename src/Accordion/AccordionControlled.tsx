import React from "react";


type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    accordionClick: ()=> void
    items: ItemType[]
    onClick: (value: any)=> void
}

export function AccordionControlled(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            accordionClick={props.accordionClick}
                            collapsed={!props.collapsed}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    accordionClick: (collapsed: boolean)=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={()=> {props.accordionClick(props.collapsed)}}>--{props.title}--</h3>

}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any)=> void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index)=> <li onClick={()=> {props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}
