import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/icons/logo.jpg";
import NavbarTemplate from "./NavbarTemplate";


export default function NavbarCustomer() {
  const defaultNavLinks = [
    { label: "Customer", path: "/login" },

    // { label: "About", path: "/about" },
    // { label: "Services", scrollTo: "our-services" },
    // { label: "Contact", path: "/contact" },
  ];

  const defaultAuthLinks = [
    { label: "Vehicles", path: "/roles", variant: "primary" },
    { label: "Bookings", path: "/roles", variant: "primary" },
    { label: "Cards", path: "/roles", variant: "primary" },
    { label: "Vehicles", path: "/roles", variant: "primary" },
  ];

  const defaultMobileLinks = [
    { label: "About Us", path: "/about" },
    { label: "Our Services", scrollTo: "our-services" },
    { label: "Contact Us", path: "/contact" },
    { label: "Sign Up", path: "/roles" },
    { label: "Log In", path: "/login" },
  ];

  return (
    <NavbarTemplate
      navLinks={defaultNavLinks}
      authLinks={defaultAuthLinks}
      mobileLinks={defaultMobileLinks}
    />
  )
}
