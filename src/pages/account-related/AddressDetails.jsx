// // import React, { useState } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';

// // const styles = {
// //     pageContainer: {
// //         display: 'flex',
// //         height: '100vh',
// //         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// //     },
// //     leftContainer: {
// //         flex: 1,
// //         padding: '20px 30px 40px 30px',
// //         display: 'flex',
// //         alignItems: 'flex-start',
// //         justifyContent: 'center',
// //         overflowY: 'auto',
// //         maxHeight: 'calc(100vh - 70px)', // Adjust based on navbar height
// //     },
// //     rightContainer: {
// //         flex: 1,
// //         overflow: 'hidden',
// //     },
// //     image: {
// //         width: '100%',
// //         height: '100%',
// //         objectFit: 'cover',
// //     },
// // };


// // export default function AddressDetails(){
// //     const navigate = useNavigate();
// //     const location = useLocation();
// //     // Get manager data passed from ManagerForm
// //     const managerData = location.state?.manager || null;

// //     const [address, setAddress] = useState({
// //         streetNumber: '',
// //         streetName: '',
// //         city: '',
// //         postalCode: '',
// //     });

// //     const [showModal, setShowModal] = useState(false);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         let updatedValue = value;

// //         // Validate street number and postal code to allow only numerical values
// //         if (name === 'streetNumber' || name === 'postalCode') {
// //             updatedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
// //         }

// //         setAddress({ ...address, [name]: updatedValue });
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();

// //         if (!managerData) {
// //             alert('Manager data is missing. Please complete the previous form first.');
// //             navigate('/manager-form');
// //             return;
// //         }

// //         // Show the confirmation modal instead of proceeding directly
// //         setShowModal(true);
// //     };

// //     const handleConfirm = async () => {
// //         setShowModal(false);

// //         let endpoint;
// //         let fullData;
// //         let successRedirect = '/login';

// //         if (managerData.roleDescription === 'CLIENT') {
// //             endpoint = 'http://localhost:8080/mobileglow/api/customers/create';
// //             fullData = {
// //                 userName: managerData.userName,
// //                 userSurname: managerData.userSurname,
// //                 customerDOB: managerData.customerDOB || "",
// //                 isActive: managerData.isActive,
// //                 roleDescription: 'CLIENT',
// //         contact: {
// //             phoneNumber: managerData.contact?.phoneNumber || ""
// //         },
// //                 address: {
// //                     streetNumber: address.streetNumber,
// //                     streetName: address.streetName,
// //                     city: address.city,
// //                     postalCode: address.postalCode,
// //                 },
// //                 login: {
// //                     emailAddress: managerData.login?.emailAddress || "",
// //                     password: managerData.login?.password || ""
// //                 }
// //             };
// //             successRedirect = '/LandingCustomer';
// //         } else if (managerData.roleDescription === 'EMPLOYEE') {
// //             if (managerData.employeeType === 'Manager') {
// //                 endpoint = 'http://localhost:8080/mobileglow/Manager/create';
// //                 fullData = {
// //                     userName: managerData.userName,
// //                     userSurname: managerData.userSurname,
// //                     isActive: managerData.isActive,
// //                     roleDescription: 'EMPLOYEE',
// //                     employeeType: 'Manager',
// //                     hireDate: managerData.hireDate,
// //                     contact: {
// //                         phoneNumber: managerData.contact?.phoneNumber || ""
// //                     },
// //                     address: {
// //                         streetNumber: address.streetNumber,
// //                         streetName: address.streetName,
// //                         city: address.city,
// //                         postalCode: address.postalCode,
// //                     },
// //                     login: {
// //                         emailAddress: managerData.login?.emailAddress || "",
// //                         password: managerData.login?.password || ""
// //                     }
// //                 };
// //             } else if (managerData.employeeType === 'Accountant') {
// //                 endpoint = 'http://localhost:8080/mobileglow/Accountant/create';
// //                 fullData = {
// //                     userName: managerData.userName,
// //                     userSurname: managerData.userSurname,
// //                     isActive: managerData.isActive,
// //                     roleDescription: 'EMPLOYEE',
// //                     employeeType: 'Accountant',
// //                     hireDate: managerData.hireDate,
// //                     contact: {
// //                         phoneNumber: managerData.contact?.phoneNumber || ""
// //                     },
// //                     address: {
// //                         streetNumber: address.streetNumber,
// //                         streetName: address.streetName,
// //                         city: address.city,
// //                         postalCode: address.postalCode,
// //                     },
// //                     login: {
// //                         emailAddress: managerData.login?.emailAddress || "",
// //                         password: managerData.login?.password || ""
// //                     }
// //                 };
// //             } else if (managerData.employeeType === 'WashAttendant') {
// //                 endpoint = 'http://localhost:8080/mobileglow/wash-attendants/create';
// //                 fullData = {
// //                     userName: managerData.userName,
// //                     userSurname: managerData.userSurname,
// //                     isActive: managerData.isActive,
// //                     roleDescription: 'EMPLOYEE',
// //                     employeeType: 'WashAttendant',
// //                     isFullTime: true,
// //                     shiftHours: 8,
// //                     contact: {
// //                         phoneNumber: managerData.contact?.phoneNumber || ""
// //                     },
// //                     address: {
// //                         streetNumber: address.streetNumber,
// //                         streetName: address.streetName,
// //                         city: address.city,
// //                         postalCode: address.postalCode,
// //                     },
// //                     login: {
// //                         emailAddress: managerData.login?.emailAddress || "",
// //                         password: managerData.login?.password || ""
// //                     }
// //                 };
// //             } else {
// //                 // Default to Manager if None or unknown
// //                 endpoint = 'http://localhost:8080/mobileglow/Manager/create';
// //                 fullData = {
// //                     userName: managerData.userName,
// //                     userSurname: managerData.userSurname,
// //                     isActive: managerData.isActive,
// //                     roleDescription: 'EMPLOYEE',
// //                     employeeType: 'Manager',
// //                     hireDate: managerData.hireDate,
// //                     contact: {
// //                         phoneNumber: managerData.contact?.phoneNumber || "",
// //                         emailAddress: managerData.login?.emailAddress || ""
// //                     },
// //                     address: {
// //                         streetNumber: address.streetNumber,
// //                         streetName: address.streetName,
// //                         city: address.city,
// //                         postalCode: address.postalCode,
// //                     },
// //                     login: {
// //                         emailAddress: managerData.login?.emailAddress || "",
// //                         password: managerData.login?.password || ""
// //                     }
// //                 };
// //             }
// //         } else {
// //             alert('Invalid role description');
// //             return;
// //         }

// //         try {
// //             const response = await fetch(endpoint, {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify(fullData),
// //             });

// //             if (response.ok) {
// //                 navigate('/login');
// //             } else {
// //                 alert('Failed to create account.');
// //             }
// //         } catch (error) {
// //             console.error('Error creating account:', error);
// //             alert('Something went wrong!');
// //         }
// //     };

// //     return (
// //         <>
// //             <div style={styles.pageContainer}>
// //                 <div style={styles.leftContainer}>
// //                     <form
// //                         onSubmit={handleSubmit}
// //                         className="address-form"
// //                         style={{
// //                             width: '100%',
// //                             maxWidth: 550,
// //                             padding: 30,
// //                             background: '#ffffff',
// //                             borderRadius: 15,
// //                             boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
// //                         }}
// //                     >
// //                         <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Enter Address Details</h2>

// //                         <div className="form-group">
// //                             <label>Street Number</label>
// //                             <input
// //                                 type="text"
// //                                 name="streetNumber"
// //                                 value={address.streetNumber}
// //                                 onChange={handleChange}
// //                                 placeholder="Enter street number"
// //                                 required
// //                             />
// //                         </div>

// //                         <div className="form-group">
// //                             <label>Street Name</label>
// //                             <input
// //                                 type="text"
// //                                 name="streetName"
// //                                 value={address.streetName}
// //                                 onChange={handleChange}
// //                                 placeholder="Enter street name"
// //                                 required
// //                             />
// //                         </div>

// //                         <div className="form-group">
// //                             <label>City</label>
// //                             <input
// //                                 type="text"
// //                                 name="city"
// //                                 value={address.city}
// //                                 onChange={handleChange}
// //                                 placeholder="Enter city"
// //                                 required
// //                             />
// //                         </div>

// //                         <div className="form-group">
// //                             <label>Postal Code</label>
// //                             <input
// //                                 type="text"
// //                                 name="postalCode"
// //                                 value={address.postalCode}
// //                                 onChange={handleChange}
// //                                 placeholder="Enter postal code"
// //                                 required
// //                             />
// //                         </div>

// //                         <div className="button-group" style={{ marginTop: 20 }}>
// //                             <button type="submit" className="submit-btn">
// //                                 Create Account
// //                             </button>
// //                         </div>
// //                     </form>
// //                 </div>
// //                 <div style={styles.rightContainer}>
// //                     <img
// //                         src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
// //                         alt="Car wash"
// //                         style={styles.image}
// //                     />
// //                 </div>
// //             </div>

// //             {/* Modal */}
// //             {showModal && (
// //                 <div className="modal-overlay">
// //                     <div className="modal-content">
// //                         <p>You have successfully created an account!</p>
// //                         <div className="modal-buttons">
// //                             <button className="confirm-btn" onClick={handleConfirm}>
// //                                 Confirm
// //                             </button>
// //                             <button className="cancel-btn" onClick={() => setShowModal(false)}>
// //                                 Cancel
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             )}

// //             <style>{`
// //         h2 {
// //           text-align: center;
// //           color: #333;
// //           margin-bottom: 20px;
// //         }

// //         .address-form .form-group {
// //           display: flex;
// //           flex-direction: column;
// //           margin-bottom: 18px;
// //         }

// //         .address-form label {
// //           margin-bottom: 6px;
// //           font-weight: 600;
// //           color: #444;
// //         }

// //         .address-form input {
// //           padding: 12px;
// //           border-radius: 8px;
// //           border: 1px solid #ccc;
// //           font-size: 14px;
// //           transition: all 0.3s ease;
// //         }

// //         .address-form input:focus {
// //           border: 1px solid #4CAF50;
// //           box-shadow: 0 0 6px rgba(76,175,80,0.2);
// //           outline: none;
// //         }

// //         .submit-btn {
// //           flex: 1;
// //           background: linear-gradient(90deg, #1976d2, #42a5f5);
// //           color: #fff;
// //           padding: 14px;
// //           font-size: 16px;
// //           font-weight: 600;
// //           border: none;
// //           border-radius: 10px;
// //           cursor: pointer;
// //           transition: background 0.3s ease;
// //         }

// //         .submit-btn:hover {
// //           background: linear-gradient(90deg, #1565c0, #1e88e5);
// //         }

// //         .button-group {
// //           display: flex;
// //           gap: 10px;
// //           margin-top: 20px;
// //         }

// //         .modal-overlay {
// //           position: fixed;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           bottom: 0;
// //           background: rgba(0, 0, 0, 0.5);
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           z-index: 1000;
// //         }

// //         .modal-content {
// //           padding: 20px 30px;
// //           border-radius: 10px;
// //           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
// //           text-align: center;
// //           font-size: 18px;
// //           font-weight: 500;
// //           max-width: 400px;
// //           width: 90%;
// //           background: #fff;
// //           color: #333;
// //         }

// //         .modal-buttons {
// //           display: flex;
// //           gap: 15px;
// //           justify-content: center;
// //           margin-top: 25px;
// //           align-items: center;
// //         }

// //          .confirm-btn, .cancel-btn {
// //           padding: 12px 25px;
// //           font-size: 16px;
// //           font-weight: 600;
// //           border: none;
// //           border-radius: 8px;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //           width: 140px;
// //           height: 48px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //         }


// //          .confirm-btn {
// //           background: #1976d2;
// //           color: #fff;
// //         }


// //         .confirm-btn:hover {
// //           background: #1565c0;
// //           transform: translateY(-2px);
// //         }


// //          .cancel-btn {
// //           background: #d32f2f;
// //           color: #fff;
// //         }


// //         .cancel-btn:hover {
// //           background: #c62828;
// //           transform: translateY(-2px);
// //         }


// //         @media (max-width: 480px) {
// //           .button-group {
// //             flex-direction: column;
// //           }

// //            .modal-buttons {
// //             flex-direction: column;
// //             gap: 10px;
// //           }

// //           .confirm-btn, .cancel-btn {
// //             width: 100%;
// //             height: 48px;

// //         }
// //       `}</style>
// //         </>
// //     );
// // };


// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

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
//         maxHeight: 'calc(100vh - 70px)',
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

// export default function AddressDetails() {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const managerData = location.state?.manager || null;

//     const [address, setAddress] = useState({
//         streetNumber: '',
//         streetName: '',
//         city: '',
//         postalCode: '',
//     });

//     const [showModal, setShowModal] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         let updatedValue = value;
//         if (name === 'streetNumber' || name === 'postalCode') {
//             updatedValue = value.replace(/\D/g, '');
//         }
//         setAddress({ ...address, [name]: updatedValue });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!managerData) {
//             alert('User data is missing. Please restart the signup process.');
//             navigate('/signup');
//             return;
//         }
//         setShowModal(true);
//     };

//     const handleConfirm = async () => {
//         setShowModal(false);
//         setIsSubmitting(true);

//         // Your Node.js Backend Endpoint
//         const API_URL = 'http://localhost:5000/api/auth/signup';

//         // Construct the final object to match your MongoDB Schema
//         const fullData = {
//             ...managerData,
//             address: { ...address }
//         };

//         try {
//             const response = await fetch(API_URL, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(fullData),
//             });

// //             const contentType = response.headers.get("content-type");
// // if (contentType && contentType.indexOf("application/json") !== -1) {
// //     const result = await response.json();
// //     // ... handle result
// // } else {
// //     const text = await response.text();
// //     console.error("Received non-JSON response:", text);
// //     alert("Server error: Received HTML instead of JSON. Check your backend routes.");
// // }

//             const result = await response.json();

//             if (response.ok) {
//                 // Determine redirect based on role
//                 if (fullData.roleDescription === 'CLIENT') {
//                     navigate('/LandingCustomer');
//                 } else {
//                     navigate('/login');
//                 }
//             } else {
//                 alert(result.error || 'Failed to create account.');
//             }
//         } catch (error) {
//             console.error('Error creating account:', error);
//             alert('Could not connect to the server. Is your backend running?');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <>
//             <div style={styles.pageContainer}>
//                 <div style={styles.leftContainer}>
//                     <form onSubmit={handleSubmit} className="address-form"
//                         style={{
//                             width: '100%', maxWidth: 550, padding: 30,
//                             background: '#ffffff', borderRadius: 15,
//                             boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
//                         }}>
//                         <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Address Details</h2>

//                         <div className="form-group">
//                             <label>Street Number</label>
//                             <input type="text" name="streetNumber" value={address.streetNumber}
//                                 onChange={handleChange} placeholder="e.g. 123" required />
//                         </div>

//                         <div className="form-group">
//                             <label>Street Name</label>
//                             <input type="text" name="streetName" value={address.streetName}
//                                 onChange={handleChange} placeholder="Main Road" required />
//                         </div>

//                         <div className="form-group">
//                             <label>City</label>
//                             <input type="text" name="city" value={address.city}
//                                 onChange={handleChange} placeholder="Johannesburg" required />
//                         </div>

//                         <div className="form-group">
//                             <label>Postal Code</label>
//                             <input type="text" name="postalCode" value={address.postalCode}
//                                 onChange={handleChange} placeholder="2000" required />
//                         </div>

//                         <div className="button-group">
//                             <button type="submit" className="submit-btn" disabled={isSubmitting}>
//                                 {isSubmitting ? 'Processing...' : 'Complete Registration'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//                 <div style={styles.rightContainer}>
//                     <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
//                         alt="Car wash" style={styles.image} />
//                 </div>
//             </div>

//             {showModal && (
//                 <div className="modal-overlay">
//                     <div className="modal-content">
//                         <p>Ready to create your <strong>MobileGlow</strong> account?</p>
//                         <div className="modal-buttons">
//                             <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
//                             <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             <style>{`
//                 /* Keep your existing CSS here */
//                 .submit-btn:disabled { background: #ccc; cursor: not-allowed; }
//                 h2 { text-align: center; color: #333; margin-bottom: 20px; }
//                 .address-form .form-group { display: flex; flex-direction: column; margin-bottom: 18px; }
//                 .address-form label { margin-bottom: 6px; font-weight: 600; color: #444; }
//                 .address-form input { padding: 12px; border-radius: 8px; border: 1px solid #ccc; }
//                 .submit-btn { width: 100%; background: #0c2d48; color: #fff; padding: 14px; border-radius: 10px; cursor: pointer; font-weight: bold; }
//                 .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; }
//                 .modal-content { background: white; padding: 30px; border-radius: 15px; text-align: center; }
//                 .modal-buttons { display: flex; gap: 10px; margin-top: 20px; justify-content: center; }
//                 .confirm-btn { background: #1976d2; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; }
//                 .cancel-btn { background: #d32f2f; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; }
//             `}</style>
//         </>
//     );
// }


// newer2 
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

