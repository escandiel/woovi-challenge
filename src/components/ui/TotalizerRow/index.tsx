import React from "react";
import "./index.css";

interface TotalizerRowProps {
  total: string;
}

const TotalizerRow: React.FC<TotalizerRowProps> = ({ total }) => {
  return (
    <div className="totalizer-row-container">
      <span className="totalizer-cet">CET: 0,5%</span>
      <span className="installment-total">{total}</span>
    </div>
  );
};

export default TotalizerRow;
