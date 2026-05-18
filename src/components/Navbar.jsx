// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';


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

//     const handleNavigationNewTab = (path) => {
//         window.open(path, '_blank', 'noopener,noreferrer');
//     };

//     const navBtnClass = `text-white/90 font-medium text-sm tracking-wide px-4 py-2 
//         transition-all duration-300 
//         hover:text-white hover:bg-white/10 rounded-full`;

//     const activeClass = "bg-white/20 text-white shadow-inner";

//       const navLinks = [
//         // { name: 'Home', path: '/' },
//         { name: 'Services', path: '/services' },
//         { name: 'About', path: '/about' },
//         { name: 'Contact', path: '/contact' },
//     ];



//     return (
//         //  <nav className="fixed top-0 left-0 w-full 
//         //     bg-gradient-to-br from-blue-600 to-blue-950
//         //     shadow-md z-[1000]">
                
//         <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 
//             bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950
//             ${isScrolled ? 'py-2' : 'py-4 shadow-md'}
//             border-b border-white/10`}>

//             <div className="max-w-7xl mx-auto px-6 flex items-center h-16">
                
//                 {/* Left: Logo (flex-1 to push nav to center) */}
//                 <div className="flex-1 flex items-center">
//                     <div className="flex items-center cursor-pointer group" onClick={() => handleNavigation("/")}>
//                         {/* <span className="bg-white text-blue-800 px-2.5 py-1 rounded-lg font-black text-xl mr-3 group-hover:scale-110 transition-transform">
//                             M
//                         </span>
//                         <span className="text-white font-black tracking-tighter text-xl uppercase hidden lg:block">
//                             MobileGlow
//                         </span> */}

//                          {/* Logo */}
//                <Link to="/" className="text-2xl font-black text-white tracking-tighter flex items-center gap-2">
//                    <span className="bg-white text-blue-800 px-2 py-0.5 rounded-lg">M</span>
//                    MOBILEGLOW
//                </Link>
//                     </div>
//                 </div>

//                 {/* Center: Desktop Navigation Links */}
//                 {/* <div className="hidden md:flex items-center gap-2">
//                     <button 
//                         // className={`${navBtnClass} ${location.pathname === '/about' ? activeClass : ''}`} 
//                            className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-300
// //                                 ${location.pathname === '/about' ? 'text-white border-b-2 border-white' : 'text-blue-100/80'}`}
// //                         
//                         onClick={() => handleNavigation("/about")}
//                     >About
//                     </button>                
                    
//                     <button 
//                         className={`${navBtnClass} ${location.pathname === '/services' ? activeClass : ''}`} 
//                         onClick={() => handleNavigation("/services")}
//                     >Services</button>
//                     <button 
//                         className={`${navBtnClass} ${location.pathname === '/contact' ? activeClass : ''}`} 
//                         onClick={() => handleNavigation("/contact")}
//                     >Contact</button>
//                 </div> */}

// {/* --- version2 --- */}
//     <div className="hidden md:flex items-center gap-8">
//                      {navLinks.map((link) => (
//                         <Link
//                             key={link.path}
//                             to={link.path}
//                             className={`text-sm font-bold uppercase tracking-widest transition-all 
//                                 hover:text-blue-300
//                                 ${location.pathname === link.path 
//                                     ? 'text-white border-b-2 border-white' 
//                                     : 'text-blue-100/80'}`}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </div>
// {/* --- version2 --- */}

//                 {/* Right: Auth Actions (flex-1 to balance the logo side) */}
//                 <div className="flex-1 hidden md:flex items-center justify-end gap-2">
//                     <button 
//                         className={navBtnClass + " px-7 py-3 border"}
//                         // className="hidden sm:block text-white font-bold text-sm hover:opacity-80 transition-opacity"

//                         onClick={() => handleNavigationNewTab("/login")}
//                         // onClick={window.open("/login", "_blank")}
//                         >
//                             Log In
//                             </button>
//                     <button 
//                         className="bg-white text-blue-900 font-bold text-sm px-6 py-3 
//                             rounded-full 
//                             transition-all hover:bg-blue-50 shadow-lg active:scale-95" 
//                         onClick={() => handleNavigation("/role")}
//                     >
//                         Sign Up
//                     </button>
//                 </div>

//                 {/* Hamburger Button (Mobile Only - stays right) */}
//                 <button 
//                     className="md:hidden flex flex-col justify-between w-6 h-4 z-[1001] 
//                         relative focus:outline-none ml-auto"
//                     onClick={toggleMenu}
//                 >
//                     <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
//                     <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
//                     <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
//                 </button>
//             </div>

//             {/* Sidebar code would follow here... */}
//             {/* Mobile Slide-In Side Menu */}
//             {/* bg-[#0C2D48]  */}
//             {/* <div className={`fixed top-0 right-0 h-full w-[250px] bg-[rgba(12,45,72,0.9)] */}
            
//              {/* bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 */}
//                 {/* // bg-[rgba(12,45,72,0.9)] */}

//  {/* <div className={`fixed top-0 right-0 h-full w-[250px] 
//                 bg-[rgba(12,45,72,0.9)] *
//                 backdrop-blur-sm p-6 rounded-xl
//                 shadow-2xl pt-24 transition-transform duration-300 ease-in-out z-[1000] 
//                 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
//                 > */}
//             {/* or */}
//             <div className={`fixed top-0 right-0 h-full w-[250px] 
//                 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 
//                 backdrop-blur-sm p-6 
//                 shadow-2xl pt-24 transition-transform duration-300 ease-in-out z-[1000] 
//                 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
//                 >

//                 <ul className="flex flex-col">
                   
//                     <li className="hover:bg-gray-100 group transition-colors">
//                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
//                         onClick={() => handleNavigation("/services")}>
//                             {/* onClick={handleServices}> */}
//                                 Our Services</button>
//                     </li>

//                      {/* <li className="border-b border-gray-700 hover:bg-gray-100 group transition-colors"> */}
//                     <li className="hover:bg-gray-100 group transition-colors">

//                         {/* <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" onClick={handleAboutUs}>About Us</button> */}
//                         <button className="w-full text-left px-6 py-4 text-white font-medium group-hover:text-black" 
//                             onClick={() => handleNavigation("/about")}>
//                             About Us
//                         </button>

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
// }


// newer1
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Reset submenus when closing root drawer
        if (isMenuOpen) setIsMobileDropdownOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close desktop menu dropdown frames on window navigation or route change
    useEffect(() => {
        setIsDesktopDropdownOpen(false);
        setIsMenuOpen(false);
        setIsMobileDropdownOpen(false);
    }, [location.pathname]);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleNavigationNewTab = (path) => {
        window.open(path, '_blank', 'noopener,noreferrer');
    };

    // Array of subservices for the drop-down listings
    const serviceItems = [
        { name: "Services", path: "/services" },
        { name: "Exterior Wash", path: "/services/exterior" },
        { name: "Interior Care", path: "/services/interior" },
        { name: "Full Detailing", path: "/services/full-detailing" },
        { name: "Protection Services", path: "/services/protection" }
    ];

    return (
        // <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 
        //     bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950
        //     ${isScrolled ? 'py-2 shadow-lg bg-opacity-95 backdrop-blur-md' : 'py-4 shadow-md'}
        //     border-b border-white/10`}>

                      <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 
           bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950
           ${isScrolled ? 'py-2' : 'py-4 shadow-md'}
           border-b border-white/10`}>

            <div className="max-w-7xl mx-auto px-6 flex items-center h-16">
                
                {/* Left: Logo layout block */}
                <div className="flex-1 flex items-center">
                    <div className="flex items-center cursor-pointer group" onClick={() => handleNavigation("/")}>
                        <Link to="/" className="text-2xl font-black text-white tracking-tighter flex items-center gap-2">
                            <span className="bg-white text-blue-800 px-2 py-0.5 rounded-lg">M</span>
                            MOBILEGLOW
                        </Link>
                    </div>
                </div>

                {/* Center: Desktop Navigation Area Links with Dropdown */}
                <div className="hidden md:flex items-center gap-8">
                    
                    {/* <Link
                        to="/"
                        className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-300
                            ${location.pathname === '/' ? 'text-white border-b-2 border-white' : 'text-blue-100/80'}`}
                    >
                        Home
                    </Link> */}

                    <Link
                        to="/about"
                        className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-300
                            ${location.pathname === '/about' ? 'text-white border-b-2 border-white' : 'text-blue-100/80'}`}
                    >
                        About
                    </Link>
                    
                    <Link
                        to="/contact"
                        className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-300
                            ${location.pathname === '/contact' ? 'text-white border-b-2 border-white' : 'text-blue-100/80'}`}
                    >
                        Contact
                    </Link>

                         {/* Services Dropdown Trigger Link Block */}
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                        onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                    >
                        <button
                            className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-300 flex items-center gap-1.5 focus:outline-none pb-2 pt-2
                                ${location.pathname.startsWith('/services') ? 'text-white' : 'text-blue-100/80'}`}
                        >
                            <span>Services</span>
                            <FaChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Floating Context Panel Layer */}
                        {isDesktopDropdownOpen && (
                            <div className="absolute left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-[1100] animate-in fade-in slide-in-from-top-2 duration-150">
                                {serviceItems.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleNavigation(item.path)}
                                        className="w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-50 hover:text-blue-950 transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Auth Action Triggers Frame */}
                <div className="flex-1 hidden md:flex items-center justify-end gap-2">
                    <button 
                        className="text-white/90 font-bold text-sm tracking-wide px-6 py-2.5 border border-white/20 hover:border-white/60 hover:bg-white/10 rounded-full transition-all duration-200"
                        onClick={() => handleNavigationNewTab("/login")}
                    >
                        Log In
                    </button>
                    <button 
                        className="bg-white text-blue-900 font-black text-sm px-6 py-2.5 rounded-full transition-all hover:bg-blue-50 shadow-lg active:scale-95" 
                        onClick={() => handleNavigation("/role")}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Hamburger Trigger Switch (Mobile Only - pushes context block) */}
                <button 
                    className="md:hidden flex flex-col justify-between w-6 h-4 z-[1001] relative focus:outline-none ml-auto"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>

            {/* Mobile Slide-In Side Drawer Menu Frame */}
            <div className={`fixed top-0 right-0 h-full w-[280px] 
                bg-gradient-to-b from-blue-900 to-slate-950 
                p-6 shadow-2xl pt-24 transition-transform duration-300 ease-in-out z-[1000] overflow-y-auto
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >

            {/* <div className={`fixed top-0 right-0 h-full w-[250px] 
                bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 
                backdrop-blur-sm p-6 
                shadow-2xl pt-24 transition-transform duration-300 ease-in-out z-[1000] 
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                > */}

                     {/* <div className={`fixed top-0 right-0 h-full w-[250px] 
                bg-[rgba(12,45,72,0.9)] *
                backdrop-blur-sm p-6 rounded-xl
                shadow-2xl pt-24 transition-transform duration-300 ease-in-out z-[1000] 
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                > */}

                <ul className="flex flex-col space-y-1">
                    
                    {/* Home Link (Mobile) */}
                    {/* <li className="rounded-xl overflow-hidden">
                        <button 
                            className="w-full text-left px-5 py-3.5 text-white/90 font-bold uppercase tracking-wider text-xs hover:bg-white/10 transition-colors"
                            onClick={() => handleNavigation("/")}
                        >
                            Home
                        </button>
                    </li> */}

                    {/* Mobile Services Accordion Dropdown Link Group */}
                   
                    {/* About Us Link (Mobile) */}
                    <li className="rounded-xl overflow-hidden">
                        <button 
                            className="w-full text-left px-5 py-3.5 text-white/90 font-bold uppercase tracking-wider text-xs hover:bg-white/10 transition-colors" 
                            onClick={() => handleNavigation("/about")}
                        >
                            About Us
                        </button>
                    </li>
                    
                    {/* Contact Link (Mobile) */}
                    <li className="rounded-xl overflow-hidden">
                        <button 
                            className="w-full text-left px-5 py-3.5 text-white/90 font-bold uppercase tracking-wider text-xs hover:bg-white/10 transition-colors" 
                            onClick={() => handleNavigation("/contact")}
                        >
                            Contact Us
                        </button>
                    </li>

                    {/* Services Link (Mobile) */}
                    <li className="rounded-xl overflow-hidden flex flex-col">
                        <button 
                            className="w-full text-left px-5 py-3.5 text-white/90 font-bold uppercase tracking-wider text-xs hover:bg-white/10 transition-colors flex justify-between items-center"
                            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                        >
                            <span>Services</span>
                            <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180 text-blue-300' : ''}`} />
                        </button>
                        
                        {/* Nested Subservice List Items Container */}
                        <div className={`transition-all duration-300 overflow-hidden bg-black/20 ${isMobileDropdownOpen ? 'max-h-60 border-t border-white/5 py-1.5' : 'max-h-0'}`}>
                            {serviceItems.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleNavigation(item.path)}
                                    className="w-full text-left pl-9 pr-4 py-2.5 text-white/60 hover:text-white text-xs font-semibold tracking-wide transition-colors block"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </li>

                    {/* Split line divider between core links and authentication */}
                    <div className="border-t border-white/10 my-4"></div>

                    {/* Authentication CTA triggers (Mobile) */}
                    <li className="rounded-xl overflow-hidden">
                        <button 
                            className="w-full text-center px-5 py-3 text-white font-bold uppercase tracking-wider text-xs border border-white/20 hover:bg-white/10 transition-all rounded-xl" 
                            onClick={() => handleNavigation("/login")}
                        >
                            Log In
                        </button>
                    </li>
                    <li className="pt-2">
                        <button 
                            className="w-full text-center px-5 py-3 bg-white text-blue-950 font-black uppercase tracking-wider text-xs shadow-lg rounded-xl transition-transform active:scale-95" 
                            onClick={() => handleNavigation("/role")}
                        >
                            Sign Up
                        </button>
                    </li>
                </ul>
            </div>

            {/* Dark Mask Modal Overlay Control Background */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-xs z-[999]" 
                    onClick={toggleMenu}
                ></div>
            )}
        </nav>
    );
}
