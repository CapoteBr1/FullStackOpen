import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.Click}>
    {props.text}
  </button>
)

const Statistic = ({ text, value }) => (
  
  <div>{text + " :"} {value}</div>
    
);

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  return (
    <div>
      <h2>Statistics</h2>

      {!total ? (
        <div>No feedback given</div>
      ) : (
        <div>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={total} />
          <Statistic text="Average" value={average} />
          <Statistic text="Positive" value={positive} />
        </div>
      )}
    </div>
  );
};


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total * 100) + "%";

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button Click = {() => setGood(good + 1)} text = {"good"}/>
      <Button Click = {() => setNeutral(neutral + 1)} text = {"neutral"}/>
      <Button Click = {() => setBad(bad + 1)} text = {"bad"}/>
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

