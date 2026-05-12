import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Pages --- 
// --- public --- 
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import ContactUs from "./pages/public/ContactUs";
import Login from "./pages/public/Login";
import SignUp from "./pages/public/SignUp";
import ExteriorWash from "./pages/public/services/ExteriorWashService";
import InteriorCare from "./pages/public/services/InteriorCare";
import FullDetailing from "./pages/public/services/FullDetailing";
import ProtectionService from "./pages/public/services/ProtectionService";
import RoleSelection from "./pages/public/RoleSelection";
import AddressDetails from "./pages/public/AddressDetails";

// --- customer --- 
// ...

// --- business/manager --- 
// ...

// --- other ---
import All from "./pages/_temp/All";
import Services from "./pages/public/Services";


export default function App() {
  return (
    <Router>
      <Routes>
        {/* --- Public */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        
        {/* +++ Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/exterior" element={<ExteriorWash />} />
        <Route path="/interior" element={<InteriorCare />} />
        <Route path="/full-detailing" element={<FullDetailing />} />
        <Route path="/protection" element={<ProtectionService />} />
        {/* <Route path="/corpo" element={<Login />} />
        <Route path="/franchise" element={<Login />} /> */}
        
        {/* +++ Account-related */}
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<SignUp />} />
        <Route path="/role" element={<RoleSelection />} />
        <Route path="/address" element={<AddressDetails />} />

        
 
        {/* --- Error route */}

        {/* --- Unauth route? */}

        {/* --- Customer */}
        {/* <Route path="/customer/home" element={<LandingCustomer />} />  */}

{/* 
        <Route path="/vehicles" element={<VehiclePage />} />
        <Route path="/profiles" element={<ProfilePage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/bookingtwo" element={<BookingTwo />} />
        <Route path="/bookingvehicle" element={<BookingVehicle />} /> 
        <Route path="/confirm" element={<ConfirmBookingPage />} />
        <Route path="/payment/:bookingId" element={<PaymentPage />} />
        <Route path="/EditCustomerProfile" element={<EditCustomerProfile />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/deactivate-account" element={<DeactivateAccount />} />
        <Route path="/bookinghistory" element={<BookingHistory />} /> */}
         

        {/* --- Employee / Business */}
        {/* <Route path="/employee/home" element={< />} />  */}
        {/* <Route path="/business/home" element={< />} />  */}


        {/* --- Less important / Testing */}
        <Route path="/temp/all" element={<All />} />

      </Routes>
    </Router>
  );
}
