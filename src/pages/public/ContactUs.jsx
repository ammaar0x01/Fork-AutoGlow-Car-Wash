import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

import './ContactUs.css';
import Footer from"../../components/Footer";
import Navbar from '../../components/Navbar';


export default function ContactUs() {
    document.title = "Contact us"

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [visible, setVisible] = useState(false);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);
    const navigate = useNavigate();

    const EMAILJS_CONFIG = {
        SERVICE_ID: 'service_t8xcg8k',
        TEMPLATE_ID: 'template_8s0ryoj',
        USER_ID: 'sqpo7Bji9gBBnZBTW'
    };

    // Social media links - replace with your actual social media URLs
    const socialLinks = {
        facebook: 'https://www.facebook.com/yourpage',
        instagram: 'https://www.instagram.com/yourprofile',
        twitter: 'https://www.twitter.com/yourprofile',
        linkedin: 'https://www.linkedin.com/company/yourcompany'
    };

    const faqData = [
        {
            question: "What services do you offer?",
            answer: "We offer comprehensive mobile car detailing services including exterior washing, waxing, interior cleaning, vacuuming, leather conditioning, and specialized treatments for headlights and windows."
        },
        {
            question: "How long does a typical service take?",
            answer: "Basic wash takes 30-45 minutes, full exterior detail takes 2-3 hours, and complete interior & exterior packages take 3-4 hours depending on vehicle size and condition."
        },
        {
            question: "Do you use eco-friendly products?",
            answer: "Yes! We prioritize environmentally friendly cleaning products that are biodegradable and safe for your vehicle and the environment."
        },
        {
            question: "Can I schedule recurring appointments?",
            answer: "Absolutely! We offer flexible scheduling options including one-time, weekly, bi-weekly, and monthly maintenance plans to keep your vehicle looking its best."
        },
        {
            question: "What areas do you serve?",
            answer: "We currently serve the greater Johannesburg area. Contact us to confirm if we cover your specific location."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept cash, credit/debit cards, EFT payments, and mobile payment solutions like Zapper and SnapScan."
        }
    ];

    useEffect(() => {
        setVisible(true);
        if (submitSuccess) {
            const timer = setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [submitSuccess]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length > 500) {
            newErrors.message = 'Message must be less than 500 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            // Add shake animation to form on error
            const form = document.querySelector('.form-card');
            form.classList.add('shake');
            setTimeout(() => form.classList.remove('shake'), 500);
            return;
        }

        setIsSubmitting(true);

        try {
            // Send email using EmailJS
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'waterlilykid.123@gmail.com',
                    reply_to: formData.email,
                    timestamp: new Date().toLocaleString()
                },
                EMAILJS_CONFIG.USER_ID
            );

            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            console.error('Failed to send email:', error);
            setIsSubmitting(false);
            // Handle error state
            setErrors({ submit: 'Failed to send message. Please try again later.' });
        }
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    const toggleFaq = (index) => {
        setActiveFaqIndex(activeFaqIndex === index ? null : index);
    };

    const handleSocialClick = (platform) => {
        // You can add tracking or analytics here if needed
        console.log(`Navigating to ${platform}`);
    };

    return (
        <>
            {/* <div className={`contact-us ${visible ? 'visible' : ''}`}> */}

            <Navbar />

        <div>

<div className="about-hero">
                <h1>Contact us</h1>
                {/* <p>Transforming car care with passion and precision</p> */}
                {/* <p>Get in touch with our team</p> */}

                <div className="scroll-indicator">
                    <span>Get in touch with our team</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>

            {/* Modern minimalistic header */}
            {/* <div className="contact-header mt-10"> */}
            {/* <div className="">

                {/* <button className="back-button" onClick={handleBackToHome}>
                    ← Back to Home
                </button> 
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">Contact Us</h1>
                <p>Get in touch with our team</p>
            </div> */}

            <div className="contact-container">
                {/* Contact form section */}
                <div className="contact-form-section">
                    <div className="form-card">
                        <h3>Send us a message</h3>
                        <p className="form-subtitle">We'll get back to you as soon as possible</p>

                        {submitSuccess && (
                            <div className="success-message">
                                <div className="success-icon">✓</div>
                                <div>
                                    <h4>Message sent successfully</h4>
                                    <p>Thank you for your message! We will get back to you soon.</p>
                                </div>
                            </div>
                        )}

                        {errors.submit && (
                            <div className="submit-error">
                                {errors.submit}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={errors.name ? 'error' : ''}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                    {errors.name && <span className="error-message">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={errors.email ? 'error' : ''}
                                        placeholder="Enter your email address"
                                        required
                                    />
                                    {errors.email && <span className="error-message">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={errors.subject ? 'error' : ''}
                                    placeholder="What is this regarding?"
                                    required
                                />
                                {errors.subject && <span className="error-message">{errors.subject}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={errors.message ? 'error' : ''}
                                    rows="4"
                                    placeholder="Type your message here..."
                                    required
                                ></textarea>
                                {errors.message && <span className="error-message">{errors.message}</span>}
                                <div className={`char-counter ${formData.message.length > 500 ? 'error' : ''}`}>
                                    {formData.message.length}/500
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={`submit-button ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Contact information section */}
                <div className="contact-info-section">
                    <div className="info-card">
                        <div className="info-icon">📍</div>
                        <h4>Visit Us</h4>
                        <p>123 Car Care Street<br />Johannesburg, 2000<br />South Africa</p>
                        <a href="#" className="map-link">
                            View on map
                        </a>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">📞</div>
                        <h4>Call Us</h4>
                        <p>+27 11 123 4567<br />Mon - Fri, 8:00 AM - 6:00 PM</p>
                        <a href="tel:+27111234567" className="contact-link">
                            Call now
                        </a>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">✉️</div>
                        <h4>Email Us</h4>
                        <p>waterlilykid.123@gmail.com<br />support@mobileglow.com</p>
                        <a href="mailto:waterlilykid.123@gmail.com" className="contact-link">
                            Send email
                        </a>
                    </div>

                    {/* <div className="social-section">
                        <h5>Follow Us</h5>
                        <div className="social-links">
                            <a
                                href={socialLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                onClick={() => handleSocialClick('facebook')}
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href={socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                onClick={() => handleSocialClick('instagram')}
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href={socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                onClick={() => handleSocialClick('twitter')}
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                onClick={() => handleSocialClick('linkedin')}
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
                <div className="faq-container">
                    <div className="faq-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Find quick answers to common questions about our services</p>
                    </div>

                    <div className="faq-list">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeFaqIndex === index ? 'active' : ''}`}
                            >
                                <div
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className="faq-icon">
                                        {activeFaqIndex === index ? '−' : '+'}
                                    </span>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="faq-cta">
                        <p>Still have questions? We're here to help!</p>
                        <button
                            className="cta-button"
                            onClick={() => document.querySelector('.contact-form-section').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Us Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};



// newer0 
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import emailjs from 'emailjs-com';

// import Footer from "../../components/Footer";
// import Navbar from '../../components/Navbar';

// export default function ContactUs() {
//     document.title = "Contact us"

//     const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitSuccess, setSubmitSuccess] = useState(false);
//     const [activeFaqIndex, setActiveFaqIndex] = useState(null);
//     const navigate = useNavigate();

//     const EMAILJS_CONFIG = {
//         SERVICE_ID: 'service_t8xcg8k',
//         TEMPLATE_ID: 'template_8s0ryoj',
//         USER_ID: 'sqpo7Bji9gBBnZBTW'
//     };

//     const faqData = [
//         { question: "What services do you offer?", answer: "We offer comprehensive mobile car detailing services including exterior washing, waxing, interior cleaning, vacuuming, and specialized treatments." },
//         { question: "How long does a typical service take?", answer: "Basic wash takes 30-45 minutes, full exterior detail takes 2-3 hours, and complete packages take 3-4 hours." },
//         { question: "Do you use eco-friendly products?", answer: "Yes! We prioritize environmentally friendly cleaning products that are biodegradable and safe for your vehicle." },
//         { question: "What areas do you serve?", answer: "We currently serve the greater Johannesburg area. Contact us to confirm specific location coverage." }
//     ];

//     useEffect(() => {
//         if (submitSuccess) {
//             const timer = setTimeout(() => setSubmitSuccess(false), 5000);
//             return () => clearTimeout(timer);
//         }
//     }, [submitSuccess]);

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.name.trim()) newErrors.name = 'Name is required';
//         if (!formData.email.trim()) {
//             newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = 'Email is invalid';
//         }
//         if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
//         if (!formData.message.trim()) newErrors.message = 'Message is required';
        
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//         if (errors[name]) setErrors({ ...errors, [name]: '' });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) return;

//         setIsSubmitting(true);
//         try {
//             await emailjs.send(
//                 EMAILJS_CONFIG.SERVICE_ID,
//                 EMAILJS_CONFIG.TEMPLATE_ID,
//                 { ...formData, to_email: 'waterlilykid.123@gmail.com' },
//                 EMAILJS_CONFIG.USER_ID
//             );
//             setIsSubmitting(false);
//             setSubmitSuccess(true);
//             setFormData({ name: '', email: '', subject: '', message: '' });
//         } catch (error) {
//             setIsSubmitting(false);
//             setErrors({ submit: 'Failed to send message. Please try again later.' });
//         }
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen font-sans">
//             <Navbar />

//             {/* Hero Section */}
//             <div className="bg-[rgba(12,45,72,1)] py-20 px-6 text-center text-white relative overflow-hidden">
//                 <div className="relative z-10 animate-fadeIn">
//                     <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Contact Us</h1>
//                     <div className="flex flex-col items-center gap-2 text-blue-200 opacity-90">
//                         <span className="text-lg">Get in touch with our team</span>
//                         <div className="animate-bounce mt-4 text-2xl">↓</div>
//                     </div>
//                 </div>
//                 {/* Decorative subtle gradient */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent"></div>
//             </div>

//             <div className="max-w-7xl mx-auto px-6 py-16">
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
//                     {/* Form Card Section */}
//                     <div className="lg:col-span-2">
//                         <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transition-all">
//                             <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
//                             <p className="text-gray-500 mb-8">We'll get back to you as soon as possible</p>

//                             {submitSuccess && (
//                                 <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r-lg flex items-center gap-3 animate-slideIn">
//                                     <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
//                                     <div>
//                                         <h4 className="text-green-800 font-bold">Message sent!</h4>
//                                         <p className="text-green-700 text-sm">We'll be in touch shortly.</p>
//                                     </div>
//                                 </div>
//                             )}

//                             <form onSubmit={handleSubmit} className="space-y-6">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div className="flex flex-col gap-2">
//                                         <label className="text-sm font-semibold text-gray-700">Full Name</label>
//                                         <input
//                                             type="text" name="name" value={formData.name} onChange={handleInputChange}
//                                             placeholder="John Doe"
//                                             className={`p-3 rounded-lg border ${errors.name ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
//                                         />
//                                         {errors.name && <span className="text-red-500 text-xs font-medium">{errors.name}</span>}
//                                     </div>
//                                     <div className="flex flex-col gap-2">
//                                         <label className="text-sm font-semibold text-gray-700">Email Address</label>
//                                         <input
//                                             type="email" name="email" value={formData.email} onChange={handleInputChange}
//                                             placeholder="john@example.com"
//                                             className={`p-3 rounded-lg border ${errors.email ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
//                                         />
//                                         {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email}</span>}
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col gap-2">
//                                     <label className="text-sm font-semibold text-gray-700">Subject</label>
//                                     <input
//                                         type="text" name="subject" value={formData.subject} onChange={handleInputChange}
//                                         placeholder="Regarding..."
//                                         className={`p-3 rounded-lg border ${errors.subject ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
//                                     />
//                                     {errors.subject && <span className="text-red-500 text-xs font-medium">{errors.subject}</span>}
//                                 </div>

//                                 <div className="flex flex-col gap-2">
//                                     <label className="text-sm font-semibold text-gray-700">Message</label>
//                                     <textarea
//                                         name="message" value={formData.message} onChange={handleInputChange} rows="4"
//                                         placeholder="Tell us how we can help..."
//                                         className={`p-3 rounded-lg border ${errors.message ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none`}
//                                     />
//                                     <div className="flex justify-between items-center mt-1">
//                                         {errors.message && <span className="text-red-500 text-xs font-medium">{errors.message}</span>}
//                                         <span className={`text-xs ${formData.message.length > 500 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
//                                             {formData.message.length}/500
//                                         </span>
//                                     </div>
//                                 </div>

//                                 <button
//                                     type="submit" disabled={isSubmitting}
//                                     className="w-full bg-[rgba(12,45,72,1)] hover:bg-[rgba(12,45,72,0.9)] text-white font-bold py-4 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
//                                 >
//                                     {isSubmitting ? <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span> : 'Send Message'}
//                                 </button>
//                             </form>
//                         </div>
//                     </div>

//                     {/* Info Section */}
//                     <div className="space-y-6">
//                         {[
//                             { icon: '📍', title: 'Visit Us', text: '123 Car Care Street, Johannesburg, 2000', linkText: 'View on map', link: '#' },
//                             { icon: '📞', title: 'Call Us', text: '+27 11 123 4567', linkText: 'Call now', link: 'tel:+27111234567' },
//                             { icon: '✉️', title: 'Email Us', text: 'support@mobileglow.com', linkText: 'Send email', link: 'mailto:support@mobileglow.com' }
//                         ].map((info, i) => (
//                             <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-all">
//                                 <div className="text-3xl">{info.icon}</div>
//                                 <div>
//                                     <h4 className="font-bold text-gray-900">{info.title}</h4>
//                                     <p className="text-sm text-gray-600 mb-2 leading-relaxed">{info.text}</p>
//                                     <a href={info.link} className="text-blue-600 text-xs font-bold uppercase tracking-wider hover:text-blue-800 transition-colors">
//                                         {info.linkText} →
//                                     </a>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* FAQ Section */}
//                 <div className="mt-24">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
//                         <p className="text-gray-500">Quick answers to common questions about our services</p>
//                     </div>

//                     <div className="max-w-3xl mx-auto space-y-4">
//                         {faqData.map((faq, index) => (
//                             <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
//                                 <button
//                                     onClick={() => setActiveFaqIndex(activeFaqIndex === index ? null : index)}
//                                     className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
//                                 >
//                                     <span>{faq.question}</span>
//                                     <span className="text-blue-500 text-xl">{activeFaqIndex === index ? '−' : '+'}</span>
//                                 </button>
//                                 <div className={`px-5 transition-all duration-300 ease-in-out ${activeFaqIndex === index ? 'pb-5 max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
//                                     <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="mt-12 text-center bg-blue-50 p-8 rounded-2xl border border-blue-100">
//                         <p className="text-gray-700 font-medium mb-4">Still have questions? We're here to help!</p>
//                         <button
//                             onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}
//                             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all"
//                         >
//                             Contact Us Now
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// }
