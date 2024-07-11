import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/ui/Header";
import PaymentMethod from "./pages/PaymentMethod";
import ConfirmPayment from "./pages/ConfirmPayment";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PaymentMethod />} />
        <Route path="/confirm-payment" element={<ConfirmPayment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
