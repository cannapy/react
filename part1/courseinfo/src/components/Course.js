const Course = ({course})=>{
    console.log(course)
    return(
      <div>
        <Header title = 'Web development curriculum'/>
        <Coursename course={course}/>
        <Content parts={course}/>
      </div>
    )
  }

const Header=(props)=>{
console.log(props.title)
return(
    <h1>{props.title}</h1>
)
}

const Coursename=(props)=>{
console.log(props.course.name)
return(
    <h3>{props.course.name}</h3>
)
}

const Content=(props)=>{
console.log(props.parts.parts)

return(
    <div>
    {props.parts.parts.map((part)=><Part name={part.name} exercises={part.exercises}/>)}
    <Total parts={props.parts}/>
    </div>
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

const Total=(props)=>{
const total=props.parts.parts.reduce((sum, exercises)=>sum+exercises.exercises,0)

return(
    <p><b>total of {total} exercises</b></p>
)
}

export default Course