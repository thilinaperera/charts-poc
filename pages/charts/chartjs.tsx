import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getData } from "../../util/chart-data";
import Link from "next/link";

const { dataSet, labels } = getData();

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1000;
let largeDatasetLabels: string[] = [];
let largeDatasetData = [Math.random() * 300];
for (let i = 1; i < 20000; i++) {
    const now = new Date((base += oneDay));
    largeDatasetLabels.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    largeDatasetData.push(Math.round((Math.random() - 0.5) * 20 + largeDatasetData[i - 1]));
}
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const
        },
        title: {
            display: true,
            text: "Line Chart"
        }
    }
};

const ChartJs = () => {

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset",
                fill: "start",
                borderColor: "rgba(69, 59, 117, 1)",
                backgroundColor: (context: any, ...args: any) => {
                    const ctx = context.chart.ctx;
                    let chartWidth, chartHeight, gradient;
                    if (context.chart && context.chart?.chartArea) {
                         gradient = ctx.createLinearGradient(0, context.chart?.chartArea?.top, 0, context.chart?.chartArea?.bottom);
                         gradient.addColorStop(0, "rgba(82, 70, 198, 0.6)");
                         gradient.addColorStop(1, "rgba(255, 255, 255, 0.6)");
                    }
                    return gradient;
                },
                data: dataSet
            }
        ]
    }

    const largeData = {
        labels: largeDatasetLabels,
        datasets: [
            {
                label: "Large Dataset",
                fill: "start",
                borderColor: "rgba(69, 59, 117, 1)",
                backgroundColor: (context: any, ...args: any) => {
                    const ctx = context.chart.ctx;
                    let chartWidth, chartHeight, gradient;
                    if (context.chart && context.chart?.chartArea) {
                        gradient = ctx.createLinearGradient(0, context.chart?.chartArea?.top, 0, context.chart?.chartArea?.bottom);
                        gradient.addColorStop(0, "rgba(82, 70, 198, 0.6)");
                        gradient.addColorStop(1, "rgba(255, 255, 255, 0.6)");
                    }
                    return gradient;
                },
                data: largeDatasetData
            }
        ]
    }

    return (
        <div>
            <div style={{ width: "100%", maxWidth: "700px", maxHeight: "600px", margin: "50px auto" }}>
                <ul style={{ padding: "0 0 0 15px" }}>
                    <li><Link href="/">Home</Link></li>
                </ul>
                <Line options={options} data={data} />
                <Line options={options} data={largeData} />
            </div>
        </div>
    );
}

export default ChartJs;