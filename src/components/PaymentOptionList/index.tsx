import { useState } from "react";
import PaymentOptionCard from "../../components/ui/PaymentOptionCard";
import data from "../../mocks/db.json";
import TopLabel from "../ui/TopLabel";
import "./index.css";

const PaymentOptionList = () => {
  const installments = data.paymentMethods.installments.slice(1);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckboxChange = (id: number, checked: boolean) => {
    setCheckedItems((prevCheckedItems) =>
      checked
        ? [...prevCheckedItems, id]
        : prevCheckedItems.filter((item) => item !== id)
    );
  };

  return (
    <div className="payment-option-list">
      <TopLabel label="Pix Parcelado" />
      {installments.map((installment) => (
        <div
          key={installment.id}
          className={`payment-option-item ${
            checkedItems.includes(installment.id) ? "checked" : ""
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
            checked={checkedItems.includes(installment.id)}
            onChange={(checked) =>
              handleCheckboxChange(installment.id, checked)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default PaymentOptionList;
