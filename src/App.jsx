import Home from "./pages/Home";
import PartTracking from "./pages/PartTracking";
import WorkingOrder from "./pages/WorkingOrder";
import CompanyProfile from "./pages/CompanyProfile";
import PharmaPath from "./pages/PharmaPath";
import ECommerce from "./pages/ECommerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/part-tracking" element={<PartTracking />} />
        <Route path="/working-order" element={<WorkingOrder />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/pharma-path" element={<PharmaPath />} />
        <Route path="/e-commerce" element={<ECommerce />} />
      </Routes>
    </Router>
  );
}

export default App;
