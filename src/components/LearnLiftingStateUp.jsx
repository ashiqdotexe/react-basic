

const LearnLiftingStateUp = (props) => {
    const liftingUp = () => {
        let stock = "Lifting button Clicked"
        props.sampleClick(stock)
    }
    return (
        <button onClick={liftingUp}>Lifting up button</button>
    )
}

export default LearnLiftingStateUp