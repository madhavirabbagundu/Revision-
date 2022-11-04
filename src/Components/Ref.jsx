import React from "react"
import { useEffect,useRef } from "react";

const Ref = (()=>{
    const [input,setinput] = React.useState("")
    const count = useRef(0);


    useEffect(()=>{
    count.current = count.current+1
    })
    return (
        <>
        <h1>Count is :{count.current}</h1>

        <input type = "text"
          value = {input}
          onChange = {(e)=>setinput(e.target.value)}
          
          />
        </>
    )

})
export default Ref