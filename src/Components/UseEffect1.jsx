import React from 'react'
// import { useEffect } from 'react'

function UseEffect1(){
    const [count,setCount] = React.useState(1)

  React.useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=>count*2)
    },10000)
    })
    
return(
    <>
    <h1>this is the {count} times</h1>
    </>
)


}
export { UseEffect1 };