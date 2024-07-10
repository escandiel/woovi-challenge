import { useLocation } from "react-router-dom";
import Title from "../../components/ui/Title";

const ConfirmPayment = () => {
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
    <Title
      text={`João, pague a entrada de R$ ${payment.paymentInstallment} pelo Pix`}
    />
  );
};

export default ConfirmPayment;
