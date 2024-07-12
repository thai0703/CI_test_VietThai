import React, { useEffect } from "react";
import Search from "./Search";
import Card from "./Card";
import './Active.css';
import { useState } from "react";

const Active = () =>{
    const [todo_change, setTodo_change] = useState('')
    const [todos, setTodos] = useState([])
    const [checked, setChecked] = useState([])
    const [unchecked, setUnchecked] = useState(todos.job)

    const handleChange = (e)=>{
        setTodo_change(e.target.value)
    }

    const handleBoxChange = (e)=>{
        if (e.target.checked){
            setChecked([...checked, e.target.value])
        }
        else{
            setChecked(checked.filter((item)=>{item !== e.target.value}))
        }
    }

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


    return(
        <>
        <div className="active">
            <Search onChange={handleChange} onClick={handleAdd}></Search>
            {todos.map((todo) =>{
                return <Card key={todo.id} name={todo.job} onChange={handleBoxChange}/>
            })}
        </div>
        </>
    )
}

export default Active