
import {GetAllExpenses} from "./expenseApi"
const base = "http://localhost:5000";

export const getall = async (auth)=>{
    try {
        const info = await fetch(base);
        const  data = await info.json();
        return data
    } catch (error) {
        console.log(error)
    }
    
}



export const createExpense = async (data)=>{
       try {
           const newExpense = await fetch(`${base}/create`,{
               method:"POST",
            //    mode:"cors",
               credentials:"same-origin",
               headers:{
                'Content-Type': 'application/json'
               },
               body:JSON.stringify(data)
           })

            // console.log(newExpense.json())
           const info = await newExpense.json();
           return info;
           
       } catch (error) {
           console.log(error)
       }
}

export const singIn = async ()=>{
    try {
        const user = await fetch(`${base}/signin`)
        const userdata = await user.json();
        return userdata;
    } catch (error) {
        console.log(error)
    }
   
}



export const logUser = async ()=>{
   let data = Promise.all([singIn(),GetAllExpenses()]).then(([user,data])=>({user,data})); 
   return data
}