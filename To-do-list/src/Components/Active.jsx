import React, { useEffect } from "react";
import Search from "./Search";
import Card from "./Card";
import './Active.css';
import { useState } from "react";

const Active = (props) =>{
    
    const active = props.todos.filter((todo) => !todo.done)

    return(
        <>
        <div className="active">
            <Search onChange={props.handleChange} onClick={props.handleAdd}></Search>
            {active.map((todo) =>{
                return <Card key={todo.id} name={todo.job} onChange={props.onChange} checked={todo.done} />
            })}
        </div>
        </>
    )
}

export default Active