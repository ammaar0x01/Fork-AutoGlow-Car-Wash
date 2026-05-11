// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // import logo from "../assets/icons/logo.jpg";

// // const links = [
// //     {label: "", path: ""}
// // ]

// // export default function NavbarTemplate() {
// //     const [isMenuOpen, setIsMenuOpen] = useState(false);
// //     const navigate = useNavigate();
// //     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

// //     const handleNavigation = (path) => {
// //         navigate(path);
// //         setIsMenuOpen(false);
// //     };

// //     // const handleAboutUs = () => { navigate("/AboutUs"); setIsMenuOpen(false); };
// //     // const handleContactUs = () => { navigate("/ContactUs"); setIsMenuOpen(false); };
// //     // const handleSignUp = () => navigate("/roleselection");
// //     // const handleLogIn = () => navigate("/login");

// //     const handleServices = () => {
// //         const section = document.getElementById("our-services");
// //         if (section) {
// //             section.scrollIntoView({ behavior: "smooth" });
// //         }
// //     };

    
// //     // Shared Tailwind class for Desktop Nav Buttons
// //     // const navBtnClass = "text-white font-bold text-base px-3 py-2 transition-all duration-300 hover:bg-gray-200 hover:text-black rounded";
// //     const navBtnClass = "text-white/90 font-normal text-sm tracking-wide px-4 py-2 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-full";

// //     return (
// //         <nav className="fixed top-0 left-0 w-full bg-[#0C2D48] shadow-md z-[1000]">
// //             <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
                
// //                 {/* Left side: Logo */}
// //                 {/* <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
// //                     <img src={logo} alt="Logo" className="h-16 w-auto rounded-full mr-2" />
// //                 </div> */}
// //                  <div className="flex items-center cursor-pointer group" onClick={() => navigate("/")}>
// //                     <img src={logo} alt="Logo" className="h-12 w-auto rounded-full mr-3 border border-white/20 group-hover:scale-105 transition-transform" />
// //                     <span className="text-white font-light tracking-widest text-lg uppercase hidden sm:block">MobileGlow</span>
// //                 </div>


// //                 {/* Right side: Desktop Links */}
// //                 {/* <div className="hidden md:flex items-center gap-4">
// //                     <button className={navBtnClass} onClick={handleServices}>Our Services</button>
// //                     <button className={navBtnClass} onClick={handleAboutUs}>About</button>
// //                     <button className={navBtnClass} onClick={handleContactUs}>Contact</button>
// //                     <button className={navBtnClass} onClick={handleSignUp}>Sign Up</button>
// //                     <button className={navBtnClass} onClick={handleLogIn}>Log In</button>
// //                 </div> */}

// //                  {/* <div className="hidden lg:flex items-center gap-2"> */}
// //                 <div className="hidden md:flex items-center gap-4">
// //                     <button className={navBtnClass} onClick={() => handleNavigation("/about")}>About</button>                
// //                     <button className={navBtnClass} onClick={handleServices}>Services</button>
// //                     <button className={navBtnClass} onClick={() => handleNavigation("/contact")}>Contact</button>
// //                     <div className="h-6 w-[1px] bg-white/20 mx-2"></div> {/* Separator */}
                    
// //                     <button className={navBtnClass} 
// //                         onClick={() => handleNavigation("/login")}>Log In</button>
// //                     <button className="bg-blue-500 hover:bg-blue-600 text-white font-normal text-sm px-6 py-2 rounded-full transition-all shadow-lg shadow-blue-500/20" 
// //                         onClick={() => handleNavigation("/roles")}>
// //                         Sign Up
// //                     </button>
// //                 </div>


// //                 {/* Hamburger Button (Mobile Only) */}
// //                 <button 
// //                     className="md:hidden flex flex-col justify-between w-8 h-5 z-[1001] relative focus:outline-none"
// //                     onClick={toggleMenu}
// //                 >
// //                     <span className={`block w-full h-1 bg-white rounded transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
// //                     <span className={`block w-full h-1 bg-white rounded transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
// //                     <span className={`block w-full h-1 bg-white rounded transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
// //                 </button>
// //             </div>

// //             {/* Mobile Slide-In Side Menu */}
// //             <div className={`fixed top-0 right-0 h-full w-[250px] bg-[#0C2D48] shadow-2xl pt-24 transition-transform duration-300 ease-in-out z-[1000] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
// //                 <ul className="flex flex-col">
// //                     <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
// //                         {/* <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleAboutUs}>About Us</button> */}
// //                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
// //                             onClick={() => handleNavigation("/about")}>
// //                             About Us
// //                         </button>

// //                     </li>
// //                     <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
// //                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
// //                             onClick={handleServices}>Our Services</button>
// //                     </li>
// //                     <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
// //                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
// //                             onClick={() => handleNavigation("/contact")}>Contact Us</button>
// //                     </li>
// //                     <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
// //                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
// //                             onClick={() => handleNavigation("/roles")}>Sign Up</button>
// //                     </li>
// //                     <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors">
// //                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
// //                             onClick={() => handleNavigation("/login")}>Log In</button>
// //                     </li>
// //                 </ul>
// //             </div>

// //             {/* Overlay */}
// //             {isMenuOpen && (
// //                 <div 
// //                     className="fixed inset-0 bg-black bg-opacity-40 z-[999]" 
// //                     onClick={toggleMenu}
// //                 ></div>
// //             )}
// //         </nav>
// //     );
// // };



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/icons/logo.jpg";


//    // ===== NAV DATA =====
//     const navLinks = [
//         { label: "About", path: "/about" },
//         { label: "Services", scrollTo: "our-services" },
//         { label: "Contact", path: "/contact" },
//     ];

//     const authLinks = [
//         { label: "Log In", path: "/login" },
//         { label: "Sign Up", path: "/roles", variant: "primary" },
//     ];

//     const mobileLinks = [
//         { label: "About Us", path: "/about" },
//         { label: "Our Services", scrollTo: "our-services" },
//         { label: "Contact Us", path: "/contact" },
//         { label: "Sign Up", path: "/roles" },
//         { label: "Log In", path: "/login" },
//     ];

// export default function NavbarTemplate({ navLinks=navLinks, authLinks=authLinks, mobileLinks=mobileLinks}) {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const navigate = useNavigate();

//     const toggleMenu = () => setIsMenuOpen(prev => !prev);

//     const handleNavigation = (path) => {
//         navigate(path);
//         setIsMenuOpen(false);
//     };

//     const handleScroll = (id) => {
//         const section = document.getElementById(id);
//         if (section) section.scrollIntoView({ behavior: "smooth" });
//         setIsMenuOpen(false);
//     };

 

//     const navBtnClass =
//         "text-white/90 font-normal text-sm px-4 py-2 rounded-full hover:bg-white/10 hover:text-white transition-all";

//     return (
//         <nav className="fixed top-0 left-0 w-full bg-[#0C2D48] shadow-md z-[1000]">
//             <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">

//                 {/* Logo */}
//                 <div
//                     className="flex items-center cursor-pointer group"
//                     onClick={() => navigate("/")}
//                 >
//                     <img
//                         src={logo}
//                         alt="Logo"
//                         className="h-12 w-auto rounded-full mr-3 group-hover:scale-105 transition"
//                     />
//                     <span className="text-white tracking-widest text-lg hidden sm:block">
//                         MobileGlow
//                     </span>
//                 </div>

//                 {/* Desktop Nav */}
//                 <div className="hidden md:flex items-center gap-4">
//                     {navLinks.map((item, i) => (
//                         <button
//                             key={i}
//                             className={navBtnClass}
//                             onClick={() =>
//                                 item.scrollTo
//                                     ? handleScroll(item.scrollTo)
//                                     : handleNavigation(item.path)
//                             }
//                         >
//                             {item.label}
//                         </button>
//                     ))}

//                     <div className="h-6 w-[1px] bg-white/20 mx-2" />

//                     {authLinks.map((item, i) => (
//                         item.variant === "primary" ? (
//                             <button
//                                 key={i}
//                                 className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-6 py-2 rounded-full transition"
//                                 onClick={() => handleNavigation(item.path)}
//                             >
//                                 {item.label}
//                             </button>
//                         ) : (
//                             <button
//                                 key={i}
//                                 className={navBtnClass}
//                                 onClick={() => handleNavigation(item.path)}
//                             >
//                                 {item.label}
//                             </button>
//                         )
//                     ))}
//                 </div>

//                 {/* Mobile Hamburger */}
//                 <button
//                     className="md:hidden flex flex-col justify-between w-8 h-5"
//                     onClick={toggleMenu}
//                 >
//                     <span className={`h-1 bg-white rounded transition ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
//                     <span className={`h-1 bg-white rounded transition ${isMenuOpen ? "opacity-0" : ""}`} />
//                     <span className={`h-1 bg-white rounded transition ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             <div
//                 className={`fixed top-0 right-0 h-full w-[250px] bg-[#0C2D48] pt-24 transition-transform duration-300 z-[1000] ${
//                     isMenuOpen ? "translate-x-0" : "translate-x-full"
//                 }`}
//             >
//                 <ul className="flex flex-col">
//                     {mobileLinks.map((item, i) => (
//                         <li
//                             key={i}
//                             className="border-b border-gray-700 hover:bg-white/10 transition"
//                         >
//                             <button
//                                 className="w-full text-left px-6 py-4 text-white"
//                                 onClick={() =>
//                                     item.scrollTo
//                                         ? handleScroll(item.scrollTo)
//                                         : handleNavigation(item.path)
//                                 }
//                             >
//                                 {item.label}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Overlay */}
//             {isMenuOpen && (
//                 <div
//                     className="fixed inset-0 bg-black/40 z-[999]"
//                     onClick={toggleMenu}
//                 />
//             )}
//         </nav>
//     );
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.jpg";

// ===== DEFAULT NAV DATA =====
const defaultNavLinks = [
    { label: "About", path: "/about" },
    { label: "Services", scrollTo: "our-services" },
    { label: "Contact", path: "/contact" },
];

const defaultAuthLinks = [
    { label: "Log In", path: "/login" },
    { label: "Sign Up", path: "/roles", variant: "primary" },
];

const defaultMobileLinks = [
    { label: "About Us", path: "/about" },
    { label: "Our Services", scrollTo: "our-services" },
    { label: "Contact Us", path: "/contact" },
    { label: "Sign Up", path: "/roles" },
    { label: "Log In", path: "/login" },
];

export default function NavbarTemplate({
    navLinks = defaultNavLinks,
    authLinks = defaultAuthLinks,
    mobileLinks = defaultMobileLinks,
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    const navBtnClass =
        "text-white/90 font-normal text-sm px-4 py-2 rounded-full hover:bg-white/10 hover:text-white transition-all";

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0C2D48] shadow-md z-[1000]">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">

                {/* Logo */}
                <div
                    className="flex items-center cursor-pointer group"
                    onClick={() => navigate("/")}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-12 w-auto rounded-full mr-3 group-hover:scale-105 transition"
                    />
                    <span className="text-white tracking-widest text-lg hidden sm:block">
                        MobileGlow
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4">
                    {navLinks.map((item, i) => (
                        <button
                            key={i}
                            className={navBtnClass}
                            onClick={() =>
                                item.scrollTo
                                    ? handleScroll(item.scrollTo)
                                    : handleNavigation(item.path)
                            }
                        >
                            {item.label}
                        </button>
                    ))}

                    <div className="h-6 w-[1px] bg-white/20 mx-2" />

                    {authLinks.map((item, i) =>
                        item.variant === "primary" ? (
                            <button
                                key={i}
                                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-6 py-2 rounded-full transition"
                                onClick={() => handleNavigation(item.path)}
                            >
                                {item.label}
                            </button>
                        ) : (
                            <button
                                key={i}
                                className={navBtnClass}
                                onClick={() => handleNavigation(item.path)}
                            >
                                {item.label}
                            </button>
                        )
                    )}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-between w-8 h-5"
                    onClick={toggleMenu}
                >
                    <span
                        className={`h-1 bg-white rounded transition ${
                            isMenuOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`h-1 bg-white rounded transition ${
                            isMenuOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`h-1 bg-white rounded transition ${
                            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[250px] bg-[#0C2D48] pt-24 transition-transform duration-300 z-[1000] ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col">
                    {mobileLinks.map((item, i) => (
                        <li
                            key={i}
                            className="border-b border-gray-700 hover:bg-white/10 transition"
                        >
                            <button
                                className="w-full text-left px-6 py-4 text-white"
                                onClick={() =>
                                    item.scrollTo
                                        ? handleScroll(item.scrollTo)
                                        : handleNavigation(item.path)
                                }
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-[999]"
                    onClick={toggleMenu}
                />
            )}
        </nav>
    );
}
