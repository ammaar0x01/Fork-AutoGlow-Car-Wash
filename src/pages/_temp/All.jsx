import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import NavbarCustomer from "../../components/NavbarCustomer";
import NavbarEmployee from "../../components/NavbarEmployee";
import NavbarTemplate from "../../components/NavbarTemplate";


export default function All() {
    console.log("Loading All.jsx...")

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        // navigate(path);
        // or 
        window.open(path, "_blank");
    };

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
        <div
            className={` h-full w-full bg-[#0C2D48] 
              shadow-2xl pt-24 pb-24 transition-transform duration-300 ease-in-out z-[1000]
              `}>
            {/* <NavbarTemplate /> */}
            {/* <Navbar /> */}
            <NavbarCustomer />
            <NavbarEmployee />

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
