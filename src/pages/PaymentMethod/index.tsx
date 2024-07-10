import PaymentOptionCard from "../../components/ui/PaymentOptionCard";
import Title from "../../components/ui/Title";

const PaymentMethod = () => {
  return (
    <div className="flex-center title-container">
      <Title text="João, como você quer pagar?" />
      <PaymentOptionCard
        primaryText="1x de 35mil"
        secondaryText="teste"
        label="pix"
      />
    </div>
  );
};

export default PaymentMethod;
