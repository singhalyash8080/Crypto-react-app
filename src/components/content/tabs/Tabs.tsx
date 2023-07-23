
import React, { useState } from "react";
import "./Tabs.css"; 
interface TabProps {
  graphData: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
  setGraphData: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        uv: number;
        pv: number;
        amt: number;
      }[]
    >
  >;
}

const Tabs: React.FC<TabProps> = ({ graphData, setGraphData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Day" },
    { label: "Week" },
    { label: "Month" },
    { label: "Year" },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);

    for (let i = graphData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [graphData[i], graphData[j]] = [graphData[j], graphData[i]];
    }

    let shuffledGraphData: { name: string; uv: number; pv: number; amt: number; }[] = []

    graphData.forEach(data=> shuffledGraphData.push(data))

    setGraphData(shuffledGraphData);
  };

  return (
    <div className="tabs-switch">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
