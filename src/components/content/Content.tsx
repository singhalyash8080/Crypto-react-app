import React, { useEffect, useState } from "react";
import "./Content.css";
import CurrencyInfo from "./currencyInfo/CurrencyInfo";
import Tabs from "./tabs/Tabs";
import CurrencyGraph from "./currencyGraph/CurrencyGraph";
import Buttons from "./buttons/Buttons";

const Content: React.FC = () => {
  const [graphData, setGraphData] = useState([
    { name: "January", uv: 400, pv: 2400, amt: 2400 },
    { name: "February", uv: 300, pv: 1398, amt: 2210 },
    { name: "March", uv: 200, pv: 9800, amt: 2290 },
    { name: "April", uv: 278, pv: 3908, amt: 2000 },
  ]);

  useEffect(()=>{
    console.log(graphData) 
  }, [graphData])

  return (
    <div className="contentContainer">
      <div className="contentBox">
        <br/> 
        <CurrencyInfo />
        <br />
        <Tabs graphData={graphData} setGraphData={setGraphData} />
        <br />
        <CurrencyGraph graphData={graphData} />
        <br />
        <Buttons />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Content;
