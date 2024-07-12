import { useState } from 'react'
import All from './Components/All'
import './App.css'
import Active from './Components/Active'
import Completed from './Components/Completed'


function App() {
    const [todo_change, setTodo_change] = useState('')
    const [todos, setTodos] = useState([])
    const [checked, setChecked] = useState([])

    const handleChange = (e)=>{
        setTodo_change(e.target.value)
    }

    // const handleBoxChange = (e)=>{
    //     if (e.target.checked){
    //         setChecked([...checked, e.target.value])
    //     }
    //     else{
    //         setChecked(checked.filter((item)=>{item !== e.target.value}))
    //     }
    // }

    const handleAdd = ()=>{
        if(todo_change != ''){

            const newTodos = [...todos];

            const newTodo = {
                id: Math.random(),
                job: todo_change
            }
            newTodos.push(newTodo);

            setTodos(newTodos);
        }    
    }

    const handleBoxChange = (e)=>{
      const filter = todos.filter((todo) =>{
        if(todo.job.toLowerCase().includes(e.target.value.toLowerCase())){
          return todo
        }
      })
      setChecked(...checked, filter)
    }
    
    console.log(checked)

    const handleDelete = (key)=>{
      // const deleted = todos.filter((todo) =>{
      //   todo.id !== key          
      //   }
      // )
      // setTodos(deleted)
    }

  return (
    <>
      <div className="todo">
        <h1>#todo</h1>
        <div className="filter">
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
        <hr />
        <All onchange={handleChange} onChange={handleBoxChange} onClick={handleAdd} todos={todos} todo_change={todo_change}></All>
        {/* <Active></Active> */}
        <Completed checked={checked} onChange={handleBoxChange} handleDelete={handleDelete}></Completed>
      </div>
    </>
  )
}

export default App
