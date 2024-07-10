import React from "react";
import { Typography, Checkbox, FormControlLabel, Box } from "@mui/material";
import TopLabel from "../TopLabel";
import CustomCard from "../CustomCard";

interface PaymentOptionCardProps {
  installments: string;
  value: string;
  secondaryText: string;
  checked?: boolean;
  onChange?: () => void;
}

const PaymentOptionCard: React.FC<PaymentOptionCardProps> = ({
  secondaryText,
  checked,
  onChange,
  installments,
  value,
}) => {
  return (
    <CustomCard>
      <TopLabel label="Pix"></TopLabel>
      <FormControlLabel
        label={
          <Box>
            <Typography variant="h6">{`${installments} ${value}`}</Typography>
            <Typography variant="body2">{secondaryText}</Typography>
          </Box>
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
