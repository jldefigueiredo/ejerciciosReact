import React from 'react'
import ReactDOM from 'react-dom'
const Header = (course) => {
  return (
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}
const Content =(contentprops) => {
  return (
    <p>
        {contentprops.part} {contentprops.exercise}
    </p>
  )
}
const Total = (totalprops) => {
  return (
    <>
      Number of exercises {totalprops.exercises1 + totalprops.exercises2 + totalprops.exercises3}
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
    <Header course={course} />
    
    <div>
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total   exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))