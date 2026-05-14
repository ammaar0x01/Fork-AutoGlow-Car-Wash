// import React, { useState, useEffect, useRef } from 'react';

// import './ExteriorWashService.css';

// import Navbar from '../../../components/Navbar';
// import Footer from '../../../components/Footer';
// import useScrollAnimation from "../../../hooks/useScrollAnimation"

// import paint from '../../../assets/images/cars/services/paint.png';
// import hero from '../../../assets/images/cars/services/hero-carwash.jpg';
// import tire_balm from '../../../assets/images/cars/services/tire_balm.png';
// import glass from '../../../assets/images/cars/services/glass.png';


// export default function ProtectionService() {
//     const [activeIndex, setActiveIndex] = useState(null);
//     const serviceRefs = useScrollAnimation();
//     const faqRefs = useScrollAnimation();

//     const toggleAccordion = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     const services = [
//         {
//             title: 'Paint Protection',
//             description:
//                 'A thorough hand wash, wheel clean, and dry to remove dirt, grime, and road salt. Perfect for regular vehicle maintenance.',
//             image: paint,
//         },
//         {
//             title: 'Tire and Trim Protectant',
//             description:
//                 'Protect and enhance your car’s finish with our premium wax and polish. Adds shine and shields paint from environmental wear.',
//             image: tire_balm,
//         },
//         {
//             title: 'Glass Sealant Application',
//             description:
//                 'Deep clean and dress your tires and wheels for a showroom-ready appearance that lasts.',
//             image: glass,
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
//                 <h1>Protection Service</h1>
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
//                 <h2>Frequently Asked Questions About Protection Service</h2>
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


// // // Custom hook to handle scroll-based animation
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
import paint from '../../../assets/images/cars/services/paint.png';
import hero from '../../../assets/images/cars/services/hero-carwash.jpg';
import tire_balm from '../../../assets/images/cars/services/tire_balm.png';
import glass from '../../../assets/images/cars/services/glass.png';


export default function ProtectionService() {
    document.title = pageNames.s_protection
    
    const [activeIndex, setActiveIndex] = useState(null);
    const serviceRefs = useScrollAnimation();
    const faqRefs = useScrollAnimation();

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const services = [
        {
            title: 'Paint Protection',
            description:
                'Apply a high-grade polymer sealant or ceramic coating to shield your paint from UV rays, bird droppings, and industrial fallout.',
            image: paint,
        },
        {
            title: 'Tire and Trim Protectant',
            description:
                'Premium conditioning for rubber and plastic surfaces. Prevents cracking, fading, and dry rot while leaving a deep, dark satin finish.',
            image: tire_balm,
        },
        {
            title: 'Glass Sealant Application',
            description:
                'A hydrophobic barrier for your windshield and windows that repels rain and grime, significantly improving visibility during storms.',
            image: glass,
        },
    ];

    const faqs = [
        {
            question: 'What is the difference between wax and sealant?',
            answer: 'Wax provides a deep, natural shine but lasts about 1-2 months. Sealants are synthetic and provide a harder barrier that lasts 4-6 months.',
        },
        {
            question: 'How long does the protection application take?',
            answer: 'Depending on the package, application takes between 60 to 90 minutes after the vehicle has been thoroughly cleaned.',
        },
        {
            question: 'Will this remove existing scratches?',
            answer: 'Protection services seal the current state of the paint. For scratch removal, we recommend our Polishing service before applying protection.',
        },
        {
            question: 'Is the glass sealant safe for tinted windows?',
            answer: 'Yes, our glass sealants are applied to the exterior surface and are completely safe for factory or aftermarket tints on the interior.',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative h-[450px] flex items-center justify-center text-center text-white px-4"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg tracking-tight">
                        Protection Services
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 drop-shadow-md">
                        Advanced defensive layers to keep your vehicle looking newer, longer.
                    </p>
                </div>
            </section>

            {/* Services Layout */}
            <section className="max-w-7xl mx-auto py-24 px-6">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (serviceRefs.current[idx] = el)}
                        className={`flex flex-col md:flex-row items-center gap-12 mb-24 opacity-0 translate-y-10 transition-all duration-1000 ease-out ${
                            idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        <div className="w-full md:w-1/2">
                            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-[380px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <h2 className="text-4xl font-bold text-gray-800">{service.title}</h2>
                            <div className="w-24 h-2 bg-blue-500 rounded-full"></div>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="bg-white py-16 border-y border-gray-200 text-center">
                <button
                    onClick={() => (window.location.href = "/login")}
                    className="bg-blue-600 text-white font-bold text-lg py-4 px-16 rounded-full shadow-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest"
                >
                    Protect My Car
                </button>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto py-24 px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 underline decoration-blue-500 underline-offset-8">
                    Protection FAQs
                </h2>
                <div className="space-y-6">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            ref={(el) => (faqRefs.current[idx] = el)}
                            className="opacity-0 translate-y-10 transition-all duration-700"
                        >
                            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                                <button
                                    className={`w-full text-left p-6 flex justify-between items-center transition-all ${
                                        activeIndex === idx ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-blue-50'
                                    }`}
                                    onClick={() => toggleAccordion(idx)}
                                >
                                    <span className="text-lg font-bold">{faq.question}</span>
                                    <span className={`text-2xl transform transition-transform duration-300 ${activeIndex === idx ? 'rotate-45' : 'rotate-0'}`}>
                                        +
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out ${
                                        activeIndex === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className="p-6 text-gray-600 leading-relaxed border-t border-gray-50">
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
