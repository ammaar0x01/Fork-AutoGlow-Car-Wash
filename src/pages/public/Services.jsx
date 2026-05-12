import React, { useState, useEffect, useRef } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReviewCarousel from "../../components/ReviewCarousel";

import butterfly from "../../assets/images/cars/home/suv.png";
import POLISH_IMAGE from "../../assets/images/cars/home/polish.png";
import FULL_WASH_IMAGE from "../../assets/images/cars/home/full-wash.png";
import DETAILING_IMAGE from "../../assets/images/cars/home/detailing.png";
import ENGINE_IMAGE from "../../assets/images/cars/home/engine-wash.jpg";
import WAXING_IMAGE from "../../assets/images/cars/home/waxing.png";
import INTERIOR_IMAGE from "../../assets/images/cars/home/interior.png";
import HERO_IMAGE from "../../assets/images/cars/home/hero-carwash.jpg";
import ABOUT_IMAGE from "../../assets/images/cars/home/about-us.png";
import MISSION_IMAGE from "../../assets/images/cars/home/mission-bg.jpg";


export default function Services() {
    document.title = "Services"

    const categories = [
        {
            title: "Full Wash",
            description: "Complete exterior and interior cleaning including tires and windows",
            imageUrl: FULL_WASH_IMAGE
        },
        {
            title: "Polish",
            description: "Restore your car's shine with our premium polishing service",
            imageUrl: POLISH_IMAGE
        },
        {
            title: "Waxing",
            description: "Protective wax coating to keep your car looking new",
            imageUrl: WAXING_IMAGE
        },
        {
            title: "Interior Cleaning",
            description: "Deep cleaning of seats, carpets, dashboard and all interior surfaces",
            imageUrl: INTERIOR_IMAGE
        },
        {
            title: "Engine Wash",
            description: "Thorough cleaning of your engine bay to prevent corrosion",
            imageUrl: ENGINE_IMAGE
        },
        {
            title: "Detailing",
            description: "Premium interior and exterior detailing for that showroom finish",
            imageUrl: DETAILING_IMAGE
        },
    ];


    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <div className="about-hero">
                <h1>Services</h1>
                <p>Transforming car care with passion and precision</p>
                <div className="scroll-indicator">
                    <span>Scroll to explore</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>

            <section className="bg-gray-50 py-12 px-4 min-h-[500px]">
                <div className="max-w-6xl mx-auto">
                    {/* Optional Heading: <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Business Services</h1> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                        {/* Service Card Component - repeated for each service */}
                        {[
                            {
                                title: "Exterior Wash",
                                desc: "Keep your business fleet spotless and professional-looking with our bulk cleaning service.",
                                link: "/exterior-wash"
                            },
                            {
                                title: "Interior Care",
                                desc: "Offer your employees a sparkling perk with our customizable corporate wash plans.",
                                link: "/corporate-packages"
                            },
                            {
                                title: "Full Detailing",
                                desc: "Partner with us to offer our mobile services at your location and share in the shine.",
                                link: "/partner-with-us"
                            },
                            {
                                title: "Protection Services",
                                desc: "Looking to start your own car wash business? Explore our franchise options today.",
                                link: "/franchise"
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 p-6 flex flex-col transition-transform hover:scale-[1.02]"
                            >
                                <div className="flex-grow">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {service.desc}
                                    </p>
                                </div>
                                <button
                                    className="w-full bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200"
                                    onClick={() => (window.location.href = service.link)}
                                >
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-blue-900 py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        All of our Services
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg text-gray-100 mb-12 max-w-2xl mx-auto">
                        Professional car care services delivered to your doorstep at your convenience.
                    </p>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {categories.map((c, i) => (
                            <CategoryCard
                                key={i}
                                title={c.title}
                                description={c.description}
                                imageUrl={c.imageUrl}
                            // Note: Ensure CategoryCard is also updated to use Tailwind!
                            />
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => (window.location.href = "/login")}
                            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 uppercase tracking-wider text-sm"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </section>

            <ReviewCarousel />

            <Footer />
        </div>
    );
}
// =============================================


// CategoryCard Component 
const CategoryCard = ({ title, description, imageUrl }) => {
    return (
        <div className="category-card">
            <div className="category-image-container">
                <img src={imageUrl} alt={title} className="category-image" />
                <div className="category-overlay">
                    <div className="category-content">
                        <h3 className="category-title">{title}</h3>
                        <p className="category-description">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
