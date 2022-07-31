import Chart from 'chart.js/auto';
import { Bar, Pie, Line } from 'react-chartjs-2';

export const ChartBar = () => {
    return(
        <div>
            <Bar data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'This Year',
                        data: [12, 5, 19, 6, 9, 12, 12, 5, 19, 6, 9, 12],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(201, 203, 27, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(75, 92, 19, 0.2)',
                            'rgba(25, 205, 86, 0.2)',
                            'rgba(153, 10, 255, 0.2)',
                            'rgba(154, 162, 235, 0.2)',
                            'rgba(54, 16, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(201, 203, 27)',
                            'rgb(75, 192, 192)',
                            'rgb(255, 205, 86)',
                            'rgb(153, 102, 255)',
                            'rgb(54, 162, 235)',
                            'rgb(75, 92, 19)',
                            'rgb(25, 205, 86)',
                            'rgb(153, 10, 255)',
                            'rgb(154, 162, 235)',
                            'rgb(54, 16, 235)',
                        ],
                        borderWidth: 1
                    }
                ]
            }} 
            width={600}
            height={400}
            options={{
                maintainAspectRatio: false
                
            }}
            />
        </div>
    )
}


export const ChartPie = () => {
    return (
        <div>
            <Pie data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: '',
                        data: [12, 5, 19, 6, 9, 12, 12, 5, 19, 6, 9, 12],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(201, 203, 27, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(75, 92, 19, 0.2)',
                            'rgba(25, 205, 86, 0.2)',
                            'rgba(153, 10, 255, 0.2)',
                            'rgba(154, 162, 235, 0.2)',
                            'rgba(54, 16, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(201, 203, 27)',
                            'rgb(75, 192, 192)',
                            'rgb(255, 205, 86)',
                            'rgb(153, 102, 255)',
                            'rgb(54, 162, 235)',
                            'rgb(75, 92, 19)',
                            'rgb(25, 205, 86)',
                            'rgb(153, 10, 255)',
                            'rgb(154, 162, 235)',
                            'rgb(54, 16, 235)',
                        ],
                        borderWidth: 1
                    }
                ]
            }}
                width={600}
                height={400}
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
            <Line data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: '',
                        data: [12, 5, 19, 6, 9, 12, 12, 5, 19, 6, 9, 12],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(201, 203, 27, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(75, 92, 19, 0.2)',
                            'rgba(25, 205, 86, 0.2)',
                            'rgba(153, 10, 255, 0.2)',
                            'rgba(154, 162, 235, 0.2)',
                            'rgba(54, 16, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(201, 203, 27)',
                            'rgb(75, 192, 192)',
                            'rgb(255, 205, 86)',
                            'rgb(153, 102, 255)',
                            'rgb(54, 162, 235)',
                            'rgb(75, 92, 19)',
                            'rgb(25, 205, 86)',
                            'rgb(153, 10, 255)',
                            'rgb(154, 162, 235)',
                            'rgb(54, 16, 235)',
                        ],
                        borderWidth: 1
                    }
                ]
            }}
                width={600}
                height={400}
                options={{
                    maintainAspectRatio: false

                }}
            />
        </div>
    )
}