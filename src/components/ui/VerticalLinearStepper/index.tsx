import React from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import CustomStepIcon from "../CustomStepIcon";
import { styled } from "@mui/system";
import "./index.css";

interface Installment {
  id: number;
  label: string;
  paymentInstallment: string;
  amount?: string;
  benefitSuffix?: string;
  benefitPercentage?: string;
  benefitPrefix?: string;
  highlight?: string;
  highlightValue?: string;
}

const StepLabelContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const VerticalLinearStepper: React.FC = () => {
  const location = useLocation();
  const payment = location.state?.payment as Installment;

  const steps = Array.from(
    { length: parseInt(payment.label.replace("x", "")) },
    (_, index) => ({
      label:
        index === 0 ? "1ª entrada no Pix" : `${index + 1}ª parcela no cartão`,
      value: index === 0 ? "" : payment.paymentInstallment,
      description: index === 0 ? "1ª entrada no Pix" : "",
    })
  );

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={1} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} completed={index === 0}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              <StepLabelContainer>
                <span className="installment-label">{step.label}</span>
                {step.value && (
                  <span className="installment-value">{step.value}</span>
                )}
              </StepLabelContainer>
            </StepLabel>
            <StepContent>
              <span
                className="span-title"
                color={index === 0 ? "textPrimary" : "textSecondary"}
              >
                {step.description}
              </span>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalLinearStepper;
