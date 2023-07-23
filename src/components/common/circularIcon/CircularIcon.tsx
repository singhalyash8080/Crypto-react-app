import React, { useState } from "react";
import "./CircularIcon.css";

interface CircularIconProps {
  icon: JSX.Element; 
  backgroundGradient?: string
}

const CircularIcon: React.FC<CircularIconProps> = ({ icon, backgroundGradient }) => {
  return <div className="circular-icon" style={{backgroundImage: backgroundGradient}}>{icon}</div>;
};

export default CircularIcon;
