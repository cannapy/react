import {useState, useEffect} from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = ()=>{
  const [notes, setNotes]=useState([])
  const [newNote, setNewNotes]=useState('Set a new note...')
  const [showAll, setShowAll]=useState(true)

  useEffect(()=>{
    axios
      .get('http://localhost:3001/notes')
      .then(response=>{
        setNotes(response.data)
      })
  },[])


  console.log('render',notes.length,'notes')


  const addNote=(event)=>{
    event.preventDefault()
    const noteObj = {
      id:notes.length+1,
      content:newNote,
      date:new Date().toISOString(),
      important:Math.random()<0.5,
    }
    setNotes(notes.concat(noteObj))
    setNewNotes('')
  }

  const handleNoteChange=(event)=>{
    console.log(event.target.value)
    setNewNotes(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter((note)=>note.important)

  return(
    <div>
      <ul>
        {notesToShow.map((note)=>{
          console.log(note)
          return(
          <Note key={note.id} content={note.content}/>)
        })}
      </ul>

      <form onSubmit={addNote}>
        <input onChange={handleNoteChange}
        value={newNote}/>
        <button type="submit">Save</button>
      </form>
      <button onClick={(()=>setShowAll(!showAll))}>show {showAll?'important':'all'}</button>
    </div>
  )
}

export default App

