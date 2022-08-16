import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.Click}>
    {props.text}
  </button>
)

const Display = (props) => <div>{props.text}{props.value}{props.percentage}</div>

const Statistics = (props) => {
  if(props.goodValue + props.neutralValue + props.badValue === 0){
    return(
      <div>No Feedback</div>
    )
  }
  else{
    return(
      <div>
        <Display text = {"good: "} value = {props.goodValue}/>
        <Display text = {"neutral: "} value = {props.neutralValue}/>
        <Display text = {"bad: "} value = {props.badValue}/>
        <Display text = {"Average: "} value = {(props.goodValue - props.badValue)/(props.badValue + props.neutralValue + props.goodValue)}/>
        <Display text = {"Positive: "} value = {(props.goodValue/(props.badValue + props.neutralValue + props.goodValue)) * 100} percentage = {"%"}/>
      </div>
    )
  }
}

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
      <Statistics goodValue = {good} neutralValue = {neutral} badValue = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
