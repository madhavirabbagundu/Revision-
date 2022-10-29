import React from 'react'

const Api = (()=>{
const [data,setData] = React.useState([])

React.useEffect(()=>{
    fetch(`http://localhost:3000/hotel`)
    .then((res)=>res.json())
    .then((res)=>setData(res))
},[])
    
    return (
        <>
        <div>
        {data.map((item)=>(
            <div>{item.name}
            <h1>{item.about}</h1>
            </div>
        ))}
        <div>this is the api task</div>
        </div>
        </>
    )

})
export default Api