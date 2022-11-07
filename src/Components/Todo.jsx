import React from 'react'
import { Todos } from './Todos'

const Todo = (()=>{
    const [Todo,setTodo] = React.useState([])

    const setTodos = () =>{
     setTodo((Todo)=>[...Todo,"added todoes"])
    }
    return(
        <>
        <h1>this is the todo list</h1>
        <div>
       <Todos Todo= {Todo} setTodos = {setTodos}/>
        </div>
        </>
    )
})
export  { Todo } 