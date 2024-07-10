import { useState } from "react";
import PaymentOptionCard from "../../components/ui/PaymentOptionCard";
import Title from "../../components/ui/Title";
import TopLabel from "../../components/ui/TopLabel";
import data from "../../mocks/db.json";
import "./index.css";

const PaymentMethod = () => {
  const firstInstallment = data.paymentMethods.installments[0];
  const installments = data.paymentMethods.installments.slice(1);
  const [checkedItem, setCheckedItem] = useState<number | null>(null);

  const handleCheckboxChange = (id: number | null, checked: boolean) => {
    setCheckedItem(checked ? id : null);
  };

  return (
    <>
      <div className="flex-center title-container">
        <Title text="João, como você quer pagar?" />
      </div>

      <div className="payment-option-card">
        <div className="payment-option-card-container">
          <TopLabel label="Pix" />
          <PaymentOptionCard
            installments={firstInstallment.label}
            paymentInstallment={firstInstallment.paymentInstallment}
            benefitPrefix={firstInstallment.benefitPrefix}
            benefitPercentage={firstInstallment.benefitPercentage}
            benefitSuffix={firstInstallment.benefitSuffix}
            highlight={firstInstallment.highlight}
            highlightValue={firstInstallment.highlightValue}
            checked={checkedItem === 0}
            onChange={(checked) => handleCheckboxChange(0, checked)}
          />
        </div>
      </div>
      <div className="payment-option-list">
        <TopLabel label="Pix Parcelado" />
        {installments.map((installment) => (
          <div
            key={installment.id}
            className={`payment-option-item ${
              checkedItem === installment.id ? "checked" : ""
            }`}
          >
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
              checked={checkedItem === installment.id}
              onChange={(checked) =>
                handleCheckboxChange(installment.id, checked)
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PaymentMethod;
