import {useEffect} from "react";



export default Error = ({message,errorHandler})=>{

    useEffect(()=>{
        const id = setTimeout(()=>{
           errorHandler();
        },2000);

        return ()=> clearTimeout(id)
    },[])

    return(
        <span 
        style={{backgroundColor:"lightcoral",color:"white",padding:"10px",borderRadius:"6px"}}>
        { message}
        </span>
    )
}