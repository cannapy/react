import {useState} from 'react'
const App=({orders}) =>{
  let animals=[
    {name:'Fluffykins',species:'rabbit'},
    {name:'Caro',species:'dog'},
    {name:'Hamilton',species:'dog'},
    {name:'Harold',species:'fish'},
    {name:'Ursula',species:'cat'},
    {name:'Jimmy',species:'fish'},
  ]
  const [notes, setNotes]=useState(orders)
  const [newNote,setNewNote]=useState('Set new note...')
  const [showAll, setShowAll]=useState(true)

  const addNote = (event)=>{
    event.preventDefault()
    const noteObject={
      amount:newNote,
      date:new Date().toISOString(),
      id: notes.length+1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  
  const handleNoteChange=(event)=>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow=showAll
    ? notes
    : notes.filter(note=>note.important)

  let fish = animals.filter((animal)=>animal.species==='fish')
  
  let dogs=animals.filter((animal)=>animal.species==='dog')
  console.log(dogs)
  
  let mapped=dogs.map((dog)=><li>{dog.name}</li>)
  
  let total=dogs.reduce((sum,dog)=>sum+1,0)//total dogs . count
  console.log('total dogs:',total)
  
  let totalAmount=orders.reduce((sum,t)=>sum+t.amount,0)

  console.log(totalAmount)



  //filter
  let canDrink=orders.filter((order)=>order.amount>250)
  console.log('Can...',canDrink)

  let cats = animals.filter((animal)=>animal.species==='cat')
  console.log('Cats...',cats)

  //map

  //sort

  //reject

  //reduce


  return (
    <div>
      <ul>
        {mapped}
        {fish.map((fish)=><li>{fish.name} Fish</li>)}
        {notes.map((note)=><li>{note.amount}</li>)}
      </ul>
      <form onSubmit={addNote}>
        <input onChange={handleNoteChange} value={newNote}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App;
