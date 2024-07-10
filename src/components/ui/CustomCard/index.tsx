import React from "react";
import { Card, styled } from "@mui/material";

interface CustomCardProps {
  children: React.ReactNode;
  className?: string;
}

const CustomCardStyled = styled(Card)(({ theme }) => ({
  width: "100%",
  maxHeight: 137,
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

const CustomCard: React.FC<CustomCardProps> = ({ children, className }) => {
  return <CustomCardStyled className={className}>{children}</CustomCardStyled>;
};

export default CustomCard;
