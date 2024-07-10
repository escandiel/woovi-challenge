import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/ui/Header";
import PaymentMethod from "./pages/PaymentMethod";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PaymentMethod />} />
      </Routes>
    </Router>
  );
}

export default App;
