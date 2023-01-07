import {useState,useEffect} from 'react'
import axios from 'axios'
import ShowCountries from './components/ShowCountries'
const App=()=>{

  const [filter,setFilter]=useState('')
  const [countries, setCountries]=useState([])
  const [countriesToShow,setCountriesToShow]=useState([])

  
  const handleFilterChange =(event)=>{
    setFilter(event.target.value)
    console.log(event.target.value)
    setCountriesToShow(countries.filter((country)=>country.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
    setCountriesToShow(countriesToShow.map((country)=>country.lang=false))
    console.log(countriesToShow)
  }

  useEffect(()=>{
    console.log("effect");
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response=>{
        console.log('promise fulfilled')
        setCountries(response.data)
        setCountriesToShow(response.data)
      })
  },[])

  return (
    <div>
      <p>find countries<input value={filter} onChange={handleFilterChange}/></p>
      <ShowCountries countriesToShow={countriesToShow}/>
    </div>
  )
}

export default App;
