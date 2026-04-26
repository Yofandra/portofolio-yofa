import Home from "./pages/Home";
import PartTracking from "./pages/PartTracking";
import WorkingOrder from "./pages/WorkingOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/part-tracking" element={<PartTracking />} />
        <Route path="/working-order" element={<WorkingOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
