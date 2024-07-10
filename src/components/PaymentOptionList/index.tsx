import PaymentOptionCard from "../../components/ui/PaymentOptionCard";
import data from "../../mocks/db.json";
import TopLabel from "../ui/TopLabel";
import "./index.css";

const PaymentOptionList = () => {
  const installments = data.paymentMethods.installments.slice(1);

  return (
    <div className="payment-option-list">
      <TopLabel label="Pix Parcelado" />
      {installments.map((installment) => (
        <div key={installment.id} className="payment-option-item">
          <PaymentOptionCard
            installments={installment.label}
            amount={installment.amount}
            paymentInstallment={installment.paymentInstallment}
            benefitPrefix={installment.benefitPrefix || ""}
            benefitPercentage={installment.benefitPercentage || ""}
            benefitSuffix={installment.benefitSuffix || ""}
            highlight={installment.highlight || ""}
            highlightValue={installment.highlightValue || ""}
            useListCard={true}
          />
        </div>
      ))}
    </div>
  );
};

export default PaymentOptionList;
