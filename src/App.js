import  React  from "react";
import  UseState  from "./Components/UseState"
import  { UseEffect1 } from "./Components/UseEffect1";
import Api from './Components/Api'
import Ref from './Components/Ref'
import Effect2 from './Components/Effect2'
import RefName from "./Components/RefName";
import { ContextReact } from "./Components/ContextReact";
import { ContextReact1 } from './Components/ContextReact1'
function App() {
  var [numbers,setNumbers] = React.useState("red")
  return (
    <div className="App">
     <h1>this is the revision time</h1>
     <h1>my number is {numbers}</h1>
     <button type = "button" onClick = {()=>setNumbers("blue")}>Blue</button>
     <button type = "button" onClick = {()=>setNumbers("red")}>Red</button>
     <button type = "button" onClick = {()=>setNumbers("yellow")}>Yellow</button>
    {/* <UseState /> */}
    {/* <UseEffect1 /> */}
    {/* <Effect2/> */}
    {/* <Api /> */}
    <ContextReact />
    <ContextReact1 />
    <Ref />
    {/* <RefName /> */}
    </div>
    
  );
}

export default App;
