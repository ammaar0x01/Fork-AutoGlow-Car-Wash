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


// export default function AddressDetails(){
//     const navigate = useNavigate();
//     const location = useLocation();
//     // Get manager data passed from ManagerForm
//     const managerData = location.state?.manager || null;

//     const [address, setAddress] = useState({
//         streetNumber: '',
//         streetName: '',
//         city: '',
//         postalCode: '',
//     });

//     const [showModal, setShowModal] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         let updatedValue = value;

//         // Validate street number and postal code to allow only numerical values
//         if (name === 'streetNumber' || name === 'postalCode') {
//             updatedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
//         }

//         setAddress({ ...address, [name]: updatedValue });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!managerData) {
//             alert('Manager data is missing. Please complete the previous form first.');
//             navigate('/manager-form');
//             return;
//         }

//         // Show the confirmation modal instead of proceeding directly
//         setShowModal(true);
//     };

//     const handleConfirm = async () => {
//         setShowModal(false);

//         let endpoint;
//         let fullData;
//         let successRedirect = '/login';

//         if (managerData.roleDescription === 'CLIENT') {
//             endpoint = 'http://localhost:8080/mobileglow/api/customers/create';
//             fullData = {
//                 userName: managerData.userName,
//                 userSurname: managerData.userSurname,
//                 customerDOB: managerData.customerDOB || "",
//                 isActive: managerData.isActive,
//                 roleDescription: 'CLIENT',
//         contact: {
//             phoneNumber: managerData.contact?.phoneNumber || ""
//         },
//                 address: {
//                     streetNumber: address.streetNumber,
//                     streetName: address.streetName,
//                     city: address.city,
//                     postalCode: address.postalCode,
//                 },
//                 login: {
//                     emailAddress: managerData.login?.emailAddress || "",
//                     password: managerData.login?.password || ""
//                 }
//             };
//             successRedirect = '/LandingCustomer';
//         } else if (managerData.roleDescription === 'EMPLOYEE') {
//             if (managerData.employeeType === 'Manager') {
//                 endpoint = 'http://localhost:8080/mobileglow/Manager/create';
//                 fullData = {
//                     userName: managerData.userName,
//                     userSurname: managerData.userSurname,
//                     isActive: managerData.isActive,
//                     roleDescription: 'EMPLOYEE',
//                     employeeType: 'Manager',
//                     hireDate: managerData.hireDate,
//                     contact: {
//                         phoneNumber: managerData.contact?.phoneNumber || ""
//                     },
//                     address: {
//                         streetNumber: address.streetNumber,
//                         streetName: address.streetName,
//                         city: address.city,
//                         postalCode: address.postalCode,
//                     },
//                     login: {
//                         emailAddress: managerData.login?.emailAddress || "",
//                         password: managerData.login?.password || ""
//                     }
//                 };
//             } else if (managerData.employeeType === 'Accountant') {
//                 endpoint = 'http://localhost:8080/mobileglow/Accountant/create';
//                 fullData = {
//                     userName: managerData.userName,
//                     userSurname: managerData.userSurname,
//                     isActive: managerData.isActive,
//                     roleDescription: 'EMPLOYEE',
//                     employeeType: 'Accountant',
//                     hireDate: managerData.hireDate,
//                     contact: {
//                         phoneNumber: managerData.contact?.phoneNumber || ""
//                     },
//                     address: {
//                         streetNumber: address.streetNumber,
//                         streetName: address.streetName,
//                         city: address.city,
//                         postalCode: address.postalCode,
//                     },
//                     login: {
//                         emailAddress: managerData.login?.emailAddress || "",
//                         password: managerData.login?.password || ""
//                     }
//                 };
//             } else if (managerData.employeeType === 'WashAttendant') {
//                 endpoint = 'http://localhost:8080/mobileglow/wash-attendants/create';
//                 fullData = {
//                     userName: managerData.userName,
//                     userSurname: managerData.userSurname,
//                     isActive: managerData.isActive,
//                     roleDescription: 'EMPLOYEE',
//                     employeeType: 'WashAttendant',
//                     isFullTime: true,
//                     shiftHours: 8,
//                     contact: {
//                         phoneNumber: managerData.contact?.phoneNumber || ""
//                     },
//                     address: {
//                         streetNumber: address.streetNumber,
//                         streetName: address.streetName,
//                         city: address.city,
//                         postalCode: address.postalCode,
//                     },
//                     login: {
//                         emailAddress: managerData.login?.emailAddress || "",
//                         password: managerData.login?.password || ""
//                     }
//                 };
//             } else {
//                 // Default to Manager if None or unknown
//                 endpoint = 'http://localhost:8080/mobileglow/Manager/create';
//                 fullData = {
//                     userName: managerData.userName,
//                     userSurname: managerData.userSurname,
//                     isActive: managerData.isActive,
//                     roleDescription: 'EMPLOYEE',
//                     employeeType: 'Manager',
//                     hireDate: managerData.hireDate,
//                     contact: {
//                         phoneNumber: managerData.contact?.phoneNumber || "",
//                         emailAddress: managerData.login?.emailAddress || ""
//                     },
//                     address: {
//                         streetNumber: address.streetNumber,
//                         streetName: address.streetName,
//                         city: address.city,
//                         postalCode: address.postalCode,
//                     },
//                     login: {
//                         emailAddress: managerData.login?.emailAddress || "",
//                         password: managerData.login?.password || ""
//                     }
//                 };
//             }
//         } else {
//             alert('Invalid role description');
//             return;
//         }

//         try {
//             const response = await fetch(endpoint, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(fullData),
//             });

//             if (response.ok) {
//                 navigate('/login');
//             } else {
//                 alert('Failed to create account.');
//             }
//         } catch (error) {
//             console.error('Error creating account:', error);
//             alert('Something went wrong!');
//         }
//     };

//     return (
//         <>
//             <div style={styles.pageContainer}>
//                 <div style={styles.leftContainer}>
//                     <form
//                         onSubmit={handleSubmit}
//                         className="address-form"
//                         style={{
//                             width: '100%',
//                             maxWidth: 550,
//                             padding: 30,
//                             background: '#ffffff',
//                             borderRadius: 15,
//                             boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
//                         }}
//                     >
//                         <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Enter Address Details</h2>

//                         <div className="form-group">
//                             <label>Street Number</label>
//                             <input
//                                 type="text"
//                                 name="streetNumber"
//                                 value={address.streetNumber}
//                                 onChange={handleChange}
//                                 placeholder="Enter street number"
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>Street Name</label>
//                             <input
//                                 type="text"
//                                 name="streetName"
//                                 value={address.streetName}
//                                 onChange={handleChange}
//                                 placeholder="Enter street name"
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>City</label>
//                             <input
//                                 type="text"
//                                 name="city"
//                                 value={address.city}
//                                 onChange={handleChange}
//                                 placeholder="Enter city"
//                                 required
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>Postal Code</label>
//                             <input
//                                 type="text"
//                                 name="postalCode"
//                                 value={address.postalCode}
//                                 onChange={handleChange}
//                                 placeholder="Enter postal code"
//                                 required
//                             />
//                         </div>

//                         <div className="button-group" style={{ marginTop: 20 }}>
//                             <button type="submit" className="submit-btn">
//                                 Create Account
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//                 <div style={styles.rightContainer}>
//                     <img
//                         src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
//                         alt="Car wash"
//                         style={styles.image}
//                     />
//                 </div>
//             </div>

//             {/* Modal */}
//             {showModal && (
//                 <div className="modal-overlay">
//                     <div className="modal-content">
//                         <p>You have successfully created an account!</p>
//                         <div className="modal-buttons">
//                             <button className="confirm-btn" onClick={handleConfirm}>
//                                 Confirm
//                             </button>
//                             <button className="cancel-btn" onClick={() => setShowModal(false)}>
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             <style>{`
//         h2 {
//           text-align: center;
//           color: #333;
//           margin-bottom: 20px;
//         }

//         .address-form .form-group {
//           display: flex;
//           flex-direction: column;
//           margin-bottom: 18px;
//         }

//         .address-form label {
//           margin-bottom: 6px;
//           font-weight: 600;
//           color: #444;
//         }

//         .address-form input {
//           padding: 12px;
//           border-radius: 8px;
//           border: 1px solid #ccc;
//           font-size: 14px;
//           transition: all 0.3s ease;
//         }

//         .address-form input:focus {
//           border: 1px solid #4CAF50;
//           box-shadow: 0 0 6px rgba(76,175,80,0.2);
//           outline: none;
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

//         .button-group {
//           display: flex;
//           gap: 10px;
//           margin-top: 20px;
//         }

//         .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.5);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 1000;
//         }

//         .modal-content {
//           padding: 20px 30px;
//           border-radius: 10px;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
//           text-align: center;
//           font-size: 18px;
//           font-weight: 500;
//           max-width: 400px;
//           width: 90%;
//           background: #fff;
//           color: #333;
//         }

//         .modal-buttons {
//           display: flex;
//           gap: 15px;
//           justify-content: center;
//           margin-top: 25px;
//           align-items: center;
//         }

//          .confirm-btn, .cancel-btn {
//           padding: 12px 25px;
//           font-size: 16px;
//           font-weight: 600;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           width: 140px;
//           height: 48px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }


//          .confirm-btn {
//           background: #1976d2;
//           color: #fff;
//         }


//         .confirm-btn:hover {
//           background: #1565c0;
//           transform: translateY(-2px);
//         }


//          .cancel-btn {
//           background: #d32f2f;
//           color: #fff;
//         }


//         .cancel-btn:hover {
//           background: #c62828;
//           transform: translateY(-2px);
//         }


//         @media (max-width: 480px) {
//           .button-group {
//             flex-direction: column;
//           }

//            .modal-buttons {
//             flex-direction: column;
//             gap: 10px;
//           }

//           .confirm-btn, .cancel-btn {
//             width: 100%;
//             height: 48px;

//         }
//       `}</style>
//         </>
//     );
// };


import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const styles = {
    pageContainer: {
        display: 'flex',
        height: '100vh',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    leftContainer: {
        flex: 1,
        padding: '20px 30px 40px 30px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 70px)',
    },
    rightContainer: {
        flex: 1,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
};

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

        // Your Node.js Backend Endpoint
        const API_URL = 'http://localhost:5000/api/auth/signup';

        // Construct the final object to match your MongoDB Schema
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

//             const contentType = response.headers.get("content-type");
// if (contentType && contentType.indexOf("application/json") !== -1) {
//     const result = await response.json();
//     // ... handle result
// } else {
//     const text = await response.text();
//     console.error("Received non-JSON response:", text);
//     alert("Server error: Received HTML instead of JSON. Check your backend routes.");
// }

            const result = await response.json();

            if (response.ok) {
                // Determine redirect based on role
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
        <>
            <div style={styles.pageContainer}>
                <div style={styles.leftContainer}>
                    <form onSubmit={handleSubmit} className="address-form"
                        style={{
                            width: '100%', maxWidth: 550, padding: 30,
                            background: '#ffffff', borderRadius: 15,
                            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                        }}>
                        <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Address Details</h2>

                        <div className="form-group">
                            <label>Street Number</label>
                            <input type="text" name="streetNumber" value={address.streetNumber}
                                onChange={handleChange} placeholder="e.g. 123" required />
                        </div>

                        <div className="form-group">
                            <label>Street Name</label>
                            <input type="text" name="streetName" value={address.streetName}
                                onChange={handleChange} placeholder="Main Road" required />
                        </div>

                        <div className="form-group">
                            <label>City</label>
                            <input type="text" name="city" value={address.city}
                                onChange={handleChange} placeholder="Johannesburg" required />
                        </div>

                        <div className="form-group">
                            <label>Postal Code</label>
                            <input type="text" name="postalCode" value={address.postalCode}
                                onChange={handleChange} placeholder="2000" required />
                        </div>

                        <div className="button-group">
                            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Processing...' : 'Complete Registration'}
                            </button>
                        </div>
                    </form>
                </div>
                <div style={styles.rightContainer}>
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                        alt="Car wash" style={styles.image} />
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <p>Ready to create your <strong>MobileGlow</strong> account?</p>
                        <div className="modal-buttons">
                            <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
                            <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                /* Keep your existing CSS here */
                .submit-btn:disabled { background: #ccc; cursor: not-allowed; }
                h2 { text-align: center; color: #333; margin-bottom: 20px; }
                .address-form .form-group { display: flex; flex-direction: column; margin-bottom: 18px; }
                .address-form label { margin-bottom: 6px; font-weight: 600; color: #444; }
                .address-form input { padding: 12px; border-radius: 8px; border: 1px solid #ccc; }
                .submit-btn { width: 100%; background: #0c2d48; color: #fff; padding: 14px; border-radius: 10px; cursor: pointer; font-weight: bold; }
                .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; }
                .modal-content { background: white; padding: 30px; border-radius: 15px; text-align: center; }
                .modal-buttons { display: flex; gap: 10px; margin-top: 20px; justify-content: center; }
                .confirm-btn { background: #1976d2; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; }
                .cancel-btn { background: #d32f2f; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; }
            `}</style>
        </>
    );
}
