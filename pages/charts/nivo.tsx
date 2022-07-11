import { ResponsiveLine } from "@nivo/line"
import { getData } from "../../util/chart-data";
import Link from "next/link";

let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1000;
const largeData: any[] | undefined = [];
for (let i = 1; i < 20; i++) {
    const now = new Date((base += oneDay));
    largeData.push({
        x: [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        y: Math.round((Math.random() - 0.5) * 20)
    });
}

const { dataSet, labels } = getData();
const data = dataSet.map((dataItem: any, index: number) => {
    return {
        x: labels[index],
        y: dataItem
    };
});

const Recharts  = () => {

    return (
        <div style={{ width: "100%", maxWidth: "700px", height: "600px", margin: "50px auto" }}>
            <ul style={{ padding: "0 0 0 15px" }}>
                <li><Link href="/">Home</Link></li>
            </ul>
            <ResponsiveLine
                data={[{ id: "test-2", data: data }]}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                enableArea={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />

            <ResponsiveLine
                data={[{ id: "test", data: largeData }]}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                enableArea={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
}

export default Recharts;
