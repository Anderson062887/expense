import {useState,useContext} from "react"
import "./form.css"
import {createExpense} from "../../../../backendroutes/generalRoutes";
import {CreateExpense} from "../../../../backendroutes/expenseApi";
import {HookContext} from "../../../context/context"





const Form = (props)=>{
const {user} =  useContext(HookContext)
const [inps,setInps] = useState({
  company:"",
  cantidad:0,
  categoria:"",
  ptype:"",
  date:"",  
})

const handleChange = e =>{
    const {name,value} = e.target;
    setInps((prev)=>{
      return{
          ...prev,
          [name]:value
      }
    })
}

const handleSubmit = async (e)=>{
    e.preventDefault();
    //  await createExpense(inps)
  
    const token = await user.getIdToken();
  
    let res = await CreateExpense(inps,token)

    props.handlelist([inps])
    
    setInps({
        company:"",
        cantidad:0,
        categoria:"",
        ptype:"",
        date:"",  
      })
}

    return(
        <form className="main-form" onSubmit={handleSubmit}>
            <div className="form-header">
            <h2> Expenses</h2>
            <p>Este formulario es para recopilar informacion sobre sus gastos</p>
            </div>
            <div className="clear"></div>
             

             <fieldset className="form-group-primary"> 
            <div className="f-input">
                {/* <label htmlFor="name">Company</label> */}
                <input type="text"  placeholder="Company" id="name"
                name="company"
                 value={inps.company}
                 onChange={handleChange}/>
            </div>
            </fieldset>

          


            <fieldset className="form-group-detail"> 
            <legend>Details</legend>
                        <div className="f-input">
                        <label htmlFor="Cantidad">Cantidad</label>
                            <input type="number" id="Cantidad"  placeholder="Cantidad" 
                            name="cantidad"
                            value={inps.cantidad}
                            onChange={handleChange}/>
                        </div>


                        <div className="f-input">
                        <label htmlFor="Categoria">Categoria</label>
                            {/* <input type="text" id="Categoria" /> */}
                            <select value={inps.categoria} onChange={handleChange} name="categoria">
                            <option></option>
                                <option>Repair</option>
                                <option>mantenimiento</option>
                                <option>payroll</option>
                                <option>feul</option>
                                <option>labor</option>

                            </select>
                        </div>
                        <div className="f-input">
                        <label htmlFor="ptype">Payment type</label>
                        <select value={inps.ptype} onChange={handleChange} name="ptype">
                        <option defaultValue=" "></option>
                                <option>Cash</option>
                                <option>Zelle</option>
                                <option>Credit card</option>
                                <option>Devit Card</option>
                                

                            </select>
                        </div>
                        <div className="f-input">
                        <label htmlFor="date">Date</label>
                            <input type="date" value={inps.date} onChange={handleChange} name="date" />
                        </div>
            </fieldset>
            
            <button className="active">Submit</button>
        </form>
    )
}

export {Form};