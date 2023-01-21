import {useState, useEffect} from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {

    const [notes,setNotes] = useState(0);

    const promise = axios.get('http://localhost:3001/notes').then(res=>{
        console.log(res.data);
        setNotes(res.data);
    })

    useEffect(()=>{
        console.log('effect')
        axios
            .get('http://localhost:3001/notes')
            .then(res=>{
                console.log('promise fulfilled')
                setNotes(res.data)
            })
    }, [])

    console.log("promise",promise)


    if(promise.get()===1){
        alert("Promise pending");
    }else if (promise.get()===2){
        alert("Promise fulfilled");
    }else{
        alert("Promise Rejected");
    }

    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default App;




