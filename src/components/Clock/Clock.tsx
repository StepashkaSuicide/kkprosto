import React, {useEffect, useState} from 'react';

type PropsType = {}

export const Clock: React.FC<PropsType> = (props: PropsType) => {

    useEffect(() => {


       const clear =  setInterval(() => {
           console.log('Clock')
            setDate(new Date())
        }, 1000)

        return ()=> {
            clearInterval(clear)
        }
    }, [])


    const [date, setDate] = useState(new Date())

    const funcEliteNum = (num: number) => num < 10 ? '0' + num : num

    return <div>
        <span>{funcEliteNum(date.getHours())}</span>
        :
        <span>{funcEliteNum(date.getMinutes())}</span>
        :
        <span>{funcEliteNum(date.getSeconds()) }</span>
    </div>
}