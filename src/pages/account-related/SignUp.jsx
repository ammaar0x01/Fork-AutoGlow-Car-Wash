// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// import image1 from '../../assets/images/cars/login/image-1.png';

// const styles = {
//     pageContainer: {
//         display: 'flex',
//         height: '100vh',
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     },
//     leftContainer: {
//         flex: 1,
//         padding: '20px 30px 40px 30px',
//         display: 'flex',
//         alignItems: 'flex-start',
//         justifyContent: 'center',
//         overflowY: 'auto',
//         maxHeight: 'calc(100vh - 70px)', // Adjust based on navbar height
//     },
//     rightContainer: {
//         flex: 1,
//         overflow: 'hidden',
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//         objectFit: 'cover',
//     },
// };

// export default function SignUp(){
//     const location = useLocation();
//     const selectedRole = location.state?.role || 'Customer';

//     const [manager, setManager] = useState({
//         userName: '',
//         userSurname: '',
//         customerDOB: '',
//         isActive: true,
//         roleDescription: selectedRole === 'Employee' ? 'EMPLOYEE' : 'CLIENT',
//         employeeType: 'None',
//         hireDate: '',
//         contact: {
//             phoneNumber: ''
//         },
//         login: {
//             emailAddress: '',
//             password: ''
//         }
//     });

//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [phoneError, setPhoneError] = useState('');
//     const [employeeError, setEmployeeError] = useState('');
//     const [isEditing, setIsEditing] = useState(false);
//     const [strength, setStrength] = useState('');

//     useEffect(() => {
//         // Reset manager state to empty when component mounts or selectedRole changes
//         setManager({
//             userName: '',
//             userSurname: '',
//             customerDOB: '',
//             isActive: true,
//             roleDescription: selectedRole === 'Employee' ? 'EMPLOYEE' : 'CLIENT',
//             employeeType: 'None',
//             hireDate: '',
//             contact: {
//                 phoneNumber: ''
//             },
//             login: {
//                 emailAddress: '',
//                 password: ''
//             }
//         });
//         setConfirmPassword('');
//         setPasswordError('');
//         setPhoneError('');
//         setEmployeeError('');
//         setIsEditing(false);
//     }, [selectedRole]);
//     const navigate = useNavigate();



//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         let updatedManager = { ...manager, [name]: value };
//         if (name === 'employeeType' && value === 'washAttendent') {
//             updatedManager.roleDescription = 'employee';
//         }
//         setManager(updatedManager);
//     };

//     const checkStrength = (value) => {
//         if (value.length < 6) return "Very weak";
//         if (value.match(/[A-Z]/) && value.match(/[0-9]/) && value.length >= 8)
//           return "Strong";
//         if (value.length >= 8) return "Medium";
//         return "Weak";
//     };

//     const handleLoginChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'password') {
//             setStrength(checkStrength(value));
//         }
//         setManager({
//             ...manager,
//             login: {
//                 ...manager.login,
//                 [name]: value
//             }
//         });
//     };

//     const handleContactChange = (e) => {
//         const { name, value } = e.target;
//         let phoneValue = value;

//         // Normalize phone number: if starts with +27, keep as is; if starts with 0, replace with +27
//         if (phoneValue.startsWith('0')) {
//             phoneValue = '+27' + phoneValue.slice(1);
//         }

//         // Validate phone number: must be +27 followed by 9 digits (total 12 characters)
//         const phoneRegex = /^\+27\d{9}$/;
//         if (phoneValue && !phoneRegex.test(phoneValue)) {
//             setPhoneError('Phone number must be 10 digits starting with 0 or +27 followed by 9 digits');
//         } else {
//             setPhoneError('');
//         }

//         setManager({
//             ...manager,
//             contact: {
//                 ...manager.contact,
//                 [name]: phoneValue
//             }
//         });
//     };

//     const handleConfirmPasswordChange = (e) => {
//         const value = e.target.value;
//         setConfirmPassword(value);
//         if (manager.login.password !== value) {
//             setPasswordError('Passwords do not match');
//         } else {
//             setPasswordError('');
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (selectedRole === 'Employee' && manager.employeeType === 'None') {
//             setEmployeeError('Please choose a role');
//             return;
//         }

//         if (manager.login.password !== confirmPassword) {
//             setPasswordError('Passwords do not match');
//             return;
//         }

//         if (phoneError) {
//             return;
//         }

//         // Instead of saving here, navigate to address page with manager data
//         navigate('/AddressDetails', { state: { manager } });
//     };

//     const handleDelete = async () => {
//         if (window.confirm('Are you sure you want to delete this profile?')) {
//             try {
//                 const response = await fetch(
//                     `http://localhost:8080/mobileglow/Manager/delete/${manager.userId}`,
//                     { method: 'DELETE' }
//                 );

//                 if (response.ok) {
//                     alert('Profile deleted successfully!');
//                     localStorage.clear();
//                     navigate('/login');
//                 } else {
//                     alert('Failed to delete profile');
//                 }
//             } catch (error) {
//                 console.error('Error deleting manager:', error);
//                 alert('Something went wrong while deleting');
//             }
//         }
//     };

//     return (
//         <>
//             <div style={styles.pageContainer}>
//                 <button onClick={() => navigate('/')} className="back-button" aria-label="Go back">
//                     <i className="fas fa-arrow-left"></i>
//                     <span>Back</span>
//                 </button>

//                 <div style={styles.leftContainer}>
//                     <form onSubmit={handleSubmit} className="manager-form" style={{ width: '100%', maxWidth: 550, padding: 30, background: '#ffffff', borderRadius: 15, boxShadow: '0 8px 25px rgba(0,0,0,0.08)' }}>
//                         <h2 style={{ textAlign: 'center', marginBottom: 20 }}>{isEditing ? 'Edit Manager Profile' : 'Create Account'}</h2>
//                         <div className="form-group">
//                             <label>First Name</label>
//                             <input
//                                 type="text"
//                                 name="userName"
//                                 value={manager.userName}
//                                 onChange={handleChange}
//                                 placeholder="Enter first name"
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>Last Name</label>
//                             <input
//                                 type="text"
//                                 name="userSurname"
//                                 value={manager.userSurname}
//                                 onChange={handleChange}
//                                 placeholder="Enter last name"
//                                 required
//                             />
//                         </div>

//                         {selectedRole === 'Customer' && (
//                             <div className="form-group">
//                                 <label>Date of Birth</label>
//                                 <input
//                                     type="date"
//                                     name="customerDOB"
//                                     value={manager.customerDOB}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                         )}

//                         {selectedRole === 'Employee' && (
//                             <>
//                                 <div className="form-group">
//                                     <label>Employee Type</label>
//                                     <select
//                                         name="employeeType"
//                                         value={manager.employeeType}
//                                         onChange={handleChange}
//                                         required
//                                     >
//                                         <option value="None">None</option>
//                                         <option value="Accountant">Accountant</option>
//                                         <option value="Manager">Manager</option>
//                                         <option value="WashAttendant">WashAttendant</option>
//                                     </select>
//                                     {employeeError && <span style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{employeeError}</span>}
//                                 </div>

//                                 <div className="form-group">
//                                     <label>Hire Date</label>
//                                     <input
//                                         type="date"
//                                         name="hireDate"
//                                         value={manager.hireDate}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                             </>
//                         )}

//                         <div className="form-group">
//                             <label>Phone Number</label>
//                             <input
//                                 type="tel"
//                                 name="phoneNumber"
//                                 value={manager.contact.phoneNumber}
//                                 onChange={handleContactChange}
//                                 placeholder="Enter phone number (e.g., 073...)"
//                                 required
//                             />
//                             {phoneError && <span style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{phoneError}</span>}
//                         </div>

//                         <div className="form-group" style={{ marginTop: 20 }}>
//                             <label>Email</label>
//                             <input
//                                 type="email"
//                                 name="emailAddress"
//                                 value={manager.login.emailAddress}
//                                 onChange={handleLoginChange}
//                                 placeholder="Enter email address"
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>Password</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={manager.login.password}
//                                 onChange={handleLoginChange}
//                                 placeholder="Enter password"
//                                 required
//                             />
//                             <div className={`strength ${strength.toLowerCase()}`}>
//                                 {strength && <span>{strength}</span>}
//                             </div>
//                         </div>

//                         <div className="form-group">
//                             <label>Confirm Password</label>
//                             <input
//                                 type="password"
//                                 name="confirmPassword"
//                                 value={confirmPassword}
//                                 onChange={handleConfirmPasswordChange}
//                                 placeholder="Confirm password"
//                                 required
//                             />
//                             {passwordError && <span style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{passwordError}</span>}
//                         </div>

//                         <div className="button-group" style={{ marginTop: 20 }}>
//                             <button type="submit" className="submit-btn">
//                                 {isEditing ? 'Update Profile' : 'Continue'}
//                             </button>
//                             {isEditing && (
//                                 <button type="button" className="delete-btn" onClick={handleDelete}>
//                                     Delete Profile
//                                 </button>
//                             )}
//                         </div>
//                     </form>
//                 </div>

//                 <div style={styles.rightContainer}>
//                     <img
//                         src={image1}
//                         alt="Car wash"
//                         style={styles.image}
//                     />
//                 </div>
//             </div>

//             <style>{`
//         h2, h3 {
//           text-align: center;
//           color: #333;
//           margin-bottom: 20px;
//         }

//         .manager-form .form-group {
//           display: flex;
//           flex-direction: column;
//           margin-bottom: 18px;
//         }

//         .manager-form label {
//           margin-bottom: 6px;
//           font-weight: 600;
//           color: #444;
//         }

//         .manager-form input {
//           padding: 12px;
//           border-radius: 8px;
//           border: 1px solid #ccc;
//           font-size: 14px;
//           transition: all 0.3s ease;
//         }

//         .manager-form input:focus {
//           border: 1px solid #4CAF50;
//           box-shadow: 0 0 6px rgba(76,175,80,0.2);
//           outline: none;
//         }

//         .radio-group {
//           display: flex;
//           gap: 15px;
//           margin-top: 6px;
//         }

//         .strength {
//           margin-top: 5px;
//           font-size: 13px;
//         }

//         .strength.very {
//           color: #e74c3c;
//         }

//         .strength.weak {
//           color: #e67e22;
//         }

//         .strength.medium {
//           color: #f1c40f;
//         }

//         .strength.strong {
//           color: #2ecc71;
//         }

//         .submit-btn {
//           flex: 1;
//           background: linear-gradient(90deg, #1976d2, #42a5f5);
//           color: #fff;
//           padding: 14px;
//           font-size: 16px;
//           font-weight: 600;
//           border: none;
//           border-radius: 10px;
//           cursor: pointer;
//           transition: background 0.3s ease;
//         }

//         .submit-btn:hover {
//           background: linear-gradient(90deg, #1565c0, #1e88e5);
//         }

//         .delete-btn {
//           flex: 1;
//           background: #fff;
//           color: #d32f2f;
//           padding: 14px;
//           font-size: 16px;
//           font-weight: 600;
//           border: 1px solid #d32f2f;
//           border-radius: 10px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .delete-btn:hover {
//           background: #fdecea;
//         }

//         .button-group {
//           display: flex;
//           gap: 10px;
//           margin-top: 20px;
//         }

//         @media (max-width: 480px) {
//           .button-group {
//             flex-direction: column;
//           }
//         }
//       `}</style>
//         </>
//     );
// };


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// import { pageNames } from '../pageNames';

// import image1 from '../../assets/images/cars/login/image-1.png';


// export default function SignUp() {
//     document.title = pageNames.signup

//     const navigate = useNavigate();
//     const location = useLocation();
//     const selectedRole = location.state?.role || 'Customer';

//     const [manager, setManager] = useState({
//         userName: '',
//         userSurname: '',
//         customerDOB: '',
//         isActive: true,
//         roleDescription: selectedRole === 'Employee' ? 'EMPLOYEE' : 'CLIENT',
//         employeeType: 'None',
//         hireDate: '',
//         contact: { phoneNumber: '' },
//         login: { emailAddress: '', password: '' }
//     });

//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [errors, setErrors] = useState({});
//     const [strength, setStrength] = useState('');

//     useEffect(() => {
//         setManager(prev => ({
//             ...prev,
//             roleDescription: selectedRole === 'Employee' ? 'EMPLOYEE' : 'CLIENT'
//         }));
//     }, [selectedRole]);

//     const checkStrength = (value) => {
//         if (!value) return "";
//         if (value.length < 6) return "Very weak";
//         if (value.match(/[A-Z]/) && value.match(/[0-9]/) && value.length >= 8) return "Strong";
//         if (value.length >= 8) return "Medium";
//         return "Weak";
//     };

//     const getStrengthColor = () => {
//         switch (strength) {
//             case "Strong": return "text-green-500";
//             case "Medium": return "text-yellow-500";
//             case "Weak": return "text-orange-500";
//             case "Very weak": return "text-red-500";
//             default: return "text-gray-400";
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setManager(prev => ({ ...prev, [name]: value }));
//     };

//     const handleLoginChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'password') setStrength(checkStrength(value));
//         setManager(prev => ({
//             ...prev,
//             login: { ...prev.login, [name]: value }
//         }));
//     };

//     const handleContactChange = (e) => {
//         let phoneValue = e.target.value;
//         if (phoneValue.startsWith('0')) {
//             phoneValue = '+27' + phoneValue.slice(1);
//         }

//         const phoneRegex = /^\+27\d{9}$/;
//         if (phoneValue && !phoneRegex.test(phoneValue)) {
//             setErrors(prev => ({ ...prev, phone: 'Invalid South African format (+27...)' }));
//         } else {
//             setErrors(prev => ({ ...prev, phone: null }));
//         }

//         setManager(prev => ({
//             ...prev,
//             contact: { phoneNumber: phoneValue }
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newErrors = {};

//         if (selectedRole === 'Employee' && manager.employeeType === 'None') {
//             newErrors.employee = 'Please select a role';
//         }
//         if (manager.login.password !== confirmPassword) {
//             newErrors.password = 'Passwords do not match';
//         }
//         if (errors.phone) newErrors.phone = errors.phone;

//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//             return;
//         }

//         navigate('/address', { state: { manager } });
//     };

//     return (
//         <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
//             {/* Left Container: Form */}
//             <div className="flex-1 flex flex-col relative overflow-y-auto custom-scrollbar bg-gray-50/50">
//                 {/* Back Button */}
//                 <button 
//                     // onClick={() => navigate('/')}
//                     onClick={() => navigate('/role')}

//                     className="absolute top-6 left-6 flex items-center gap-2 text-gray-500 
//                         hover:text-[rgba(12,45,72,1)] transition-colors group z-10"
//                 >
//                     <span className="group-hover:-translate-x-1 transition-transform">←</span>
//                     {/* <span className="text-sm font-bold uppercase tracking-wider">Back to Home</span> */}
//                     <span className="text-sm font-bold uppercase tracking-wider">Go back</span>

//                 </button>

//                 <div className="max-w-xl w-full mx-auto px-8 py-20">
//                     <div className="bg-white p-10 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
//                         <header className="mb-10">
//                             <h2 className="text-3xl font-black text-gray-900 tracking-tight">Create Account</h2>
//                             <p className="text-gray-500 mt-2">Join MobileGlow as a <span className="text-blue-600 font-bold">{selectedRole}</span></p>
//                         </header>

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div className="space-y-1.5">
//                                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">First Name</label>
//                                     <input
//                                         type="text" name="userName" value={manager.userName} onChange={handleChange}
//                                         placeholder="John" required
//                                         className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
//                                     />
//                                 </div>
//                                 <div className="space-y-1.5">
//                                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Last Name</label>
//                                     <input
//                                         type="text" name="userSurname" value={manager.userSurname} onChange={handleChange}
//                                         placeholder="Doe" required
//                                         className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
//                                     />
//                                 </div>
//                             </div>

//                             {selectedRole === 'Customer' ? (
//                                 <div className="space-y-1.5">
//                                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Date of Birth</label>
//                                     <input
//                                         type="date" name="customerDOB" value={manager.customerDOB} onChange={handleChange} required
//                                         className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                                     />
//                                 </div>
//                             ) : (
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div className="space-y-1.5">
//                                         <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Role</label>
//                                         <select
//                                             name="employeeType" value={manager.employeeType} onChange={handleChange} required
//                                             className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                                         >
//                                             <option value="None">Select Role</option>
//                                             <option value="Accountant">Accountant</option>
//                                             <option value="Manager">Manager</option>
//                                             <option value="WashAttendant">Wash Attendant</option>
//                                         </select>
//                                     </div>
//                                     <div className="space-y-1.5">
//                                         <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Hire Date</label>
//                                         <input
//                                             type="date" name="hireDate" value={manager.hireDate} onChange={handleChange} required
//                                             className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                                         />
//                                     </div>
//                                 </div>
//                             )}

//                             <div className="space-y-1.5">
//                                 <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
//                                 <input
//                                     type="tel" name="phoneNumber" value={manager.contact.phoneNumber} onChange={handleContactChange}
//                                     placeholder="071 234 5678" required
//                                     className={`w-full p-3 bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
//                                 />
//                                 {errors.phone && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight">{errors.phone}</p>}
//                             </div>

//                             <hr className="border-gray-100 my-4" />

//                             <div className="space-y-1.5">
//                                 <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
//                                 <input
//                                     type="email" name="emailAddress" value={manager.login.emailAddress} onChange={handleLoginChange}
//                                     placeholder="john.doe@example.com" required
//                                     className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                                 />
//                             </div>

//                             <div className="grid grid-cols-2 gap-4">
//                                 <div className="space-y-1.5 relative">
//                                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Password</label>
//                                     <input
//                                         type="password" name="password" value={manager.login.password} onChange={handleLoginChange}
//                                         placeholder="••••••••" required
//                                         className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                                     />
//                                     {strength && (
//                                         <span className={`absolute right-3 top-9 text-[10px] font-black uppercase ${getStrengthColor()}`}>
//                                             {strength}
//                                         </span>
//                                     )}
//                                 </div>
//                                 <div className="space-y-1.5">
//                                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Confirm</label>
//                                     <input
//                                         type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
//                                         placeholder="••••••••" required
//                                         className={`w-full p-3 bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
//                                     />
//                                 </div>
//                             </div>
//                             {errors.password && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight text-right">{errors.password}</p>}

//                             <button
//                                 type="submit"
//                                 className="w-full bg-[rgba(12,45,72,1)] hover:bg-[rgba(12,45,72,0.9)] text-white font-black py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-all transform active:scale-[0.98] mt-4 uppercase tracking-widest text-sm"
//                             >
//                                 Continue to Address
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             {/* Right Container: Image */}
//             <div className="hidden lg:block flex-1 relative group">
//                 <img
//                     src={image1}
//                     alt="Premium Car detailing"
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-1050"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[rgba(12,45,72,0.2)]"></div>
//                 {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[rgba(12,45,72)]"></div> */}
                
//                 {/* Branding Overlay */}

//                 <div className="absolute bottom-12 left-12 text-white drop-shadow-2xl 
//                     bg-blue-900/80 backdrop-blur-md rounded-2xl p-8 border border-white/10">
//     <h3 className="text-4xl font-black leading-tight">
//         Revive Your Ride<br/>With MobileGlow.
//     </h3>
//     <p className="mt-4 text-blue-100/90 font-medium max-w-sm">
//         The highest rated mobile detailing service in Johannesburg. Your convenience is our priority.
//     </p>
// </div>

//             </div>
//         </div>
//     );
// }


// newer2 

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { pageNames } from '../pageNames';

// Asset
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