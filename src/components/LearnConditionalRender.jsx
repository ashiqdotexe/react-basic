import React, { useState } from 'react'

const LearnConditionalRender = () => {
    const [isLoggedIn, setisLoggedIn] = useState(true)
    const [status, setStatus] = useState(false)
    return (
        <>
            {isLoggedIn ? (
                <h2>Welcome</h2>
            ) : (
                <h2>Not authorized</h2>
            )}
            {status && (
                <h2>Allowed</h2>
            )}
        </>
    )
}

export default LearnConditionalRender