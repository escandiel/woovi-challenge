// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
// import "./index.css";
// import SubmitButton from "../SubmitButton";

// export default function FormPropsTextFields() {
//   const [installments, setInstallments] = React.useState("");

//   const handleInstallmentsChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setInstallments(event.target.value);
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         "& .MuiTextField-root": { m: 1, width: "100%" },
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "20px",
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField required id="outlined-fullname" label="Nome completo" />
//       <TextField required id="outlined-cpf" label="CPF" />
//       <TextField required id="outlined-card-number" label="Número do cartão" />
//       <Box sx={{ display: "flex", width: "100%" }}>
//         <TextField
//           required
//           id="outlined-expiry"
//           label="Vencimento"
//           sx={{ width: "50%" }}
//         />
//         <TextField
//           required
//           id="outlined-cvv"
//           label="CVV"
//           sx={{ width: "50%" }}
//         />
//       </Box>
//       <TextField
//         required
//         id="outlined-installments"
//         select
//         label="Parcelas"
//         value={installments}
//         onChange={handleInstallmentsChange}
//       >
//         <MenuItem value={1}>1x</MenuItem>
//         <MenuItem value={2}>2x</MenuItem>
//         <MenuItem value={3}>3x</MenuItem>
//         <MenuItem value={4}>4x</MenuItem>
//         <MenuItem value={5}>5x</MenuItem>
//         <MenuItem value={6}>6x</MenuItem>
//         <MenuItem value={7}>7x</MenuItem>
//       </TextField>
//       <SubmitButton />
//     </Box>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./index.css";
import SubmitButton from "../SubmitButton";

export default function FormPropsTextFields() {
  const [installments, setInstallments] = React.useState("");

  const handleInstallmentsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInstallments(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "100%" },
        "& .MuiOutlinedInput-root": { borderRadius: "8px" },
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        padding: "20px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-fullname"
        label="Nome completo"
        sx={{ m: 0 }}
      />
      <TextField required id="outlined-cpf" label="CPF" sx={{ m: 0 }} />
      <TextField
        required
        id="outlined-card-number"
        label="Número do cartão"
        sx={{ m: 0 }}
      />
      <Box sx={{ display: "flex", width: "100%", gap: 1 }}>
        <TextField
          required
          id="outlined-expiry"
          label="Vencimento"
          sx={{ width: "50%", m: 0 }}
        />
        <TextField
          required
          id="outlined-cvv"
          label="CVV"
          sx={{ width: "50%", m: 0 }}
        />
      </Box>
      <TextField
        required
        id="outlined-installments"
        select
        label="Parcelas"
        value={installments}
        onChange={handleInstallmentsChange}
        sx={{ m: 0 }}
      >
        <MenuItem value={1}>1x</MenuItem>
        <MenuItem value={2}>2x</MenuItem>
        <MenuItem value={3}>3x</MenuItem>
        <MenuItem value={4}>4x</MenuItem>
        <MenuItem value={5}>5x</MenuItem>
        <MenuItem value={6}>6x</MenuItem>
        <MenuItem value={7}>7x</MenuItem>
      </TextField>
      <SubmitButton />
    </Box>
  );
}
