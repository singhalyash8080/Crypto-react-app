import React from "react";
import "./CurrencyGraph.css";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import GraphPoint from "../../common/graphPoint/GraphPoint";

interface CurrencyGraphProps {
  graphData: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
}

const CurrencyGraph: React.FC<CurrencyGraphProps> = ({ graphData }) => {
  console.log(graphData);
  return (
    <div className="currencyGraphContainer">
      <div className="graph">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <GraphPoint pointColor="#ef2755" text="Lower: $4.895" />
          <GraphPoint pointColor="#1ec070" text="Higher: $6.857" />
        </div>
        <br/>
        <ResponsiveContainer
          width="80%"
          height="40%"
        >
          <LineChart width={400} height={400} data={graphData}>
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#FF9B21"
              strokeWidth={5}
            />
          </LineChart>
        </ResponsiveContainer>
        <GraphPoint pointColor="#ff8f17" text="1BTC = $5.483" color="#4c5968"/>
      </div>
    </div>
  );
};

export default CurrencyGraph;
