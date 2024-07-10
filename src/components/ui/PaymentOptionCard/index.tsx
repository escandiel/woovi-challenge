import React from "react";
import { Typography, Checkbox, FormControlLabel } from "@mui/material";
import TopLabel from "../TopLabel";
import CustomCard from "../CustomCard";
import "./index.css";

interface PaymentOptionCardProps {
  installments: string;
  value: string;
  benefit?: string;
  highlight?: string;
  checked?: boolean;
  onChange?: () => void;
}

const PaymentOptionCard: React.FC<PaymentOptionCardProps> = ({
  checked,
  onChange,
  installments,
  value,
  benefit,
  highlight,
}) => {
  return (
    <CustomCard>
      <TopLabel label="Pix"></TopLabel>
      <FormControlLabel
        label={
          <div>
            <div className="flex-start label-monetary">
              <span className="label-monetary-text label-installments">{`${installments}`}</span>
              <span className="label-monetary-text label-value">{`${value}`}</span>
            </div>
            <div className="flex-column">
              <span className="label-benefit">{`${benefit} `}</span>
              <span className="label-highlight">{`${highlight} `}</span>
            </div>
          </div>
        }
        control={<Checkbox checked={checked} onChange={onChange} />}
        sx={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          width: "100%",
          margin: "0",
        }}
      />
    </CustomCard>
  );
};

export default PaymentOptionCard;
