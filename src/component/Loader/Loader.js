import { useState, useEffect,useRef } from "react"




export const Loader = ({delay = 300,show="loading"})=>{
const [text,setText] = useState(show);
const id = useRef()

useEffect(()=>{
  id.current = setInterval(()=>{
        setText((ptext)=> ptext === show + "..."?show:ptext + ".")
    },300)
  return ()=> window.clearInterval(id.current)
},[delay])
  
  return(<div>
      <h2>{text}</h2>
  </div>)
}