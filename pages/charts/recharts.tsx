import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from "recharts";
import { getData } from "../../util/chart-data";
import Link from "next/link";

let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1000;
const largeData: any[] | undefined = [];
for (let i = 1; i < 20000; i++) {
    const now = new Date((base += oneDay));
    largeData.push({
        name: [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        value: Math.round((Math.random() - 0.5) * 20)
    });
}

const { dataSet, labels } = getData();
const data = dataSet.map((dataItem: any, index: number) => {
    return {
        name: labels[index],
        value: dataItem
    };
});

const Recharts  = () => {


    return (
        <div style={{ width: "100%", maxWidth: "700px", maxHeight: "600px", margin: "50px auto" }}>
            <ul style={{ padding: "0 0 0 15px" }}>
                <li><Link href="/">Home</Link></li>
            </ul>
            <AreaChart width={700} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis dataKey="value" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>

            <AreaChart width={700} height={250} data={largeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis dataKey="value" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </div>
    );
}

export default Recharts;
