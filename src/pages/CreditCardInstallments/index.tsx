import { useLocation } from "react-router-dom";
import Title from "../../components/ui/Title";
import CreditCardForm from "../../components/ui/CreditCardForm";
import UniqueIdentifier from "../../components/ui/UniqueIdentifier";
import VerticalLinearStepper from "../../components/ui/VerticalLinearStepper";
import TotalizerAccordion from "../../components/ui/TotalizerAccordion";

const CreditCardInstallments = () => {
  const location = useLocation();
  const payment = location.state?.payment;

  if (!payment) {
    return (
      <div className="flex-center">
        Erro: Nenhuma informação de pagamento disponível.
      </div>
    );
  }

  const totalInstallments = parseInt(payment.label.replace("x", ""));
  const remainingInstallments = totalInstallments - 1;

  return (
    <>
      <div className="flex-center title-container-confirm-payment">
        <Title
          text={`João, pague o restante em ${remainingInstallments}x no cartão`}
        />
      </div>
      <CreditCardForm />
      {/* <UniqueIdentifier /> */}
      <div className="vertical-linear-stepper-container">
        <VerticalLinearStepper />
        <TotalizerAccordion />
        <UniqueIdentifier />
      </div>
    </>
  );
};

export default CreditCardInstallments;
