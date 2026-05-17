import React from 'react';
import { useNavigate } from 'react-router-dom';

import { pageNames } from '../pageNames';

import image1 from '../../assets/images/cars/login/image-1.png';


export default function RoleSelection() {
    document.title = pageNames.role 
    
    const navigate = useNavigate();

    const handleSelectRole = (role) => {
        navigate('/create-account', { state: { role } });
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden font-poppins">
            
            {/* Left: Role Selection Section (Gradient Blue) */}
            <div className="relative flex-1 flex flex-col justify-center items-center px-6 py-16 md:px-12 bg-gradient-to-br from-[#0d47a1] via-[#1976d2] to-[#42a5f5] text-white">
                
                {/* Texture Overlay (Replicating your connected pattern) */}
                <div 
                    className="absolute inset-0 opacity-20 pointer-events-none" 
                    style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/connected.png')` }}
                ></div>

                {/* Back Button - Glassmorphism */}
                <button 
                    onClick={() => navigate('/')} 
                    className="fixed top-5 left-5 z-[9999] flex items-center gap-2 px-[18px] py-[10px] text-base font-medium bg-white/15 border border-white/30 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white/25 hover:-translate-x-1 hover:text-[#bbdefb]"
                >
                    <i className="fas fa-arrow-left text-base"></i>
                    <span>Back</span>
                </button>

                {/* Content Container */}
                <div className="relative z-10 w-full max-w-[400px]">
                    <h1 className="text-[32px] md:text-[42px] font-semibold font-montserrat text-center mb-10 leading-tight">
                        Choose Role
                    </h1>

                    <div className="flex flex-col gap-5">
                        {/* Role Cards - Glassmorphism Style */}
                        {[
                            { role: 'Customer', icon: 'fa-user', desc: 'Book mobile car wash services' },
                            { role: 'Employee', icon: 'fa-briefcase', desc: 'Manage and provide car wash services' }
                        ].map((item) => (
                            <div
                                key={item.role}
                                onClick={() => handleSelectRole(item.role)}
                                className="group relative flex items-center gap-5 p-[25px] bg-white/10 border border-white/20 rounded-[15px] shadow-lg backdrop-blur-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-2xl"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && handleSelectRole(item.role)}
                            >
                                <div className="text-[40px] flex-shrink-0">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                
                                <div className="flex-1">
                                    <h2 className="text-2xl font-semibold mb-1">{item.role}</h2>
                                    <p className="text-sm opacity-90 leading-tight">{item.desc}</p>
                                </div>

                                <span className="text-xl opacity-80 group-hover:opacity-100 transition-opacity">
                                    →
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right: Image Section */}
            <div className="flex-1 hidden md:block overflow-hidden bg-gray-200">
                <img
                    src={image1}
                    alt="Professional car service"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

