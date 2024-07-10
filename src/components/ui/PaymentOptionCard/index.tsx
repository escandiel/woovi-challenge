import React from "react";
import {
  Card,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TopLabel from "../TopLabel";

const CustomCard = styled(Card)(({ theme }) => ({
  width: 430,
  height: 128,
  margin: "16px auto",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  boxSizing: "border-box",
  border: "1px solid",
  borderColor: "var(--border-color)",
  boxShadow: "none",
  position: "relative",
  overflow: "visible",
}));

interface PaymentOptionCardProps {
  primaryText: string;
  secondaryText: string;
  checked?: boolean;
  onChange?: () => void;
}

const PaymentOptionCard: React.FC<PaymentOptionCardProps> = ({
  primaryText,
  secondaryText,
  checked,
  onChange,
}) => {
  return (
    <CustomCard>
      <TopLabel label="Pix"></TopLabel>
      <FormControlLabel
        label={
          <Box>
            <Typography variant="h6">{primaryText}</Typography>
            <Typography variant="body2">{secondaryText}</Typography>
          </Box>
        }
        control={<Checkbox checked={checked} onChange={onChange} />}
        sx={{ flexDirection: "row-reverse" }}
      />
    </CustomCard>
  );
};

export default PaymentOptionCard;
