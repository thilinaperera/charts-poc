import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { getData } from "../../util/chart-data";
import Link from "next/link";

const { dataSet, labels } = getData();

let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1000;
let date: string[] = [];
let data = [Math.random() * 300];
for (let i = 1; i < 20000; i++) {
    const now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

export default function EchartsJs() {

    const option = {
        tooltip: {
            show: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: labels
        },
        yAxis: {
            type: 'value'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {
                    show: false
                }
            }
        },
        dataZoom: [
            {
                type: 'slider',
                show: true,
            },
            {
                type: 'slider',
                show: true,
                zoomOnMouseWheel: true,
            }
        ],
        series: [
            {
                data: dataSet,
                type: 'line',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(82, 70, 198, 0.6)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 255, 255, 0.6)'
                        }
                    ])
                },
            }
        ]
    };
    const optionSecond = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value'
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 20,
                zoomOnMouseWheel: true,
            },
            {
                start: 0,
                end: 20,
                zoomOnMouseWheel: true,
            }
        ],
        series: [
            {
                data: data,
                type: 'line',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(82, 70, 198, 0.6)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 255, 255, 0.6)'
                        }
                    ])
                },
            }
        ]
    };

    return (
        <div>
            <div style={{ width: "100%", maxWidth: "700px", maxHeight: "600px", margin: "50px auto" }}>
                <ul style={{ padding: "0 0 0 15px" }}>
                    <li><Link href="/">Home</Link></li>
                </ul>
                <ReactECharts option={option} />
                <ReactECharts option={optionSecond} />
            </div>
        </div>
    );
}
