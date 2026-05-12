import React, { useState, useEffect, useRef } from "react";

// import "./Home.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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

import ReviewCarousel from "../../components/ReviewCarousel";


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
        {/* <div className="landing-page"> */}

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



            {/* Our services */}

{/* version1 */}
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


            {/* stats banner */}
            {/* <section className="stats-banner">
                <div className="stats-container">
                    <div className="stat">
                        <CountUp end={1000} start={990} duration={2000} />
                        <p className="stat-label">Cars Washed</p>
                    </div>
                    <div className="stat">
                        <CountUp end={50} start={45} duration={2000} />
                        <p className="stat-label">Locations Served</p>
                    </div>
                </div>
            </section> */}

            {/* Categories Section - UPDATED WITH NAVY BACKGROUND */}
            <section id="our-services" className="categories-section">
            {/* <section> */}

                <div className="">
                    {/* <h1 className="section-heading">Our Services</h1> */}
                    {/* <h1 className="section-heading heading-tight">All of our Services</h1> */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">All of our Services</h1>


                    <p className="section-subheading">
                        Professional car care services delivered to your doorstep at your convenience
                    </p>
                    <div className="categories-grid">
                        {categories.map((c, i) => (
                            <CategoryCard
                                key={i}
                                title={c.title}
                                description={c.description}
                                imageUrl={c.imageUrl}
                            />
                        ))}
                    </div>
                    <div className="book-now-container">
                        <button
                            onClick={() => (window.location.href = "/login")}
                            className="cta-button primary"
                        >
                            BOOK NOW
                        </button>
                    </div>
                </div>
            </section>

{/*  */}
<section id="our-services" className="bg-white py-16 px-4">
    <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            All of our Services
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
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

            <div>
                <h2 className="carousel-heading"></h2>
                <ReviewCarousel />
            </div>


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


// Stats Component
const CountUp = ({ end, start = 0, duration = 2000 }) => {
    const [count, setCount] = useState(start);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let startTime = null;

                    const step = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const progressRatio = Math.min(progress / duration, 1);
                        const currentCount = Math.floor(
                            progressRatio * (end - start) + start
                        );
                        setCount(currentCount);
                        if (progress < duration) {
                            requestAnimationFrame(step);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.2 }
        );

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [end, start, duration]);

    return (
        <h1 ref={ref} className="stat-number">
            {count}+
        </h1>
    );
};

// Zoom Section Component (for About and Mission sections)
const ZoomSection = ({ image, title, content, isRight = false }) => {
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current && contentRef.current) {
                const element = imageRef.current;
                const contentElement = contentRef.current;
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Start zoom effect when element enters viewport
                if (rect.top < windowHeight && rect.bottom > 0) {
                    const progress = 1 - (rect.top / windowHeight);
                    const zoomLevel = 1 + (progress * 0.2); // 20% zoom max
                    const opacity = Math.min(1, progress * 2);

                    element.style.transform = `scale(${zoomLevel})`;
                    contentElement.style.opacity = opacity;
                    contentElement.style.transform = `translateY(${(1 - progress) * 50}px)`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`zoom-section ${isRight ? 'right' : 'left'}`}>
            <div className="zoom-container">
                <div className="zoom-image-container" ref={imageRef}>
                    <img src={image} alt={title} className="zoom-image" />
                </div>
                <div className="zoom-content" ref={contentRef}>
                    <h1 className="zoom-title">{title}</h1>
                    <div className="zoom-text">
                        {content}
                    </div>
                </div>
            </div>
        </section>
    );
};
