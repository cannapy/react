import {useState} from 'react'
import './index.css'

const Header=({header})=><h1>{header}</h1>

const Button = ({text, onClick}) =><button onClick={onClick}>{text}</button>

const Statistics = ({good, bad, neutral})=>{
  const all=good+bad+neutral
  if(good===0 && bad===0 && neutral===0){
    return(<>No feedback given</>)
  }
  return(
    <table className="tab">
      <tbody>  
        <tr className="row"><StatisticsLine text='good' score={good}/></tr>
        <tr className="row"><StatisticsLine text='neutral' score={neutral}/></tr>
        <tr className="row"><StatisticsLine text='bad' score={bad}/></tr>
        <tr className="row"><StatisticsLine text='all' score={all}/></tr>
        <tr className="row"><StatisticsLine text='average' score={(good-bad)/all}/></tr>
        <tr className="row"><StatisticsLine text='positive' score={100*good/(all)} txt=' %'/></tr>
      </tbody>
    </table>
  )
}

const StatisticsLine= ({text,score, txt})=><td>{text} {score} {txt}</td>

const App=()=>{
  const [good, setGood]=useState(0)
  const [neutral, setNeutral]=useState(0)
  const [bad,setBad]=useState(0)


  const incGood=()=>setGood(good+1)
  const incNeutral=()=>setNeutral(neutral+1)
  const incBad=()=>setBad(bad+1)
  return(
    <div>
      <Header header='give feedback'/>
      <Button text='good' onClick={incGood}/>
      <Button text='neutral' onClick={incNeutral}/>
      <Button text='bad' onClick={incBad}/>
      <Header header='statistics'/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
      
    </div>
  )
}

export default App