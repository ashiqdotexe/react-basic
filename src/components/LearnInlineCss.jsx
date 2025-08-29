import React from 'react'
import "../assets/css/style.css"
import coveImage from "../assets/images/hello.jpg"
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

            <style>
                {`
                .container{
                    background-color:green;
                    height:100px;
                    width:100px;

                }
                
                `}
            </style>

            <div style={style.container}>
                <h2 style={style.h2text}>Hello</h2>
            </div>
            <hr />
            <h1>Internal CSS</h1>

            <div className='container'></div>
            <hr />
            <h1>External CSS</h1>
            <div className='imagebox'>
                <img src={coveImage} alt="" />
            </div>

        </>
    )
}

export default LearnInlineCss