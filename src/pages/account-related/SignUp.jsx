import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { pageNames } from '../pageNames';

import image1 from '../../assets/images/cars/login/image-1.png';

export default function SignUp() {
    document.title = pageNames.signup;
    
    const navigate = useNavigate();
    const location = useLocation();
    const selectedRole = location.state?.role || 'Customer';

    const [manager, setManager] = useState({
        userName: '',
        userSurname: '',
        customerDOB: '',
        isActive: true,
        roleDescription: selectedRole === 'Employee' ? 'EMPLOYEE' : 'CLIENT',
        employeeType: 'None',
        hireDate: '',
        contact: { phoneNumber: '' },
        login: { emailAddress: '', password: '' }
    });

    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [strength, setStrength] = useState('');

    useEffect(() => {
        setManager(prev => ({
            ...prev,
            roleDescription: selectedRole === 'Employee' ? 'EMPLOYEE' : 'CLIENT'
        }));
    }, [selectedRole]);

    // UI Helper for Password Strength
    const checkStrength = (value) => {
        if (!value) return "";
        if (value.length < 6) return "Weak";
        if (value.match(/[A-Z]/) && value.match(/[0-9]/) && value.length >= 8) return "Strong";
        return "Medium";
    };

    const getStrengthStyles = () => {
        switch (strength) {
            case "Strong": return "bg-green-500 w-full";
            case "Medium": return "bg-yellow-500 w-2/3";
            case "Weak": return "bg-red-500 w-1/3";
            default: return "bg-gray-200 w-0";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setManager(prev => ({ ...prev, [name]: value }));
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') setStrength(checkStrength(value));
        setManager(prev => ({
            ...prev,
            login: { ...prev.login, [name]: value }
        }));
    };

    const handleContactChange = (e) => {
        let phoneValue = e.target.value;
        // Basic SA Format handling
        if (phoneValue.startsWith('0')) phoneValue = '+27' + phoneValue.slice(1);
        
        setManager(prev => ({
            ...prev,
            contact: { phoneNumber: phoneValue }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (selectedRole === 'Employee' && manager.employeeType === 'None') {
            newErrors.employee = 'Please select a specific role';
        }
        if (manager.login.password !== confirmPassword) {
            newErrors.password = 'Passwords do not match';
        }
        // Simple SA Phone Validation
        const phoneRegex = /^\+27\d{9}$/;
        if (!phoneRegex.test(manager.contact.phoneNumber)) {
            newErrors.phone = 'Invalid South African format (+27...)';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        navigate('/address', { state: { manager } });
    };

    return (
        <div className="flex h-screen w-full bg-gray-50 overflow-hidden font-sans">
            
            {/* Left Container: Form */}
            <div className="flex-1 flex flex-col relative overflow-y-auto bg-gray-50/50 p-6 md:p-12">
                
                {/* Back Button */}
                <button 
                    onClick={() => navigate('/role')}
                    className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-blue-900 transition-all group z-10 font-black uppercase text-[10px] tracking-widest"
                >
                    <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
                    Go back
                </button>

                <div className="max-w-xl w-full mx-auto my-auto">
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                        <header className="mb-10 text-center md:text-left">
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                Step 1 of 2
                            </span>
                            <h2 className="text-4xl font-black text-gray-900 mt-4 tracking-tight">Create Account</h2>
                            <p className="text-gray-500 mt-2 font-medium">
                                Join as a <span className="text-blue-600 underline underline-offset-4 decoration-2">{selectedRole}</span>
                            </p>
                        </header>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">First Name</label>
                                    <input
                                        type="text" name="userName" value={manager.userName} onChange={handleChange}
                                        placeholder="John" required
                                        className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Last Name</label>
                                    <input
                                        type="text" name="userSurname" value={manager.userSurname} onChange={handleChange}
                                        placeholder="Doe" required
                                        className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Conditional Role/Date Row */}
                            {selectedRole === 'Customer' ? (
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Date of Birth</label>
                                    <input
                                        type="date" name="customerDOB" value={manager.customerDOB} onChange={handleChange} required
                                        className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Staff Role</label>
                                        <select
                                            name="employeeType" value={manager.employeeType} onChange={handleChange} required
                                            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all appearance-none"
                                        >
                                            <option value="None">Select Role</option>
                                            <option value="Accountant">Accountant</option>
                                            <option value="Manager">Manager</option>
                                            <option value="WashAttendant">Wash Attendant</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Hire Date</label>
                                        <input
                                            type="date" name="hireDate" value={manager.hireDate} onChange={handleChange} required
                                            className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Phone Input */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
                                <input
                                    type="tel" name="phoneNumber" value={manager.contact.phoneNumber} onChange={handleContactChange}
                                    placeholder="071 234 5678" required
                                    className={`w-full px-5 py-4 bg-gray-50/50 border ${errors.phone ? 'border-red-400 ring-4 ring-red-500/5' : 'border-gray-100'} rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all`}
                                />
                                {errors.phone && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.phone}</p>}
                            </div>

                            <div className="py-2"><hr className="border-gray-100" /></div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                                <input
                                    type="email" name="emailAddress" value={manager.login.emailAddress} onChange={handleLoginChange}
                                    placeholder="john.doe@example.com" required
                                    className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                                />
                            </div>

                            {/* Password Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2 relative">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Password</label>
                                    <input
                                        type="password" name="password" value={manager.login.password} onChange={handleLoginChange}
                                        placeholder="••••••••" required
                                        className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                                    />
                                    {/* Visual Strength Meter */}
                                    <div className="absolute bottom-0 left-0 h-1 bg-gray-100 w-full rounded-b-2xl overflow-hidden flex">
                                        <div className={`h-full transition-all duration-500 ${getStrengthStyles()}`}></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Confirm</label>
                                    <input
                                        type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="••••••••" required
                                        className={`w-full px-5 py-4 bg-gray-50/50 border ${errors.password ? 'border-red-400 ring-4 ring-red-500/5' : 'border-gray-100'} rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all`}
                                    />
                                </div>
                            </div>
                            {errors.password && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest text-right mr-1">{errors.password}</p>}

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] mt-4 uppercase tracking-widest text-xs"
                            >
                                Continue to Address
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Right Container: Hero Image */}
            <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
                <img
                    src={image1}
                    alt="Premium Car detailing"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5000ms] hover:scale-110"
                />
                {/* Gradient Overlay to match branding */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-black/60"></div>
                
                {/* Floating Branding Card */}
                <div className="absolute bottom-16 left-16 z-20">
                    <div className="bg-blue-950/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl max-w-sm transform hover:-translate-y-2 transition-transform duration-700">
                        <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full"></div>
                        <h3 className="text-4xl font-black text-white leading-tight">
                            Revive Your Ride.
                        </h3>
                        <p className="mt-4 text-blue-100/70 font-medium">
                            The highest rated mobile detailing service in Johannesburg. Premium care, delivered to you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}