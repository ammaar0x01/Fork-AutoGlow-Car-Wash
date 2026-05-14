// import React, { useState, useEffect, useRef } from 'react';

// // import './ExteriorWashService.css';

// import Navbar from '../../../components/Navbar';
// import Footer from '../../../components/Footer';
// import useScrollAnimation from "../../../hooks/useScrollAnimation"

// import waxing from '../../../assets/images/cars/services/waxing.png';
// import tire from '../../../assets/images/cars/services/image-3.png';
// import luxury from '../../../assets/images/cars/services/luxury.png';
// import hero from '../../../assets/images/cars/services/hero-carwash.jpg';
// import fleet from '../../../assets/images/cars/services/fleet.png';

// // import waxing from '../../../assets/waxing.png';
// // import tire from '../../../assets/image-3.png';
// // import luxury from '../../../assets/luxury.png';
// // import hero from '../../../assets/hero-carwash.jpg';
// // import fleet from '../../../assets/fleet.png';




// export default function ExteriorWashService() {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const serviceRefs = useScrollAnimation();
//   const faqRefs = useScrollAnimation()

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const services = [
//     {
//       title: 'Basic Exterior Wash',
//       description:
//         'A thorough hand wash, wheel clean, and dry to remove dirt, grime, and road salt. Perfect for regular vehicle maintenance.',
//       image: luxury,
//     },
//     {
//       title: 'Wax and Polish',
//       description:
//         'Protect and enhance your car’s finish with our premium wax and polish. Adds shine and shields paint from environmental wear.',
//       image: waxing,
//     },
//     {
//       title: 'Tire and Wheel Detailing',
//       description:
//         'Deep clean and dress your tires and wheels for a showroom-ready appearance that lasts.',
//       image: tire,
//     },
//     {
//       title: 'Fleet Bulk Service',
//       description:
//         'Discounted rates and scheduled service for business fleets. Efficient, convenient, and professional exterior care.',
//       image: fleet,
//     },
//   ];


//   const faqs = [
//     {
//       question: 'How long does an exterior wash take?',
//       answer: 'Most washes take between 20-30 minutes depending on the vehicle size.',
//     },
//     {
//       question: 'Do you use eco-friendly products?',
//       answer: 'Yes! We use biodegradable soaps and water-saving techniques.',
//     },
//     {
//       question: 'Can I schedule recurring exterior washes?',
//       answer: 'Absolutely! We offer weekly, bi-weekly, or monthly plans.',
//     },
//     {
//       question: 'Do I need to be present during the wash?',
//       answer: 'Not always — if access is arranged, we can clean while you’re away.',
//     },
//   ];

//   return (
//     <>
//       <Navbar />

//       <section
//         className="exterior-hero"
//         style={{
//           backgroundImage: `url(${hero})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           padding: '120px 20px',
//           color: 'white',
//           textAlign: 'center',
//           textShadow: '0 2px 6px rgba(0,0,0,0.7)',
//         }}
//       >
//         <h1>Exterior Wash Services</h1>
//         <p>Keep your vehicles spotless and professional with our expertly crafted wash options.</p>
//       </section>

//       <section className="service-section app-content">
//         {services.map((service, idx) => (
//           <div
//             key={idx}
//             className={`service-block ${idx % 2 !== 0 ? 'reverse' : ''} animate-up`}
//             ref={(el) => (serviceRefs.current[idx] = el)}
//           >
//             <div className="service-image">
//               <img src={service.image} alt={service.title} />
//             </div>
//             <div className="protection-services-description">
//               <h2>{service.title}</h2>
//               <p>{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </section>

//       <section className="book-now-container">
//         <div className="book-now-container">
//           <button
//               onClick={() => (window.location.href = "/login")}
//               className="cta-button primary"
//           >
//             BOOK NOW
//           </button>
//         </div>
//       </section>

//       <section className="faq-section app-content">
//         <h2>Frequently Asked Questions About Exterior Wash</h2>
//         <div className="accordion">
//           {faqs.map((faq, idx) => (
//             <div
//               key={idx}
//               className="accordion-item animate-up"
//               ref={(el) => (faqRefs.current[idx] = el)}
//             >
//               <button
//                 className={`accordion-title ${activeIndex === idx ? 'active' : ''}`}
//                 onClick={() => toggleAccordion(idx)}
//                 aria-expanded={activeIndex === idx}
//                 aria-controls={`faq-content-${idx}`}
//                 id={`faq-title-${idx}`}
//               >
//                 {faq.question}
//               </button>
//               <div
//                 id={`faq-content-${idx}`}
//                 role="region"
//                 aria-labelledby={`faq-title-${idx}`}
//                 className={`accordion-content ${activeIndex === idx ? 'open' : ''}`}
//               >
//                 <p>{faq.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//         <Footer />
//     </>
//   );
// }

// // Custom hook to handle scroll-based animation
// // const useScrollAnimation = () => {
// //   const refs = useRef([]);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       entries => {
// //         entries.forEach(entry => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add('visible');
// //           }
// //         });
// //       },
// //       {
// //         threshold: 0.1,
// //       }
// //     );

// //     refs.current.forEach(ref => {
// //       if (ref) observer.observe(ref);
// //     });

// //     return () => {
// //       refs.current.forEach(ref => {
// //         if (ref) observer.unobserve(ref);
// //       });
// //     };
// //   }, []);

// //   return refs;
// // };


import React, { useState } from 'react';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

import useScrollAnimation from "../../../hooks/useScrollAnimation";
import { pageNames } from '../../pageNames';

// Assets
import waxing from '../../../assets/images/cars/services/waxing.png';
import tire from '../../../assets/images/cars/services/image-3.png';
import luxury from '../../../assets/images/cars/services/luxury.png';
import hero from '../../../assets/images/cars/services/hero-carwash.jpg';
import fleet from '../../../assets/images/cars/services/fleet.png';


export default function ExteriorWashService() {
  document.title = pageNames.s_exterior

  const [activeIndex, setActiveIndex] = useState(null);
  const serviceRefs = useScrollAnimation();
  const faqRefs = useScrollAnimation();

  // ... (toggleAccordion and data arrays remain the same)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: 'Basic Exterior Wash',
      description: 'A thorough hand wash, wheel clean, and dry to remove dirt, grime, and road salt. Perfect for regular vehicle maintenance.',
      image: luxury,
    },
    {
      title: 'Wax and Polish',
      description: 'Protect and enhance your car’s finish with our premium wax and polish. Adds shine and shields paint from environmental wear.',
      image: waxing,
    },
    {
      title: 'Tire and Wheel Detailing',
      description: 'Deep clean and dress your tires and wheels for a showroom-ready appearance that lasts.',
      image: tire,
    },
    {
      title: 'Fleet Bulk Service',
      description: 'Discounted rates and scheduled service for business fleets. Efficient, convenient, and professional exterior care.',
      image: fleet,
    },
  ];

  const faqs = [
    { question: 'How long does an exterior wash take?', answer: 'Most washes take between 20-30 minutes depending on the vehicle size.' },
    { question: 'Do you use eco-friendly products?', answer: 'Yes! We use biodegradable soaps and water-saving techniques.' },
    { question: 'Can I schedule recurring exterior washes?', answer: 'Absolutely! We offer weekly, bi-weekly, or monthly plans.' },
    { question: 'Do I need to be present during the wash?', answer: 'Not always — if access is arranged, we can clean while you’re away.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center text-center text-white px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Exterior Wash Services</h1>
          <p className="text-xl md:text-2xl text-gray-200">Keep your vehicles spotless and professional.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            // Logic: Start invisible (opacity-0) and slightly lower (translate-y-10)
            className={`flex flex-col md:flex-row items-center gap-12 mb-24 transition-all duration-1000 ease-out opacity-0 translate-y-10 ${
              idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
            ref={(el) => (serviceRefs.current[idx] = el)}
          >
            <div className="w-full md:w-1/2">
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-2xl shadow-xl w-full object-cover h-[350px]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              // Applying the animation to the FAQ items too
              className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
              ref={(el) => (faqRefs.current[idx] = el)}
            >
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <button
                  className={`w-full text-left p-5 flex justify-between items-center font-semibold transition-colors ${
                    activeIndex === idx ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => toggleAccordion(idx)}
                >
                  <span>{faq.question}</span>
                  <span className={`transform transition-transform ${activeIndex === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${activeIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="p-5 text-gray-600 border-t border-gray-100">{faq.answer}</p>
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



// export default function ExteriorWashService() {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const serviceRefs = useScrollAnimation();
//   const faqRefs = useScrollAnimation();

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const services = [
//     {
//       title: 'Basic Exterior Wash',
//       description: 'A thorough hand wash, wheel clean, and dry to remove dirt, grime, and road salt. Perfect for regular vehicle maintenance.',
//       image: luxury,
//     },
//     {
//       title: 'Wax and Polish',
//       description: 'Protect and enhance your car’s finish with our premium wax and polish. Adds shine and shields paint from environmental wear.',
//       image: waxing,
//     },
//     {
//       title: 'Tire and Wheel Detailing',
//       description: 'Deep clean and dress your tires and wheels for a showroom-ready appearance that lasts.',
//       image: tire,
//     },
//     {
//       title: 'Fleet Bulk Service',
//       description: 'Discounted rates and scheduled service for business fleets. Efficient, convenient, and professional exterior care.',
//       image: fleet,
//     },
//   ];

//   const faqs = [
//     { question: 'How long does an exterior wash take?', answer: 'Most washes take between 20-30 minutes depending on the vehicle size.' },
//     { question: 'Do you use eco-friendly products?', answer: 'Yes! We use biodegradable soaps and water-saving techniques.' },
//     { question: 'Can I schedule recurring exterior washes?', answer: 'Absolutely! We offer weekly, bi-weekly, or monthly plans.' },
//     { question: 'Do I need to be present during the wash?', answer: 'Not always — if access is arranged, we can clean while you’re away.' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       {/* Hero Section */}
//       <section
//         className="relative h-[500px] flex items-center justify-center text-center text-white px-4"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${hero})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="max-w-4xl">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
//             Exterior Wash Services
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
//             Keep your vehicles spotless and professional with our expertly crafted wash options.
//           </p>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="max-w-7xl mx-auto py-20 px-6">
//         {services.map((service, idx) => (
//           <div
//             key={idx}
//             ref={(el) => (serviceRefs.current[idx] = el)}
//             className={`flex flex-col md:flex-row items-center gap-12 mb-24 opacity-0 transition-all duration-1000 transform translate-y-10 ${
//               idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
//             }`}
//             // Note: Your custom hook "useScrollAnimation" should handle adding a class like "visible" 
//             // which sets opacity-100 and translate-y-0
//           >
//             <div className="w-full md:w-1/2">
//               <img 
//                 src='../../../assets/images/cars/services/waxing.png'
//                 alt={service.title} 
//                 className="rounded-2xl shadow-2xl w-full object-cover h-[350px] transform hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 space-y-4">
//               <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
//               <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* CTA Section */}
//       <section className="bg-blue-600 py-16 text-center">
//         <button
//           onClick={() => (window.location.href = "/login")}
//           className="bg-white text-blue-600 font-bold text-xl py-4 px-12 rounded-full shadow-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
//         >
//           BOOK NOW
//         </button>
//       </section>

//       {/* FAQ Section */}
//       <section className="max-w-4xl mx-auto py-24 px-6">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//           Frequently Asked Questions
//         </h2>
//         <div className="space-y-4">
//           {faqs.map((faq, idx) => (
//             <div
//               key={idx}
//               ref={(el) => (faqRefs.current[idx] = el)}
//               className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
//             >
//               <button
//                 className={`w-full text-left p-5 flex justify-between items-center font-semibold transition-colors ${
//                   activeIndex === idx ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
//                 }`}
//                 onClick={() => toggleAccordion(idx)}
//               >
//                 <span>{faq.question}</span>
//                 <span className={`transform transition-transform ${activeIndex === idx ? 'rotate-180' : ''}`}>
//                   ▼
//                 </span>
//               </button>
//               <div
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                   activeIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
//                 }`}
//               >
//                 <p className="p-5 text-gray-600 bg-white border-t border-gray-100">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
