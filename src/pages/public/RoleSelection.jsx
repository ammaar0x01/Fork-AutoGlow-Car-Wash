// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import image1 from '../../assets/images/cars/login/image-1.png';
// import './RoleSelection.css';


// export default function RoleSelection({ onBack }) {
//     const navigate = useNavigate();

//     const handleSelectRole = (role) => {
//         // Navigate to SignUp and pass role as state
//         // navigate('/signup', { state: { role } });
//         navigate('/create-account', { state: { role } });

//     };

//     return (
//         <div className="role-selection-wrapper">
//             <div className="role-selection-section">
//                 <button onClick={() => navigate('/')} className="back-button" aria-label="Go back">
//                     <i className="fas fa-arrow-left"></i>
//                     <span>Back</span>
//                 </button>
//                 <h1 className="role-selection-title">Choose Role</h1>
//                 <div className="roles-container">
//                     <div
//                         className="role-card"
//                         onClick={() => handleSelectRole('Customer')}
//                         role="button"
//                         tabIndex={0}
//                         onKeyPress={(e) => { if (e.key === 'Enter') handleSelectRole('Customer'); }}
//                     >
//                         <div className="role-icon">
//                             <i className="fas fa-user"></i>
//                         </div>
//                         <div className="role-content">
//                             <h2 className="role-title">Customer</h2>
//                             <p className="role-description">Book mobile car wash services</p>
//                         </div>
//                         <span className="role-arrow">→</span>
//                     </div>
//                     <div
//                         className="role-card"
//                         onClick={() => handleSelectRole('Employee')}
//                         role="button"
//                         tabIndex={0}
//                         onKeyPress={(e) => { if (e.key === 'Enter') handleSelectRole('Employee'); }}
//                     >
//                         <div className="role-icon">
//                             <i className="fas fa-briefcase"></i>
//                         </div>
//                         <div className="role-content">
//                             <h2 className="role-title">Employee</h2>
//                             <p className="role-description">Manage and provide car wash services</p>
//                         </div>
//                         <span className="role-arrow">→</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="image-section">
//                 <img
//                     src={image1}
//                     alt="Car wash"
//                 />
//             </div>
//         </div>
//     );
// };



// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import image1 from '../../assets/images/cars/login/image-1.png';

// export default function RoleSelection() {
//     const navigate = useNavigate();

//     const handleSelectRole = (role) => {
//         navigate('/create-account', { state: { role } });
//     };

//     return (
//         <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden bg-gray-50">
//             {/* Form Section */}
//             <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 lg:p-16 relative">
                
//                 {/* Back Button */}
//                 <button 
//                     onClick={() => navigate('/')} 
//                     className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium group"
//                     aria-label="Go back"
//                 >
//                     <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
//                     <span>Back</span>
//                 </button>

//                 <div className="w-full max-w-md">
//                     <h1 className="text-4xl font-bold text-gray-900 mb-2">Choose Role</h1>
//                     <p className="text-gray-500 mb-10">Select how you would like to use our platform</p>

//                     <div className="space-y-4">
//                         {/* Customer Card */}
//                         <div
//                             className="group flex items-center p-6 bg-white rounded-2xl border-2 border-transparent shadow-sm hover:border-blue-500 hover:shadow-md cursor-pointer transition-all duration-300"
//                             onClick={() => handleSelectRole('Customer')}
//                             role="button"
//                             tabIndex={0}
//                             onKeyDown={(e) => { if (e.key === 'Enter') handleSelectRole('Customer'); }}
//                         >
//                             <div className="w-14 h-14 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
//                                 <i className="fas fa-user text-xl"></i>
//                             </div>
                            
//                             <div className="ml-5 flex-grow">
//                                 <h2 className="text-xl font-bold text-gray-800">Customer</h2>
//                                 <p className="text-gray-500 text-sm">Book mobile car wash services</p>
//                             </div>

//                             <span className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
//                                 <i className="fas fa-chevron-right"></i>
//                             </span>
//                         </div>

//                         {/* Employee Card */}
//                         <div
//                             className="group flex items-center p-6 bg-white rounded-2xl border-2 border-transparent shadow-sm hover:border-blue-500 hover:shadow-md cursor-pointer transition-all duration-300"
//                             onClick={() => handleSelectRole('Employee')}
//                             role="button"
//                             tabIndex={0}
//                             onKeyDown={(e) => { if (e.key === 'Enter') handleSelectRole('Employee'); }}
//                         >
//                             <div className="w-14 h-14 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
//                                 <i className="fas fa-briefcase text-xl"></i>
//                             </div>
                            
//                             <div className="ml-5 flex-grow">
//                                 <h2 className="text-xl font-bold text-gray-800">Employee</h2>
//                                 <p className="text-gray-500 text-sm">Manage and provide services</p>
//                             </div>

//                             <span className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
//                                 <i className="fas fa-chevron-right"></i>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Image Section */}
//             <div className="hidden md:block md:w-1/2 relative">
//                 <img
//                     src={image1}
//                     alt="Professional car wash service"
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 {/* Blue overlay to tie in with branding */}
//                 <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
//             </div>
//         </div>
//     );
// }


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

