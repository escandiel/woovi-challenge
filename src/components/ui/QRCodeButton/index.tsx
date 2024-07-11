import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";

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
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    const payment = location.state?.payment;
    if (payment) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/credit-card-installments", {
          state: { payment },
        });
      }, 1000);
    }
  };

  return (
    <>
      <TertiaryButton
        variant="contained"
        startIcon={<IconComponent />}
        {...props}
        onClick={handleButtonClick}
      >
        {text}
      </TertiaryButton>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default QRCodeButton;
