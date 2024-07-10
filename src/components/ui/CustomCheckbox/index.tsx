import React from "react";
import { Checkbox } from "@mui/material";
import { styled } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const StyledCheckCircleIcon = styled(CheckCircleIcon)({
  color: "var(--secondary-color)",
});

const StyledRadioButtonUncheckedIcon = styled(RadioButtonUncheckedIcon)({
  color: "var(--border-color)",
});

interface CustomCheckboxProps {
  checked?: boolean;
  onChange?: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <Checkbox
      icon={<StyledRadioButtonUncheckedIcon />}
      checkedIcon={<StyledCheckCircleIcon />}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default CustomCheckbox;
