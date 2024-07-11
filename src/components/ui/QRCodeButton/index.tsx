import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { useLocation, useNavigate } from "react-router-dom";

const TertiaryButton = styled(Button)(() => ({
  backgroundColor: "var(--tertiary-color)",
  color: "#fff",
  "&:hover": {
    backgroundColor: "var(--secondary-color)",
  },
  borderRadius: "8px",
  minHeight: "40px",
  flexDirection: "row-reverse",
  gap: "10px",
  marginTop: "20px",
}));

interface QRCodeButtonProps {
  text: string;
  icon: React.ElementType<SvgIconProps>;
}

const QRCodeButton: React.FC<QRCodeButtonProps> = ({
  text,
  icon: IconComponent,
  ...props
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/credit-card-installments", {
      state: { payment: location.state?.payment },
    });
  };
  return (
    <TertiaryButton
      variant="contained"
      startIcon={<IconComponent />}
      {...props}
      onClick={handleButtonClick}
    >
      {text}
    </TertiaryButton>
  );
};

export default QRCodeButton;
