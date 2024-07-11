import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const TotalContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "16px",
});

interface TotalizerRowProps {
  total: string;
}

const TotalizerRow: React.FC<TotalizerRowProps> = ({ total }) => {
  return (
    <TotalContainer>
      <Typography>Total</Typography>
      <Typography className="installment-total">{total}</Typography>
    </TotalContainer>
  );
};

export default TotalizerRow;
