import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import "./NavbarEmployee.css";
import logo from "../assets/icons/logo.jpg";
import NavbarTemplate from "./NavbarTemplate";


// export default function NavbarEmployee(){
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const navigate = useNavigate();

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const handleLogout = () => {
//         localStorage.removeItem("userEmail");
//         localStorage.removeItem("userRoleDescription");
//         // Add any other session keys if needed
//         navigate("/login");
//     };

//     const userEmail = localStorage.getItem("userEmail");
//     const userInitial = userEmail ? userEmail.charAt(0).toUpperCase() : "E";

//     const handleLogoClick = () => navigate("/LandingEmployee");

//     return (
//         <nav className="employee-navbar">
//             <div className="app-content navbar-inner">
//                 <div className="navbar-left" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
//                     <img src={logo} alt="Mobile Car Wash Logo" className="logo-img" />
//                 </div>

//                 <div className="nav-links">
//                     {/* Top-level links */}
//                     <a href="/manage-bookings" className="nav-btn">View Bookings</a>
//                     <a href="/cleaning-services/management" className="nav-btn">Update Services</a>
//                     {/*<a href="/performance" className="nav-btn">Performance</a>*/}
//                     <a href="/EmployeeManagement" className="nav-btn">Employees</a>

//                     {/* Hamburger/X button */}
//                     <button
//                         className={`hamburger ${isMenuOpen ? "open" : ""}`}
//                         onClick={toggleMenu}
//                     >
//                         <span></span>
//                         <span></span>
//                     </button>
//                 </div>
//             </div>

//             {/* Slide-In Side Menu */}
//             <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
//                 <ul>
//                     <li><a href="/profiles">Profile</a></li>
//                     <li><a href="/password-reset">Change Password</a></li>
//                     <li><a href="/deactivate-account">Deactivate Account</a></li>
//                     <li>
//                         <button onClick={handleLogout} className="logout-btn">Log Out</button>
//                     </li>
//                 </ul>
//             </div>

//             {/* Overlay */}
//             {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
//         </nav>
//     );
// };



// newer0 
export default function NavbarEmployee() {
    const defaultNavLinks = [
        { label: "About", path: "/about" },
        // { label: "Services", scrollTo: "our-services" },
        // { label: "Contact", path: "/contact" },
    ];

    const defaultAuthLinks = [
        { label: "Profile", path: "/login", variant: "primary" },
        { label: "Bookings", path: "/roles" },
        { label: "Services", path: "/roles" },
        { label: "Employees", path: "/roles" },
        { label: "Bookings", path: "/roles" },
    ];

    const defaultMobileLinks = [...defaultNavLinks, ...defaultAuthLinks]

    return (
        <NavbarTemplate
            navLinks={defaultNavLinks}
            authLinks={defaultAuthLinks}
            mobileLinks={defaultMobileLinks}
        />
    )
}