
const LearnEvent = () => {
    const handleButton = () => {
        console.log("Button clicked")
    }

    const clickAgain = (param) => {
        console.log(param)
    }
    return (
        <>
            <button onClick={handleButton}>Click button</button>
            <br />
            <button onClick={() => clickAgain("Clicked again")}>Click button again</button>
        </>
    )
}

export default LearnEvent