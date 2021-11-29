import React from 'react'
import ReactDOM from 'react-dom'



////////////// objetos literales

const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

/////////////////////////
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
      {object1.name}<br/>
      {object2.name} {object2.level} {object2.size}
    </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))