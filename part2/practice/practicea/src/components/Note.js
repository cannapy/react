const Note =({key, note})=>{
    console.log(note)
    return(
        <li key={key}>{note.content}</li>
    )
}

export default Note