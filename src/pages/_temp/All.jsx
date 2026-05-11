// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // --- Pages --- 
// import Home from "./pages/public/Home";
// import About from "./pages/public/About";


// export default function All() {
//   return (
  
//     <Router>
//       <Routes>
//         {/* --- Public */}
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />
        

//         {/* --- Error route */}

//         {/* --- Unauth route? */}

//         {/* --- Customer */}
        

//         {/* --- Employee / Business */}


//         {/* --- Less important / Testing */}

//       </Routes>
//     </Router>
//   );
// }


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // --- Pages --- 
// import Booking from './screens/customer/booking/Booking';
// import BookingVehicle from "./screens/customer/booking/BookingVehicle";
// import BookingTwo from "./screens/customer/booking/BookingTwo";
// import ConfirmBookingPage from "./screens/customer/booking/ConfirmBookingPage";
// import ProfileManagement from "./screens/ProfileManagement";
// import VehiclePage from "./screens/customer/management/VehiclePage";
// import CleaningServiceManagement from "./screens/employee/management/CleaningServiceManagement";
// import ProfilePage from "./screens/ProfilePage";
// import ManageBookings from "./screens/employee/booking/ManageBookings";
// import PaymentPage from "./screens/employee/booking/PaymentPage";
// import LandingPublic from "./screens/LandingPublic";
// import Navbar from "./screens/components/Navbar";

// import Footer from "./screens/components/Footer";
// import SignUp from "./screens/auth/SignUp";
// import RoleSelection from "./screens/auth/RoleSelection";
// import Login from "./screens/auth/Login";
// import AddressDetails from "./screens/auth/AddressDetails";
// import LandingCustomer from "./screens/customer/LandingCustomer";
// import NavbarCustomer from "./screens/components/NavbarCustomer";
// import NavbarEmployee from "./screens/components/NavbarEmployee";
// import LandingEmployee from "./screens/employee/LandingEmployee";
// import EmployeeManagement from "./screens/EmployeeManagement";
// import AboutUs from "./screens/AboutUs";
// import ContactUs from "./screens/ContactUs";
// import EditCustomerProfile from "./screens/EditCustomerProfile";
// import EditEmployeeProfile from "./screens/EditEmployeeProfile";
// import PasswordReset from "./screens/components/PasswordReset";
// import DeactivateAccount from "./screens/auth/DeactivateAccount";
// import ExteriorWash from "./screens/customer/single-services/ExteriorWashService";
// import CustomerCardsPage from "./screens/customer/booking/CustomerCardPage";
// import BookingHistory from "./screens/customer/booking/BookingHistory"
// import FullDetailing from "./screens/customer/single-services/FullDetailing";
// import InteriorCare from "./screens/customer/single-services/InteriorCare";
// import ProtectionService from "./screens/customer/single-services/ProtectionService";
// import ContactUsCustomer from "./screens/ContactUsCustomer";
// import AboutUsCustomer from "./screens/AboutUsCustomer";


// export default function All() {
//   return (
//     <Router>
//       <Routes>
//         {/* --- Public */}
//         <Route path="/" element={<LandingPublic />} />
//         {/* <Route path="/landingpublic" element={<LandingPublic />} /> */}
//         <Route path="/login" element={<Login />} />

//         {/* <Route path="/SignUp" element={<SignUp />} /> */}
//         {/* <Route path="/sign-up" element={<SignUp />} /> */}
//         <Route path="/create-account" element={<SignUp />} />

//         <Route path="/RoleSelection" element={<RoleSelection />} />
//         <Route path="/AddressDetails" element={<AddressDetails />} />
//         <Route path="/AboutUs" element={<AboutUs />} />
//         <Route path="/ContactUs" element={<ContactUs />} />

//         <Route path="/exterior-wash" element={<ExteriorWash />} />
//         <Route path="/partner-with-us" element={<FullDetailing />} />
//         <Route path="/corporate-packages" element={<InteriorCare />} />
//         <Route path="/franchise" element={<ProtectionService />} />

//         {/* --- Error route */}

//         {/* --- Unauth route? */}

//         {/* --- Customer */}
//         {/* <Route path="/LandingCustomer" element={<LandingCustomer />} /> */}
//         <Route path="/customer/home" element={<LandingCustomer />} />  {/* remove this? or mod it? */}

//         <Route path="/vehicles" element={<VehiclePage />} />
//         <Route path="/profiles" element={<ProfilePage />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/bookingtwo" element={<BookingTwo />} />
//         <Route path="/bookingvehicle" element={<BookingVehicle />} /> {/* Vehicle selection */}
//         <Route path="/confirm" element={<ConfirmBookingPage />} />
//         <Route path="/payment/:bookingId" element={<PaymentPage />} />
//         <Route path="/EditCustomerProfile" element={<EditCustomerProfile />} />
//         <Route path="/password-reset" element={<PasswordReset />} />
//         <Route path="/deactivate-account" element={<DeactivateAccount />} />
//         <Route path="/bookinghistory" element={<BookingHistory />} />

//         {/* --- Employee / Business */}
//         {/* <Route path="/LandingEmployee" element={<LandingEmployee />} /> */}
//         {/* <Route path="/employee/home" element={<LandingEmployee />} /> */}
//         <Route path="/business/home" element={<LandingEmployee />} />

//         <Route path="/cleaning-services/management" element={<CleaningServiceManagement />} />
//         <Route path="/profile-management" element={<ProfileManagement />} />
//         <Route path="/EmployeeManagement" element={<EmployeeManagement />} />
//         <Route path="/manage-bookings" element={<ManageBookings />} />
//         <Route path="/EditEmployeeProfile" element={<EditEmployeeProfile />} />


//         {/* less important */}
//         <Route path="/navbar" element={<Navbar />} />

//         <Route path="/Footer" element={<Footer />} />
//         <Route path="/NavbarCustomer" element={<NavbarCustomer />} />
//         <Route path="/NavbarEmployee" element={<NavbarEmployee />} />
//         <Route path="/my-cards" element={<CustomerCardsPage />} />

//         <Route path={"/AboutUsCustomer"} element={<AboutUsCustomer />} />
//         <Route path={"/ContactUsCustomer"} element={<ContactUsCustomer />} />
//       </Routes>
//     </Router>
//   );
// }


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function All(){

  
//       const handleNavigation = (path) => {
//         navigate(path);
//         setIsMenuOpen(false);
//     };


//   return (
//     <div className={`fixed top-0 right-0 h-full w-[250px] bg-[#0C2D48] shadow-2xl pt-24 transition-transform duration-300 ease-in-out z-[1000] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
//                 <ul className="flex flex-col">
//                     <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
//                         {/* <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleAboutUs}>About Us</button> */}
//                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
//                             onClick={() => handleNavigation("/about")}>
//                             About Us
//                         </button>

//                     </li>
//                     <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
//                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
//                             onClick={handleServices}>Our Services</button>
//                     </li>
//                     <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
//                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleContactUs}>Contact Us</button>
//                     </li>
//                     <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
//                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleSignUp}>Sign Up</button>
//                     </li>
//                     <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
//                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleLogIn}>Log In</button>
//                     </li>
//                 </ul>
//             </div>
//   )
// }



// newer0
import React from "react";
import { useNavigate } from "react-router-dom";


// export default function All({ isMenuOpen, setIsMenuOpen }) {
export default function All() {

  console.log("Loading All.jsx...")

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        // navigate(path);
        // or 
        window.open(path, "_blank");

        // setIsMenuOpen(false);
    };

    // Navigation items
    const menuItems = [
        // --- Public ---
        { label: "Home", path: "/" },
        { label: "Login", path: "/login" },
        { label: "Create Account", path: "/create-account" },
        { label: "Role Selection", path: "/RoleSelection" },
        { label: "Address Details", path: "/AddressDetails" },
        { label: "About Us", path: "/AboutUs" },
        { label: "Contact Us", path: "/ContactUs" },

        // --- Services ---
        { label: "Exterior Wash", path: "/exterior-wash" },
        { label: "Partner With Us", path: "/partner-with-us" },
        { label: "Corporate Packages", path: "/corporate-packages" },
        { label: "Franchise", path: "/franchise" },

        // --- Customer ---
        { label: "Customer Home", path: "/customer/home" },
        { label: "Vehicles", path: "/vehicles" },
        { label: "Profiles", path: "/profiles" },
        { label: "Booking", path: "/booking" },
        { label: "Booking Step 2", path: "/bookingtwo" },
        { label: "Booking Vehicle", path: "/bookingvehicle" },
        { label: "Confirm Booking", path: "/confirm" },
        { label: "Password Reset", path: "/password-reset" },
        { label: "Deactivate Account", path: "/deactivate-account" },
        { label: "Booking History", path: "/bookinghistory" },

        // --- Business ---
        { label: "Business Home", path: "/business/home" },
        { label: "Service Management", path: "/cleaning-services/management" },
        { label: "Profile Management", path: "/profile-management" },
        { label: "Employee Management", path: "/EmployeeManagement" },
        { label: "Manage Bookings", path: "/manage-bookings" },

        // --- Misc ---
        { label: "My Cards", path: "/my-cards" },
    ];

    return (
         // isMenuOpen ? "translate-x-0" : "translate-x-full"
        <div
            className={` h-full w-full bg-[#0C2D48] 
              shadow-2xl pt-24 pb-24 transition-transform duration-300 ease-in-out z-[1000]
              `}>
            <ul className="flex flex-col bg-black m-7">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="border-b border-gray-700 hover:bg-gray-100 group transition-colors m-3"
                    >
                        <button
                            className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black"
                            onClick={() => handleNavigation(item.path)}
                        >
                            {item.label} 
                            <i className="px-5 text-blue-800 hover:text-black">{item.path}</i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
