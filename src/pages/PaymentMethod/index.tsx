import PaymentOptionCard from "../../components/ui/PaymentOptionCard";
import Title from "../../components/ui/Title";
import data from "../../mocks/db.json";

const PaymentMethod = () => {
  const firstInstallment = data.paymentMethods.installments[0];

  return (
    <>
      <div className="flex-center title-container">
        <Title text="João, como você quer pagar?" />
      </div>
      <PaymentOptionCard
        installments={firstInstallment.label}
        value={firstInstallment.amount}
        benefitPrefix={firstInstallment.benefitPrefix}
        benefitPercentage={firstInstallment.benefitPercentage}
        benefitSuffix={firstInstallment.benefitSuffix}
        highlight={firstInstallment.highlight}
        highlightValue={firstInstallment.highlightValue}
      />
    </>
  );
};

export default PaymentMethod;
