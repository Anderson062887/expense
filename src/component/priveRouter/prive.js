import {useEffect,useContext} from "react";
import {useNavigate} from "react-router-dom"
import {HookContext} from "../context/context";
import {Loader} from "../Loader/Loader"

const PrivateRoute = ({element})=>{
  const {user} = useContext(HookContext)
  
  const navigate = useNavigate();

      useEffect(() => {
      if (!user) {
        navigate("/login");
      }
    }, [user]);  

   // return element; 
  return user?element:<Loader delay={300} show={"Loading"} />; 
       
}



export default PrivateRoute;