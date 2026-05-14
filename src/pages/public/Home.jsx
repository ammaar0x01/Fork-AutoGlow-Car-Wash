import React, { useState, useEffect, useRef } from "react";

import "./Home.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ReviewCarousel from "../../components/ReviewCarousel";
import { pageNames } from "../pageNames";

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


export default function Home() {
    document.title = pageNames.home 

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
        <div className="landing-page">
            <Navbar />

            {/* Hero Section */}
            <section
                className="hero-section"
                // style={{ backgroundImage: `url(${HERO_IMAGE})` }}
                style={{ backgroundImage: `url(${HERO_IMAGE})` }}

            >
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-heading">We bring the shine to you.</h1>
                    <h2 className="hero-subheading">
                        Your car, our care – Anywhere.
                    </h2>
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

            {/* Our services */}
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

                 <div className="book-now-container">
                        <button
                            onClick={() => (window.location.href = "/services")}
                            className="cta-button primary"
                        >
                            View all our services
                        </button>
                    </div>

                     <div className="book-now-container">
                        <button
                            onClick={() => (window.location.href = "/login")}
                            className="cta-button primary"
                        >
                            Book now
                        </button>
                    </div>
            </section>

            {/* stats banner */}
            <section className="stats-banner bg-blue-900">
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
            </section>

            {/* About Us Section with Zoom Effect */}
            <ZoomSection
                image={ABOUT_IMAGE}
                title="About Us"
                content={
                    <div className="about-content">
                        <h2>Our Values</h2>
                        <p>
                            At Mobile Glow Car Wash, we provide a premium mobile car detailing service that focuses on
                            delivering convenience and luxury to your doorstep. Our team is dedicated to ensuring
                            the highest quality standards in car care, with a meticulous attention to detail.
                            Experience the ultimate in professional car detailing services with us.
                        </p>
                    </div>
                }
                isRight={false}
            />

            {/* Mission Section with Zoom Effect */}
            <ZoomSection
                image={MISSION_IMAGE}
                title="Our Mission"
                content={
                    <div className="mission-content">
                        <p>
                            At Mobile Glow Car Wash, we are dedicated to providing a mobile car detailing service that
                            brings convenience, luxury, and exceptional care right to your doorstep. Our focus on
                            quality ensures that your vehicle receives the best treatment possible, leaving it
                            looking pristine and well-maintained.
                        </p>
                    </div>
                }
                isRight={true}
            />

                <ReviewCarousel />
           

            {/* Loyalty Section */}
            <section className="loyalty-section">
                <div className="section-container loyalty-container">
                    <div className="loyalty-content">
                        <h2 className="loyalty-heading">LOYALTY ISN'T CHEAP</h2>
                        <p className="loyalty-text">But we make it worth it. Our loyalty program offers exclusive benefits:</p>
                        <ul className="loyalty-benefits">
                            <li>Earn points with every service</li>
                            <li>Redeem points for discounts</li>
                            <li>Priority booking</li>
                            <li>Exclusive member-only offers</li>
                        </ul>
                    </div>
                    <div className="loyalty-visual">
                        <div className="loyalty-card">
                            <div className="loyalty-icon">🎁</div>
                            <h3>Loyalty Program</h3>
                            <p>Join today and start earning rewards with every service!</p>
                        </div>
                    </div>
                </div>
            </section>

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
