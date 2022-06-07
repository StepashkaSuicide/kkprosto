import React from 'react';
import OnOff from "./OnOff/OnOff";
import UncontrolledAccordion from "./Accordion/UncontrolledAccordion";
import {Rating} from "./Accordion/Rating";


function App() {
    return (
        <div>
            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'Users'}/>
            Article 2

            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <OnOff/>
            <Rating  />
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
