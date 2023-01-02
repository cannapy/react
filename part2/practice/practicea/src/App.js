import {useState} from 'react'
import Note from './components/Note'

const Header=({header})=><h1>{header.name} {header.word}</h1>

const Course=({course})=>{
  console.log(course)
  return(<div>
    <Header header={course}/>
  </div>)
}


const App = ({notes})=>{
  const course={name:'hello',word:'idk'}
  
  console.log('App works...', notes)

  return(
    <div>
      <h1>Notes</h1>
      <ul> 
        {notes.map((note)=>
          <Note note={note}/>)}
      </ul>
      <Course course={course}/>
    </div>
  )
}

export default App