import { useState, useRef } from 'react'

const LearnUseRef = () => {
    const [name, setName] = useState(" ")
    const refCall = useRef("")
    const previousNameRef = useRef("")
    const nameHandler = (e) => {
        previousNameRef.current = name
        setName(e.target.value)
    }
    const handleClear = () => {
        setName("")
        refCall.current.focus()
    }
    return (
        <>
            <input ref={refCall} type="text" value={name} onChange={nameHandler} placeholder='Enter your name' />
            <button onClick={handleClear}>Clear</button>
            <br />
            <p>Previous name: {previousNameRef.current}</p>
        </>
    )
}

export default LearnUseRef