import { useLocation } from "react-router-dom";
import Title from "../../components/ui/Title";
import QRCode from "../../components/ui/QRCode";

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
    <>
      <div className="flex-center title-container-confirm-payment">
        <Title
          text={`João, pague a entrada de R$ ${payment.paymentInstallment} pelo Pix`}
        />
      </div>
      <div className="flex-center">
        <QRCode />
      </div>
    </>
  );
};

export default ConfirmPayment;
