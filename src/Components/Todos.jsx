import React from 'react'
const Todos = ({Todo,setTodos})=>{
return(
    <>
    <div>
        <h2>my todoes</h2>
        {Todo.map((item, index)=>(
            <p key= {index}>{item}</p>
        ))}
        <button onClick = {setTodos}>setTodo</button>
    </div>
    </>
)
}
export  { Todos } 