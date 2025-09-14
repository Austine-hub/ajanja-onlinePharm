import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Booking from "./components/Booking";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Booking Page */}
      <Route path="/booking" element={<Booking />} />

      {/* Fallback for unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

