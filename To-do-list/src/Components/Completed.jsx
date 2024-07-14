import React, { useEffect } from "react";
import Search from "./Search";
import Card from "./Card";
import './Completed.css';
import { useState } from "react";

const Completed = (props) =>{
    
    const complete = props.todos.filter((todo) => todo.done);
    // complete.forEach(element => {console.log(element)
        
    // });

    return(
        <>
        <div className="completed">
            {complete.map((com) =>{
                return <Card id={com.id} name={com.job} handleDelete={props.handleDelete} onChange={props.onChange} checked={true}/>
            })}
            <button className="delete" onClick={props.handleDeleteAll}><img src="./whiteBin.png" alt="" />Delete All</button>
        </div>
        </>
    )
}

export default Completed