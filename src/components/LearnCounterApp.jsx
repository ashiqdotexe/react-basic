import React, { useState } from 'react'

const LearnCounterApp = () => {
    const [count, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(count + 1)
    }

    const dcreaseCounter = () => {
        setCounter(count - 1)
    }

    const resetCounter = () => {
        setCounter(0)
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={dcreaseCounter}>Decrease</button>
            <button onClick={resetCounter}>Reset</button>

        </>
    )
}

export default LearnCounterApp