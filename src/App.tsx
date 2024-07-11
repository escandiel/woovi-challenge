import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";
import PaymentMethod from "./pages/PaymentMethod";
import ConfirmPayment from "./pages/ConfirmPayment";
import Footer from "./components/ui/Footer";
import CreditCardInstallments from "./pages/CreditCardInstallments";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PaymentMethod />} />
        <Route path="/confirm-payment" element={<ConfirmPayment />} />
        <Route
          path="/credit-card-installments"
          element={<CreditCardInstallments />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
