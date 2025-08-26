import { useEffect } from "react"
import React, { useState } from 'react'

const LearnUseEffect = () => {
    const [count, setcount] = useState(0)
    const [randomNum, setrandomNum] = useState(0)
    const counterGen = () => {
        setcount(count + 1)
    }
    const randomGen = () => {
        const randNum = Math.floor(Math.random() * 100)
        setrandomNum(randNum)
    }

    useEffect(() => {
        //Logics->
        console.log("UseEffect mounted")
        //For disconnection-->
        return () => {
            console.log("Clean up done")
        }

    }, [count, randomNum])

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={counterGen}>Counter</button>
            <hr />
            <h1>Random Number: {randomNum}</h1>
            <button onClick={randomGen}>Generate random number</button>
        </>
    )
}

export default LearnUseEffect