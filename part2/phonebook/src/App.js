import {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

function App() {
  const [persons, setPersons]=useState([])
  const [newNumber, setNewNumber]=useState('')
  const [newName, setNewName]=useState('')
  const [personsToShow,setPersonsToShow]=useState(persons)
  const [filter, setFilter]=useState('')


  useEffect(()=>{
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response=>{
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  },[])
  console.log('render',persons.length)



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
