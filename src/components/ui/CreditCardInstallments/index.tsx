import React from "react";
import { useLocation } from "react-router-dom";
import Title from "../Title";
import VerticalLinearStepper from "../VerticalLinearStepper";
import TotalizerAccordion from "../TotalizerAccordion";
import UniqueIdentifier from "../UniqueIdentifier";

const ParcelamentoCartao: React.FC = () => {
  const location = useLocation();
  const payment = location.state?.payment;

  if (!payment) {
    return (
      <div className="flex-center">
        Erro: Nenhuma informação de pagamento disponível.
      </div>
    );
  }

  return (
    <>
      <div className="flex-center title-container-confirm-payment">
        <Title text={`Parcelamento com Cartão`} />
      </div>
      <div className="vertical-linear-stepper-container">
        <VerticalLinearStepper />
        <TotalizerAccordion />
        <UniqueIdentifier />
      </div>
    </>
  );
};

export default ParcelamentoCartao;
