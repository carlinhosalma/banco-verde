import Chart from "react-apexcharts";

const DonutChart = () => {
    
    const mockData = {
        series: [215, 43, 198, 91, 140],
        labels: ['Amazônico', 'Cerrado', 'Mata Atlântica', 'Pampa', 'Pantanal']
    }
    
    const options = {
        legend: {
            show: true
        }
    }

    return(
        <Chart 
            options={{...options, labels:mockData.labels}}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );

}
export default DonutChart;