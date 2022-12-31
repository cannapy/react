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
  
  
  
  
  let mapped=animals.filter((animal)=>animal.species==='dog')
  console.log(mapped)
  
  
  let totalAmount=orders.reduce((sum,t)=>sum+t.amount,0)

  console.log(totalAmount)

  return (
    <ul>
      {mapped.map((animal)=> <li>'name: {animal.name} species: {animal.species}'</li>)}
      <li>{totalAmount}</li>
    </ul>
  )
}

export default App;
