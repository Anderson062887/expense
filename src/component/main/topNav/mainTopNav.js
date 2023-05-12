import {useContext} from "react"
import "./topNav.css";
import {Link} from "react-router-dom";
import {MdPerson,MdLogout} from "react-icons/md";
import {signOut,getAuth} from "firebase/auth";
import { Consumer,HookContext } from "../../context/context";


const Topnav = ()=>{
    const{user,actions} = useContext(HookContext)
   
    
    return(

    <div className="top-nav">
         <h2>{user !== null? user.email:"Loading ..."}</h2>
                <nav> 
                {user  &&
                    <ul>
                        
                        <li><Link to="/"><MdPerson size={30} ></MdPerson></Link></li>
                        <li><button style={{border:"none",cursor:"pointer"}} onClick={()=>{
                            actions.handleLogOut();
                            signOut(getAuth());
                            }}><MdLogout size={30}></MdLogout></button></li>
                    </ul>
                }
                </nav>
      </div> 
      )    
}





const Bopnav = ()=>{
    // console.log(user)
    return(
       <Consumer>
           {({user})=>{
              
               
               return(
                <div className="top-nav">
                <h2>{user !== null? user.name:"Loading ..."}</h2>
                <nav> 
                    
                    <ul>
                        <li><Link to="/"><MdPerson size={30} ></MdPerson></Link></li>
                        <li><Link to="/logout"><MdLogout size={30}></MdLogout></Link></li>
                    </ul>
                </nav>
            </div> )
           }}
 
        </Consumer>  
                    )
}
export default Topnav;