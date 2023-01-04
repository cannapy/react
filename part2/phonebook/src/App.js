import {useState} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

function App() {
  const [persons, setPersons]=useState([
    {name:'Arto Hellas', number:'045-1233489',id:1},
    {name:'Ada Lovelace', number:'045-234259',id:2},
    {name:'Dan Abramov', number:'0425345234-89',id:3},
    {name:'Mary Poppendieck', number:'5434533489',id:4},
  ])
  const [newNumber, setNewNumber]=useState('')
  const [newName, setNewName]=useState('')
  const [personsToShow,setPersonsToShow]=useState(persons)
  const [filter, setFilter]=useState('')
  const addName=(event)=>{
    event.preventDefault()
    let contains=false
    persons.forEach((person)=>{
      if(person.name===newName){
        contains=true
      }
    })
    
    if(contains)
    {
      console.log('exists')
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const personsObj={
        name:newName,
        number:newNumber,
        id:persons.length+1
      }
      setPersons(persons.concat(personsObj))
      setNewName('')
      setNewNumber('')
      setFilter('')
      const filter =document.getElementById('filter')
      setPersonsToShow(persons.filter((person)=>person.name.toLowerCase().includes(filter.toLowerCase())))
    }
    
  }

  const handleNameChange =(event)=>{
    setNewName(event.target.value)
  }

  const handleNumberChange =(event)=>{
    setNewNumber(event.target.value)
  }

  const handleFilterChange=(event)=>{
    console.log("Handle Filter Change")
    setFilter(event.target.value)
    setPersonsToShow(persons.filter((person)=>person.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter func={handleFilterChange}/>

      <h3>Add a new</h3>
      <PersonForm onSubmit={addName} newName={newName} newNumber={newNumber} onNameChange={handleNameChange} onNumberChange={handleNumberChange}/>

      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow}/>
    
    </div>
  );
}

export default App;
