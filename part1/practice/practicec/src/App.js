import {useState} from 'react'
const Button = ({onClick, txt})=><button onClick={onClick}>{txt}</button>
const Display = ({counter}) => <div>{counter}</div>

const App =()=>{
  const [counter,setCounter]=useState(0)
  const increaseByOne = () => setCounter(counter+1)
  const decreaseByOne = () => setCounter(counter-1)
  const resetCounter = () => setCounter(0)
  return(
    <div>
      <Display counter={counter}/>
      <Button txt='Plus' onClick={increaseByOne}/>
      <Button txt='Reset' onClick={resetCounter}/>
      <Button txt='Minus' onClick={decreaseByOne}/>    
    </div>
  )
}
export default App



// import {useState} from 'react'

// const Dysplay=({counter})=><div>{counter}</div>

// const Button=({text, onClick})=><button onClick={onClick}>{text}</button>

// const App=()=>{
//   const [counter, setCounter]=useState(0)
//   const increaseByOne=()=>setCounter(counter+1)
//   const resetCounter=()=>setCounter(0)
//   const decreaseByOne=()=>setCounter(counter-1)

//   return(
//     <div>
//       <Dysplay counter={counter}/>
//       <Button text='plus' onClick={increaseByOne} counter={counter}/>
//       <Button text='reset' onClick={resetCounter} counter={counter}/>
//       <Button text='minus' onClick={decreaseByOne} counter={counter}/>
//     </div>
//   )
// }

// export default App



// import {useState} from 'react'


// const Display = ({counter}) =>{
//   return (
//     <div>{counter}</div>
//   )
// }

// const IncreaseBtn= ({counter, setCounter})=>{
//   const increaseByOne=setCounter(counter+1)
//   console.log('plus...',counter)
//   return (
//     <button onClick={increaseByOne}>
//       Plus
//     </button>
//   )
// }

// const ResetBtn =({counter, setCounter})=>{
//   const resetCounter=setCounter(0)
//   console.log('reset...',0)
//   return (
//     <button onClick={resetCounter}>
//       Reset
//     </button>
//   )
// }

// const App = () =>{
//   const [counter, setCounter] = useState(0)
//   return(
//     <div>
//       <Display counter={counter}/>
//       <IncreaseBtn counter={counter} setCounter={setCounter()}/>
//       <ResetBtn counter={counter} setCounter={setCounter()}/>
//     </div>
//   )
// }

// export default App

// import {useState} from 'react'
// const App=()=>{
//   const [counter,setCounter]=useState(0)
//   console.log('rendering...', counter)
//   return(
//     <div>
//       <div>{counter}</div>

//       <button onClick={
//         ()=>{
//           console.log('Plus button clicked, Count: ',counter)
//           setCounter(counter+1)
//         }
//       }>
//         Plus
//       </button>

//       <button onClick={
//         ()=>{
//           console.log('Counter reset to zero')
//           setCounter(0)
//         }
//       }>
//         Reset
//       </button>

//     </div>
//   )
// }

// export default App


// import {useState} from 'react'
// const App=()=>{
//   const [counter, setCounter]=useState(0)

//   console.log('rendering...',counter)
//   return(
//     <div> 
//       <div>{counter}</div>
//       <button onClick={
//         ()=>{
//           setCounter(counter+1)
//           console.log('clicked, counter=',counter)
//         }
//       }>
//         plus
//       </button>

//       <button onClick={
//         ()=>{
//           setCounter(0)
//           console.log('counter reset to 0')
//         }
//       }>
//         reset
//       </button>

//     </div>
//   )
// }
// export default App










// import {useState} from 'react'
// const App =()=>{
//   const [counter, setCounter]=useState(0)
//   setTimeout(
//     ()=>setCounter(counter+1),
//     1000
//   )
// console.log('rendering...', counter)

//   return(
//     <div>{counter}</div>
//   )
// }

// export default App


// const App = (props) =>{
//   const {counter}=props
//   return(
//     <div>{counter}</div>
//   )
// }

// export default App












// const Hello = ({name, age}) =>{
//   const bornYear =()=> new Date().getFullYear()-age
  
//   return(
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you are probably born in {bornYear()}</p>
//     </div>
//   )
// }


// const App=()=>{
//   const name = 'Peter'
//   const age=10
//   return(
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26+10}/>
//       <Hello name={name} age={age} />
//     </div>
//   )
// }