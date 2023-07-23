import React, { useState } from "react";
import "./CircularIcon.css";

interface CircularIconProps {
  icon: JSX.Element; 
  backgroundColor?: string
}

const CircularIcon: React.FC<CircularIconProps> = ({ icon, backgroundColor }) => {
  return <div className="circular-icon" style={{backgroundColor: backgroundColor}}>{icon}</div>;
};

export default CircularIcon;
