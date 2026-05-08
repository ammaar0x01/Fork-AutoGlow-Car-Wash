// // src/screens/components/Navbar.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../../assets/logo.jpg";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const navigate = useNavigate();

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//     const handleAboutUs = () => navigate("/AboutUs");
//     const handleContactUs = () => navigate("/ContactUs");

//     const handleSignUp = () => navigate("/roleselection");
//     const handleLogIn = () => navigate("/login");

//     // ✅ Scroll smoothly to "Our Services" section
//     const handleServices = () => {
//         const section = document.getElementById("our-services");
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         <nav className="navbar">
//             <div className="app-content navbar-inner">
//                 <div className="navbar-left">
//                     <img src={logo} alt="Mobile Car Wash Logo" className="logo-img" />
//                     {/*<span className="logo-text">Mobile Car Wash</span>*/}
//                 </div>

//                 <div className="nav-links">
//                     <button className="nav-btn" onClick={handleServices}>
//                         Our Services
//                     </button>
//                     <button className="nav-btn" onClick={handleSignUp}>
//                         Sign Up
//                     </button>
//                     <button className="nav-btn" onClick={handleLogIn}>
//                         Log In
//                     </button>

//                     {/* Hamburger/X Button */}
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
//                     <li>
//                         <button onClick={handleAboutUs}>About Us</button>
//                     </li>
//                     <li>
//                         <button onClick={handleContactUs}>Contact Us</button>
//                     </li>
//                 </ul>
//             </div>

//             {/* Overlay */}
//             {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
//         </nav>
//     );
// };

// export default Navbar;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
    console.log("NEW NAVBAR")
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleAboutUs = () => { navigate("/AboutUs"); setIsMenuOpen(false); };
    const handleContactUs = () => { navigate("/ContactUs"); setIsMenuOpen(false); };
    const handleSignUp = () => navigate("/roleselection");
    const handleLogIn = () => navigate("/login");

    const handleServices = () => {
        const section = document.getElementById("our-services");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Shared Tailwind class for Desktop Nav Buttons
    const navBtnClass = "text-white font-bold text-base px-3 py-2 transition-all duration-300 hover:bg-gray-200 hover:text-black rounded";

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0C2D48] shadow-md z-[1000]">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
                
                {/* Left side: Logo */}
                <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
                    <img src={logo} alt="Logo" className="h-16 w-auto rounded-full mr-2" />
                </div>

                {/* Right side: Desktop Links */}
                <div className="hidden md:flex items-center gap-4">
                    <button className={navBtnClass} onClick={handleServices}>Our Services</button>
                    <button className={navBtnClass} onClick={handleAboutUs}>About</button>
                    <button className={navBtnClass} onClick={handleContactUs}>Contact</button>
                    <button className={navBtnClass} onClick={handleSignUp}>Sign Up</button>
                    <button className={navBtnClass} onClick={handleLogIn}>Log In</button>
                </div>

                {/* Hamburger Button (Mobile Only) */}
                <button 
                    className="md:hidden flex flex-col justify-between w-8 h-5 z-[1001] relative focus:outline-none"
                    onClick={toggleMenu}
                >
                    <span className={`block w-full h-1 bg-white rounded transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-full h-1 bg-white rounded transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-full h-1 bg-white rounded transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>

            {/* Mobile Slide-In Side Menu */}
            <div className={`fixed top-0 right-0 h-full w-[250px] bg-[#0C2D48] shadow-2xl pt-24 transition-transform duration-300 ease-in-out z-[1000] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <ul className="flex flex-col">
                    <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
                        <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleServices}>Our Services</button>
                    </li>
                    <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
                        <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleAboutUs}>About Us</button>
                    </li>
                    <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
                        <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleContactUs}>Contact Us</button>
                    </li>
                    <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
                        <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleSignUp}>Sign Up</button>
                    </li>
                    <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
                        <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleLogIn}>Log In</button>
                    </li>
                </ul>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-40 z-[999]" 
                    onClick={toggleMenu}
                ></div>
            )}
        </nav>
    );
};

