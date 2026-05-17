import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

import { pageNames } from '../pageNames';

import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer";
import useScrollAnimation from "../../hooks/useScrollAnimation";


export default function Contact() {
    document.title = pageNames.contact

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const navigate = useNavigate();
    const sectionRefs = useScrollAnimation();

    const EMAILJS_CONFIG = {
        SERVICE_ID: 'service_t8xcg8k',
        TEMPLATE_ID: 'template_8s0ryoj',
        USER_ID: 'sqpo7Bji9gBBnZBTW'
    };

    const faqData = [
        { question: "What services do you offer?", answer: "We offer comprehensive mobile car detailing services including exterior washing, waxing, interior cleaning, vacuuming, and specialized treatments." },
        { question: "How long does a typical service take?", answer: "Basic wash takes 30-45 minutes, while complete interior & exterior packages take 3-4 hours depending on vehicle condition." },
        { question: "Do you use eco-friendly products?", answer: "Yes! We prioritize environmentally friendly cleaning products that are biodegradable and safe for your vehicle." },
        { question: "What areas do you serve?", answer: "We currently serve the greater Johannesburg area. Contact us to confirm if we cover your specific location." }
    ];

    useEffect(() => {
        if (submitSuccess) {
            const timer = setTimeout(() => setSubmitSuccess(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [submitSuccess]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'waterlilykid.123@gmail.com',
                },
                EMAILJS_CONFIG.USER_ID
            );
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setIsSubmitting(false);
            setErrors({ submit: 'Failed to send message. Please try again later.' });
        }
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            <section className="relative h-[80vh] flex flex-col items-center justify-center text-center 
    text-white bg-gradient-to-br from-blue-900 via-blue-950 to-black">
                {/* Animated background element for depth */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                <div className="relative z-10 space-y-6 px-4 animate-fade-in">
                    <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold uppercase tracking-widest">
                        Contact Support
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                        How can we <span className="text-blue-500">help?</span>
                    </h1>
                    <p className="text-blue-100/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Whether you have a question about our services, pricing, or specialized detailing, our team is ready to assist you.
                    </p>
                </div>

                {/* Elegant Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 fill-white">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,101.49,122.3,108.31,185.78,103.11,251.2,97.75,280.4,71.45,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-20 pb-24">

                {/* <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-24"> */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Form Card */}
                    <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
                        <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                        {submitSuccess && (
                            <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl flex items-center gap-3 animate-fade-in">
                                <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
                                <p className="font-medium">Message sent! We'll be in touch soon.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                    <input
                                        type="text" name="name" value={formData.name} onChange={handleInputChange}
                                        className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                    <input
                                        type="email" name="email" value={formData.email} onChange={handleInputChange}
                                        className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                                <input
                                    type="text" name="subject" value={formData.subject} onChange={handleInputChange}
                                    className={`w-full px-5 py-4 rounded-xl border ${errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                                    placeholder="Service Inquiry"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                <textarea
                                    name="message" value={formData.message} onChange={handleInputChange} rows="5"
                                    className={`w-full px-5 py-4 rounded-xl border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none`}
                                    placeholder="How can we help you?"
                                ></textarea>
                                <div className="flex justify-between items-center px-1">
                                    {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                                    <p className={`text-xs ml-auto ${formData.message.length > 500 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
                                        {formData.message.length}/500
                                    </p>
                                </div>
                            </div>

                            <button
                                type="submit" disabled={isSubmitting}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 disabled:opacity-70 flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="space-y-6">
                        {[
                            { icon: '📍', label: 'Visit Us', text: '123 Car Care St, Johannesburg, 2000' },
                            { icon: '📞', label: 'Call Us', text: '+27 11 123 4567', link: 'tel:+27111234567' },
                            { icon: '✉️', label: 'Email Us', text: 'support@mobileglow.com', link: 'mailto:support@mobileglow.com' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors group">
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">{item.label}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.text}</p>
                                {item.link && (
                                    <a href={item.link} className="text-blue-600 font-bold text-sm hover:underline">Get in touch →</a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <section
                    ref={el => sectionRefs.current[0] = el}
                    className="mt-32 opacity-0 translate-y-10 transition-all duration-1000"
                >
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setActiveFaqIndex(activeFaqIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-gray-800">{faq.question}</span>
                                    <span className={`text-blue-600 transition-transform duration-300 ${activeFaqIndex === index ? 'rotate-180' : ''}`}>
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${activeFaqIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
