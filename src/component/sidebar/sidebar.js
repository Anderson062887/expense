import {MdOutlineAssignment,MdDashboard,MdCreateNewFolder,MdViewHeadline} from "react-icons/md"
import "./sidebar.css";
import {NavLink} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import {HookContext} from "../context/context"

const useWindowSize = ()=>{
    const [size,setSize] = useState(window.innerWidth);
    useEffect(()=>{
        window.addEventListener("resize",({target})=>{
           setSize(target.innerWidth)
        })
     
        return ()=>window.removeEventListener("resize",(target)=>setSize(target.innerWidth))
    },[])

   

    return size;
}

const SideBar = ()=>{
    const size = useWindowSize();
    const [show,setShow] = useState(false);
    const {user} = useContext(HookContext)

    return(
        
        <div className="sidebar">
            <div className="sidebar-header">
            <h1>Expense</h1>
            {size <= 1120 && <button onClick={()=> setShow(!show)}><MdViewHeadline size={34}></MdViewHeadline></button>}
            </div>

            { (show && size <= 1120)&&(
                <div className={show && "visible"}>
                    <nav>
                        <ul>
                        <li><NavLink to="/"><span className="icon"><MdDashboard size={34}></MdDashboard></span> Dashboard</NavLink></li>
                            <li><NavLink  to="/expense"><span className="icon"><MdOutlineAssignment size={34}></MdOutlineAssignment></span> New expense</NavLink></li>
                            <li><NavLink   to="/list"><span className="icon"><MdCreateNewFolder size={34}></MdCreateNewFolder></span> View expenses</NavLink></li>
                        </ul>
                    </nav>
                </div>

            )}
            
            {size > 1121 &&(
            <nav>
                <ul>
                   <li><NavLink to="/"><span className="icon"><MdDashboard size={34}></MdDashboard></span> Dashboard</NavLink></li>
                    <li><NavLink  to="/expense"><span className="icon"><MdOutlineAssignment size={34}></MdOutlineAssignment></span> New expense</NavLink></li>
                    <li><NavLink   to="/list"><span className="icon"><MdCreateNewFolder size={34}></MdCreateNewFolder></span> View expenses</NavLink></li>
                </ul>
            </nav>)
            }

        </div>
    )
}
export default SideBar;