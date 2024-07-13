import React, { useEffect } from "react";
import Search from "./Search";
import Card from "./Card";
import './All.css';
import { useState } from "react";

const All = (props) =>{
    const todos = props.todos

    return(
        <>
        <div className="all">
            <Search onChange={props.onchange} onClick={props.onClick}></Search>
            {todos.map((todo) =>{
                return <Card key={todo.id} done={todo.done} name={todo.job} onChange={props.onChange} checked={todo.done}/>
            })}
        </div>
        </>
    )
}

export default All