import React from "react"
// import { useEffect } from "react"
import {useEffect, useRef,useState} from 'react'
const RefName = (()=>{
    const [name,setName] = useState("")
    const data = useRef()

useEffect(()=>{
     data.current = name
},[name])
    return(
        <>
        <div>
            <input ref = {data} value = {name} onChange = {e=>setName(e.target.value)}
   />         <h1>this is the name {name} and the previous name is {data.current}</h1>
        </div>
        </>
    )
})
export default RefName