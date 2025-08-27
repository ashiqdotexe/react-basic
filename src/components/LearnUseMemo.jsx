import { useState, useMemo } from 'react'

const LearnUseMemo = () => {
    const [number, setNumber] = useState(1000000000)
    const [count, setCount] = useState(0)

    const checkCount = () => {
        setCount(count + 1)
        if (count === 10) {
            setNumber(2)
        }
    }
    const sumOfNumber = useMemo(() => {
        let sum = 0
        for (let i = 0; i < number; i++) {
            sum += i
        }
        return sum;
    }, [number])
    console.log(sumOfNumber)

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={checkCount}>Click here</button>
        </>
    )
}

export default LearnUseMemo