import React, { useEffect, useState } from "react";
import "./index.css";

interface PaymentDueDateProps {
  daysToAdd: number;
}

const PaymentDueDate: React.FC<PaymentDueDateProps> = ({ daysToAdd }) => {
  const [dueDate, setDueDate] = useState<string>("");

  useEffect(() => {
    const calculateDueDate = () => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + daysToAdd);
      const formattedDate = currentDate.toLocaleDateString("pt-BR");
      const formattedTime = currentDate.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return `${formattedDate} - ${formattedTime}`;
    };

    setDueDate(calculateDueDate());
  }, [daysToAdd]);

  return (
    <div className="flex-center ">
      <span className="flex-column payment-due-date-text">
        Prazo de pagamento: <span className="payment-due-date">{dueDate}</span>
      </span>
    </div>
  );
};

export default PaymentDueDate;
