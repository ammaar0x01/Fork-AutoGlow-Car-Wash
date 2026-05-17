import React from "react";

import NavbarEmployee from "../../components/NavbarEmployee";
import Footer from "../../components/Footer";

import bookingsIcon from "../../assets/images/simple/bookings.png";
import employeesIcon from "../../assets/images/simple/employees.png";
import servicesIcon from "../../assets/images/simple/services.png";
import performanceIcon from "../../assets/images/simple/performance.png";
import heroCarwash from "../../assets/images/cars/home/hero-carwash.jpg";

import "./LandingEmployee.css"

export default function EmployeeHome(){
    return (
        <div className="employee-landing-page">
            <NavbarEmployee />

            {/* Hero Section */}
            <section
                className="employee-hero-section"
                style={{ backgroundImage: `url(${heroCarwash})` }}
            >
                <div className="employee-hero-overlay"></div>

                {/* ✅ Logo at top-left corner */}
                {/*<img src={logo} alt="Logo" className="employee-hero-logo" />*/}

                {/* Centered content */}
                <div className="employee-hero-content">
                    {/* <img src={logo} alt="Logo" className="employee-hero-logo" /> */}

                    <h1 className="employee-hero-heading">Employee Dashboard</h1>
                    <p className="employee-hero-subheading">
                        Manage <span>bookings</span>, update <span>services</span>, and track your{" "}
                        <span>performance</span> — all in one place.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="employee-actions-section">
                <h1 className="section-heading">What You Can Do</h1>
                <div className="employee-actions-grid">
                    {/* use a loop and data-struct instead? */}

 <div className="employee-action-card">
                        <div className="feature-icon">
                            <img src={employeesIcon} alt="Manage Profile" />
                        </div>
                        <h3>Manage Profile</h3>
                        <p>Update your personal info, profile photo, and contact details.</p>
                        <button
                                className="w-full py-3 rounded-xl border border-blue-800 text-blue-800 
                                    font-bold hover:bg-blue-800 hover:text-white transition-colors duration-300 mt-3"
                                onClick={() => (window.location.href = "/employee/profile")}
                            >
                                View Profile
                            </button>

                            <button
                                className="w-full py-3 rounded-xl border border-blue-800 text-blue-800 
                                    font-bold hover:bg-blue-800 hover:text-white transition-colors duration-300 mt-3"
                                onClick={() => (window.location.href = "/employee/profile-edit")}
                            >
                                Edit Profile
                            </button>
                    </div>
                    

                    <div className="employee-action-card">
                        <div className="feature-icon">
                            <img src={bookingsIcon} alt="View Bookings" />
                        </div>
                        <h3>View Bookings</h3>
                        <p>See upcoming and past bookings at a glance to stay organized.</p>
                        <button
                                className="w-full py-3 rounded-xl border border-blue-800 text-blue-800 
                                    font-bold hover:bg-blue-800 hover:text-white transition-colors duration-300 mt-3"
                                onClick={() => (window.location.href = "bookings")}
                            >
                                View Bookings
                            </button>
                    </div>

                    <div className="employee-action-card">
                        <div className="feature-icon">
                            <img src={servicesIcon} alt="Update Services" />
                        </div>
                        <h3>Update Services</h3>
                        <p>Edit your offered services, including prices and availability.</p>
                        <button
                                className="w-full py-3 rounded-xl border border-blue-800 text-blue-800 
                                    font-bold hover:bg-blue-800 hover:text-white transition-colors duration-300 mt-3"
                                onClick={() => (window.location.href = "/employee/cleaning")}
                            >
                                View Services
                            </button>
                    </div>

                    {/* <div className="employee-action-card">
                        <div className="feature-icon">
                            <img src={performanceIcon} alt="Performance Tracking" />
                        </div>
                        <h3>Performance Tracking</h3>
                        <p>Monitor your ratings, reviews, and performance trends over time.</p>
                        <button
                                className="w-full py-3 rounded-xl border border-blue-800 text-blue-800 
                                    font-bold hover:bg-blue-800 hover:text-white transition-colors duration-300 mt-3"
                                onClick={() => (window.location.href = "/employee/bookings")}
                            >
                                View Performance
                            </button>
                    </div> */}

                    <div className="employee-action-card">
                        <div className="feature-icon">
                            <img src={employeesIcon} alt="Manage Profile" />
                        </div>
                        <h3>Manage Customers</h3>
                        <p>Update your personal info, profile photo, and contact details.</p>
                        <button
                                className="w-full py-3 rounded-xl border border-blue-800 text-blue-800 
                                    font-bold hover:bg-blue-800 hover:text-white transition-colors duration-300 mt-3"
                                onClick={() => (window.location.href = "/employee/manage-customers")}
                            >
                               View Customers
                            </button>
                    </div>

                     <div className="employee-action-card">
                        <div className="feature-icon">
                            <img src={employeesIcon} alt="Manage Profile" />
                        </div>
                        <h3>Manage Cleaning Services</h3>
                        <p>Update your personal info, profile photo, and contact details.</p>
                        <button
                                className="w-full py-3 rounded-xl border border-blue-800 text-blue-800 
                                    font-bold hover:bg-blue-800 hover:text-white transition-colors duration-300 mt-3"
                                onClick={() => (window.location.href = "/employee/cleaning")}
                            >
                                View Services
                            </button>
                    </div>
                    

                     <div className="employee-action-card">
                        <div className="feature-icon">
                            <img src={employeesIcon} alt="Manage Profile" />
                        </div>
                        <h3>Manage Payments</h3>
                        <p>Update your personal info, profile photo, and contact details.</p>
                        <button
                                className="w-full py-3 rounded-xl border border-blue-800 text-blue-800 
                                    font-bold hover:bg-blue-800 hover:text-white transition-colors duration-300 mt-3"
                                onClick={() => (window.location.href = "/employee/payments")}
                            >
                                View Payments
                            </button>
                    </div>
                    

                </div>
            </section>

            <Footer />
        </div>
    );
};
