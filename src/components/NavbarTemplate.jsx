import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/icons/logo.jpg";

// ===== DEFAULT NAV DATA =====
const defaultNavLinks = [
    { label: "Template", path: "/about" },
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
        // <nav className="fixed top-0 left-0 w-full bg-[#0C2D48] shadow-md z-[1000]">
        // or 
        
                 <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 
           bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950
           
           border-b border-white/10`}>

            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">

                {/* Logo */}
                {/* <div
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
                </div> */}

                  <div className="flex-1 flex items-center">
                    <div className="flex items-center cursor-pointer group" onClick={() => handleNavigation("/")}>
                        <Link to="/" className="text-2xl font-black text-white tracking-tighter flex items-center gap-2">
                            {/* <span className="bg-white text-blue-800 px-2 py-0.5 rounded-lg">M</span> */}
                            <span className="bg-white text-blue-800 px-2 py-0.5 rounded-lg">M</span>

                            MOBILEGLOW
                        </Link>
                    </div>
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
            {/* <div
                className={`fixed top-0 right-0 h-full w-[250px] bg-[#0C2D48] pt-24 transition-transform duration-300 z-[1000] ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            > */}

                {/* <div className={`fixed top-0 right-0 h-full w-[250px] 
                bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 
                backdrop-blur-sm p-6 
                shadow-2xl pt-24 transition-transform duration-300 ease-in-out z-[1000] 
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                > */}

                {/* bg-[rgba(12,45,72,0.9)]  */}
                {/* backdrop-blur-sm p-6  */}

                        <div className={`fixed top-0 right-0 h-full w-[250px] 
                bg-blue-800/90
                shadow-2xl backdrop-blur-sm
                pt-24 transition-transform duration-300 ease-in-out z-[1000] 
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
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
