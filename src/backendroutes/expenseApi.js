const base = "http://localhost:5000/api";
const gurl = `https://expenses-d5c90.ue.r.appspot.com/api`


export const firebaseAuth =  async(token)=>{
    try {
        const info = await fetch(gurl)
        const  data = await info.json();
        return data
    } catch (error) {
        console.log(error)
    }
   

}


export const GetAllExpenses = async(token)=>{
    try {
        const data = await fetch(gurl,{
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    "authToken":token,
                  }
            })
        return data.json();
    } catch (error) {
        console.log(error)
    }
}
export const CreateExpense = async (data,token)=>{
    try {
        const newExpense = await fetch(`${gurl}/create`,{
            method:"POST",
         //    mode:"cors",
            credentials:"same-origin",
            headers:{
             'Content-Type': 'application/json',
             "authToken":token,
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