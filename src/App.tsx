import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Dashboard from "./pages/dashboard";
import Tour from "./pages/tour";
import TourCreate from "./pages/tour/create";
import TourOrderCreate from "./pages/tour/order/index";
import Airplane from "./pages/airplane";
import Hostel from "./pages/hostel";
import Room from "./pages/room";
import Admin from "./pages/admin/index";
import AdminCreate from "./pages/admin/create";
import AdminView from "./pages/admin/view/index";
import AdminEdit from "./pages/admin/edit/index";
import Branch from "./pages/branch/index";
import BranchCreate from "./pages/branch/create";
import BranchView from "./pages/branch/view/index";
import BranchEdit from "./pages/branch/edit/index";
import Role from "./pages/role/index";
import RoleCreate from "./pages/role/create";
import RoleView from "./pages/role/view/index";
import Order from "./pages/order/index";
import OrderView from "./pages/order/view/index";

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

          <Route path="/hostel" element={<Hostel />} />

          <Route path="/room" element={<Room />} />

          <Route path="/order" element={<Order />} />
          <Route path="/order/view/:id" element={<OrderView />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/create" element={<AdminCreate />} />
          <Route path="/admin/view/:id" element={<AdminView />} />
          <Route path="/admin/edit/:id" element={<AdminEdit />} />

          <Route path="/branch" element={<Branch />} />
          <Route path="/branch/create" element={<BranchCreate />} />
          <Route path="/branch/view/:id" element={<BranchView />} />
          <Route path="/branch/edit/:id" element={<BranchEdit />} />

          <Route path="/role" element={<Role />} />
          <Route path="/role/create" element={<RoleCreate />} />
          <Route path="/role/view/:id" element={<RoleView />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;