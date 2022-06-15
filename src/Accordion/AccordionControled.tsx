import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    accordionClick: (collapsed: boolean)=> void
}

export function AccordionControlled(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            accordionClick={props.accordionClick}
                            collapsed={!props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    return <ul>
        <li>1 </li>
        <li>2</li>
        <li>3</li>
    </ul>
}
