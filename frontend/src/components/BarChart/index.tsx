import Chart from "react-apexcharts";

const BarChart = () => {
    

const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
const mockData = {
        labels: {
            categories: ['Amazonia Azul', 'Moeda Verde', 'Souza Cruz', 'Embrasca', 'Sultão Agro Sustentável','Portos Sustentáveis','Amazon','Jhon Jhon','Mineração Sustentável','Multi Ambiental']
        },
        series: [
            {
                name: " Projetos",
                data: [15, 49, 21, 16, 55,40,31,61,25,71]                   
            }
        ]
    };

    return(
        <Chart 
            options={{...options, xaxis:mockData.labels}}
            series={mockData.series}
            type="bar"
            height="240"
        />
    );

}
export default BarChart;