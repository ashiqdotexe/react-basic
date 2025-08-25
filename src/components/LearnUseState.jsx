import { useState } from 'react'

const LearnUseState = () => {
    const [num, setnum] = useState(5)

    const handleClick = () => {
        setnum(10)
    }


    const [stockPrice, setStockPrice] = useState({ stock: "Apple", price: 100 })

    const updateNum = () => {
        setStockPrice({ ...stockPrice, price: 200 })
    }
    return (
        <>
            <h1>Number: {num}</h1>
            <button onClick={handleClick}>Click here</button>
            <hr />
            <h1>{stockPrice.stock}:{stockPrice.price}</h1>
            <button onClick={updateNum}>Click here</button>
        </>
    )
}

export default LearnUseState