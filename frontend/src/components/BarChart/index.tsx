import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/request";

type SeriesData = {
    name: string,
    data: number[]

}


type ChartData = {
    series: SeriesData[];
    labels: {
        categories: string[]
    };
}

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>(
        {
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });

    useEffect(()=>{

        //Fazer a requisição 
        axios.get(`${BASE_URL}/sales/success-by-seller`)
        .then( (response) =>{
            //Tratar os dados
            const data = response.data as SaleSuccess[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100 * x.deals / x.visited,1));

            //Forma correta a variavel executada agora é SetcartData
            setChartData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: " % Success",
                        data: mySeries
                    }
                ]
            }) ;

           

        });

    },[]);


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

   /* const mockData = {
        labels: {
            categories: ['Amazonia Azul', 'Moeda Verde', 'Souza Cruz', 'Embrasca', 'Sultão Agro Sustentável', 'Portos Sustentáveis', 'Amazon', 'Jhon Jhon', 'Mineração Sustentável', 'Multi Ambiental']
        },
        series: [
            {
                name: " Projetos",
                data: [15, 49, 21, 16, 55, 40, 31, 61, 25, 71]
            }
        ]
    };*/

    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );

}
export default BarChart;