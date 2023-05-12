import{ useState, useEffect } from "react";

export default function useSort(list) {

    const [criteria,setCriteria] = useState(1);
    const [arrayList,setArray] = useState(list)
 
    
const handleCriteria = (sortby)=> setCriteria(sortby)

        useEffect(()=>{
        setArray(list)
        },[list])
    
    useEffect(()=>{ 
        console.log(arrayList) 
      let newSorted = arrayList.sort((a,b)=> a.categoria[0] < b.categoria[0]? -1 : 1)
   
      setArray(newSorted)
    },
    [criteria])

    return [arrayList,handleCriteria];
}


export const reducer = (state,action)=>{

        // if (action.type === "A-Z") {
        //     return [...state.sort((a,b)=> a.company < b.company? -1 : 1)]
        // } else if(action.type === "Z-A"){
        //     return [...state.sort((a,b)=> b.company < a.company? -1 : 1)]
        //  }else if(action.type === "fetch"){
        //      return [...action.payload]
        // }else if(action.type === "acending"){
        //     return [...state.sort((a,b)=> a.categoria < b.categoria? -1 : 1)]
        // }else if(action.type === "decending"){
        //     return [...state.sort((a,b)=> b.categoria < a.categoria? -1 : 1)]
        // }else{
        //     throw new Error("error on reducer hook")
        // }

        switch (action.type) {          
              case "up":   
                  return [...state.sort((a,b)=> a[action.cat] < b[action.cat]? -1 : 1)]  
              case "down": 
                   return [...state.sort((a,b)=> b[action.cat] < a[action.cat]? -1 : 1)] 
               case"major":   
                   return [...state.sort((a,b)=> parseInt(a[action.cat]) - parseInt(b[action.cat]))]  
               case "menor": 
                    return [...state.sort((a,b)=> parseInt(b[action.cat]) - parseInt(a[action.cat]))] 
               case "fetch" :
                    return [...action.payload]
            default:
                return state;
        }

}
