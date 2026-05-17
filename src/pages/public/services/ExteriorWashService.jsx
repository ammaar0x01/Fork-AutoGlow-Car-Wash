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
            {/* <div className="w-full md:w-1/2">
              <img 
                src={service.image} 
                alt={service.title} 
                // className="rounded-2xl shadow-xl w-full object-cover h-[350px]
                // transform transition-transform duration-700 group-hover:scale-110
                // "
                                    className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700"

                // className="w-full h-[380px] object-cover transform transition-transform duration-700 group-hover:scale-110"

              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
            </div> */}

            {/* newer */}
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
