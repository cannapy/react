const Header=(props)=>{
  console.log(props.course.name)
  return(
    <h1>{props.course.name}</h1>
  )
}

const Part=(props)=>{
  console.log(props)
  return(
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content=(props)=>{
  console.log(props.parts.parts)
  return(
    <div>
      <Part name={props.parts.parts[0].name} exercises={props.parts.parts[0].exercises}/>
      <Part name={props.parts.parts[1].name} exercises={props.parts.parts[1].exercises}/>
      <Part name={props.parts.parts[2].name} exercises={props.parts.parts[2].exercises}/>
    </div>
  )
}

const Total=(props)=>{
  console.log(props.addobj)
  return(
    <p>{props.addobj.total()}</p>
  )
}

const App = () =>{
  const course = {
    name:'Half Stack application development',
    parts:[
      {
        name:'Fundamentals of React',
        exercises:10
      },
      {
        name:'Using props to pass data',
        exercises:7
      },
      {
        name:'State of a component',
        exercises:14,
       
      },
    ],
    
    total:function(){
      return this.parts[0].exercises +this.parts[1].exercises+this.parts[2].exercises
    },
  }  
  
  return(
    <div>
      <Header course={course}/>
      <Content parts={course}/>
      <Total addobj={course}/>
    </div>
  )
}
export default App;