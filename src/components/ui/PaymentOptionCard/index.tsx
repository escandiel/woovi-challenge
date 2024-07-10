// // import React from "react";
// // import { FormControlLabel } from "@mui/material";
// // import TopLabel from "../TopLabel";
// // import CustomCard from "../CustomCard";
// // import "./index.css";
// // import CustomCheckbox from "../CustomCheckbox";

// // interface PaymentOptionCardProps {
// //   installments: string;
// //   value: string;
// //   amount?: string;
// //   benefitPrefix?: string;
// //   benefitPercentage?: string;
// //   benefitSuffix?: string;
// //   highlight?: string;
// //   highlightValue?: string;
// //   checked?: boolean;
// //   onChange?: () => void;
// // }

// // const PaymentOptionCard: React.FC<PaymentOptionCardProps> = ({
// //   checked,
// //   onChange,
// //   installments,
// //   value,
// //   amount,
// //   benefitSuffix,
// //   benefitPrefix,
// //   benefitPercentage,
// //   highlight,
// //   highlightValue,
// // }) => {
// //   return (
// //     <CustomCard>
// //       <TopLabel label="Pix"></TopLabel>
// //       <FormControlLabel
// //         label={
// //           <div>
// //             <div className="flex-start label-monetary">
// //               <span className="label-monetary-text label-installments">{`${installments}`}</span>
// //               <span className="label-monetary-text label-value">{`${value}`}</span>
// //             </div>

// //             <div className="amount-container">
// //               <span className="amount-value">{`${amount} `}</span>
// //             </div>

// //             <div className="flex-column">
// //               <div className="benefit-container">
// //                 <span className="label-benefit">{`${benefitPrefix}`}</span>
// //                 <span className="label-benefit-percentage">{`${benefitPercentage} `}</span>
// //                 <span className="label-benefit">{`${benefitSuffix}`}</span>
// //               </div>

// //               <div className="highlight-container">
// //                 <span className="label-highlight-value">{`🤑 ${highlightValue} `}</span>
// //                 <span className="label-highlight">{`${highlight} `}</span>
// //               </div>
// //             </div>
// //           </div>
// //         }
// //         control={<CustomCheckbox checked={checked} onChange={onChange} />}
// //         sx={{
// //           flexDirection: "row-reverse",
// //           justifyContent: "space-between",
// //           width: "100%",
// //           margin: "0",
// //         }}
// //       />
// //     </CustomCard>
// //   );
// // };

// // export default PaymentOptionCard;
// import React from "react";
// import { FormControlLabel, Box } from "@mui/material";
// import TopLabel from "../TopLabel";
// import CustomCard from "../CustomCard";
// import CustomCheckbox from "../CustomCheckbox"; // Importe o CustomCheckbox
// import "./index.css";

// interface PaymentOptionCardProps {
//   installments: string;
//   paymentInstallment: string;
//   amount?: string;
//   benefitPrefix?: string;
//   benefitPercentage?: string;
//   benefitSuffix?: string;
//   highlight?: string;
//   highlightValue?: string;
//   checked?: boolean;
//   onChange?: () => void;
// }

// const PaymentOptionCard: React.FC<PaymentOptionCardProps> = ({
//   checked,
//   onChange,
//   installments,
//   amount,
//   paymentInstallment,
//   benefitPrefix,
//   benefitPercentage,
//   benefitSuffix,
//   highlight,
//   highlightValue,
// }) => {
//   return (
//     <CustomCard>
//       <TopLabel label="Pix" />
//       <FormControlLabel
//         label={
//           <Box>
//             <div className="flex-start label-monetary">
//               <span className="label-monetary-text label-installments">
//                 {installments}
//               </span>
//               <span className="label-monetary-text label-value">
//                 {paymentInstallment}
//               </span>
//             </div>
//             {amount && (
//               <div className="amount-container">
//                 <span className="amount-value">{amount}</span>
//               </div>
//             )}
//             <div className="flex-column">
//               {benefitPrefix && benefitPercentage && benefitSuffix && (
//                 <div className="benefit-container">
//                   <span className="label-benefit">{benefitPrefix}</span>
//                   <span className="label-benefit-percentage">
//                     {benefitPercentage}
//                   </span>
//                   <span className="label-benefit">{benefitSuffix}</span>
//                 </div>
//               )}
//               {highlight && highlightValue && (
//                 <div className="highlight-container">
//                   <span className="label-highlight-value">{`${highlightValue}`}</span>
//                   <span className="label-highlight">{highlight}</span>
//                 </div>
//               )}
//             </div>
//           </Box>
//         }
//         control={<CustomCheckbox checked={checked} onChange={onChange} />}
//         sx={{
//           flexDirection: "row-reverse",
//           justifyContent: "space-between",
//           width: "100%",
//           margin: "0",
//         }}
//       />
//     </CustomCard>
//   );
// };

// export default PaymentOptionCard;
import React from "react";
import { FormControlLabel, Box } from "@mui/material";
import TopLabel from "../TopLabel";
import CustomCard from "../CustomCard";
import ListCard from "../ListCard";
import CustomCheckbox from "../CustomCheckbox";
import "./index.css";

interface PaymentOptionCardProps {
  installments: string;
  paymentInstallment: string;
  amount?: string;
  benefitPrefix?: string;
  benefitPercentage?: string;
  benefitSuffix?: string;
  highlight?: string;
  highlightValue?: string;
  checked?: boolean;
  onChange?: () => void;
  useListCard?: boolean;
}

const PaymentOptionCard: React.FC<PaymentOptionCardProps> = ({
  checked,
  onChange,
  installments,
  paymentInstallment,
  amount,
  benefitPrefix,
  benefitPercentage,
  benefitSuffix,
  highlight,
  highlightValue,
  useListCard,
}) => {
  const CardComponent = useListCard ? ListCard : CustomCard;

  return (
    <CardComponent>
      {/* <TopLabel label="Pix" /> */}
      <FormControlLabel
        label={
          <Box>
            <div className="flex-start label-monetary">
              <span className="label-monetary-text label-installments">
                {installments}
              </span>
              <span className="label-monetary-text label-value">
                {paymentInstallment}
              </span>
            </div>
            {amount && (
              <div className="amount-container">
                <span className="amount-value">{amount}</span>
              </div>
            )}
            <div className="flex-column">
              {benefitPrefix && benefitPercentage && benefitSuffix && (
                <div className="benefit-container">
                  <span className="label-benefit">{benefitPrefix}</span>
                  <span className="label-benefit-percentage">
                    {benefitPercentage}
                  </span>
                  <span className="label-benefit">{benefitSuffix}</span>
                </div>
              )}
              {highlight && highlightValue && (
                <div className="highlight-container">
                  <span className="label-highlight-value">{`🤑 ${highlightValue}`}</span>
                  <span className="label-highlight">{highlight}</span>
                </div>
              )}
            </div>
          </Box>
        }
        control={<CustomCheckbox checked={checked} onChange={onChange} />}
        sx={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          width: "100%",
          margin: "0",
        }}
      />
    </CardComponent>
  );
};

export default PaymentOptionCard;
