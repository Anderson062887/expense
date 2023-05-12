import "./expenseList.css";
import useSort,{reducer} from "../../../Sort";
import { useState, useReducer, useEffect, useCallback} from "react";
import { MdArrowDropDown,MdArrowDropUp} from "react-icons/md"


const btnStyle= {border:"none",backgroundColor:"white",cursor:"pointer"}
const reducerAction = {acending:"up",decending:"down"}
const reducerActionCantida = Object.freeze({acending:"major",decending:"menor"})




const SortBtn = ({dispatch,action,cat})=>{
    const [state,toggle] = useReducer(prevState => !prevState,true);
    const handleChange = ()=>{
         if(state){
            dispatch({type:action.acending,cat})
            toggle()
         }else{
            dispatch({type:action.decending,cat})
            toggle()
         }
    }
    return(
        <button style={btnStyle} onClick={handleChange}>
        {state?<MdArrowDropDown size={28}/>:<MdArrowDropUp size={28} />}</button>   
    )  
}
const TableRow = ({list})=>{
    return(  <>
        {list.map((e,i)=> <tr key={i} style={{borderBottom:"0.1px solid"}}>
            <td style={{width:"5%"}}>{i}</td>
            <td style={{width:"30%",textAlign:"left"}}>{e.company}</td> 
            <td style={{width:"25%"}}>{e.categoria}</td>
            <td style={{width:"25%"}} >{e.ptype}</td>
            <td style={{width:"15%"}}>${e.cantidad}</td></tr>)}
        </>
    )
}


export const List =({list})=>{ 
// const [array,handleCriteria] = useSort(list);

const [data,dispatch] = useReducer(reducer,[])
 useEffect(()=>{
 dispatch({type:"fetch",payload:list})
 },[list])

    return(
        <div className="list-wrapper">
            <div className="header-box">
                <h1>Lista de Gastos</h1> 
                <p>Lista de todos los gastos hecho por Gr Fresh</p> 
            </div>
           
            <div className="clear-header"></div>
           
            <section className="table-content">
                        <table>
                        {/* className="list */}
                            <thead style={{color:"#595A9D"}}>
                                <tr>
                                <th style={{width:"5%"}}>#</th>
                                <th style={{textAlign:"left",width:"30%"}}><span>Compania</span><SortBtn cat={"company"}dispatch={dispatch} action={reducerAction} /></th>
                                <th style={{width:"25%"}}><span>Categoria</span><SortBtn cat={"categoria"} dispatch={dispatch} action={reducerAction}/></th>
                                <th style={{width:"25%"}}><span>Payment Type</span><SortBtn  cat={"ptype"}dispatch={dispatch} action={reducerAction}/> </th>
                                <th style={{width:"15%"}}><span>Cantidad</span><SortBtn  cat={"cantidad"}dispatch={dispatch} action={reducerActionCantida}/> </th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            <TableRow list={data} />
                            </tbody>
                           
                        </table>
                        </section>
        </div>
    )
}