import PaymentOptionCard from "../../components/ui/PaymentOptionCard";
import data from "../../mocks/db.json";

const PaymentOptionList = () => {
  const installments = data.paymentMethods.installments.slice(1);

  return (
    <>
      {installments.map((installment) => (
        <PaymentOptionCard
          key={installment.id}
          installments={installment.label}
          amount={installment.amount}
          paymentInstallment={installment.paymentInstallment}
          benefitPrefix={installment.benefitPrefix || ""}
          benefitPercentage={installment.benefitPercentage || ""}
          benefitSuffix={installment.benefitSuffix || ""}
          highlight={installment.highlight || ""}
          highlightValue={installment.highlightValue || ""}
        />
      ))}
    </>
  );
};

export default PaymentOptionList;
