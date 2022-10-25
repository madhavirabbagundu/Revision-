import React from "react"

const UseState=(()=>{
    const [name,setName] = React.useState("madhavi")
    const [year,setYear] = React.useState("2001")
    const [study,setStudy] = React.useState("MBA")
    
    // function UseState(){
        return(
            <>
<h1> this is the usestate page</h1>
<h2>i am {name}. I am bron and brought in thaticherla. my date of birth is {year} and my qualification is {study}</h2>

</>
)
})
export default UseState;