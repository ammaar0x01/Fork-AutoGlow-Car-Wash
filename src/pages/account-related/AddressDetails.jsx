import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AddressDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const managerData = location.state?.manager || null;

    const [address, setAddress] = useState({
        streetNumber: '',
        streetName: '',
        city: '',
        postalCode: '',
    });

    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;
        if (name === 'streetNumber' || name === 'postalCode') {
            updatedValue = value.replace(/\D/g, '');
        }
        setAddress({ ...address, [name]: updatedValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!managerData) {
            alert('User data is missing. Please restart the signup process.');
            navigate('/signup');
            return;
        }
        setShowModal(true);
    };

    const handleConfirm = async () => {
        setShowModal(false);
        setIsSubmitting(true);

        const API_URL = 'http://localhost:5000/api/auth/signup';
        const fullData = {
            ...managerData,
            address: { ...address }
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fullData),
            });

            const result = await response.json();

            if (response.ok) {
                if (fullData.roleDescription === 'CLIENT') {
                    navigate('/LandingCustomer');
                } else {
                    navigate('/login');
                }
            } else {
                alert(result.error || 'Failed to create account.');
            }
        } catch (error) {
            console.error('Error creating account:', error);
            alert('Could not connect to the server. Is your backend running?');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen w-full bg-gray-50 overflow-hidden font-sans">
            
            {/* Left Container: Form */}
            {/* <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 
                overflow-y-auto bg-white">
                <div className="w-full max-w-md p-3 border">
                    <div className="mb-10">
                        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Step 2 of 2</span>
                        <h2 className="text-4xl font-black text-gray-900 mt-2">Address Details</h2>
                        <p className="text-gray-500 mt-2">Where should we send our detailing crew?</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1">
                                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">No.</label>
                                <input 
                                    type="text" name="streetNumber" value={address.streetNumber}
                                    onChange={handleChange} placeholder="123" required 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Street Name</label>
                                <input 
                                    type="text" name="streetName" value={address.streetName}
                                    onChange={handleChange} placeholder="Main Road" required 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">City</label>
                            <input 
                                type="text" name="city" value={address.city}
                                onChange={handleChange} placeholder="Johannesburg" required 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Postal Code</label>
                            <input 
                                type="text" name="postalCode" value={address.postalCode}
                                onChange={handleChange} placeholder="2000" required 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <button 
                            type="submit" disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4 transform active:scale-[0.98]"
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Processing...</span>
                                </div>
                            ) : 'Complete Registration'}
                        </button>
                    </form>
                </div>
            </div> */}

            {/* version2 */}
{/* Left Container: Form */}
<div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 overflow-y-auto bg-gray-50/50">
    {/* Form Card */}
    <div className="w-full max-w-lg bg-white/90 backdrop-blur-sm p-10 rounded-[2.5rem] border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
        
        <div className="mb-10 text-center md:text-left">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                Final Step
            </span>
            <h2 className="text-4xl font-black text-gray-900 mt-4 tracking-tight">Address Details</h2>
            <p className="text-gray-500 mt-2 font-medium">Where should we send our detailing crew?</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2 ml-1">No.</label>
                    <input 
                        type="text" name="streetNumber" value={address.streetNumber}
                        onChange={handleChange} placeholder="123" required 
                        className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-300"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2 ml-1">Street Name</label>
                    <input 
                        type="text" name="streetName" value={address.streetName}
                        onChange={handleChange} placeholder="Main Road" required 
                        className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-300"
                    />
                </div>
            </div>

            <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2 ml-1">City</label>
                <input 
                    type="text" name="city" value={address.city}
                    onChange={handleChange} placeholder="Johannesburg" required 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-300"
                />
            </div>

            <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2 ml-1">Postal Code</label>
                <input 
                    type="text" name="postalCode" value={address.postalCode}
                    onChange={handleChange} placeholder="2000" required 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-300"
                />
            </div>

            <button 
                type="submit" disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-900 hover:scale-[1.02] active:scale-[0.98] text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50 mt-4 uppercase tracking-widest text-xs"
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing
                    </span>
                ) : 'Complete Registration'}
            </button>
        </form>
    </div>
</div>
{/* version2 */}

            {/* Right Container: Image */}
            <div className="hidden md:block flex-1 relative">
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply z-10"></div>
                {/* <img 
                    src="https://images.unsplash.com/photo-1520333781090-e1ad16305173?auto=format&fit=crop&w=1200&q=80"
                    alt="Clean Car" 
                    className="w-full h-full object-cover" 
                /> */}

                     <img
                         src="https:images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                         alt="Car wash"
                     className="w-full h-full object-cover" 
                     />

                 {/* </div> */}

                <div className="absolute bottom-12 left-12 z-20 text-white max-w-sm">
                    <h3 className="text-3xl font-bold mb-2">Join the Glow.</h3>
                    <p className="text-white/80 leading-relaxed">You're just one step away from premium mobile detailing at your doorstep.</p>
                </div>
            </div>

            {/* Modern Modal Overlay */}
            {showModal && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm animate-fade-in" onClick={() => setShowModal(false)}></div>
                    <div className="relative bg-white rounded-[2rem] shadow-2xl p-8 md:p-10 w-full max-w-sm text-center transform animate-pop-in">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                            ✨
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">Almost there!</h3>
                        <p className="text-gray-500 mb-8 leading-relaxed">Ready to create your <strong className="text-blue-600">MobileGlow</strong> account and book your first wash?</p>
                        <div className="flex flex-col gap-3">
                            <button 
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all"
                                onClick={handleConfirm}
                            >
                                Yes, Let's Go!
                            </button>
                            <button 
                                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-3.5 rounded-xl transition-all"
                                onClick={() => setShowModal(false)}
                            >
                                Not yet
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

