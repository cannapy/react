import {useState} from 'react'

const Display = ({value})=><div>{value}</div>

const Button = (props)=><button onClick={props.handleClick}>{props.text}</button>

const App=()=>{
  const[value,setValue]=useState(10)
  const setValueTo=(newValue)=>()=>setValue(newValue)
  
  return(
    <div>
      <Display value={value}/>
      <Button text='Thousand' handleClick={setValueTo(1000)}/>
      <Button text='Reset' handleClick={setValueTo(0)}/>
      <Button text='Increment' handleClick={setValueTo(value+1)}/>
      <Button text = 'Decrement' handleClick={setValueTo(value -1)}/>
    </div>
  )
}
export default App

// import {useState} from 'react'
// const App=()=>{
//   const [value,setValue]=useState(10)
  
//   const setToValue = (newValue) =>()=>{
//     console.log('Prev Value', value)
//     console.log('New Value', newValue)
//     setValue(newValue)
//   }
//   return(
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value+1)}>incr</button>
//     </div>
//   )
// }

// export default App

// // import {useState} from 'react'
// // const App = ()=>{
// //   const [value, setValue]=useState(10)

// //   const hello = (who) =>()=>{
// //     console.log('hello',who)
// //     setValue(0)
// //   }

  

// //   return(
// //     <div>
// //       {value}
// //       <button onClick={hello('world')}>button</button>
// //       <button onClick={hello('react')}>button</button>
// //       <button onClick={hello('function')}>button</button>
// //     </div>
// //   )
// // }

// // export default App

// // // import {useState} from 'react'
// // // const App = ()=>{
// // //   const [value,setValue]=useState(10)

// // //   const handleClick = () =>
// // //     setValue(0)
// // //   return(
// // //     <div>
// // //       {value}
// // //       <button onClick={handleClick}>reset to zero</button>
// // //     </div>
// // //   )
// // // }
// // // export default App


// // // // import {useState} from 'react'

// // // // const Button = ({txt, onClick})=><button onClick={onClick}>{txt}</button>

// // // // const History = ({allClicks})=>{
// // // //   if (allClicks.length===0){
// // // //     return(
// // // //       <div>
// // // //         the app is used by pressing the buttons
// // // //       </div>
// // // //     )
// // // //   }
// // // //   return(
// // // //     <div> 
// // // //       button press history: {allClicks.join(' ')}
// // // //     </div>
// // // //   )
// // // // }

// // // // const App = () =>{
// // // //   const [left, setLeft]=useState(0)
// // // //   const[right,setRight]=useState(0)
// // // //   const [allClicks,setAll]=useState([])
// // // //   const handleLeftClick=()=>{
// // // //     setAll(allClicks.concat('L'))
// // // //     setLeft(left+1)
// // // //   }
// // // //   const handleRightClick=()=>{
// // // //     setAll(allClicks.concat('R'))
// // // //     setRight(right+1)
// // // //   }
// // // //   const resetAllClicks = ()=>{
// // // //     setAll([])
// // // //     setLeft(0)
// // // //     setRight(0)
// // // //   }
  
// // // //   return(
// // // //     <div>
// // // //       {left}
// // // //       <Button txt='Left' onClick={handleLeftClick}/>
// // // //       <Button txt='Reset' onClick={resetAllClicks}/>
// // // //       <Button txt='Right' onClick={handleRightClick}/>
// // // //       {right}
// // // //       <History allClicks={allClicks}/>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App


// // // // // import {useState} from 'react'
// // // // // const App=()=>{
// // // // //   const [left, setLeft]=useState(0)
// // // // //   const [right, setRight]=useState(0)
// // // // //   const [allClicks,setAll]=useState([])
// // // // //   const handleLeftClick=()=>{
// // // // //     setAll(allClicks.concat('L'))
// // // // //     setLeft(left+1)
// // // // //   }
// // // // //   const handleRightClick=()=>{
// // // // //     setAll(allClicks.concat('R'))
// // // // //     setRight(right+1)
// // // // //   }
// // // // //   return(
// // // // //     <div>
// // // // //       {left}
// // // // //       <button onClick={handleLeftClick}>Left</button>
// // // // //       <button onClick={handleRightClick}>Right</button>
// // // // //       {right}
// // // // //       <p>{allClicks.join(' ')}</p>
// // // // //     </div>
// // // // //   )
// // // // // }
// // // // // export default App
// // // // // // import {useState} from 'react'
// // // // // // const App=()=>{
// // // // // //   const [left, setLeft]=useState(0)
// // // // // //   const [right, setRight]=useState(0)
// // // // // //   const [allClicks,setAll]=useState([])
// // // // // //   const handleLeftClick=()=>{
// // // // // //     setAll(allClicks.concat('L'))
// // // // // //     setLeft(left+1)
// // // // // //   }
// // // // // //   const handleRightClick=()=>{
// // // // // //     setAll(allClicks.concat('R'))
// // // // // //     setRight(right+1)
// // // // // //   }
// // // // // //   return(
// // // // // //     <div>
// // // // // //       {left}
// // // // // //       <button onClick={handleLeftClick}>Left</button>
// // // // // //       <button onClick={handleRightClick}>Left</button>
// // // // // //       {right}
// // // // // //       <p>{allClicks.join(' ')}</p>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default App
// // // // // // // import {useState} from 'react'
// // // // // // // const App=()=>{
// // // // // // //   const [left, setLeft]=useState(0)
// // // // // // //   const [right, setRight]=useState(0)
// // // // // // //   const [allClicks, setAll]=useState([])

// // // // // // //   const handleLeftClick=()=>{
// // // // // // //     setAll(allClicks.concat('L'))
// // // // // // //     setLeft(left+1)
// // // // // // //   }
// // // // // // //   const handleRightClick=()=>{
// // // // // // //     setAll(allClicks.concat('R'))
// // // // // // //     setRight(right+1)
// // // // // // //   }
// // // // // // //   return(
// // // // // // //     <div>
// // // // // // //       {left}
// // // // // // //       <button onClick={handleLeftClick}>Left</button>
// // // // // // //       <button onClick={handleRightClick}>Right</button>
// // // // // // //       {right}
// // // // // // //       <p>{allClicks.join(' ')}</p>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }
// // // // // // // export default App


// // // // // // // // import {useState} from 'react'

// // // // // // // // const App=()=>{
// // // // // // // //   const [clicks, setClicks]=useState({left:0,right:0})
// // // // // // // //   const handleLeftClicks=()=>
// // // // // // // //     setClicks({...clicks, left:clicks.left+1})
// // // // // // // //   const handleRightClicks=()=>
// // // // // // // //     setClicks({...clicks, right:clicks.right+1})
  
// // // // // // // //   return(
// // // // // // // //     <div>
// // // // // // // //       {clicks.left}
// // // // // // // //       <button onClick={handleLeftClicks}>left</button>
// // // // // // // //       <button onClick={handleRightClicks}>Right</button>
// // // // // // // //       {clicks.right}
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }
// // // // // // // // export default App


// // // // // // // // // import {useState} from 'react'
// // // // // // // // // const App = () =>{
// // // // // // // // //   const [clicks, setClicks] = useState({
// // // // // // // // //     left:0, right:0
// // // // // // // // //   })
  
// // // // // // // // //   const handleLeftClicks=()=>
// // // // // // // // //     setClicks({...clicks, left: clicks.left+1})
  

// // // // // // // // //   const handleRightClicks=()=>
// // // // // // // // //     setClicks({...clicks,right:clicks.right+1 })

// // // // // // // // //   return(
// // // // // // // // //     <div>
// // // // // // // // //       {clicks.left}
// // // // // // // // //       <button onClick={handleLeftClicks}>left</button>
// // // // // // // // //       <button onClick={handleRightClicks}>right</button>
// // // // // // // // //       {clicks.right}
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App