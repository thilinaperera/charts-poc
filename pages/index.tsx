import Link from "next/link";
export default function IndexPage() {
  return (
      <div style={{ margin: "50px auto", display: "block" }}>
          <div style={{ width: "100%", maxWidth: "700px", maxHeight: "600px", margin: "auto" }}>
              <h3>Charts</h3>
              <ul style={{ padding: "0 0 0 15px" }}>
                  <li><Link href="/charts/chartjs">chart js</Link></li>
                  <li><Link href="/charts/echartsjs">echarts js</Link></li>
                  <li><Link href="/charts/recharts">Recharts</Link></li>
                  <li><Link href="/charts/nivo">Nivo</Link></li>
                  <li><Link href="/charts/highcharts">highcharts</Link></li>
              </ul>
          </div>
      </div>
  );
}
