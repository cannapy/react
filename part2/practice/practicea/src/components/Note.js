const Note =({key, content})=>{
    console.log(content)
    return(
        <li key={key}>{content}</li>
    )
}

export default Note