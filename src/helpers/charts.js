import Chart from 'chart.js/auto';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {data} from './chart-data'

export const ChartBar = () => {
    return(
        <div>
            <Bar data={{...data.bar}}/>
        </div>
    )
}


export const ChartPie = () => {
    return (
        <div>
            <Pie data={{...data.bar}}
                width={450}
                height={250}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    )
}

export const ChartLine = () => {
    return (
        <div>
            <Line data={{...data.bar}}
                width={450}
                height={250}                
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}