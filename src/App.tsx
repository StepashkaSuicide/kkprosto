import React, {useState} from 'react';
import UncontrolledAccordion from "./Accordion/UncontrolledAccordion";
import {RatingUncontroled, RatingValueType} from "./Accordion/RatingUncontroled";
import {RatingControlled} from "./Accordion/RatingControlled";
import {AccordionControlled} from "./Accordion/AccordionControled";
import {NotOnOff} from "./OnOff/NotOnOff";
import {ControlledOnOff} from "./OnOff/ControlledOnOff";



function App() {


    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false)

    return (
        <div>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            Article 2

            <RatingUncontroled />

            <RatingControlled value={ratingValue} onClick={setRatingValue}/>


            <AccordionControlled titleValue={'Menu'} collapsed={accordionCollapsed}
                                 accordionClick={ setAccordionCollapsed}/>

            <ControlledOnOff on={on} setOn={setOn}/>
            <NotOnOff   onChange={ setOn }/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
