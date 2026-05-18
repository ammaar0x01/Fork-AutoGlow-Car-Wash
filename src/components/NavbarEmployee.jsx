import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/icons/logo.jpg";
import NavbarTemplate from "./NavbarTemplate";


export default function NavbarEmployee() {
    const defaultNavLinks = [
        { label: "Profile", path: "/employee/profile" },
        // { label: "Services", scrollTo: "our-services" },
        // { label: "Contact", path: "/contact" },
    ];

    const defaultAuthLinks = [
        { label: "Bookings", path: "/employee/bookings" },
        { label: "Services", path: "/employee/services" },
        { label: "Log out", path: "/logout", variant: "primary" },

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