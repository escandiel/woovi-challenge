// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// export default function CreditCardForm() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         "& .MuiTextField-root": { m: 1, width: "25ch" },
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField
//         required
//         id="outlined-required"
//         label="Required"
//         defaultValue="Hello World"
//       />
//       <TextField
//         id="outlined-password-input"
//         label="Password"
//         type="password"
//         autoComplete="current-password"
//       />
//       <TextField
//         id="outlined-read-only-input"
//         label="Read Only"
//         defaultValue="Hello World"
//         InputProps={{
//           readOnly: true,
//         }}
//       />
//       <TextField
//         id="outlined-number"
//         label="Number"
//         type="number"
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//       <TextField id="outlined-search" label="Search field" type="search" />
//       <TextField
//         id="outlined-helperText"
//         label="Helper text"
//         defaultValue="Default Value"
//         helperText="Some important text"
//       />
//       <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//         Submit
//       </Button>
//     </Box>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

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
        "& .MuiTextField-root": { m: 1, width: "100%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="outlined-fullname" label="Nome completo" />
      <TextField required id="outlined-cpf" label="CPF" />
      <TextField required id="outlined-card-number" label="Número do cartão" />
      <Box sx={{ display: "flex", width: "100%" }}>
        <TextField
          required
          id="outlined-expiry"
          label="Vencimento"
          sx={{ width: "50%" }}
        />
        <TextField
          required
          id="outlined-cvv"
          label="CVV"
          sx={{ width: "50%" }}
        />
      </Box>
      <TextField
        required
        id="outlined-installments"
        select
        label="Parcelas"
        value={installments}
        onChange={handleInstallmentsChange}
      >
        <MenuItem value={1}>1x</MenuItem>
        <MenuItem value={2}>2x</MenuItem>
        <MenuItem value={3}>3x</MenuItem>
        <MenuItem value={4}>4x</MenuItem>
        <MenuItem value={5}>5x</MenuItem>
        <MenuItem value={6}>6x</MenuItem>
        <MenuItem value={7}>7x</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
}
