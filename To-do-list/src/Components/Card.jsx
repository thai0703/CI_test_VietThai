import React from "react";
import './Card.css'

const Card = (props)=>{


    return(
        <>
            <div className="card">
                <input type="checkbox" name="" id={props.id} done={props.done} onChange={props.onChange} value={props.name} checked={props.checked} />
                <p>{props.name}</p>
                <button value={props.id} onClick={props.handleDelete}><img src="./bin.svg" alt="" srcset="" /></button>
            </div>
        </>
    )
}

export default Card