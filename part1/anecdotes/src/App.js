import {useState} from 'react'

const Header = ({header})=><h1>{header}</h1>

const Anecdote =({anecdote})=><p>{anecdote}</p>

const Votes=({votes})=>{
  if(votes===1){
    return(<p>has {votes} vote</p>)
  }
  return(<p>has {votes} votes</p>)
}

const Button=({text, onClick})=><button onClick={onClick}>{text}</button>

const App = () =>{
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heav use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  let rand=Math.floor(Math.random()*7)

  const arr=new Array(7).fill(0)
  const [votes, setVotes]=useState(arr)

  const [selected, setSelected]=useState(rand)

  const next=()=>setSelected(Math.floor(Math.random()*7))

  const vote=()=>{
    let copy=[...votes]
    copy[selected]+=1
    console.log(copy)
    setVotes(copy)
    setMax(copy.indexOf(Math.max(...copy)))
    
  }



  const [max, setMax]=useState(0)

  return(
    <div>
      <Header header='Anecdote of the day'/>
      <Anecdote anecdote={anecdotes[selected]}/>
      <Votes votes={votes[selected]}/>
      <Button text='vote' onClick={vote}/>
      <Button text='next anecdote' onClick={next}/>
      <Header header='Anecdote with most votes'/>
      <Anecdote anecdote={anecdotes[max]}/>
      <Votes votes={votes[max]}/>
    </div>
  )
}

export default App