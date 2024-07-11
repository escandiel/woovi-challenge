import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useLocation } from "react-router-dom";
import SubmitButton from "../SubmitButton";

export default function FormPropsTextFields() {
  const location = useLocation();
  const payment = location.state?.payment;

  const [installments, setInstallments] = React.useState("");

  const handleInstallmentsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInstallments(event.target.value);
  };

  const handleNameKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.charCode;
    if (!/[a-zA-Z\s]/.test(String.fromCharCode(charCode))) {
      event.preventDefault();
    }
  };

  const handleNumberKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const charCode = event.charCode;
    if (!/[0-9]/.test(String.fromCharCode(charCode))) {
      event.preventDefault();
    }
  };

  const renderInstallmentOptions = () => {
    if (!payment) return null;
    const numInstallments = parseInt(payment.label.replace("x", ""));
    const options = [];
    for (let i = 1; i <= numInstallments - 1; i++) {
      options.push(
        <MenuItem key={i} value={i}>
          {i}x - {payment.paymentInstallment}
        </MenuItem>
      );
    }
    return options;
  };

  if (!payment) {
    return (
      <div className="flex-center">
        Erro: Nenhuma informação de pagamento disponível.
      </div>
    );
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "100%" },
        "& .MuiOutlinedInput-root": { borderRadius: "8px" },
        display: "flex",
        flexDirection: "column",
        gap: "28px",
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
        inputProps={{ maxLength: 50 }}
        onKeyPress={handleNameKeyPress}
      />
      <TextField
        required
        id="outlined-cpf"
        label="CPF"
        sx={{ m: 0 }}
        inputProps={{ maxLength: 14 }}
        onKeyPress={handleNumberKeyPress}
      />
      <TextField
        required
        id="outlined-card-number"
        label="Número do cartão"
        sx={{ m: 0 }}
        inputProps={{ maxLength: 16 }}
        onKeyPress={handleNumberKeyPress}
      />
      <Box sx={{ display: "flex", width: "100%", gap: 1 }}>
        <TextField
          required
          id="outlined-expiry"
          label="Vencimento"
          sx={{ width: "50%", m: 0 }}
          inputProps={{ maxLength: 5 }}
          onKeyPress={handleNumberKeyPress}
        />
        <TextField
          required
          id="outlined-cvv"
          label="CVV"
          sx={{ width: "50%", m: 0 }}
          inputProps={{ maxLength: 3 }}
          onKeyPress={handleNumberKeyPress}
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
        {renderInstallmentOptions()}
      </TextField>
      <SubmitButton />
    </Box>
  );
}
