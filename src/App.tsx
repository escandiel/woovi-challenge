import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/ui/Header";
import PaymentMethod from "./pages/PaymentMethod";
import ConfirmPayment from "./pages/ConfirmPayment";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PaymentMethod />} />
        <Route path="/confirm-payment" element={<ConfirmPayment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
