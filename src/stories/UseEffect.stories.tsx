import {useEffect, useState} from 'react';


export default {
    title: 'useEffect demo',
}

export const SimpleExample = ()=> {
    const [fake, setFake]=useState(1)
    const [counter, setCounter]=useState(1)

    console.log('SimpleExample')

}

export const SetTimeoutExample = ()=> {
    const [time, setTime]=useState(new Date().toLocaleString())
useEffect(()=> {
    setInterval(()=>{
        setTime(new Date().toLocaleString())

    },1000)
},)




return <>
    Hello, clock: {time}
    </>
}