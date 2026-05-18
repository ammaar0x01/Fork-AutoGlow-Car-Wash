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
                    className="md:hidden flex flex-col justify-between w-6 h-4 z-[1001] 
                        relative focus:outline-none ml-auto"
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
