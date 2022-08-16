import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.Click}>
    {props.text}
  </button>
)

const Statistics = (props) => <div>{props.text} {props.value} {props.percentage}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button Click = {() => setGood(good + 1)} text = {"good"}/>
      <Button Click = {() => setNeutral(neutral + 1)} text = {"neutral"}/>
      <Button Click = {() => setBad(bad + 1)} text = {"bad"}/>
      <h1>Statistics</h1>
      <Statistics text = {"Good:"} value = {good}/>
      <Statistics value = {neutral} text = {"Neutral:"}/>
      <Statistics value = {bad} text = {"Bad:"}/>
      <Statistics value = {bad + neutral + good} text = {"All:"}/>
      <Statistics value = {(good - bad)/(bad + neutral + good)} text = {"Average:"}/>
      <Statistics value = { (good/(bad + neutral + good)) * 100 } text = {"Positive:"} percentage = {"%"}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
