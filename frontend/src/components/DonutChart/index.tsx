import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/request';

type ChartData = {
    series : number[];
    labels : string[];
}

const DonutChart = () => {

    //forma correta do chartData
    const [chartData,SetChartData] = useState<ChartData>({ labels:[] , series:[] });

    useEffect(()=>{

        axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then( (response) =>{
            
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            //Forma correta a variavel executada agora é SetcartData
            SetChartData({ labels:myLabels , series:mySeries }) ;

            //forma errada
            //chartData = { labels:myLabels , series:mySeries };

          //  console.log(chartData);

        });

    },[]);
    //forma errada do chartData
    //let chartData:ChartData ={ labels:[] , series:[] };


    //forma errada
  /*  axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then( (response) =>{
            
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            //Forma correta a variavel executada agora é SetcartData
            SetChartData({ labels:myLabels , series:mySeries }) ;

            //forma errada
            //chartData = { labels:myLabels , series:mySeries };

            console.log(chartData);

        });
    */

    // dados do estáticos do modelo
   /* const mockData = {
        series: [215, 43, 198, 91, 140],
        labels: ['Amazônico', 'Cerrado', 'Mata Atlântica', 'Pampa', 'Pantanal']
    }*/
    
    const options = {
        legend: {
            show: true
        }
    }

    return(
        <Chart 
            options={{...options, labels:chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );

}
export default DonutChart;