import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { pageNames } from '../pageNames';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useScrollAnimation from "../../hooks/useScrollAnimation"; 


export default function About() {
    document.title = pageNames.about 
    
    const [activeValue, setActiveValue] = useState(null);
    const navigate = useNavigate();
    
    // Using refs for scroll animations to match your other pages
    const sectionRefs = useScrollAnimation();

    const teamMembers = [
        {
            name: 'Abulele Manager',
            role: 'Operations Manager',
            bio: 'With over 15 years in the automotive industry, Abu ensures our operations run smoothly and efficiently.',
            social: { linkedin: 'abulele-manager', twitter: 'abulele_m', email: 'abulele' }
        },
        {
            name: 'Princess CEO',
            role: 'Chief Executive Officer',
            bio: 'Princess founded MobileGlow with a vision to revolutionize car care in South Africa.',
            social: { linkedin: 'princess-ceo', twitter: 'princess_ceo', email: 'princess' }
        },
        {
            name: 'Kwanda Tech',
            role: 'Technology Director',
            bio: 'Kwanda leads our tech initiatives, ensuring we stay at the forefront of automotive care technology.',
            social: { linkedin: 'kwanda-tech', twitter: 'kwanda_tech', email: 'kwanda' }
        },
        {
            name: 'Inga Finance',
            role: 'Finance Manager',
            bio: 'Inga keeps our finances in order and plans for sustainable growth and expansion.',
            social: { linkedin: 'inga-finance', twitter: 'inga_finance', email: 'inga' }
        }
    ];

    const tharkirahMember = {
        name: 'Tharkirah Member',
        role: 'Customer Relations Specialist',
        bio: 'Tharkirah ensures our customers receive exceptional service and maintains strong relationships with our valued clients.',
        social: { linkedin: 'tharkirah-member', twitter: 'tharkirah_crs', email: 'tharkirah' }
    };

    const handleSocialClick = (platform, profileName = '') => {
        const urls = {
            linkedin: `https://www.linkedin.com/in/${profileName}`,
            twitter: `https://twitter.com/${profileName}`,
            email: `mailto:${profileName}@mobileglow.com`
        };
        if (platform === 'email') {
            window.location.href = urls[platform];
        } else {
            window.open(urls[platform], '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden font-poppins">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative h-[60vh] flex flex-col items-center justify-center text-center text-white px-4 bg-blue-900">
                <div className="absolute inset-0 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1920&q=80" 
                        className="w-full h-full object-cover opacity-30" 
                        alt="Hero background"
                    />
                </div>
                <div className="relative z-10 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">About MobileGlow</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">Transforming car care with passion and precision</p>
                </div>
                <div className="absolute bottom-10 animate-bounce">
                    <i className="fas fa-chevron-down text-2xl opacity-50"></i>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6">
                
                {/* Story Section */}
                <section 
                    ref={el => sectionRefs.current[0] = el}
                    className="py-24 flex flex-col lg:flex-row items-center gap-16 opacity-0 translate-y-10 transition-all duration-1000"
                >
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
                        <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Founded in 2020, MobileGlow started as a small car wash operation with a big vision: 
                            to revolutionize the car care industry through exceptional service, cutting-edge technology, 
                            and a commitment to environmental sustainability.
                        </p>
                        <div className="grid grid-cols-3 gap-4 pt-6">
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-blue-600">10k+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Clients</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-blue-600">50+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Staff</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-blue-600">5</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Cities</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <img 
                            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" 
                            className="rounded-3xl shadow-2xl transition-transform hover:scale-105 duration-700" 
                            alt="Car washing" 
                        />
                        <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl hidden md:block shadow-xl">
                            <p className="font-bold">Premium Services</p>
                            <p className="text-sm opacity-80">Since 2020</p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section 
                    ref={el => sectionRefs.current[1] = el}
                    className="py-24 bg-gray-50 -mx-6 px-6 opacity-0 translate-y-10 transition-all duration-1000"
                >
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: 'fa-shield-alt', title: 'Quality', desc: 'We never compromise on the quality of our services. Every vehicle is treated with the utmost care.', more: 'Our team undergoes regular training to maintain the highest standards.' },
                                { icon: 'fa-leaf', title: 'Sustainability', desc: 'We use eco-friendly products and water-saving techniques to minimize our environmental impact.', more: 'We recycle 90% of our water and use biodegradable products exclusively.' },
                                { icon: 'fa-users', title: 'Community', desc: 'We\'re committed to creating jobs and investing in the local communities where we operate.', more: 'Each year, we donate 5% of our profits to local community initiatives.' }
                            ].map((value, idx) => (
                                <div 
                                    key={idx}
                                    onClick={() => setActiveValue(activeValue === idx ? null : idx)}
                                    className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-xl group"
                                >
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <i className={`fas ${value.icon}`}></i>
                                    </div>
                                    <h5 className="text-2xl font-bold mb-4">{value.title}</h5>
                                    <p className="text-gray-600 leading-relaxed mb-4">{value.desc}</p>
                                    <div className={`overflow-hidden transition-all duration-500 ${activeValue === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-blue-600 font-medium pt-4 border-t border-gray-50">{value.more}</p>
                                    </div>
                                    <div className="mt-6 text-gray-300">
                                        <i className={`fas fa-chevron-${activeValue === idx ? 'up' : 'down'}`}></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section 
                    ref={el => sectionRefs.current[2] = el}
                    className="py-24 opacity-0 translate-y-10 transition-all duration-1000"
                >
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Meet Our Leadership Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard key={index} member={member} onClickSocial={handleSocialClick} />
                        ))}
                    </div>
                    {/* Centered specialist card */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm">
                            <TeamMemberCard member={tharkirahMember} onClickSocial={handleSocialClick} />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 mb-12">
                    <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-200">
                        <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
                        <p className="text-xl text-blue-100 mb-10">Book our premium car care services today</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button onClick={() => navigate('/signup')} className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-all">Book Now</button>
                            <button onClick={() => navigate('/contact')} className="bg-blue-700 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-800 transition-all border border-blue-500">Contact Us</button>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}

const TeamMemberCard = ({ member, onClickSocial }) => (
    <div className="text-center group">
        <div className="relative inline-block mb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                    src={`https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&size=160&background=2563eb&color=fff&font-size=0.35`} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="absolute inset-0 bg-blue-600/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white text-xl">
                <button onClick={() => onClickSocial('linkedin', member.social.linkedin)} className="hover:scale-125 transition-transform"><i className="fab fa-linkedin"></i></button>
                <button onClick={() => onClickSocial('twitter', member.social.twitter)} className="hover:scale-125 transition-transform"><i className="fab fa-twitter"></i></button>
                <button onClick={() => onClickSocial('email', member.social.email)} className="hover:scale-125 transition-transform"><i className="fas fa-envelope"></i></button>
            </div>
        </div>
        <h5 className="text-xl font-bold text-gray-900">{member.name}</h5>
        <p className="text-blue-600 font-medium text-sm mb-3 uppercase tracking-widest">{member.role}</p>
        <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
    </div>
);
