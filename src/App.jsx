import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
