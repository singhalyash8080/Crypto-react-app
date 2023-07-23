import React from "react";
import "./GraphPoint.css";

interface GraphPointProps {
  pointColor: string;
  text: string;
  color?: string
}

const GraphPoint: React.FC<GraphPointProps> = ({ pointColor, text, color }) => {
  return (
    <div className="graphPointContainer">
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '20%'}}>
        <div className="point" style={{ backgroundColor: pointColor }}></div>
      </div>
      <p className="graphText" style={{color: color}}>{text}</p>
    </div>
  );
};

export default GraphPoint;
