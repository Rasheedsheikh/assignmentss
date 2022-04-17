// import { useState } from "react"
import React, {useState} from "react"
 export const Todo=()=>{

    const [task,setTask]=React.useState("")
    const[todo,setTodo]=useState([])
    const handleChange=(e)=>{
    // console.log("changing input",e.target.value)
    setTask(e.target.value)
} 
const handleclick=()=>{
    setTodo([...todo,task])

}
console.log(todo,"todo")
    return (
        <>
        <h1>Todo</h1>
        <input type={"text"} placeholder="enter" onChange={handleChange}/>
        <button onClick={handleclick}>Add</button>
       
       {todo.map((item)=>{
           return <h1>{item}</h1>
       })}
        </>

    )
}