// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // --- Pages --- 
// // --- public --- 
// import Home from "./pages/public/Home";
// import About from "./pages/public/About";
// import ContactUs from "./pages/public/ContactUs";
// import Services from "./pages/public/Services";
// import ExteriorWash from "./pages/public/services/ExteriorWashService";
// import InteriorCare from "./pages/public/services/InteriorCare";
// import FullDetailing from "./pages/public/services/FullDetailing";
// import ProtectionService from "./pages/public/services/ProtectionService";
// // 
// import Login from "./pages/public/Login";
// import SignUp from "./pages/public/SignUp";
// import RoleSelection from "./pages/public/RoleSelection";
// import AddressDetails from "./pages/public/AddressDetails";
// import PasswordReset from "./pages/other/PasswordReset";
// import DeactivateAccount from "./pages/public/DeactivateAccount";

// // --- customer --- 
// // ...

// // --- business/manager --- 
// // ...

// // --- other ---
// import All from "./pages/_temp/All";
// import EmployeeHome from "./pages/employee/EmployeeHome";
// import EmployeeProfile from "./pages/employee/EmployeeProfile";
// import EmployeeProfileEdit from "./pages/employee/EmployeeProfileEdit";
// import EmployeeProfileManagement from "./pages/employee/EmplioyeeProfileManagement";
// import EmployeePayment from "./pages/employee/booking/EmployeePayment";
// import EmployeeManageBookings from "./pages/employee/booking/EmployeeManageBookings";
// import EmployeeCleaning from "./pages/employee/management/EmployeeCleaning";
// import EmployeeManagement from "./pages/employee/management/EmployeeManagement";
// import EmployeePerformance from "./pages/employee/management/EmployeePerformance";



// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* --- Public */}
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<ContactUs />} />
        
//         {/* +++ Services */}
//         <Route path="/services" element={<Services />} />

//         {/* <Route path="/services/exterior" element={<Services />} /> */}
//         <Route path="/exterior" element={<ExteriorWash />} />
//         <Route path="/interior" element={<InteriorCare />} />
//         <Route path="/full-detailing" element={<FullDetailing />} />
//         <Route path="/protection" element={<ProtectionService />} />
//         {/* <Route path="/corpo" element={<Login />} />
//         <Route path="/franchise" element={<Login />} /> */}
        
//         {/* +++ Account-related */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/create-account" element={<SignUp />} />
//         <Route path="/role" element={<RoleSelection />} />
//         <Route path="/address" element={<AddressDetails />} />
//         <Route path="/deactivate-account" element={<DeactivateAccount />} />

        
 
//         {/* --- Error route */}

//         {/* --- Unauth route? */}

//         {/* --- Customer */}
//         {/* <Route path="/customer/home" element={<LandingCustomer />} />  */}
//         {/* <Route path="/customer/exterir-account" element={<DeactivateAccount />} /> */}


// {/* 
//         <Route path="/vehicles" element={<VehiclePage />} />
//         <Route path="/profiles" element={<ProfilePage />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/bookingtwo" element={<BookingTwo />} />
//         <Route path="/bookingvehicle" element={<BookingVehicle />} /> 
//         <Route path="/confirm" element={<ConfirmBookingPage />} />
//         <Route path="/payment/:bookingId" element={<PaymentPage />} />
//         <Route path="/EditCustomerProfile" element={<EditCustomerProfile />} />
//         <Route path="/password-reset" element={<PasswordReset />} />
//         <Route path="/deactivate-account" element={<DeactivateAccount />} />
//         <Route path="/bookinghistory" element={<BookingHistory />} /> */}
         

//         {/* --- Employee / Business */}
//         <Route path="/employee" element={<EmployeeHome />} /> 
//         <Route path="/employee/home" element={<EmployeeHome />} /> 

//         <Route path="/employee/profile" element={<EmployeeProfile />} /> 
//         <Route path="/employee/profile-edit" element={<EmployeeProfileEdit />} /> 
//         <Route path="/employee/profile-manage" element={<EmployeeProfileManagement />} /> 

//         {/* +++ Booking */}
//         <Route path="/employee/payment" element={<EmployeePayment />} /> 
//         <Route path="/employee/bookings" element={<EmployeeManageBookings />} /> 

//         {/* +++ Management */}
//         <Route path="/employee/cleaning" element={<EmployeeCleaning />} /> 
//         <Route path="/employee/management" element={<EmployeeManagement />} /> 
//         <Route path="/employee/performance" element={<EmployeePerformance />} /> 

//         {/* <Route path="/business/home" element={< />} />  */}
// //         {/* <Route path="/LandingEmployee" element={<LandingEmployee />} /> */}
// //         {/* <Route path="/employee/home" element={<LandingEmployee />} /> */}
// {/* //         <Route path="/business/home" element={<LandingEmployee />} />

// //         <Route path="/cleaning-services/management" element={<CleaningServiceManagement />} />
// //         <Route path="/profile-management" element={<ProfileManagement />} />
// //         <Route path="/EmployeeManagement" element={<EmployeeManagement />} />
// //         <Route path="/manage-bookings" element={<ManageBookings />} />
// //         <Route path="/EditEmployeeProfile" element={<EditEmployeeProfile />} /> */}


//         {/* --- Less important / Testing */}
//         <Route path="/temp/all" element={<All />} />
//         <Route path="/temp/password" element={<PasswordReset />} />
//         <Route path="/password-reset" element={<PasswordReset />} />

//       </Routes>
//     </Router>
//   );
// }


// newer0
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
// import EmployeeProfileManagement from "./pages/employee/EmplioyeeProfileManagement";
import EmployeePayment from "./pages/employee/EmployeePayments";
import EmployeeManageBookings from "./pages/employee/EmployeeManageBookings";
import EmployeeCleaning from "./pages/employee/EmployeeServices";
import EmployeeManagement from "./pages/employee/EmployeeManageEmployees";
import EmployeePerformance from "./pages/employee/EmployeePerformance";

// --- customer --- 
import LandingCustomer from "./pages/customer/LandingCustomer"
import CustomerHome from "./pages/customer/CustomerHome"

import CustomerProfile from "./pages/customer/CustomerProfile";
import CustomerProfileEdit from "./pages/customer/CustomerProfileEdit";
import EditCustomerProfile from "./pages/customer/older/EditCustomerProfile";

import VehiclePage from "./pages/customer/CustomerVehicles"



// --- other ---
import All from "./pages/_temp/All";
import NotFound from "./pages/other/NotFound"; 
import CustomerCardsPage from "./pages/customer/older/CustomerCardPage";
import Meta from "./pages/other/Meta";
import ProfilePage from "./pages/customer/older/ProfilePage";
import EmployeeManageCustomers from "./pages/employee/EmployeeManageCustomers";
import EmployeeManageEmployees from "./pages/employee/EmployeeManageEmployees";
import EmployeeServices from "./pages/employee/EmployeeServices";
import CustomerVehicles from "./pages/customer/CustomerVehicles";
import ConfirmBookingPage from "./pages/customer/CustomerConfirm";
import CustomerBooking from "./pages/customer/CustomerBooking";
import BookingHistory from "./pages/customer/CustomerBookingHistory";

import BookingTwo from "./pages/customer/CustomerBooking1";
import BookingVehicle from "./pages/customer/CustomerBookingVehicle";


// -------------------------------------------------------------


export default function App() {
  return (
    <Router>
      <Routes>
        {/* --- Public */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact1" element={<ContactUs />} /> */}
        <Route path="/contact" element={<Contact />} />

        
        {/* +++ Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/exterior" element={<ExteriorWash />} />
        {/* or */}
        {/* <Route path="/services/exterior" element={<Services />} /> */}

        <Route path="/interior" element={<InteriorCare />} />
        <Route path="/full-detailing" element={<FullDetailing />} />
        <Route path="/protection" element={<ProtectionService />} />
        
        {/* +++ Account-related */}
        <Route path="/login" element={<Login />} />
        {/* or */}
        {/* <Route path="/account/login" element={<Login />} /> */}
        {/* <Route path="/account/..." element={<Login />} /> */}

        <Route path="/create-account" element={<SignUp />} />
        <Route path="/role" element={<RoleSelection />} />
        <Route path="/address" element={<AddressDetails />} />
        <Route path="/deactivate-account" element={<DeactivateAccount />} />
        {/* <Route path="/reset-password" element={<PasswordReset />} /> */}
        <Route path="/change-password" element={<PasswordReset />} />

        {/* --- Employee / Business */}
        <Route path="/employee" element={<EmployeeHome />} /> 
        <Route path="/employee/home" element={<EmployeeHome />} /> 
        
        <Route path="/employee/profile" element={<EmployeeProfile />} /> 
        <Route path="/employee/profile-edit" element={<EmployeeProfileEdit />} /> 

        <Route path="/employee/services" element={<EmployeeServices />} /> 
        <Route path="/employee/manage-customers" element={<EmployeeManageCustomers />} /> 
        <Route path="/employee/manage-employees" element={<EmployeeManageEmployees />} /> 

        
        <Route path="/employee/payments" element={<EmployeePayment />} /> 
        <Route path="/employee/bookings" element={<EmployeeManageBookings />} /> 
        {/* <Route path="/employee/cleaning" element={<EmployeeCleaning />} />  */}
        <Route path="/employee/performance" element={<EmployeePerformance />} /> 


      {/* --- Customer */}

      {/* <Route path="/customer" element={<LandingCustomer />} />  */}
      <Route path="/customer" element={<CustomerHome />} /> 
      <Route path="/customer/home" element={<CustomerHome />} /> 

      {/* <Route path="/customer/profile" element={<ProfilePage />} /> */}
      <Route path="/customer/profile" element={<CustomerProfile />} />
      <Route path="/customer/profile-e" element={<EditCustomerProfile />} />
      <Route path="/customer/profile-edit" element={<CustomerProfileEdit />} />

      {/* <Route path="/customer/vehicles" element={<VehiclePage />} /> */}
      <Route path="/customer/vehicles" element={<CustomerVehicles />} />
      <Route path="/customer/booking" element={<CustomerBooking />} />
      <Route path="/customer/booking1" element={<BookingTwo />} />

      <Route path="/customer/booking/confirm" element={<ConfirmBookingPage />} />

      <Route path="/customer/booking/history" element={<BookingHistory />} />
      <Route path="/customer/booking/vehicle" element={<BookingVehicle />} />



         

        {/* --- Testing */}
        {/* <Route path="/temp/all" element={<All />} />
        <Route path="/temp/password" element={<PasswordReset />} /> */}

        <Route path="/temp/card" element={<CustomerCardsPage />} />
        {/* <Route path="/employee/m" element={<EmployeeManagement />} />  */}


        {/* --- Other */}
        <Route path="/_metadata" element={<Meta />} />
        <Route path="/_" element={<Meta />} />


        {/* --- 404 Catch-all Route --- */}
        <Route path="*" element={<NotFound />} />

     
        {/* unauth ? */}
      </Routes>
    </Router>
  );
}
