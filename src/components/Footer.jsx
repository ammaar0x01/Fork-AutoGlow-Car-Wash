import React from "react";

import "./Footer.css"; 
import facebookLogo from "../assets/icons/facebook_logo.png";
import instaLogo from "../assets/icons/insta_logo.png";


// export default function Footer(){
//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <div className="footer-section">
//                     <h3 className="footer-heading">Mobile Car Wash</h3>
//                     <p className="footer-text">Professional mobile car cleaning services at your doorstep.</p>
//                 </div>

//                 <div className="footer-section">
//                     <h4 className="footer-subheading">For Customers</h4>
//                     <ul className="footer-links">
//                         <li><a href="/login">Log in or sign up</a></li>
//                         <li><a href="/download">Download the app</a></li>
//                         <li><a href="/help">Help and support</a></li>
//                     </ul>
//                 </div>

//                 <div className="footer-section">
//                     <h4 className="footer-subheading">For Businesses</h4>
//                     <ul className="footer-links">
//                         <li><a href="/business">List your business</a></li>
//                         <li><a href="/partnership">Partnership opportunities</a></li>
//                     </ul>
//                 </div>

//                 <div className="footer-section">
//                     <h4 className="footer-subheading">Connect With Us</h4>
//                     <div className="social-icons">
//                         <a
//                             href="https://facebook.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <img
//                                 src={facebookLogo}
//                                 alt="Facebook"
//                                 className="social-icon"
//                             />
//                         </a>
//                         <a
//                             href="https://www.instagram.com/mobile_glow_carwash?igsh=MWZleHdvbGliOWF4cA%3D%3D&utm_source=qr"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <img
//                                 src={instaLogo}
//                                 alt="Instagram"
//                                 className="social-icon"
//                             />
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             <div className="footer-bottom">
//                 <p>© {new Date().getFullYear()} Mobile Car Wash. All rights reserved.</p>
//                 <div className="legal-links">
//                     <a href="/privacy">Privacy Policy</a>
//                     <a href="/terms">Terms of Service</a>
//                     <a href="/cookies">Cookie Policy</a>
//                 </div>
//             </div>
//         </footer>
//     );
// };


// newer 
export default function Footer() {
    return (
        <footer className="bg-[rgba(12,45,72,1)] text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-white text-xl font-bold tracking-tight leading-tight">
                            Mobile Car Wash
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Professional mobile car cleaning services delivered directly to your doorstep, ensuring quality and convenience.
                        </p>
                    </div>

                    {/* Customer Links */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-semibold uppercase tracking-wider text-xs leading-tight">
                            For Customers
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/login" className="hover:text-blue-400 transition-colors">Log in or sign up</a></li>
                            <li><a href="/download" className="hover:text-blue-400 transition-colors">Download the app</a></li>
                            <li><a href="/help" className="hover:text-blue-400 transition-colors">Help and support</a></li>
                        </ul>
                    </div>

                    {/* Business Links */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-semibold uppercase tracking-wider text-xs leading-tight">
                            For Businesses
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/business" className="hover:text-blue-400 transition-colors">List your business</a></li>
                            <li><a href="/partnership" className="hover:text-blue-400 transition-colors">Partnership opportunities</a></li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-semibold uppercase tracking-wider text-xs leading-tight">
                            Connect With Us
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
                            >
                                <img src={facebookLogo} alt="Facebook" className="w-5 h-5 invert" />
                            </a>
                            <a
                                href="https://instagram.com/..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
                            >
                                <img src={instaLogo} alt="Instagram" className="w-5 h-5 invert" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Mobile Car Wash. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}