import React from "react";
import { StepIconProps } from "@mui/material/StepIcon";
import { styled } from "@mui/system";

const GreenCircle = styled("div")({
  width: 14,
  height: 14,
  borderRadius: "50%",
  border: "1px solid green",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
});

const GrayCircle = styled("div")({
  width: 14,
  height: 14,
  borderRadius: "50%",
  border: "1px solid gray",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
});

const CustomStepIcon: React.FC<StepIconProps> = (props) => {
  const { completed } = props;

  if (completed) {
    return <GreenCircle />;
  } else {
    return <GrayCircle />;
  }
};

export default CustomStepIcon;