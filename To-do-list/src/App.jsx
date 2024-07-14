import { useState , useEffect} from 'react'
import All from './Components/All'
import './App.css'
import Active from './Components/Active'
import Completed from './Components/Completed'


function App() {
    const [todo_change, setTodo_change] = useState('')
    const [todos, setTodos] = useState([])
    const [tab, setTab] = useState(1)
    
    // useEffect(() => {
    //   console.log('todos:', todos);
    // }, [todos]);

    const handleChange = (e)=>{
        setTodo_change(e.target.value)
    }


    const handleAdd = ()=>{
        if(todo_change != ''){

            const newTodos = [...todos];

            const newTodo = {
                id: Math.random(),
                job: todo_change,
                done: false
            }
            newTodos.push(newTodo);

            setTodos(newTodos);
        }  
          
    }

    const handleBoxChange = (e) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.job == e.target.value) {
          return { ...todo, done: !todo.done }
        }
        return todo;
      });
      setTodos(updatedTodos);
    }

    const handleDelete = (e) => {
      let index = todos.findIndex((todo) => todo.id == e.currentTarget.value)
      const deleteTodos = todos.splice(index, 1)
      const newTodos = todos.filter((todo) => todo != deleteTodos)
      setTodos(newTodos)
    };

    const handleDeleteAll = () =>{
      setTodos([])
    }

    let showTab = null;
    const changeTab = (e)=>{
      const tabIndex = e.target.getAttribute('id')
      setTab(tabIndex)
      
    }
    if (tab == 1){
        showTab = <All onchange={handleChange} onChange={handleBoxChange} onClick={handleAdd} todos={todos} todo_change={todo_change}></All>

      }
    if (tab == 2){
        showTab = <Active onchange={handleChange} onChange={handleBoxChange} onClick={handleAdd} todos={todos} todo_change={todo_change}></Active>
      }
    if (tab == 3){
        showTab = <Completed todos={todos} onChange={handleBoxChange} handleDelete={handleDelete} handleDeleteAll={handleDeleteAll}></Completed>
      }


  return (
    <>
      <div className="todo">
        <h1>#todo</h1>
        <div className="filter">
          <div onClick={changeTab} id='1' style={{
            borderBottom: tab == 1 ? '2px solid blue' : 'none',
          }}>All</div>
          <div onClick={changeTab} id='2' style={{
            borderBottom: tab == 2 ? '2px solid blue' : 'none',
          }}>Active</div>
          <div onClick={changeTab} id='3' style={{
            borderBottom: tab == 3 ? '2px solid blue' : 'none',
          }}>Completed</div>
        </div>
        <hr />
        {showTab}       
      </div>
    </>
  )
}

export default App
