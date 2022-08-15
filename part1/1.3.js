import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) =>{
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part part ={props.part1} exercises={props.exercises1}/>
      <Part part ={props.part2} exercises={props.exercises2}/>
      <Part part ={props.part3} exercises={props.exercises3}/>
    </div>
  )
} 


const Total = (props) =>{
  return(
    <div>
     <p>Number of exercises {props.sum}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1 ={part1.name} exercises1={part1.exercises}
        part2 ={part2.name} exercises2={part2.exercises}
        part3 ={part3.name} exercises3={part3.exercises}
      />
      <Total sum={ part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

/*import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Bruno" age={10 + 9}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 
*/
