import React from "react";
import { Card, styled } from "@mui/material";

interface ListCardProps {
  children: React.ReactNode;
}

const ListCardStyled = styled(Card)(({ theme }) => ({
  width: "100%",
  maxHeight: 137,
  margin: "0",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  boxSizing: "border-box",
  border: "none",
  borderRadius: "0",
  boxShadow: "none",
  position: "relative",
  overflow: "visible",
}));

const ListCard: React.FC<ListCardProps> = ({ children }) => {
  return <ListCardStyled>{children}</ListCardStyled>;
};

export default ListCard;
