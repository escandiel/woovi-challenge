// import React from "react";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/system";
// import { SvgIconProps } from "@mui/material";
// import CopyPasteIcon from "../CopyPasteIcon";

// const TertiaryButton = styled(Button)(() => ({
//   backgroundColor: "#ff9800",
//   color: "#fff",
//   "&:hover": {
//     backgroundColor: "#e68900",
//   },
// }));

// interface QRCodeButtonProps {
//   text: string;
//   icon: React.ElementType<SvgIconProps>;
// }

// const QRCodeButton: React.FC<QRCodeButtonProps> = ({
//   text,
//   icon: IconComponent,
//   ...props
// }) => {
//   return (
//     <TertiaryButton
//       variant="contained"
//       startIcon={<CopyPasteIcon />}
//       {...props}
//     >
//       {text}
//     </TertiaryButton>
//   );
// };

// export default QRCodeButton;
import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { SvgIconProps } from "@mui/material/SvgIcon";

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
  return (
    <TertiaryButton
      variant="contained"
      startIcon={<IconComponent />}
      {...props}
    >
      {text}
    </TertiaryButton>
  );
};

export default QRCodeButton;
