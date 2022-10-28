import React from 'react'

const Effect=(()=>{
const [count,setCount] = React.useState(0)
const [calculate,setCalculate] = React.useState(0)

React.useEffect(()=>{
    setCalculate(()=> count*2)
},[count])

    return(
        <>
        <h2>this is the count value {count}</h2>
        <button onClick ={()=>setCount((count)=>count+1)}>ADD</button>       
       <div>this is multiply {calculate}</div>
       </>
    )
})
export default Effect