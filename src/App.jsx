import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Pages --- 
import All from "./pages/_temp/All";

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


export default function App() {
  return (
    <Router>
      <Routes>
        {/* --- Public */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        
        {/* +++ Services */}
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
        
        {/* --- Employee / Business */}


        {/* --- Less important / Testing */}
        <Route path="/temp/all" element={<All />} />

      </Routes>
    </Router>
  );
}
