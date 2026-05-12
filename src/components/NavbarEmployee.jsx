import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/icons/logo.jpg";
import NavbarTemplate from "./NavbarTemplate";


export default function NavbarEmployee() {
    const defaultNavLinks = [
        { label: "Employee", path: "/about" },
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