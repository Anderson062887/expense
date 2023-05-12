import {BarChart} from "./charts/barchart"
import "./dashboard.css"
export const Dashboard =({list})=>{
    return(
        <div>
            <h1>Dashboard</h1>
            <div className="chart-wrapper">
            <BarChart chartData={list} />
            </div>
           
        </div>
    )
}