import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Dashboard from "./pages/dashboard";
import Tour from "./pages/tour";
import TourCreate from "./pages/tour/create";
import TourOrderCreate from "./pages/tour/order/index";
import Airplane from "./pages/airplane";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/tour" element={<Tour />} />
          <Route path="/tour/create" element={<TourCreate />} />
          <Route path="/tour/order/:id" element={<TourOrderCreate />} />

          <Route path="/airplane" element={<Airplane />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;