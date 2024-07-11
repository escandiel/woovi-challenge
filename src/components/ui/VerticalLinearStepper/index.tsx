import React from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import CustomStepIcon from "../CustomStepIcon";

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

const VerticalLinearStepper: React.FC = () => {
  const location = useLocation();
  const payment = location.state?.payment as Installment;
  const steps = Array.from(
    { length: parseInt(payment.label.replace("x", "")) },
    (_, index) => ({
      label: index === 0 ? "1ª entrada no Pix" : `${index + 1}ª  no cartão`,
      description:
        index === 0
          ? `1ª entrada no Pix`
          : `Valor da parcela: ${payment.paymentInstallment}`,
    })
  );

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={1} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} completed={index === 0}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography color={index === 0 ? "textPrimary" : "textSecondary"}>
                {step.description}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalLinearStepper;
