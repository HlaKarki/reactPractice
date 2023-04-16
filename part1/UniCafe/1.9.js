import { useState } from "react";

// a proper place to define a component
const Button = ( {setValue, value, text}) => <button onClick={() => handleClick(setValue, value)}>{text}</button>
const Stats = ( {text, value, percentage}) => <div>{text} {value} {percentage}</div>
const FeedInfo = ( {good, neutral, bad, all, average, positive}) => {
    if (all === 0) {
        return (
            <div>No feedback given</div>
        )
    }
    return (
        <div>
            <Stats text={"good"} value={good} />
            <Stats text={"neutral"} value={neutral} />
            <Stats text={"bad"} value={bad} />
            <Stats text={"all"} value={all} />
            <Stats text={"average"} value={average} />
            <Stats text={"positive"} value={positive} percentage={"%"}/>
        </div>
    )
}

// helper function
const handleClick = (setValue, value) => setValue(value+1)

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const all = good + neutral + bad
    const average = all > 0 ? (good - bad )/all : 0
    const positive = all > 0 ? good/all * 100 : 0

    return (
        <div>
            <h1>give feedback</h1>
            <Button setValue={setGood} value={good} text={"good"} />
            <Button setValue={setNeutral} value={neutral} text={"neutral"} />
            <Button setValue={setBad} value={bad} text={"bad"} />

            <h1>statistics</h1>
            <FeedInfo good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
        </div>
    )
}

export default App
