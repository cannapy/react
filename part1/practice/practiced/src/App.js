import {useState} from 'react'
const App=()=>{
  const [left, setLeft]=useState(0)
  const [right, setRight]=useState(0)
  const [allClicks,setAll]=useState([])
  const handleLeftClick=()=>{
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }
  const handleRightClick=()=>{
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }
  return(
    <div>
      {left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
export default App
// import {useState} from 'react'
// const App=()=>{
//   const [left, setLeft]=useState(0)
//   const [right, setRight]=useState(0)
//   const [allClicks,setAll]=useState([])
//   const handleLeftClick=()=>{
//     setAll(allClicks.concat('L'))
//     setLeft(left+1)
//   }
//   const handleRightClick=()=>{
//     setAll(allClicks.concat('R'))
//     setRight(right+1)
//   }
//   return(
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>Left</button>
//       <button onClick={handleRightClick}>Left</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }

// export default App
// // import {useState} from 'react'
// // const App=()=>{
// //   const [left, setLeft]=useState(0)
// //   const [right, setRight]=useState(0)
// //   const [allClicks, setAll]=useState([])

// //   const handleLeftClick=()=>{
// //     setAll(allClicks.concat('L'))
// //     setLeft(left+1)
// //   }
// //   const handleRightClick=()=>{
// //     setAll(allClicks.concat('R'))
// //     setRight(right+1)
// //   }
// //   return(
// //     <div>
// //       {left}
// //       <button onClick={handleLeftClick}>Left</button>
// //       <button onClick={handleRightClick}>Right</button>
// //       {right}
// //       <p>{allClicks.join(' ')}</p>
// //     </div>
// //   )
// // }
// // export default App


// // // import {useState} from 'react'

// // // const App=()=>{
// // //   const [clicks, setClicks]=useState({left:0,right:0})
// // //   const handleLeftClicks=()=>
// // //     setClicks({...clicks, left:clicks.left+1})
// // //   const handleRightClicks=()=>
// // //     setClicks({...clicks, right:clicks.right+1})
  
// // //   return(
// // //     <div>
// // //       {clicks.left}
// // //       <button onClick={handleLeftClicks}>left</button>
// // //       <button onClick={handleRightClicks}>Right</button>
// // //       {clicks.right}
// // //     </div>
// // //   )
// // // }
// // // export default App


// // // // import {useState} from 'react'
// // // // const App = () =>{
// // // //   const [clicks, setClicks] = useState({
// // // //     left:0, right:0
// // // //   })
  
// // // //   const handleLeftClicks=()=>
// // // //     setClicks({...clicks, left: clicks.left+1})
  

// // // //   const handleRightClicks=()=>
// // // //     setClicks({...clicks,right:clicks.right+1 })

// // // //   return(
// // // //     <div>
// // // //       {clicks.left}
// // // //       <button onClick={handleLeftClicks}>left</button>
// // // //       <button onClick={handleRightClicks}>right</button>
// // // //       {clicks.right}
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App