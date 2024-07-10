import React from "react";
import { Typography, Checkbox, FormControlLabel } from "@mui/material";
import TopLabel from "../TopLabel";
import CustomCard from "../CustomCard";
import "./index.css";

interface PaymentOptionCardProps {
  installments: string;
  value: string;
  benefitPrefix?: string;
  benefitPercentage?: string;
  benefitSuffix?: string;
  highlight?: string;
  highlightValue?: string;
  checked?: boolean;
  onChange?: () => void;
}

const PaymentOptionCard: React.FC<PaymentOptionCardProps> = ({
  checked,
  onChange,
  installments,
  value,
  benefitSuffix,
  benefitPrefix,
  benefitPercentage,
  highlight,
  highlightValue,
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
              <div className="benefit-container">
                <span className="label-benefit">{`${benefitPrefix}`}</span>
                <span className="label-benefit-percentage">{`${benefitPercentage} `}</span>
                <span className="label-benefit">{`${benefitSuffix}`}</span>
              </div>

              <div className="highlight-container">
                <span className="label-highlight-value">{`🤑 ${highlightValue} `}</span>
                <span className="label-highlight">{`${highlight} `}</span>
              </div>
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
