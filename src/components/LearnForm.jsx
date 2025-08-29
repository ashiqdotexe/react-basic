import React, { useRef, useState } from 'react'

const LearnForm = () => {
    const [formData, setFormdata] = useState({
        firstName: "",
        lastName: ""
    })
    const handleFormdata = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submited Data", formData)
    }

    const refInput = useRef("")
    const handleClear = () => {
        refInput.current.focus()
        setFormdata({ firstName: "", lastName: "" })
    }
    return (
        <>

            <form action="" onSubmit={handleSubmit}>
                First Name: <input ref={refInput} type="text" name='firstName' value={formData.firstName} onChange={handleFormdata} />
                <br />
                Last Name: <input ref={refInput} type="text" name='lastName' value={formData.lastName} onChange={handleFormdata} />
                <br /><br />
                <button onClick={handleClear}>Clear</button>
                <br />
                <input type="submit" value="Submit" />
            </form>

        </>
    )
}

export default LearnForm