import React from "react";
import { useState } from "react";
import './Search.css'

const Search = (props)=>{

    return(
        <>
            <div className="search">
                <input type="text" placeholder="add details" onChange={props.onChange} />
                <button onClick={props.onClick} >Add</button>
            </div>
        </>
    )
}

export default Search