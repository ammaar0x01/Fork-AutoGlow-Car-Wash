// import React, { useState, useEffect, useRef } from 'react';

// // import './ExteriorWashService.css';

// import Navbar from '../../../components/Navbar';
// import Footer from '../../../components/Footer';
// import useScrollAnimation from "../../../hooks/useScrollAnimation"

// import hero from '../../../assets/images/cars/services/hero-carwash.jpg';
// import vacuum from '../../../assets/images/cars/services/vacuum.png';
// import leather from '../../../assets/images/cars/services/leather.png';
// import dashboard from '../../../assets/images/cars/services/dashboard.png';


// export default function InteriorCare() {
//     const [activeIndex, setActiveIndex] = useState(null);
//     const serviceRefs = useScrollAnimation();
//     const faqRefs = useScrollAnimation();

//     const toggleAccordion = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     const services = [
//         {
//             title: 'Vacuuming and Dust Removal',
//             description:
//                 'A thorough hand wash, wheel clean, and dry to remove dirt, grime, and road salt. Perfect for regular vehicle maintenance.',
//             image: vacuum,
//         },
//         {
//             title: 'Leather or Upholstery Conditioning',
//             description:
//                 'Protect and enhance your car’s finish with our premium wax and polish. Adds shine and shields paint from environmental wear.',
//             image: leather,
//         },
//         {
//             title: 'Dashboard and Console Detailing',
//             description:
//                 'Deep clean and dress your tires and wheels for a showroom-ready appearance that lasts.',
//             image: dashboard,
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
//                 <h1>Interior Care</h1>
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
//                         onClick={() => (window.location.href = "/login")}
//                         className="cta-button primary"
//                     >
//                         BOOK NOW
//                     </button>
//                 </div>
//             </section>

//             <section className="faq-section app-content">
//                 <h2>Frequently Asked Questions About Interior Care</h2>
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
import { pageNames } from "../../pageNames"

// Assets
import hero from '../../../assets/images/cars/services/hero-carwash.jpg';
import vacuum from '../../../assets/images/cars/services/vacuum.png';
import leather from '../../../assets/images/cars/services/leather.png';
import dashboard from '../../../assets/images/cars/services/dashboard.png';

export default function InteriorCare() {
    document.title = pageNames.s_interior

    const [activeIndex, setActiveIndex] = useState(null);
    const serviceRefs = useScrollAnimation();
    const faqRefs = useScrollAnimation();

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const services = [
        {
            title: 'Vacuuming and Dust Removal',
            description:
                'Deep interior vacuuming including seats, carpets, and hard-to-reach crevices to eliminate dust, allergens, and debris.',
            image: vacuum,
        },
        {
            title: 'Leather or Upholstery Conditioning',
            description:
                'Premium conditioning treatments to prevent leather cracking or deep fabric cleaning to remove stains and refresh your cabin.',
            image: leather,
        },
        {
            title: 'Dashboard and Console Detailing',
            description:
                'Precision cleaning of your dash, instrument panels, and center console with non-greasy UV protection for a matte-fresh finish.',
            image: dashboard,
        },
    ];

    const faqs = [
        {
            question: 'How long does interior care take?',
            answer: 'A standard interior detail usually takes between 45-90 minutes depending on the condition of the vehicle.',
        },
        {
            question: 'Do you remove deep stains from seats?',
            answer: 'We use professional steam cleaning and extraction methods that effectively treat most common upholstery stains.',
        },
        {
            question: 'Is the conditioning safe for sensitive leather?',
            answer: 'Yes, we use pH-balanced cleaners and conditioners specifically designed for automotive-grade leather.',
        },
        {
            question: 'Will my interior feel oily or greasy?',
            answer: 'Not at all. We use high-quality, water-based protectants that leave a factory-fresh, dry-to-the-touch finish.',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative h-[450px] flex items-center justify-center text-center text-white px-4"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Interior Care</h1>
                    <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md max-w-2xl mx-auto">
                        Experience a pristine cabin environment with our meticulous interior detailing services.
                    </p>
                </div>
            </section>

            {/* Services Blocks */}
            <section className="max-w-7xl mx-auto py-20 px-6">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (serviceRefs.current[idx] = el)}
                        className={`flex flex-col md:flex-row items-center gap-12 mb-24 opacity-0 translate-y-10 transition-all duration-1000 ease-out ${
                            idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        <div className="w-full md:w-1/2">
                            <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                {service.title}
                            </h2>
                            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                            <p className="text-lg text-gray-600 leading-relaxed italic">
                                "{service.description}"
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA Button */}
            <section className="flex justify-center pb-20">
                <button
                    onClick={() => (window.location.href = "/login")}
                    className="bg-blue-600 text-white font-bold text-lg py-4 px-14 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 tracking-wide"
                >
                    BOOK INTERIOR SERVICE
                </button>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-100 py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                        Common Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                ref={(el) => (faqRefs.current[idx] = el)}
                                className="opacity-0 translate-y-10 transition-all duration-700"
                            >
                                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                                    <button
                                        className={`w-full text-left p-6 flex justify-between items-center font-bold text-lg transition-colors ${
                                            activeIndex === idx ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                        onClick={() => toggleAccordion(idx)}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="text-xl">
                                            {activeIndex === idx ? '−' : '+'}
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                            activeIndex === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <p className="p-6 text-gray-600 bg-white leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
