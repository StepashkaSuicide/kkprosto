import React from 'react';

type PropsType = {
    on: boolean
    setOn: (on: boolean) => void
}


export const ControlledOnOff = (props: PropsType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red',
    }

    const onClicked = () => {
        props.setOn(true)
    }
    const offClicked = () => {
        props.setOn(false)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>


            {/*<div style={onStyle} onClick={()=> (setOn(true))}>On</div>*/}
            {/*<div style={offStyle} onClick={()=> (setOn(false))}>Off</div>*/}

            <div style={indicatorStyle}> </div>
        </div>
    );
}

