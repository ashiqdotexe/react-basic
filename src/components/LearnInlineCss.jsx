import React from 'react'

const LearnInlineCss = () => {
    const style = {
        container: {
            background: "red",
            height: "100px",
            width: "100px"
        },
        h2text: {
            color: "green",
            fontSize: "20px",
            weight: "600"
        }
    }
    return (
        <>

            <div style={style.container}>
                <h2 style={style.h2text}>Hello</h2>
            </div>

        </>
    )
}

export default LearnInlineCss