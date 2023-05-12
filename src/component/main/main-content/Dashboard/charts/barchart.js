// import {Chart} from "chart.js";
import {useState,useEffect} from "react"
import {Bar} from "react-chartjs-2";
import "../dashboard.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



  
export const BarChart = ({chartData})=>{


const list = chartData.map(i =>({categoria:i.categoria,cantidad:parseInt(i.cantidad)}))
.reduce((a,n)=>{
  for (const i of a) {
    if(i.categoria === n.categoria){
      i.cantidad += n.cantidad;
     return [...a]
    }
  }
  return[...a,n]
},[])


    //  const[data,setData] = useState({
    //         labels:list.map(x => x.categoria),
    //         datasets: [
    //           {
    //             label: 'Gastos por categoria',
    //             data:list.map(x => x.cantidad),
    //             backgroundColor: '#595A9D',
    //           }
             
    //         ],
    //       })

          const staticData = {
            labels:list.map(x => x.categoria),
            datasets: [
              {
                label: 'Gastos por categoria',
                data:list.map(x => x.cantidad),
                backgroundColor: '#595A9D',
              }
             
            ],
          }

        //  useEffect(()=>{
          
        //    setData(
        //     {
        //       labels:list.map(x => x.categoria),
        //       datasets: [
        //         {
        //           label: 'Gastos por categoria',
        //           data:list.map(x => x.cantidad),
        //           backgroundColor: '#595A9D',
        //         }
               
        //       ],
        //     } 

        //    )
        //  },[chartData])

    return <div className="chart"><Bar data={staticData} /></div>
   
}