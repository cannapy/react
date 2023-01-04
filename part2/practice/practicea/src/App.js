import {useState} from 'react'
import Note from './components/Note'
const App = ({note})=>{
  const [notes, setNotes]=useState(note)
  const [newNote, setNewNotes]=useState('Set a new note...')
  const [showAll, setShowAll]=useState(true)

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



// import {useState} from 'react'
// import Note from './components/Note'

// const App = (props)=>{
//   const [notes, setNotes]=useState(props.notes)
//   const [newNote, setNewNote]=useState('a new note...')
//   const [showAll, setShowAll]=useState(true)

//   const addNote=(event)=>{
//     event.preventDefault()
//     const noteObject={
//       content:newNote,
//       date:new Date().toISOString(),
//       important:Math.random()<0.5,
//       id: notes.length+1,
//     }
    
//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const handleNoteChange=(event)=>{
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }

//   const notesToShow=showAll
//     ? notes
//     : notes.filter(note=>note.important)

//   return(
//     <div>
//       <h1>Notes</h1>
//       <ul> 
//         {notesToShow.map((note)=>
//           <Note key={note.id} note={note}/>)}
//       </ul>
//       <form onSubmit={addNote}>
//         <input 
//           value={newNote}
//           onChange={handleNoteChange}
//         />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   )
// }

// export default App