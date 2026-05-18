import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- PAGES --- 
// --- public --- 
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";

import Services from "./pages/public/Services";
import ExteriorWash from "./pages/public/services/ExteriorWashService";
import InteriorCare from "./pages/public/services/InteriorCare";
import FullDetailing from "./pages/public/services/FullDetailing";
import ProtectionService from "./pages/public/services/ProtectionService";

// --- account-related ---
import Login from "./pages/account-related/Login";
import SignUp from "./pages/account-related/SignUp";
import RoleSelection from "./pages/account-related/RoleSelection";
import AddressDetails from "./pages/account-related/AddressDetails";
import PasswordReset from "./pages/account-related/PasswordReset";
import DeactivateAccount from "./pages/account-related/DeactivateAccount";

// --- employee --- 
import EmployeeHome from "./pages/employee/EmployeeHome";
import EmployeeProfile from "./pages/employee/EmployeeProfile";
import EmployeeProfileEdit from "./pages/employee/EmployeeProfileEdit";
import EmployeePayments from "./pages/employee/EmployeePayments";
import EmployeeManageBookings from "./pages/employee/EmployeeManageBookings";
import EmployeeManagement from "./pages/employee/EmployeeManageEmployees";
import EmployeePerformance from "./pages/employee/EmployeePerformance";
import EmployeeManageCustomers from "./pages/employee/EmployeeManageCustomers";
import EmployeeManageEmployees from "./pages/employee/EmployeeManageEmployees";
import EmployeeServices from "./pages/employee/EmployeeServices";

// --- customer --- 
import LandingCustomer from "./pages/customer/LandingCustomer"
import CustomerHome from "./pages/customer/CustomerHome"
import CustomerProfile from "./pages/customer/CustomerProfile";
import CustomerProfileEdit from "./pages/customer/CustomerProfileEdit";
import CustomerBookingHistory from "./pages/customer/CustomerBookingHistory";
import CustomerBookingVehicle from "./pages/customer/CustomerBookingVehicle";
import CustomerVehicles from "./pages/customer/CustomerVehicles";
import ConfirmBookingPage from "./pages/customer/CustomerConfirm";
import CustomerBooking from "./pages/customer/CustomerBooking";
import CustomerBooking1 from "./pages/customer/CustomerBooking1";

// --- other ---
import NotFound from "./pages/other/NotFound";
import Unauthorised from "./pages/other/Unauthorised";
import Meta from "./pages/other/Meta";
// -------------------------------------------------------------


export default function App() {
  return (
    <Router>
      <Routes>
        {/* --- Public */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* +++ Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/exterior" element={<ExteriorWash />} />
        <Route path="/services/interior" element={<InteriorCare />} />
        <Route path="/services/full-detailing" element={<FullDetailing />} />
        <Route path="/services/protection" element={<ProtectionService />} />

        {/* +++ Account-related */}
        <Route path="/login" element={<Login />} />
        {/* or */}
        {/* <Route path="/account/login" element={<Login />} /> */}
        {/* <Route path="/account/..." element={<Login />} /> */}
        {/* 
        ./account/login 
        ./account/signin 
        ./account/role 
        ./account/address 
        ./account/change-password 
        ./account/deactivate 

        */}

        <Route path="/create-account" element={<SignUp />} />
        <Route path="/role" element={<RoleSelection />} />
        <Route path="/address" element={<AddressDetails />} />
        <Route path="/deactivate-account" element={<DeactivateAccount />} />
        <Route path="/change-password" element={<PasswordReset />} />


        {/* --- Employee */}
        <Route path="/employee" element={<EmployeeHome />} />
        <Route path="/employee/home" element={<EmployeeHome />} />
        <Route path="/employee/profile" element={<EmployeeProfile />} />
        <Route path="/employee/profile-edit" element={<EmployeeProfileEdit />} />

        <Route path="/employee/services" element={<EmployeeServices />} />
        <Route path="/employee/bookings" element={<EmployeeManageBookings />} />
        <Route path="/employee/manage-customers" element={<EmployeeManageCustomers />} />
        <Route path="/employee/manage-employees" element={<EmployeeManageEmployees />} />
        <Route path="/employee/payments" element={<EmployeePayments />} />
        <Route path="/employee/performance" element={<EmployeePerformance />} />


        {/* --- Customer */}
        <Route path="/customerl" element={<LandingCustomer />} /> 
        <Route path="/customer" element={<CustomerHome />} />
        <Route path="/customer/home" element={<CustomerHome />} />
        <Route path="/customer/profile" element={<CustomerProfile />} />
        <Route path="/customer/profile-edit" element={<CustomerProfileEdit />} />
        <Route path="/customer/vehicles" element={<CustomerVehicles />} />

        <Route path="/customer/booking" element={<CustomerBooking />} />
        <Route path="/customer/booking1" element={<CustomerBooking1 />} />
        <Route path="/customer/booking/confirm" element={<ConfirmBookingPage />} />
        <Route path="/customer/booking/history" element={<CustomerBookingHistory />} />
        <Route path="/customer/booking/vehicle" element={<CustomerBookingVehicle />} />


        {/* --- Other */}
        <Route path="/_metadata" element={<Meta />} />
        <Route path="/_" element={<Meta />} />
        <Route path="/logout" element={<h1>Logging out...</h1>} />
        {/* <Route path="customer/logout" element={ } /> */}
        {/* <Route path="employee/logout" element={ } /> */}


        {/* --- 404 Catch-all Route --- */}
        <Route path="*" element={<NotFound />} />

        {/* --- 403 --- */}
        <Route path="/unauth" element={<Unauthorised />} />

      </Routes>

    </Router>
  );
}
