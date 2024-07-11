import { useLocation } from "react-router-dom";
import Title from "../../components/ui/Title";
import CreditCardForm from "../../components/ui/CreditCardForm";

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
    </>
  );
};

export default CreditCardInstallments;
