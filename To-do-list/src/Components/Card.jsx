import React from "react";
import './Card.css'

const Card = (props)=>{
    return(
        <>
            <div className="card">
                <input type="checkbox" name="" id="" onChange={props.onChange} value={props.name} checked={props.checked} />
                <p>{props.name}</p>
                <button key={props.key} onClick={props.handleDelete}><img src="./bin.svg" alt="" srcset="" /></button>
            </div>
        </>
    )
}

export default Card