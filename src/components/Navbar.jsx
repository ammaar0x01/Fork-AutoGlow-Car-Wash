// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

import logo from "../assets/icons/logo.jpg";


// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const navigate = useNavigate();
//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//     const handleNavigation = (path) => {
//         navigate(path);
//         setIsMenuOpen(false);
//     };

//     const handleServices = () => {
//         const section = document.getElementById("our-services");
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//         }
//     };

    
//     const navBtnClass = `text-white/90 font-normal text-sm tracking-wide px-4 py-2 transition-all duration-300 
//         hover:text-white hover:bg-white/10 rounded-full`;

//     return (
//         <nav className="fixed top-0 left-0 w-full 
//             bg-gradient-to-br from-blue-600 to-blue-950
//             shadow-md z-[1000]">
//         {/* <nav className="fixed top-0 left-0 w-full bg-[#0C2D48] shadow-md z-[1000]"> */}

//             <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
                
//                 {/* Left side: Logo */}
//                  <div className="flex items-center cursor-pointer group" onClick={() => navigate("/")}>
//                     <img src={logo} alt="Logo" className="h-12 w-auto rounded-full mr-3 border border-white/20 group-hover:scale-105 transition-transform" />
//                     <span className="text-white font-light tracking-widest text-lg uppercase hidden sm:block">MobileGlow</span>
//                 </div>


//                 {/* Right side: Desktop Links */}
//                 <div className="hidden md:flex items-center gap-4">
//                     <button className={navBtnClass} onClick={() => handleNavigation("/about")}>About</button>                
//                     <button className={navBtnClass} onClick={() => handleNavigation("/services")}>Services</button>
//                     <button className={navBtnClass} onClick={() => handleNavigation("/contact")}>Contact</button>
//                     <div className="h-6 w-[1px] bg-white/20 mx-2"></div> {/* Separator */}
                    
//                     <button className={navBtnClass} 
//                         onClick={() => handleNavigation("/login")}>Log In</button>
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white font-normal text-sm px-6 py-2 rounded-full transition-all shadow-lg shadow-blue-500/20" 
//                         onClick={() => handleNavigation("/role")}>
//                         Sign Up
//                     </button>
//                 </div>


//                 {/* Hamburger Button (Mobile Only) */}
//                 <button 
//                     className="md:hidden flex flex-col justify-between w-8 h-5 z-[1001] relative focus:outline-none"
//                     onClick={toggleMenu}
//                 >
//                     <span className={`block w-full h-1 bg-white rounded transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
//                     <span className={`block w-full h-1 bg-white rounded transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
//                     <span className={`block w-full h-1 bg-white rounded transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
//                 </button>
//             </div>

//             {/* Mobile Slide-In Side Menu */}
//             {/* bg-[#0C2D48]  */}
//             {/* <div className={`fixed top-0 right-0 h-full w-[250px] bg-[rgba(12,45,72,0.9)] */}
            
//             <div className={`fixed top-0 right-0 h-full w-[250px] bg-[rgba(12,45,72,0.9)]
// backdrop-blur-sm p-6 rounded-xl
//                     shadow-2xl pt-24 transition-transform duration-300 ease-in-out z-[1000] 
//                     ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
//                     >
//                 <ul className="flex flex-col">
//                     {/* <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors"> */}
//                     <li className="hover:bg-gray-100 group transition-colors">

//                         {/* <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleAboutUs}>About Us</button> */}
//                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
//                             onClick={() => handleNavigation("/about")}>
//                             About Us
//                         </button>

//                     </li>
//                     <li className="hover:bg-gray-100 group transition-colors">
//                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
//                         onClick={() => handleNavigation("/services")}>
//                             {/* onClick={handleServices}> */}
//                                 Our Services</button>
//                     </li>
//                     <li className="hover:bg-gray-100 group transition-colors">
//                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
//                             onClick={() => handleNavigation("/contact")}>Contact Us</button>
//                     </li>
//                     <li className="hover:bg-gray-100 group transition-colors">
//                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
//                             onClick={() => handleNavigation("/role")}>Sign Up</button>
//                     </li>
//                     <li className="hover:bg-gray-100 group transition-colors">
//                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
//                             onClick={() => handleNavigation("/login")}>Log In</button>
//                     </li>
//                 </ul>
//             </div>

//             {/* Overlay */}
//             {isMenuOpen && (
//                 <div 
//                     className="fixed inset-0 bg-black bg-opacity-40 z-[999]" 
//                     onClick={toggleMenu}
//                 ></div>
//             )}
//         </nav>
//     );
// };


// newer0.1 
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    const handleNavigationNewTab = (path) => {
    // window.open takes the URL and '_blank' to trigger a new tab
    window.open(path, '_blank', 'noopener,noreferrer');
};

    const navBtnClass = `text-white/90 font-medium text-sm tracking-wide px-4 py-2 
        transition-all duration-300 
        hover:text-white hover:bg-white/10 rounded-full`;

    const activeClass = "bg-white/20 text-white shadow-inner";

      const navLinks = [
        // { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];



    return (
        //  <nav className="fixed top-0 left-0 w-full 
        //     bg-gradient-to-br from-blue-600 to-blue-950
        //     shadow-md z-[1000]">
                
        <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 
            bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950
            ${isScrolled ? 'py-2' : 'py-4 shadow-md'}
            border-b border-white/10`}>

            <div className="max-w-7xl mx-auto px-6 flex items-center h-16">
                
                {/* Left: Logo (flex-1 to push nav to center) */}
                <div className="flex-1 flex items-center">
                    <div className="flex items-center cursor-pointer group" onClick={() => handleNavigation("/")}>
                        {/* <span className="bg-white text-blue-800 px-2.5 py-1 rounded-lg font-black text-xl mr-3 group-hover:scale-110 transition-transform">
                            M
                        </span>
                        <span className="text-white font-black tracking-tighter text-xl uppercase hidden lg:block">
                            MobileGlow
                        </span> */}

                         {/* Logo */}
               <Link to="/" className="text-2xl font-black text-white tracking-tighter flex items-center gap-2">
                   <span className="bg-white text-blue-800 px-2 py-0.5 rounded-lg">M</span>
                   MOBILEGLOW
               </Link>
                    </div>
                </div>

                {/* Center: Desktop Navigation Links */}
                {/* <div className="hidden md:flex items-center gap-2">
                    <button 
                        // className={`${navBtnClass} ${location.pathname === '/about' ? activeClass : ''}`} 
                           className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-300
//                                 ${location.pathname === '/about' ? 'text-white border-b-2 border-white' : 'text-blue-100/80'}`}
//                         
                        onClick={() => handleNavigation("/about")}
                    >About
                    </button>                
                    
                    <button 
                        className={`${navBtnClass} ${location.pathname === '/services' ? activeClass : ''}`} 
                        onClick={() => handleNavigation("/services")}
                    >Services</button>
                    <button 
                        className={`${navBtnClass} ${location.pathname === '/contact' ? activeClass : ''}`} 
                        onClick={() => handleNavigation("/contact")}
                    >Contact</button>
                </div> */}

{/* --- version2 --- */}
    <div className="hidden md:flex items-center gap-8">
                     {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-bold uppercase tracking-widest transition-all 
                                hover:text-blue-300
                                ${location.pathname === link.path 
                                    ? 'text-white border-b-2 border-white' 
                                    : 'text-blue-100/80'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
{/* --- version2 --- */}

                {/* Right: Auth Actions (flex-1 to balance the logo side) */}
                <div className="flex-1 hidden md:flex items-center justify-end gap-2">
                    <button 
                        className={navBtnClass + " px-7 py-3 border"}
                        // className="hidden sm:block text-white font-bold text-sm hover:opacity-80 transition-opacity"

                        onClick={() => handleNavigationNewTab("/login")}
                        // onClick={window.open("/login", "_blank")}
                        >
                            Log In
                            </button>
                    <button 
                        className="bg-white text-blue-900 font-bold text-sm px-6 py-3 
                            rounded-full 
                            transition-all hover:bg-blue-50 shadow-lg active:scale-95" 
                        onClick={() => handleNavigation("/role")}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Hamburger Button (Mobile Only - stays right) */}
                <button 
                    className="md:hidden flex flex-col justify-between w-6 h-4 z-[1001] relative focus:outline-none ml-auto"
                    onClick={toggleMenu}
                >
                    <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>

            {/* Sidebar code would follow here... */}
            {/* Mobile Slide-In Side Menu */}
            {/* bg-[#0C2D48]  */}
            {/* <div className={`fixed top-0 right-0 h-full w-[250px] bg-[rgba(12,45,72,0.9)] */}
            
            <div className={`fixed top-0 right-0 h-full w-[250px] bg-[rgba(12,45,72,0.9)]
backdrop-blur-sm p-6 rounded-xl
                    shadow-2xl pt-24 transition-transform duration-300 ease-in-out z-[1000] 
                    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                    >
                <ul className="flex flex-col">
                    {/* <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors"> */}
                    <li className="hover:bg-gray-100 group transition-colors">

                        {/* <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleAboutUs}>About Us</button> */}
                        <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
                            onClick={() => handleNavigation("/about")}>
                            About Us
                        </button>

                    </li>
                    <li className="hover:bg-gray-100 group transition-colors">
                        <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
                        onClick={() => handleNavigation("/services")}>
                            {/* onClick={handleServices}> */}
                                Our Services</button>
                    </li>
                    <li className="hover:bg-gray-100 group transition-colors">
                        <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
                            onClick={() => handleNavigation("/contact")}>Contact Us</button>
                    </li>
                    <li className="hover:bg-gray-100 group transition-colors">
                        <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
                            onClick={() => handleNavigation("/role")}>Sign Up</button>
                    </li>
                    <li className="hover:bg-gray-100 group transition-colors">
                        <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
                            onClick={() => handleNavigation("/login")}>Log In</button>
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
}




// newer1 
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// export default function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const location = useLocation();

//     // Change background opacity/blur on scroll for a premium feel
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 20);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const navLinks = [
//         { name: 'Home', path: '/' },
//         { name: 'Services', path: '/services' },
//         { name: 'About', path: '/about' },
//         { name: 'Contact', path: '/contact' },
//     ];

//     return (
//         <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 
//             bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950
//             ${isScrolled ? 'py-3 shadow-xl backdrop-blur-md bg-opacity-95' : 'py-5 shadow-md'}
//             border-b border-white/10`}>
            
//             <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//                 {/* Logo */}
//                 <Link to="/" className="text-2xl font-black text-white tracking-tighter flex items-center gap-2">
//                     <span className="bg-white text-blue-800 px-2 py-0.5 rounded-lg">M</span>
//                     MOBILEGLOW
//                 </Link>

//                 {/* Navigation Links */}
//                 <div className="hidden md:flex items-center gap-8">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.path}
//                             to={link.path}
//                             className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-300
//                                 ${location.pathname === link.path ? 'text-white border-b-2 border-white' : 'text-blue-100/80'}`}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </div>

//                 {/* CTA Button */}
//                 <div className="flex items-center gap-4">
//                     <Link 
//                         to="/login" 
//                         className="hidden sm:block text-white font-bold text-sm hover:opacity-80 transition-opacity"
//                     >
//                         LOG IN
//                     </Link>
//                     <Link 
//                         to="/signup" 
//                         className="bg-white text-blue-900 px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-tighter hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95"
//                     >
//                         Book Now
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// }


// newer2 
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';

// // import logo from "../assets/images/icons/logo.png"; 
// import logo from "../assets/icons/logo.jpg";

// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 20);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const handleNavigation = (path) => {
//         navigate(path);
//         setIsMenuOpen(false);
//     };

//     const navBtnClass = `text-white/90 font-medium text-sm tracking-wide px-4 py-2 transition-all duration-300 
//         hover:text-white hover:bg-white/10 rounded-full`;

//     const activeClass = "bg-white/20 text-white shadow-inner";
// {/* Navigation Links */}
// //                 <div className="hidden md:flex items-center gap-8">
// //                     {navLinks.map((link) => (
// //                         <Link
// //                             key={link.path}
// //                             to={link.path}
// //                             className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-300
// //                                 ${location.pathname === link.path ? 'text-white border-b-2 border-white' : 'text-blue-100/80'}`}
// //                         >
// //                             {link.name}
// //                         </Link>
// //                     ))}
// //                 </div>

//     return (
//         <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 
//             bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950
//             ${isScrolled ? 'py-2 shadow-xl backdrop-blur-md' : 'py-4 shadow-md'}
//             border-b border-white/10`}>

//             <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
                
//                 {/* Left side: Logo */}
//                 {/* <div className="flex items-center cursor-pointer group" onClick={() => handleNavigation("/")}>
//                     <img 
//                         src={logo} 
//                         alt="MobileGlow Logo" 
//                         className="h-10 w-auto rounded-full mr-3 border border-white/20 group-hover:scale-105 transition-transform" 
//                     />
//                     <span className="text-white font-black tracking-tighter text-xl uppercase hidden sm:block">
//                         MobileGlow
//                     </span>
//                 </div> */}

//                  <Link to="/" className="text-2xl font-black text-white tracking-tighter flex items-center gap-2">
//                     <span className="bg-white text-blue-800 px-2 py-0.5 rounded-lg">M</span>
//                    MOBILEGLOW
//                  </Link>


//                 {/* Right side: Desktop Links */}
//                 <div className="hidden md:flex items-center gap-2">
//                     <button 
//                         className={`${navBtnClass} ${location.pathname === '/about' ? activeClass : ''}`} 
//                         onClick={() => handleNavigation("/about")}
//                     >About</button>                
//                     <button 
//                         className={`${navBtnClass} ${location.pathname === '/services' ? activeClass : ''}`} 
//                         onClick={() => handleNavigation("/services")}
//                     >Services</button>
//                     <button 
//                         className={`${navBtnClass} ${location.pathname === '/contact' ? activeClass : ''}`} 
//                         onClick={() => handleNavigation("/contact")}
//                     >Contact</button>
                    
//                     <div className="h-6 w-[1px] bg-white/20 mx-4"></div>
                    
//                     <button className={navBtnClass} onClick={() => handleNavigation("/login")}>Log In</button>
//                     <button 
//                         className="bg-white text-blue-900 font-bold text-sm px-6 py-2.5 rounded-full transition-all hover:bg-blue-50 shadow-lg active:scale-95" 
//                         onClick={() => handleNavigation("/role")}
//                     >
//                         Sign Up
//                     </button>
//                 </div>

//                 {/* Hamburger Button (Mobile Only) */}
//                 <button 
//                     className="md:hidden flex flex-col justify-between w-6 h-4 z-[1001] relative focus:outline-none"
//                     onClick={toggleMenu}
//                 >
//                     <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
//                     <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
//                     <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
//                 </button>
//             </div>

//             {/* Mobile Slide-In Side Menu */}
//             <div className={`fixed top-0 right-0 h-full w-[280px] 
//                 bg-gradient-to-b from-blue-900 to-black
//                 backdrop-blur-xl p-8 pt-24 transition-transform duration-500 ease-in-out z-[1000] border-l border-white/10
//                 ${isMenuOpen ? "translate-x-0 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]" : "translate-x-full"}`}
//             >
//                 <div className="flex flex-col gap-2">
//                     {[
//                         { label: 'About Us', path: '/about' },
//                         { label: 'Our Services', path: '/services' },
//                         { label: 'Contact Us', path: '/contact' },
//                         { label: 'Log In', path: '/login' },
//                     ].map((item) => (
//                         <button 
//                             key={item.path}
//                             className={`w-full text-left px-6 py-4 rounded-2xl text-white font-medium transition-all
//                                 ${location.pathname === item.path ? 'bg-blue-600' : 'hover:bg-white/10'}`}
//                             onClick={() => handleNavigation(item.path)}
//                         >
//                             {item.label}
//                         </button>
//                     ))}
                    
//                     <button 
//                         className="mt-4 w-full bg-white text-blue-900 font-bold px-6 py-4 rounded-2xl hover:bg-blue-50 transition-all" 
//                         onClick={() => handleNavigation("/role")}
//                     >
//                         Create Account
//                     </button>
//                 </div>
//             </div>

//             {/* Overlay */}
//             {isMenuOpen && (
//                 <div 
//                     className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] transition-opacity animate-fade-in" 
//                     onClick={toggleMenu}
//                 ></div>
//             )}
//         </nav>
//     );
// }


// newer3 
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// import logo from "../assets/icons/logo.jpg"; 

// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//     useEffect(() => {
//         const handleScroll = () => {
//             // Trigger solid state slightly earlier (10px) for a smoother transition
//             setIsScrolled(window.scrollY > 10);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const handleNavigation = (path) => {
//         navigate(path);
//         setIsMenuOpen(false);
//     };

//     const navBtnClass = `text-white/90 font-medium text-sm tracking-wide px-4 py-2 transition-all duration-300 
//         hover:text-white hover:bg-white/10 rounded-full`;

//     const activeClass = "bg-white/20 text-white shadow-inner";

//     return (
//         <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 
//             /* We use a solid gradient base and adjust the shadow/blur for visibility */
//             bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950
//             ${isScrolled ? 'py-2 shadow-2xl backdrop-blur-lg bg-opacity-100' : 'py-4 shadow-md bg-opacity-95'}
//             border-b border-white/10`}>

//             <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
                
//                 {/* Left side: Logo */}
//                 <div className="flex items-center cursor-pointer group" onClick={() => handleNavigation("/")}>
//                     <img 
//                         src={logo} 
//                         alt="MobileGlow Logo" 
//                         className="h-10 w-auto rounded-full mr-3 border border-white/20 group-hover:scale-105 transition-transform" 
//                     />
//                     <span className="text-white font-black tracking-tighter text-xl uppercase hidden sm:block">
//                         MobileGlow
//                     </span>
//                 </div>

//                 {/* Desktop Links */}
//                 <div className="hidden md:flex items-center gap-2">
//                     <button 
//                         className={`${navBtnClass} ${location.pathname === '/about' ? activeClass : ''}`} 
//                         onClick={() => handleNavigation("/about")}
//                     >About</button>                
//                     <button 
//                         className={`${navBtnClass} ${location.pathname === '/services' ? activeClass : ''}`} 
//                         onClick={() => handleNavigation("/services")}
//                     >Services</button>
//                     <button 
//                         className={`${navBtnClass} ${location.pathname === '/contact' ? activeClass : ''}`} 
//                         onClick={() => handleNavigation("/contact")}
//                     >Contact</button>
                    
//                     <div className="h-6 w-[1px] bg-white/20 mx-4"></div>
                    
//                     <button className={navBtnClass} onClick={() => handleNavigation("/login")}>Log In</button>
//                     <button 
//                         className="bg-white text-blue-900 font-bold text-sm px-6 py-2.5 rounded-full transition-all hover:bg-blue-50 shadow-lg active:scale-95" 
//                         onClick={() => handleNavigation("/role")}
//                     >
//                         Sign Up
//                     </button>
//                 </div>

//                 {/* Hamburger */}
//                 <button 
//                     className="md:hidden flex flex-col justify-between w-6 h-4 z-[1001] relative focus:outline-none"
//                     onClick={toggleMenu}
//                 >
//                     <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
//                     <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
//                     <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
//                 </button>
//             </div>

//             {/* Mobile Slide-In Side Menu */}
//             {/* Added a solid dark background to ensure it's never transparent against the page content */}
//             <div className={`fixed top-0 right-0 h-full w-[280px] 
//                 bg-blue-950 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]
//                 p-8 pt-24 transition-transform duration-500 ease-in-out z-[1000] border-l border-white/10
//                 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
//             >
//                 {/* Background Gradient for the sidebar itself */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black -z-10"></div>
                
//                 <div className="flex flex-col gap-2">
//                     {[
//                         { label: 'About Us', path: '/about' },
//                         { label: 'Our Services', path: '/services' },
//                         { label: 'Contact Us', path: '/contact' },
//                         { label: 'Log In', path: '/login' },
//                     ].map((item) => (
//                         <button 
//                             key={item.path}
//                             className={`w-full text-left px-6 py-4 rounded-2xl text-white font-medium transition-all
//                                 ${location.pathname === item.path ? 'bg-blue-600 shadow-lg' : 'hover:bg-white/10'}`}
//                             onClick={() => handleNavigation(item.path)}
//                         >
//                             {item.label}
//                         </button>
//                     ))}
                    
//                     <button 
//                         className="mt-4 w-full bg-white text-blue-900 font-bold px-6 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-xl" 
//                         onClick={() => handleNavigation("/role")}
//                     >
//                         Create Account
//                     </button>
//                 </div>
//             </div>

//             {/* Overlay */}
//             {isMenuOpen && (
//                 <div 
//                     className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]" 
//                     onClick={toggleMenu}
//                 ></div>
//             )}
//         </nav>
//     );
// }
