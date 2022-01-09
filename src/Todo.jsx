import React from "react";
import './App.jsx'



const Todos=(props)=>{
    console.log("inside the jsx");
    return (
    <>
    <div className="todo_style">
        <i class="fa fa-times" aria-hidden="true" onClick={()=>{
            props.onselect(props.id);
        }}>❌ </i>
     <li> {props.text} </li>
     </div>
    </>
        );

}

export default Todos;