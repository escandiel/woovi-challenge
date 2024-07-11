import React from "react";
import VerticalLinearStepper from "../VerticalLinearStepper";
import TotalizerAccordion from "../TotalizerAccordion";
import UniqueIdentifier from "../UniqueIdentifier";
import "./index.css";

const PaymentStepperContainer: React.FC = () => {
  return (
    <div className="vertical-linear-stepper-container">
      <VerticalLinearStepper />
      <TotalizerAccordion />
      <UniqueIdentifier />
    </div>
  );
};

export default PaymentStepperContainer;
