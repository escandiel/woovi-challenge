import React from "react";
import { Card, styled } from "@mui/material";

interface CustomCardProps {
  children: React.ReactNode;
}

const CustomCardStyled = styled(Card)(({ theme }) => ({
  width: "100%",
  minHeight: 137,
  margin: "16px auto",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  boxSizing: "border-box",
  border: "2px solid",
  borderColor: "var(--border-color)",
  borderRadius: "10px",
  boxShadow: "none",
  position: "relative",
  overflow: "visible",
}));

const CustomCard: React.FC<CustomCardProps> = ({ children }) => {
  return <CustomCardStyled className="card">{children}</CustomCardStyled>;
};

export default CustomCard;
