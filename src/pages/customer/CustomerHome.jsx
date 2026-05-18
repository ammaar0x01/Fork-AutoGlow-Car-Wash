import React from "react";
import { useNavigate } from "react-router-dom";

import NavbarEmployee from "../../components/NavbarEmployee";
import Footer from "../../components/Footer";

// Assets
import bookingsIcon from "../../assets/images/simple/bookings.png";
import employeesIcon from "../../assets/images/simple/employees.png";
import servicesIcon from "../../assets/images/simple/services.png";
import heroCarwash from "../../assets/images/cars/home/hero-carwash.jpg";

import { pageNames } from "../pageNames";
import NavbarCustomer from "../../components/NavbarCustomer";


export default function EmployeeHome() {
    document.title = pageNames.c_home;

    const navigate = useNavigate();

    // Consolidated data-structure for easier additions/modifications
    const actionCards = [
        {
            title: "Manage Profile",
            desc: "Update your personal info, profile photo, and contact details.",
            icon: employeesIcon,
            buttons: [
                { label: "View Profile", path: "/customer/profile" },
                { label: "Edit Profile", path: "/customer/profile-edit" }
            ]
        },
        {
            title: "Make a Booking",
            desc: "See upcoming and past bookings at a glance to stay organized.",
            icon: bookingsIcon,
            buttons: [
                { label: "Make a Booking", path: "/customer/booking" }
            ]
        },
        {
            title: "My Vehicles",
            desc: "View the performance of the business and individual employees.",
            icon: servicesIcon,
            buttons: [
                { label: "View Vehicles", path: "/customer/vehicles" }
            ]
        },
        {
            title: "Booking History",
            desc: "Review client profiles, active subscriptions, and support interactions.",
            icon: employeesIcon,
            buttons: [
                { label: "View History", path: "/customer/booking/history" }
            ]
        },
        //   {
        //     title: "Manage Employees",
        //     desc: "Review employee profiles.",
        //     icon: employeesIcon,
        //     buttons: [
        //         { label: "View Employees", path: "/employee/manage-employees" }
        //     ]
        // },
        // {
        //     title: "Manage Cleaning Services",
        //     desc: "Configure standard, premium, and custom detailing operation modules.",
        //     icon: servicesIcon,
        //     buttons: [
        //         { label: "View Services", path: "/employee/services" }
        //     ]
        // },
        // {
        //     title: "Manage Payments",
        //     desc: "Track daily billing status, payout settlements, and balance ledgers.",
        //     icon: employeesIcon,
        //     buttons: [
        //         { label: "View Payments", path: "/employee/payments" }
        //     ]
        // }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-800">
            <NavbarCustomer />

            {/* Premium Hero Section */}
            <section
                className="relative h-[45vh] min-h-[500px] flex items-center justify-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${heroCarwash})` }}
            >
                {/* Brand Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-black/80 z-10"></div>

                {/* Content Container */}
                <div className="relative z-20 text-center px-6 max-w-3xl space-y-4">
                    {/* <span className="px-4 py-1.5 bg-blue-500/20 backdrop-blur-md text-blue-400 border border-blue-500/30 rounded-full text-xs font-black uppercase tracking-widest">
                        Internal Workspace
                    </span> */}
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight pt-2">
                        Customer Dashboard
                    </h1>

                    {/* <p className="text-blue-100/70 text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
                        Manage <span className="text-white font-bold underline decoration-blue-400 underline-offset-4">bookings</span>, 
                        update <span className="text-white font-bold underline decoration-blue-400 underline-offset-4">services</span>, 
                        and track your operations ecosystem—all in one hub.
                    </p> */}
                </div>
            </section>

            {/* Actions Grid Section */}
            <section className="flex-1 max-w-7xl w-full mx-auto px-6 py-16 md:py-24">
                <div className="mb-12 border-b border-gray-200/60 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">What You Can Do</h2>
                        <p className="text-gray-500 font-medium mt-1">Select an administrative task block below to proceed.</p>
                    </div>
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-md">
                        {actionCards.length} Management Tools
                    </span>
                </div>

                {/* Cards Container Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {actionCards.map((card, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white rounded-[2rem] 
                                border border-blue-300 p-8 flex flex-col 
                                justify-between shadow-[0_15px_40px_rgba(0,0,0,0.3)] 
                                hover:shadow-[0_20px_50px_rgba(12,45,72,0.06)] 
                                hover:border-blue-500/20
                                transition-all duration-300 group"
                        >
                            <div>
                                {/* Icon Frame */}
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100/80 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors mb-6">
                                    <img src={card.icon} alt={card.title} className="w-7 h-7 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <h3 className="text-xl font-black text-gray-900 tracking-tight mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">
                                    {card.desc}
                                </p>
                            </div>

                            {/* Action Action Buttons Container */}
                            <div className="space-y-3 pt-4 border-t border-gray-50">
                                {card.buttons.map((btn, btnIdx) => (
                                    <button
                                        key={btnIdx}
                                        onClick={() => navigate(btn.path)}
                                        className="w-full py-3.5 px-4 rounded-xl border border-blue-900/10 text-blue-900 font-black text-xs uppercase tracking-widest bg-gray-50/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-900 hover:text-white hover:border-transparent transition-all active:scale-[0.98]"
                                    >
                                        {btn.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}


