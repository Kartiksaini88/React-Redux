import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { store } from './refactor/store'
import { useDispatch, useSelector  } from 'react-redux'
import { addcount, todos } from './refactor/action'
import { nanoid } from 'nanoid'


function App() {
  let state = store.getState()

  let dispatch = useDispatch()

  let counter = useSelector((store)=> store.counter)

  let todoStore = useSelector((store)=>store.todo)

  let [todostate , settodo] = useState("")


  let hnadlecount = ()=>{
    dispatch(addcount(1))
  }

  let handletodo = ()=>{
    dispatch(todos(todostate))
  }
  
  let deletetodo = (key)=>{
    console.log(key)
    dispatch(deletetodo(key))
  }

  return (
    <div className="App">
    <h3>Counter : {counter}</h3>
    <button onClick={hnadlecount}>ADD 1</button>
<br/>
    <input onChange={e => settodo(e.target.value)} type="text" />
    <button onClick={handletodo}>ADD TODO</button>
    <h3>{todoStore.map(e => <div>{e.id}-{e.title}<br/><button onClick={()=>{deletetodo(e.id)}}>Delete todo</button></div>)}</h3>
    </div>

    
  )
}

export default App
