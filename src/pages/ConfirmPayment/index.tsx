import { useLocation } from "react-router-dom";
import Title from "../../components/ui/Title";
import QRCode from "../../components/ui/QRCode";
import QRCodeButton from "../../components/ui/QRCodeButton";
import CopyPasteIcon from "../../components/ui/CopyPasteIcon";
import "./index.css";
import PaymentDueDate from "../../components/ui/PaymentDueDate";
import VerticalLinearStepper from "../../components/ui/VerticalLinearStepper";
import TotalizerAccordion from "../../components/ui/TotalizerAccordion";
import UniqueIdentifier from "../../components/ui/UniqueIdentifier";
import PaymentStepperContainer from "../../components/ui/PaymentStepperContainer";

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
      <div className="flex-column col-qrcode-container">
        <QRCode />
        <QRCodeButton text="Clique para copiar QR CODE" icon={CopyPasteIcon} />
      </div>
      <PaymentDueDate daysToAdd={7} />
      <PaymentStepperContainer />
    </>
  );
};

export default ConfirmPayment;
