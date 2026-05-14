// import React, { useState, useEffect, useRef } from "react";

// import "./Home.css";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// import ReviewCarousel from "../../components/ReviewCarousel";
// import { pageNames } from "../pageNames";

// import butterfly from "../../assets/images/cars/home/suv.png";
// import POLISH_IMAGE from "../../assets/images/cars/home/polish.png";
// import FULL_WASH_IMAGE from "../../assets/images/cars/home/full-wash.png";
// import DETAILING_IMAGE from "../../assets/images/cars/home/detailing.png";
// import ENGINE_IMAGE from "../../assets/images/cars/home/engine-wash.jpg";
// import WAXING_IMAGE from "../../assets/images/cars/home/waxing.png";
// import INTERIOR_IMAGE from "../../assets/images/cars/home/interior.png";
// import HERO_IMAGE from "../../assets/images/cars/home/hero-carwash.jpg";
// import ABOUT_IMAGE from "../../assets/images/cars/home/about-us.png"; 
// import MISSION_IMAGE from "../../assets/images/cars/home/mission-bg.jpg"; 


// export default function Home() {
//     document.title = pageNames.home 

//     const categories = [
//         {
//             title: "Full Wash",
//             description: "Complete exterior and interior cleaning including tires and windows",
//             imageUrl: FULL_WASH_IMAGE
//         },
//         {
//             title: "Polish",
//             description: "Restore your car's shine with our premium polishing service",
//             imageUrl: POLISH_IMAGE
//         },
//         {
//             title: "Waxing",
//             description: "Protective wax coating to keep your car looking new",
//             imageUrl: WAXING_IMAGE
//         },
//         {
//             title: "Interior Cleaning",
//             description: "Deep cleaning of seats, carpets, dashboard and all interior surfaces",
//             imageUrl: INTERIOR_IMAGE
//         },
//         {
//             title: "Engine Wash",
//             description: "Thorough cleaning of your engine bay to prevent corrosion",
//             imageUrl: ENGINE_IMAGE
//         },
//         {
//             title: "Detailing",
//             description: "Premium interior and exterior detailing for that showroom finish",
//             imageUrl: DETAILING_IMAGE
//         },
//     ];


//     return (
//         <div className="landing-page">
//             <Navbar />

//             {/* Hero Section */}
//             <section
//                 className="hero-section"
//                 // style={{ backgroundImage: `url(${HERO_IMAGE})` }}
//                 style={{ backgroundImage: `url(${HERO_IMAGE})` }}

//             >
//                 <div className="hero-overlay"></div>
//                 <div className="hero-content">
//                     <h1 className="hero-heading">We bring the shine to you.</h1>
//                     <h2 className="hero-subheading">
//                         Your car, our care – Anywhere.
//                     </h2>
//                     <div className="book-now-container">
//                         <button
//                             onClick={() => (window.location.href = "/login")}
//                             className="cta-button primary"
//                         >
//                             BOOK NOW
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* Our services */}
//             <section className="bg-gray-50 py-12 px-4 min-h-[500px]">
//                 <div className="max-w-6xl mx-auto">
//                     {/* Optional Heading: <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Business Services</h1> */}

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
//                         {/* Service Card Component - repeated for each service */}
//                         {[
//                             {
//                                 title: "Exterior Wash",
//                                 desc: "Keep your business fleet spotless and professional-looking with our bulk cleaning service.",
//                                 link: "/exterior-wash"
//                             },
//                             {
//                                 title: "Interior Care",
//                                 desc: "Offer your employees a sparkling perk with our customizable corporate wash plans.",
//                                 link: "/corporate-packages"
//                             },
//                             {
//                                 title: "Full Detailing",
//                                 desc: "Partner with us to offer our mobile services at your location and share in the shine.",
//                                 link: "/partner-with-us"
//                             },
//                             {
//                                 title: "Protection Services",
//                                 desc: "Looking to start your own car wash business? Explore our franchise options today.",
//                                 link: "/franchise"
//                             }
//                         ].map((service, index) => (
//                             <div
//                                 key={index}
//                                 className="relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 p-6 flex flex-col transition-transform hover:scale-[1.02]"
//                             >
//                                 <div className="flex-grow">
//                                     <h3 className="text-xl font-semibold mb-3 text-gray-900">
//                                         {service.title}
//                                     </h3>
//                                     <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                                         {service.desc}
//                                     </p>
//                                 </div>
//                                 <button
//                                     className="w-full bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200"
//                                     onClick={() => (window.location.href = service.link)}
//                                 >
//                                     Learn More
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                  <div className="book-now-container">
//                         <button
//                             onClick={() => (window.location.href = "/services")}
//                             className="cta-button primary"
//                         >
//                             View all our services
//                         </button>
//                     </div>

//                      <div className="book-now-container">
//                         <button
//                             onClick={() => (window.location.href = "/login")}
//                             className="cta-button primary"
//                         >
//                             Book now
//                         </button>
//                     </div>
//             </section>

//             {/* stats banner */}
//             <section className="stats-banner bg-blue-900">
//                 <div className="stats-container">
//                     <div className="stat">
//                         <CountUp end={1000} start={990} duration={2000} />
//                         <p className="stat-label">Cars Washed</p>
//                     </div>
//                     <div className="stat">
//                         <CountUp end={50} start={45} duration={2000} />
//                         <p className="stat-label">Locations Served</p>
//                     </div>
//                 </div>
//             </section>

//             {/* About Us Section with Zoom Effect */}
//             <ZoomSection
//                 image={ABOUT_IMAGE}
//                 title="About Us"
//                 content={
//                     <div className="about-content">
//                         <h2>Our Values</h2>
//                         <p>
//                             At Mobile Glow Car Wash, we provide a premium mobile car detailing service that focuses on
//                             delivering convenience and luxury to your doorstep. Our team is dedicated to ensuring
//                             the highest quality standards in car care, with a meticulous attention to detail.
//                             Experience the ultimate in professional car detailing services with us.
//                         </p>
//                     </div>
//                 }
//                 isRight={false}
//             />

//             {/* Mission Section with Zoom Effect */}
//             <ZoomSection
//                 image={MISSION_IMAGE}
//                 title="Our Mission"
//                 content={
//                     <div className="mission-content">
//                         <p>
//                             At Mobile Glow Car Wash, we are dedicated to providing a mobile car detailing service that
//                             brings convenience, luxury, and exceptional care right to your doorstep. Our focus on
//                             quality ensures that your vehicle receives the best treatment possible, leaving it
//                             looking pristine and well-maintained.
//                         </p>
//                     </div>
//                 }
//                 isRight={true}
//             />

//                 <ReviewCarousel />
           

//             {/* Loyalty Section */}
//             <section className="loyalty-section">
//                 <div className="section-container loyalty-container">
//                     <div className="loyalty-content">
//                         <h2 className="loyalty-heading">LOYALTY ISN'T CHEAP</h2>
//                         <p className="loyalty-text">But we make it worth it. Our loyalty program offers exclusive benefits:</p>
//                         <ul className="loyalty-benefits">
//                             <li>Earn points with every service</li>
//                             <li>Redeem points for discounts</li>
//                             <li>Priority booking</li>
//                             <li>Exclusive member-only offers</li>
//                         </ul>
//                     </div>
//                     <div className="loyalty-visual">
//                         <div className="loyalty-card">
//                             <div className="loyalty-icon">🎁</div>
//                             <h3>Loyalty Program</h3>
//                             <p>Join today and start earning rewards with every service!</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// }
// // =============================================


// // CategoryCard Component 
// const CategoryCard = ({ title, description, imageUrl }) => {
//     return (
//         <div className="category-card">
//             <div className="category-image-container">
//                 <img src={imageUrl} alt={title} className="category-image" />
//                 <div className="category-overlay">
//                     <div className="category-content">
//                         <h3 className="category-title">{title}</h3>
//                         <p className="category-description">{description}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// // Stats Component
// const CountUp = ({ end, start = 0, duration = 2000 }) => {
//     const [count, setCount] = useState(start);
//     const ref = useRef(null);
//     const started = useRef(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting && !started.current) {
//                     started.current = true;
//                     let startTime = null;

//                     const step = (timestamp) => {
//                         if (!startTime) startTime = timestamp;
//                         const progress = timestamp - startTime;
//                         const progressRatio = Math.min(progress / duration, 1);
//                         const currentCount = Math.floor(
//                             progressRatio * (end - start) + start
//                         );
//                         setCount(currentCount);
//                         if (progress < duration) {
//                             requestAnimationFrame(step);
//                         } else {
//                             setCount(end);
//                         }
//                     };

//                     requestAnimationFrame(step);
//                 }
//             },
//             { threshold: 0.2 }
//         );

//         const currentRef = ref.current;
//         if (currentRef) observer.observe(currentRef);

//         return () => {
//             if (currentRef) observer.unobserve(currentRef);
//         };
//     }, [end, start, duration]);

//     return (
//         <h1 ref={ref} className="stat-number">
//             {count}+
//         </h1>
//     );
// };

// // Zoom Section Component (for About and Mission sections)
// const ZoomSection = ({ image, title, content, isRight = false }) => {
//     const imageRef = useRef(null);
//     const contentRef = useRef(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (imageRef.current && contentRef.current) {
//                 const element = imageRef.current;
//                 const contentElement = contentRef.current;
//                 const rect = element.getBoundingClientRect();
//                 const windowHeight = window.innerHeight;

//                 // Start zoom effect when element enters viewport
//                 if (rect.top < windowHeight && rect.bottom > 0) {
//                     const progress = 1 - (rect.top / windowHeight);
//                     const zoomLevel = 1 + (progress * 0.2); // 20% zoom max
//                     const opacity = Math.min(1, progress * 2);

//                     element.style.transform = `scale(${zoomLevel})`;
//                     contentElement.style.opacity = opacity;
//                     contentElement.style.transform = `translateY(${(1 - progress) * 50}px)`;
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll(); // Initial check

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <section className={`zoom-section ${isRight ? 'right' : 'left'}`}>
//             <div className="zoom-container">
//                 <div className="zoom-image-container" ref={imageRef}>
//                     <img src={image} alt={title} className="zoom-image" />
//                 </div>
//                 <div className="zoom-content" ref={contentRef}>
//                     <h1 className="zoom-title">{title}</h1>
//                     <div className="zoom-text">
//                         {content}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };


import React, { useState, useEffect, useRef } from "react";
// import "./Home.css";

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
import ABOUT_IMAGE from "../../assets/images/cars/home/about-us.png"; 
import MISSION_IMAGE from "../../assets/images/cars/home/mission-bg.jpg"; 

export default function Home() {
    document.title = pageNames.home;

    const categories = [
        { title: "Full Wash", description: "Complete exterior and interior cleaning including tires and windows", imageUrl: FULL_WASH_IMAGE },
        { title: "Polish", description: "Restore your car's shine with our premium polishing service", imageUrl: POLISH_IMAGE },
        { title: "Waxing", description: "Protective wax coating to keep your car looking new", imageUrl: WAXING_IMAGE },
        { title: "Interior Cleaning", description: "Deep cleaning of seats, carpets, and dashboard", imageUrl: INTERIOR_IMAGE },
        { title: "Engine Wash", description: "Thorough cleaning of your engine bay to prevent corrosion", imageUrl: ENGINE_IMAGE },
        { title: "Detailing", description: "Premium interior and exterior detailing for that showroom finish", imageUrl: DETAILING_IMAGE },
    ];

    return (
        <div className="w-full overflow-x-hidden bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative h-screen flex items-center justify-center text-center text-white px-4 bg-fixed"
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HERO_IMAGE})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-4xl z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
                        We bring the shine to you.
                    </h1>
                    <p className="text-xl md:text-3xl text-blue-100 mb-10 drop-shadow-md">
                        Your car, our care – Anywhere.
                    </p>
                    <button
                        onClick={() => (window.location.href = "/login")}
                        className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-12 rounded-full shadow-2xl transition-all transform hover:scale-105 uppercase tracking-widest text-lg"
                    >
                        BOOK NOW
                    </button>
                </div>
            </section>

            {/* Business Services Grid */}
            <section className="bg-gray-50 py-24 px-6">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {[
                            { title: "Exterior Wash", desc: "Keep your business fleet spotless and professional.", link: "/exterior" },
                            { title: "Interior Care", desc: "Experience a pristine cabin environment with meticulous detailing.", link: "/interior" },
                            { title: "Full Detailing", desc: "Complete rejuvenation for your vehicle, inside and out.", link: "/full-detailing" },
                            { title: "Protection Services", desc: "Advanced defensive layers to keep your vehicle looking newer.", link: "/protection" }
                        ].map((service, index) => (

                    // {[
                    //     { title: "Exterior Wash", desc: "Keep your business fleet spotless and professional-looking.", link: "/exterior" },
                    //     { title: "Interior Care", desc: "Offer your employees a sparkling perk with corporate plans.", link: "/corporate-packages" },
                    //     { title: "Full Detailing", desc: "Partner with us to offer mobile services at your location.", link: "/partner-with-us" },
                    //     { title: "Protection Services", desc: "Looking to start your own wash? Explore franchise options.", link: "/franchise" }
                    // ].map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                        >
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">{service.desc}</p>
                            </div>
                            <button
                                className="w-full py-3 rounded-xl border border-blue-800 text-blue-800 font-bold hover:bg-blue-800 hover:text-white transition-colors duration-300"
                                onClick={() => (window.location.href = service.link)}
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
                    <button onClick={() => (window.location.href = "/services")} className="bg-gray-900 text-white font-bold py-4 px-10 rounded-full hover:bg-black transition-all">
                        View All Services
                    </button>
                    <button onClick={() => (window.location.href = "/login")} className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-500 transition-all">
                        Book Appointment
                    </button>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="bg-blue-950 py-16 px-6 text-white text-center">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-around gap-12">
                    <div className="space-y-2">
                        <CountUp end={1000} start={900} />
                        <p className="text-blue-200 uppercase tracking-widest text-sm">Cars Washed</p>
                    </div>
                    <div className="space-y-2">
                        <CountUp end={50} start={10} />
                        <p className="text-blue-200 uppercase tracking-widest text-sm">Locations Served</p>
                    </div>
                </div>
            </section>

            {/* Improved Category Grid (The one you asked to fix) */}
            <section className="bg-blue-50 py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {categories.map((c, i) => (
                        <CategoryCard key={i} {...c} />
                    ))}
                </div>
            </section>

            <ZoomSection
                image={ABOUT_IMAGE}
                title="About Us"
                content="At Mobile Glow Car Wash, we provide a premium mobile car detailing service that focuses on delivering convenience and luxury to your doorstep."
                isRight={false}
            />

            <ZoomSection
                image={MISSION_IMAGE}
                title="Our Mission"
                content="Our focus on quality ensures that your vehicle receives the best treatment possible, leaving it looking pristine and well-maintained."
                isRight={true}
            />

            <section className="py-20 bg-gray-50">
                <ReviewCarousel />
            </section>

            {/* Loyalty Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl font-black text-gray-900 tracking-tighter">LOYALTY ISN'T CHEAP</h2>
                        <p className="text-lg text-gray-600">But we make it worth it. Our loyalty program offers exclusive benefits for our regular clients.</p>
                        <ul className="space-y-4">
                            {['Earn points with every service', 'Redeem points for discounts', 'Priority booking', 'Exclusive offers'].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-700">
                                    <span className="text-blue-600 font-bold">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 w-full max-w-md">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-10 rounded-[40px] text-white shadow-2xl transform rotate-3">
                            <div className="text-5xl mb-6">🎁</div>
                            <h3 className="text-2xl font-bold mb-4">Loyalty Program</h3>
                            <p className="opacity-90 leading-relaxed">Join today and start earning rewards with every professional service we provide.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

const CategoryCard = ({ title, description, imageUrl }) => (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100">
        <div className="relative aspect-[4/3] overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const CountUp = ({ end, start = 0, duration = 2000 }) => {
    const [count, setCount] = useState(start);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                let startTime = null;
                const step = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const progressRatio = Math.min(progress / duration, 1);
                    setCount(Math.floor(progressRatio * (end - start) + start));
                    if (progress < duration) requestAnimationFrame(step);
                    else setCount(end);
                };
                requestAnimationFrame(step);
            }
        }, { threshold: 0.2 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, start, duration]);

    return <h1 ref={ref} className="text-6xl font-black mb-2">{count}+</h1>;
};

const ZoomSection = ({ image, title, content, isRight = false }) => {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className={`py-24 px-6 ${isRight ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className={`max-w-7xl mx-auto flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
                <div className="flex-1 overflow-hidden rounded-[3rem] shadow-2xl">
                    <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter">{title}</h2>
                    <div className="w-20 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-xl leading-relaxed opacity-80">{content}</p>
                </div>
            </div>
        </section>
    );
};

