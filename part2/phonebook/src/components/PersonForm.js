const PersonForm=({onSubmit, newName, newNumber, onNameChange, onNumberChange})=>{
    return(
    <form onSubmit={onSubmit}>
        <div>
            name: <input value={newName} onChange={onNameChange}/>
        </div>
        <div>
            number: <input  onChange={onNumberChange} value={newNumber}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>)
}

export default PersonForm