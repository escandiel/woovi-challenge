import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/ui/Header";
import PaymentMethod from "./pages/PaymentMethod";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PaymentMethod />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
