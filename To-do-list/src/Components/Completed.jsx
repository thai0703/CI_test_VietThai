import React, { useEffect } from "react";
import Search from "./Search";
import Card from "./Card";
import './Completed.css';
import { useState } from "react";

const Completed = (props) =>{
    // const [todo_change, setTodo_change] = useState('')
    // const [todos, setTodos] = useState([])
    // const [checked, setChecked] = useState([])

    // const handleChange = (e)=>{
    //     setTodo_change(e.target.value)
    // }

    // const handleBoxChange = (e)=>{
    //     if (e.target.checked){
    //         setChecked([...checked, e.target.value])
    //     }
    //     else{
    //         setChecked(checked.filter((item)=>{item !== e.target.value}))
    //     }
    // }

    // const handleAdd = ()=>{
    //     if(todo_change != ''){

    //         const newTodos = [...todos];

    //         const newTodo = {
    //             id: Math.random(),
    //             job: todo_change
    //         }
    //         newTodos.push(newTodo);

    //         setTodos(newTodos);
    //     }    
    // }
    return(
        <>
        <div className="completed">
            {props.checked.map((todo) =>{
                return <Card key={todo.id} name={todo.job} handleDelete={props.handleDelete} onChange={props.handleBoxChange} checked={true}/>
            })}
            <button className="delete" ><img src="./whiteBin.png" alt="" />Delete All</button>
        </div>
        </>
    )
}

export default Completed