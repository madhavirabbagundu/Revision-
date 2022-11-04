import React from "react"
// import { UseState } from 'react'

function ContextReact(){
    const [name,setName] = React.useState("madhavi")
    return(
        <>
        <h1>this is the {name}</h1>
        <div>
        <h2>this is the components 1</h2>

           <Component2 user = {name}/>
        </div>
        </>
    )
}

function Component2({ name }){
    return(
        <>
                <h2>this is the components 2</h2>

         <Component3 user = {name}/>
        </>
    )
}
function Component3({ name }){
    return(
        <>
                <h2>this is the components 3</h2>

        <Component4 user = {name}/>
        
        </>
    )
}function Component4({ name }){
    return(
        <>
                <h2>this is the components 4</h2>

        <Component5 user = {name}/>
        </>
    )
}function Component5({ name }){
    return(
        <>
        <h2>this is the components 5 {name}</h2>
        <Component6 user = {name}/>
        </>
    )
}function Component6({ name }){
    return(
        <>
        <h3>this is the{ name }</h3>
        {/* <h1>this is the component 6</h1> */}
        </>
    )
}
export { ContextReact }