import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official"
import { getData } from "../../util/chart-data";
import Link from "next/link";

let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1000;
const largeDataSets: any[] | undefined = [];
const largeDataLabels: any[] | undefined = [];
for (let i = 1; i < 20000; i++) {
    const now = new Date((base += oneDay));
    largeDataSets.push(Math.round((Math.random() - 0.5) * 20));
    largeDataLabels.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
}

const { dataSet, labels } = getData();

const options = {
    title: {
        text: 'Small dataset'
    },
    xAxis: {
        categories: labels
    },
    rangeSelector: {
        selected: 1
    },
    series: [{
        name: 'Sample Data',
        data: dataSet,
        type: 'area',
        threshold: null,
        tooltip: {
            valueDecimals: 2
        }
    }]
}

const optionsLargeDataset = {
    title: {
        text: 'Large dataset'
    },
    xAxis: {
        categories: largeDataLabels
    },
    navigator: {
        enabled: true
    },
    series: [{
        name: 'Large Data Set',
        data: largeDataSets,
        type: 'area',
    }]
}

const HighCharts  = () => {

    return (
        <div style={{ width: "100%", maxWidth: "700px", maxHeight: "600px", margin: "50px auto" }}>
            <ul style={{ padding: "0 0 0 15px" }}>
                <li><Link href="/">Home</Link></li>
            </ul>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
            <HighchartsReact
                highcharts={Highcharts}
                options={optionsLargeDataset}
            />
        </div>
    );
}

export default HighCharts;
