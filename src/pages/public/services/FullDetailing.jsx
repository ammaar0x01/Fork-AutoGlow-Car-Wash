// import React, { useState, useEffect, useRef } from 'react';

// // import './FullDetailing.css';

// import Navbar from '../../../components/Navbar';
// import Footer from '../../../components/Footer';
// import useScrollAnimation from "../../../hooks/useScrollAnimation"

// import waxing from '../../../assets/images/cars/services/waxing.png';
// import hero from '../../../assets/images/cars/services/hero-carwash.jpg';
// import interior from '../../../assets/images/cars/services/interior.png';
// import engine from '../../../assets/images/cars/services/engine.png';


// export default function FullDetailing() {
//     const [activeIndex, setActiveIndex] = useState(null);
//     const serviceRefs = useScrollAnimation();
//     const faqRefs = useScrollAnimation();

//     const toggleAccordion = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     const services = [
//         {
//             title: 'Exterior Polishing & Waxing',
//             description:
//                 'A thorough hand wash, wheel clean, and dry to remove dirt, grime, and road salt. Perfect for regular vehicle maintenance.',
//             image: waxing,
//         },
//         {
//             title: 'Interior Deep Cleaning',
//             description:
//                 'Protect and enhance your car’s finish with our premium wax and polish. Adds shine and shields paint from environmental wear.',
//             image: interior,
//         },
//         {
//             title: 'Engine Bay Cleaning',
//             description:
//                 'Deep clean and dress your tires and wheels for a showroom-ready appearance that lasts.',
//             image: engine,
//         },

//     ];


//     const faqs = [
//         {
//             question: 'How long does an exterior wash take?',
//             answer: 'Most washes take between 20-30 minutes depending on the vehicle size.',
//         },
//         {
//             question: 'Do you use eco-friendly products?',
//             answer: 'Yes! We use biodegradable soaps and water-saving techniques.',
//         },
//         {
//             question: 'Can I schedule recurring exterior washes?',
//             answer: 'Absolutely! We offer weekly, bi-weekly, or monthly plans.',
//         },
//         {
//             question: 'Do I need to be present during the wash?',
//             answer: 'Not always — if access is arranged, we can clean while you’re away.',
//         },
//     ];

//     return (
//         <>
//             <Navbar />

//             <section
//                 className="exterior-hero"
//                 style={{
//                     backgroundImage: `url(${hero})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     padding: '120px 20px',
//                     color: 'white',
//                     textAlign: 'center',
//                     textShadow: '0 2px 6px rgba(0,0,0,0.7)',
//                 }}
//             >
//                 <h1>Full Detailing Services</h1>
//                 <p>Keep your vehicles spotless and professional with our expertly crafted wash options.</p>
//             </section>

//             <section className="service-section app-content">
//                 {services.map((service, idx) => (
//                     <div
//                         key={idx}
//                         className={`service-block ${idx % 2 !== 0 ? 'reverse' : ''} animate-up`}
//                         ref={(el) => (serviceRefs.current[idx] = el)}
//                     >
//                         <div className="service-image">
//                             <img src={service.image} alt={service.title} />
//                         </div>
//                         <div className="protection-services-description">
//                             <h2>{service.title}</h2>
//                             <p>{service.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </section>

//             <section className="book-now-container">
//                 <div className="book-now-container">
//                     <button
//                         onClick={() => (window.location.href = "/booking")}
//                         className="cta-button primary"
//                     >
//                         BOOK NOW
//                     </button>
//                 </div>
//             </section>

//             <section className="faq-section app-content">
//                 <h2>Frequently Asked Questions About Exterior Wash</h2>
//                 <div className="accordion">
//                     {faqs.map((faq, idx) => (
//                         <div
//                             key={idx}
//                             className="accordion-item animate-up"
//                             ref={(el) => (faqRefs.current[idx] = el)}
//                         >
//                             <button
//                                 className={`accordion-title ${activeIndex === idx ? 'active' : ''}`}
//                                 onClick={() => toggleAccordion(idx)}
//                                 aria-expanded={activeIndex === idx}
//                                 aria-controls={`faq-content-${idx}`}
//                                 id={`faq-title-${idx}`}
//                             >
//                                 {faq.question}
//                             </button>
//                             <div
//                                 id={`faq-content-${idx}`}
//                                 role="region"
//                                 aria-labelledby={`faq-title-${idx}`}
//                                 className={`accordion-content ${activeIndex === idx ? 'open' : ''}`}
//                             >
//                                 <p>{faq.answer}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//             <Footer />
//         </>
//     );
// }


// // Custom hook to handle scroll-based animation
// // const useScrollAnimation = () => {
// //     const refs = useRef([]);

// //     useEffect(() => {
// //         const observer = new IntersectionObserver(
// //             entries => {
// //                 entries.forEach(entry => {
// //                     if (entry.isIntersecting) {
// //                         entry.target.classList.add('visible');
// //                     }
// //                 });
// //             },
// //             {
// //                 threshold: 0.1,
// //             }
// //         );

// //         refs.current.forEach(ref => {
// //             if (ref) observer.observe(ref);
// //         });

// //         return () => {
// //             refs.current.forEach(ref => {
// //                 if (ref) observer.unobserve(ref);
// //             });
// //         };
// //     }, []);

// //     return refs;
// // };


import React, { useState } from 'react';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

import useScrollAnimation from "../../../hooks/useScrollAnimation";
import { pageNames } from '../../pageNames';

// Assets
import waxing from '../../../assets/images/cars/services/waxing.png';
import hero from '../../../assets/images/cars/services/hero-carwash.jpg';
import interior from '../../../assets/images/cars/services/interior.png';
import engine from '../../../assets/images/cars/services/engine.png';


export default function FullDetailing() {
    document.title = pageNames.s_full 
    
    const [activeIndex, setActiveIndex] = useState(null);
    const serviceRefs = useScrollAnimation();
    const faqRefs = useScrollAnimation();

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const services = [
        {
            title: 'Exterior Polishing & Waxing',
            description:
                'Restore that deep showroom shine. We remove light oxidation and apply a high-grade carnauba wax to seal your paint against the elements.',
            image: waxing,
        },
        {
            title: 'Interior Deep Cleaning',
            description:
                'Every inch of your cabin is sanitized and detailed—from shampooing carpets and seats to conditioning delicate dash materials.',
            image: interior,
        },
        {
            title: 'Engine Bay Cleaning',
            description:
                'Safe and professional removal of grease and grime from your engine compartment, followed by a protective dressing for hoses and plastics.',
            image: engine,
        },
    ];

    const faqs = [
        {
            question: 'How often should I get a full detail?',
            answer: 'We recommend a full detail every 4 to 6 months to maintain your vehicle’s resale value and paint integrity.',
        },
        {
            question: 'Does the engine bay cleaning affect electronics?',
            answer: 'We use professional moisture-shielding techniques and low-pressure steam to ensure all sensitive components remain safe.',
        },
        {
            question: 'How long does a full detail take?',
            answer: 'A comprehensive full detail typically requires 3 to 5 hours depending on the size and condition of the vehicle.',
        },
        {
            question: 'Can you remove pet hair and heavy odors?',
            answer: 'Yes! Our deep cleaning process includes ozone treatment options and high-powered extraction to tackle tough odors and pet hair.',
        },
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative h-[500px] flex items-center justify-center text-center text-white px-4"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="max-w-4xl">
                    <span className="uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4 block">The Ultimate Package</span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Full Detailing</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Complete rejuvenation for your vehicle, inside and out. Professional care that exceeds expectations.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="max-w-7xl mx-auto py-24 px-6">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (serviceRefs.current[idx] = el)}
                        className={`flex flex-col md:flex-row items-center gap-16 mb-32 opacity-0 translate-y-10 transition-all duration-1000 ease-out ${
                            idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        <div className="w-full md:w-1/2 group">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                            <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
                            <div className="w-16 h-1 bg-blue-500 mx-auto md:mx-0"></div>
                            <p className="text-xl text-gray-600 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Booking CTA */}
            <section className="bg-gray-900 py-20 text-center">
                <h3 className="text-white text-3xl font-bold mb-8">Ready to transform your ride?</h3>
                <button
                    onClick={() => (window.location.href = "/booking")}
                    className="bg-blue-600 text-white font-bold text-xl py-5 px-16 rounded-full shadow-2xl hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest"
                >
                    BOOK FULL DETAIL
                </button>
            </section>

            {/* FAQ Section */}
            <section className="max-w-5xl mx-auto py-24 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Details & FAQs</h2>
                    <p className="text-gray-500">Everything you need to know about our Full Detailing package.</p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            ref={(el) => (faqRefs.current[idx] = el)}
                            className="opacity-0 translate-y-10 transition-all duration-700"
                        >
                            <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                <button
                                    className="w-full text-left p-6 flex justify-between items-center group transition-all"
                                    onClick={() => toggleAccordion(idx)}
                                >
                                    <span className={`text-lg font-bold transition-colors ${activeIndex === idx ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-500'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${activeIndex === idx ? 'bg-blue-600 border-blue-600 text-white rotate-180' : 'border-gray-300 text-gray-400 rotate-0'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out ${
                                        activeIndex === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className="px-6 pb-6 text-gray-600 text-lg leading-relaxed border-t border-gray-100 pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
