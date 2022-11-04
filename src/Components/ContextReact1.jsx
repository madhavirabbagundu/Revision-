import React from 'react'
const UserContext = React.createContext();

function ContextReact1(){
    const [user,setUser] = React.useState("madhavi")
    return(
        <>
        <UserContext.Provider value = {user}>
        <div>my name is {user}</div>
        <Component2 />
        </UserContext.Provider>
        </>
    )

}
function Component2(){
    return(
        <>
        <Component3/>
        </>
    )

}
function Component3(){
    return(
        <>
        <Component4 />
        </>
    )
}
function Component4(){
    const user = React.useContext(UserContext)
    return(
        <>
        <div>
        <h1>this is the context {user}</h1>
        </div>
        </>
    )
}
export { ContextReact1 }