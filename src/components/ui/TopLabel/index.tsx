import React from "react";
import "./index.css";

interface TopLabelProps {
  label: string;
}

const TopLabel: React.FC<TopLabelProps> = ({ label }) => {
  return <div className="top-label">{label}</div>;
};

export default TopLabel;
