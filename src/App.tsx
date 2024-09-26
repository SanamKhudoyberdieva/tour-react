import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Dashboard from "./pages/dashboard";
import Tour from "./pages/tour";
import AllTour from "./pages/allTours";
import TourCreate from "./pages/tour/create";
import TourView from "./pages/tour/view/index";
import TourCreateTwo from "./pages/tour/create-two";
import TourOrderCreate from "./pages/tour/order/index";
import Airplane from "./pages/airplane";
import Hostel from "./pages/hostel";
import Room from "./pages/room";
import Admin from "./pages/admin/index";
import AdminCreate from "./pages/admin/create";
import AdminView from "./pages/admin/view/index";
import AdminEdit from "./pages/admin/edit/index";
import Organization from "./pages/organization/index";
import OrganizationCreate from "./pages/organization/create";
import OrganizationView from "./pages/organization/view/index";
import OrganizationEdit from "./pages/organization/edit/index";
import Role from "./pages/roles/index";
import RoleCreate from "./pages/roles/create";
import RoleView from "./pages/roles/view/view";
import RoleUpdate from "./pages/roles/update/[id]";
import Order from "./pages/order/index";
import OrderView from "./pages/order/view/index";
import Login from "./pages/login";
import News from "./pages/news/index";
import NewsCreate from "./pages/news/create";
import NewsView from "./pages/news/view/index";
import NewsEdit from "./pages/news/edit/index";
import City from "./pages/city";
import ExtraPackage from "./pages/extraPackage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />} >
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/tour" element={<Tour />} />
          <Route path="/packages" element={<AllTour />} />
          <Route path="/tour/create" element={<TourCreate />} />
          <Route path="/tour/view/:id" element={<TourView />} />
          <Route path="/tour/create-two" element={<TourCreateTwo />} />
          <Route path="/tour/order/:id" element={<TourOrderCreate />} />

          <Route path="/airplane" element={<Airplane />} />

          <Route path="/city" element={<City />} />

          <Route path="/extra-packages" element={<ExtraPackage />} />

          <Route path="/hostel" element={<Hostel />} />

          <Route path="/room" element={<Room />} />

          <Route path="/order" element={<Order />} />
          <Route path="/order/view/:id" element={<OrderView />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/create" element={<AdminCreate />} />
          <Route path="/admin/view/:id" element={<AdminView />} />
          <Route path="/admin/edit/:id" element={<AdminEdit />} />

          <Route path="/organization" element={<Organization />} />
          <Route path="/organization/create" element={<OrganizationCreate />} />
          <Route path="/organization/view/:id" element={<OrganizationView />} />
          <Route path="/organization/edit/:id" element={<OrganizationEdit />} />

          <Route path="/news" element={<News />} />
          <Route path="/news/create" element={<NewsCreate />} />
          <Route path="/news/view/:id" element={<NewsView />} />
          <Route path="/news/edit/:id" element={<NewsEdit />} />

          <Route path="/role" element={<Role />} />
          <Route path="/role/create" element={<RoleCreate />} />
          <Route path="/role/view/:id" element={<RoleView />} />
          <Route path="/role/edit/:id" element={<RoleUpdate />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;