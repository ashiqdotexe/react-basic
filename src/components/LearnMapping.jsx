import React from 'react'

export const LearnMapping = () => {
    const names = ["Sohan", "Rohan", "Adnan"]
    return (
        <>
            <ul>
                {names.map((names, index) => (
                    <li key={index}>{names}</li>
                ))}
            </ul>

        </>
    )
}
