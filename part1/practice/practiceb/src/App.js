import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const t=[1,2,3,4,5]
const [first, second, ...rest]=t

console.log(first, second) //1,2
console.log(rest) //[3,4,5] Mr. Schuster says that I need a rest...
const x = 1
let y =5

const lst = t.map(value=>'<li>'+value+'<li/>')
const doub=t.map(value=>value*2)


const object1={
  name:'Arto Hellas',
  age:35,
  education:'PhD',
}

const object2={
  name:'Full Stack web application development',
  level:'intermediate studies',
  size:5,
}

const object3={
  name:{
    first:'Dan',
    last:'Abramov',
  },
  grades:[2,3,5,3],
  department:'Standford University'
}


const fieldName='age'
console.log(object1[fieldName]) //35
console.log(object1.age) //35


object1.address='Helsinki'
object1['secret number']=12341// need to use bracket notion when var name has a space (Use for user input naming attributes...)



const sum=(p1,p2)=>{
  console.log(p1)
  console.log(p2)
  return p1+p2
}

const result=sum(1,5)
console.log(result)



const newt=[1,2,3]
const mapt = newt.map(p=>p*p)
console.log(mapt)//1, 4, 9


const square = p => p*p
console.log(square(9)) //81


function average(a,b){
  return a+b/2
}
const avg = average(2,5)
console.log(avg)//3.5









const arto = {
  name: 'Arto Hellas',
  age:35,
  education: 'PhD',
  greet:function(){
    console.log('hello, my name is ' + this.name)
  },
}

arto.growOlder=function(){
  this.age+=1
}

arto.greet()



const barto={
  name:'Arto Hellas',
  age:35,
  education:'PhD',
  greet:function(){
    console.log('hello, my name is ' + this.name)
  },
  doAddition:function(a,b){
    console.log(a+b)
  },
}

barto.doAddition(1,4)

const referenceToAddition=arto.doAddition
referenceToAddition(10,15)