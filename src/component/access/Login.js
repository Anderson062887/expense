import {useContext,useState,useEffect} from "react"
import { useNavigate,Link} from "react-router-dom";
import {HookContext} from "../context/context";
import {Loader} from "../Loader/Loader";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import "./actionForm.css";
import Error from "../Error/Error";
import {GetAllExpenses } from "../../backendroutes/expenseApi";
import {MdOutlineAlternateEmail,MdLockOutline} from "react-icons/md"


const useLogNavagate =()=>{
    const [islog,setLog] = useState(false);
    const navegate = useNavigate()

    const nav = ()=>setLog((log)=>!log)
    useEffect(()=>{
        if(islog){
         navegate("/");
        }
     },[islog])
     return nav;
}

const Login = ()=>{
    const {actions} = useContext(HookContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [user,setUser] = useState(false);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const nav = useLogNavagate()
  
    const handleSumit = async (e)=>{
      e.preventDefault();
      setLoading(true)
      try {
        const isAuth = await signInWithEmailAndPassword(getAuth(),email,password);
        if(isAuth){
            setUser(isAuth.user)
          actions.handleUser(isAuth.user);
        }
       
      } catch (error) {
        setLoading(false)
        setError(true);
       
      }
   
    }



    useEffect(()=>{
    
            if(user){
  
              const fetchAll = async ()=>{
              const token = await user.getIdToken();
                 GetAllExpenses(token).then( data =>{
                    actions.handleList(data)
                    setLoading(false)
                    nav(); 
                  }).catch(e => setError(e)) 
              }
              fetchAll();
            }  
    },[user])


  
    return(
        
        loading === true? (<Loader />):(
      <form onSubmit={handleSumit} className="action-form">
        <h2>Log in</h2>
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
           <span><MdLockOutline size={25}/></span>
          </div>
          
       </div>
        <button>login</button>
        <span className="form-footer">Don't have an account? <Link to="/signup">create account</Link></span>
      </form>)
        
    )
  }

  export default Login;