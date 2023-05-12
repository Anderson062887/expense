import {useState,useEffect} from "react"
import { useNavigate,Link} from "react-router-dom";
import {HookContext} from "../context/context";
import {Loader} from "../Loader/Loader";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import "./actionForm.css";
import Error from "../Error/Error";
import {MdOutlineAlternateEmail} from "react-icons/md";
import {AiOutlineEye} from "react-icons/ai";





const useLogNavagate =(route)=>{
    const [islog,setLog] = useState(false);
    const navegate = useNavigate()

    const nav = ()=>setLog((log)=>!log)

    useEffect(()=>{
        if(islog){
         navegate(route);
        }
     },[islog])
     return nav;
}

const SignUp = ()=>{
    // const {actions} = useContext(HookContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("")
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    const nav = useLogNavagate("/login")
  
    const handleSumit = async (e)=>{
      e.preventDefault();
           if(password === confirmPassword){
              setLoading(true)
                    try {
                    const isAuth = await createUserWithEmailAndPassword(getAuth(),email,password);
                    if(isAuth){
                        nav();
                    }
                    
                    } catch (error) {
                    setLoading(false)
                    setError(true);
                    
                    }
               }else{
                   setError(true)
               } 
            }

  
    return(
        
        loading === true? (<Loader />):(
      <form onSubmit={handleSumit} className="action-form">
        <h2>Sign Up</h2>
        {error && <Error message={"check credentials"} errorHandler={()=>setError(false)} />}
        <div className="form-input-section">
        <label htmlFor="email">Email:</label>

        <div className="inp-wrap">
              <input id="email"
              type="text"
                value={email}
                name="email"
                onChange={({target})=>setEmail(target.value)}/>
                  <span><MdOutlineAlternateEmail size={25}/></span>
             </div>
       </div>

       <div className="form-input-section">
        <label htmlFor="password">Password:</label>
          <div className="inp-wrap">
            <input id="password"
              type="password"
              value={password}
              name="password"
              onChange={({target})=>setPassword(target.value)}/>
            <span><AiOutlineEye size={26}/></span>
           </div>
       </div>

       <div className="form-input-section">
        <label htmlFor="confirmPassword">Confirm Password:</label>

        <div className="inp-wrap">
          <input id="confirmPassword"
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            onChange={({target})=>setConfirmPassword(target.value)}/>
           <span><AiOutlineEye size={26}/></span>
          </div>
       </div>



        <button>Sign up</button>
        <span className="form-footer">have an account? <Link to="/login">Sign Up</Link></span>
      </form>)
        
    )
  }

  export default SignUp;