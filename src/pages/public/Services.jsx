import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ReviewCarousel from "../../components/ReviewCarousel";
import { pageNames } from "../pageNames";

// Assets
import POLISH_IMAGE from "../../assets/images/cars/home/polish.png";
import FULL_WASH_IMAGE from "../../assets/images/cars/home/full-wash.png";
import DETAILING_IMAGE from "../../assets/images/cars/home/detailing.png";
import ENGINE_IMAGE from "../../assets/images/cars/home/engine-wash.jpg";
import WAXING_IMAGE from "../../assets/images/cars/home/waxing.png";
import INTERIOR_IMAGE from "../../assets/images/cars/home/interior.png";
import HERO_IMAGE from "../../assets/images/cars/home/hero-carwash.jpg";

export default function Services() {
    document.title = pageNames.services

    const categories = [
        { title: "Full Wash", description: "Complete exterior and interior cleaning including tires and windows", imageUrl: FULL_WASH_IMAGE },
        { title: "Polish", description: "Restore your car's shine with our premium polishing service", imageUrl: POLISH_IMAGE },
        { title: "Waxing", description: "Protective wax coating to keep your car looking new", imageUrl: WAXING_IMAGE },
        { title: "Interior Cleaning", description: "Deep cleaning of seats, carpets, dashboard and all surfaces", imageUrl: INTERIOR_IMAGE },
        { title: "Engine Wash", description: "Thorough cleaning of your engine bay to prevent corrosion", imageUrl: ENGINE_IMAGE },
        { title: "Detailing", description: "Premium interior and exterior detailing for that showroom finish", imageUrl: DETAILING_IMAGE },
    ];

    return (
        // Added overflow-x-hidden to the main wrapper to stop the horizontal scrollbar
        <div className="w-full overflow-x-hidden bg-white">
            <Navbar />

            {/* Hero Section */}
            <div 
                className="relative h-[60vh] flex flex-col items-center justify-center text-center text-white px-4"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HERO_IMAGE})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Services</h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">Transforming car care with passion and precision</p>
                <div className="absolute bottom-10 animate-bounce flex flex-col items-center">
                    <span className="text-sm uppercase tracking-widest mb-2">Scroll to explore</span>
                    <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                </div>
            </div>

            {/* Top Cards: Main Service Links */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Exterior Wash", desc: "Keep your business fleet spotless and professional.", link: "/exterior" },
                            { title: "Interior Care", desc: "Experience a pristine cabin environment with meticulous detailing.", link: "/interior" },
                            { title: "Full Detailing", desc: "Complete rejuvenation for your vehicle, inside and out.", link: "/full-detailing" },
                            { title: "Protection Services", desc: "Advanced defensive layers to keep your vehicle looking newer.", link: "/protection" }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-1 bg-blue-600 mb-6 group-hover:w-full transition-all duration-500"></div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-8">{service.desc}</p>
                                </div>
                                <button
                                    className="w-full py-3 rounded-xl border-2 border-blue-800 text-blue-800 font-bold hover:bg-blue-800 hover:text-white transition-colors duration-300"
                                    onClick={() => (window.location.href = service.link)}
                                >
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Grid: All Services with Images */}
            <section className="bg-blue-950 py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">All of our Services</h2>
                        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                            Professional car care services delivered to your doorstep at your convenience.
                        </p>
                    </div>

                    {/* Fixed Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {categories.map((c, i) => (
                            <CategoryCard
                                key={i}
                                title={c.title}
                                description={c.description}
                                imageUrl={c.imageUrl}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center mt-20">
                        <button
                            onClick={() => (window.location.href = "/login")}
                            className="bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-14 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all transform hover:scale-105 uppercase tracking-widest"
                        >
                            Book Your Service Now
                        </button>
                    </div>
                </div>
            </section>

            <ReviewCarousel />
            <Footer />
        </div>
    );
}

// Improved CategoryCard Component
const CategoryCard = ({ title, description, imageUrl }) => {
    return (
        <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-2">
            {/* Image Container with fixed Aspect Ratio */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Subtle gradient overlay to make image look professional */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 flex-grow flex flex-col justify-center bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};
