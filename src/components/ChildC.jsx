import React, { useContext } from 'react'
import { StockContext, UserContext } from '../App'
const ChildC = () => {
    const stockData = useContext(StockContext)
    const userData = useContext(UserContext)
    return (
        <>
            <h2>User: {userData.user.name}</h2>
            <h2>Is Logged In?: {userData.user.isLoggedIn}</h2>
            <h2>Stock name: {stockData.stock}</h2>
            <h2>Price: {stockData.price}</h2>
        </>
    )
}

export default ChildC