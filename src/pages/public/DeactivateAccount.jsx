// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import "./DeactivateAccount.css";


// export default function DeactivateAccount(){
//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();

//   // Get user role from localStorage
//   const userRole = localStorage.getItem('userRoleDescription');

//   const handleDeleteClick = () => {
//     setShowPopup(true);
//   };

//   const handleCancel = () => {
//     setShowPopup(false);
//   };

//   const handleConfirm = async () => {
//     setShowPopup(false);

//     const userEmail = localStorage.getItem('userEmail');
//     const userRole = localStorage.getItem('userRoleDescription');

//     if (!userEmail || !userRole) {
//       alert('User information not found. Please log in again.');
//       navigate('/login');
//       return;
//     }

//     let endpoint;
//     if (userRole === 'CLIENT') {
//       endpoint = 'http://localhost:8080/mobileglow/api/customers/update';
//     } else if (userRole === 'EMPLOYEE') {
//       // Need to determine specific employee type
//       const employeeType = localStorage.getItem('employeeType'); // Assuming this is stored
//       if (employeeType === 'Manager') {
//         endpoint = 'http://localhost:8080/mobileglow/Manager/update';
//       } else if (employeeType === 'Accountant') {
//         endpoint = 'http://localhost:8080/mobileglow/Accountant/update';
//       } else if (employeeType === 'WashAttendant') {
//         endpoint = 'http://localhost:8080/mobileglow/wash-attendants/update';
//       } else {
//         alert('Invalid employee type.');
//         return;
//       }
//     } else {
//       alert('Invalid user role.');
//       return;
//     }

//     try {
//       const response = await fetch(endpoint, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           emailAddress: userEmail,
//           isActive: false
//         }),
//       });

//       if (response.ok) {
//         alert('Your account has been deactivated.');
//         // Clear localStorage and navigate to login
//         localStorage.removeItem('userEmail');
//         localStorage.removeItem('userRoleDescription');
//         navigate('/login');
//       } else {
//         alert('Failed to deactivate account. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error deactivating account:', error);
//       alert('Something went wrong!');
//     }
//   };

//   const handleGoBack = () => {
//     if (userRole === 'CLIENT') {
//       navigate('/LandingCustomer');
//     } else if (userRole === 'EMPLOYEE') {
//       navigate('/LandingEmployee');
//     } else {
//       navigate('/'); // fallback to public landing
//     }
//   };

//   return (
//     <div className="deactivate-container">
//       <div className="delete-card">
//         <h2>Deactivate account</h2>
//         <p className="delete-heading">
//           Are you sure you want to deactivate your account?
//         </p>
//         <p className="delete-text">
//           Once you deactivate your account, it cannot be undone. All your data will
//           be permanently erased from this app including your profile
//           information, preferences, saved content, and any activity history.
//         </p>
//         <p className="delete-text">
//           We’re sad to see you go, but we understand that sometimes it’s
//           necessary. Please take a moment to consider the consequences before
//           proceeding.
//         </p>

//         <div className="button-group">
//           <button className="delete-btn" onClick={handleDeleteClick}>
//             Deactivate account
//           </button>
//           <button className="go-back-btn" onClick={handleGoBack}>Go back</button>
//         </div>
//       </div>

//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-box">
//             <h3>Are you sure you want to continue?</h3>
//             <p>This action cannot be undone. Are you sure you want to continue?</p>
//             <div className="popup-buttons">
//               <button className="cancel-btn" onClick={handleCancel}>
//                 Cancel
//               </button>
//               <button className="confirm-btn" onClick={handleConfirm}>
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };



// newer 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function DeactivateAccount() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userRole = localStorage.getItem('userRoleDescription');

  const handleDeleteClick = () => setShowPopup(true);
  const handleCancel = () => setShowPopup(false);

  const handleConfirm = async () => {
    setShowPopup(false);
    setLoading(true);

    const userEmail = localStorage.getItem('userEmail');
    const userRoleDescription = localStorage.getItem('userRoleDescription');

    if (!userEmail || !userRoleDescription) {
      navigate('/login');
      return;
    }

    let endpoint;
    if (userRoleDescription === 'CLIENT') {
      endpoint = 'http://localhost:8080/mobileglow/api/customers/update';
    } else if (userRoleDescription === 'EMPLOYEE') {
      const employeeType = localStorage.getItem('employeeType');
      if (employeeType === 'Manager') {
        endpoint = 'http://localhost:8080/mobileglow/Manager/update';
      } else if (employeeType === 'Accountant') {
        endpoint = 'http://localhost:8080/mobileglow/Accountant/update';
      } else if (employeeType === 'WashAttendant') {
        endpoint = 'http://localhost:8080/mobileglow/wash-attendants/update';
      } else {
        setLoading(false);
        return;
      }
    }

    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailAddress: userEmail, isActive: false }),
      });

      if (response.ok) {
        localStorage.clear();
        navigate('/login');
      } else {
        setLoading(false);
        alert('Failed to deactivate account.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
    }
  };

  const handleGoBack = () => {
    if (userRole === 'CLIENT') navigate('/LandingCustomer');
    else if (userRole === 'EMPLOYEE') navigate('/LandingEmployee');
    else navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 font-sans">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl border border-red-100 overflow-hidden">
        {/* Warning Header */}
        <div className="bg-red-50 px-8 border-b border-red-100">
          <div className="flex items-center gap-3 text-red-600">
            {/* <span className="text-2xl">⚠️</span> */}
            <h2 className="text-md font-bold tracking-tight leading-tight">Deactivate account</h2>
          </div>
        </div>

        <div className="p-8">
          <p className="text-gray-900 font-bold mb-4 text-lg">
            Are you sure you want to deactivate your account?
          </p>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>
              Once you deactivate your account, <span className="font-bold text-red-600">this action cannot be undone.</span> 
              All your data will be permanently erased from this app including your profile 
              information, preferences, and activity history.
            </p>
            <p className="bg-gray-100 p-4 rounded-lg italic">
              "We’re sad to see you go, but we understand that sometimes it’s 
              necessary. Please take a moment to consider the consequences before 
              proceeding."
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button 
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-red-200 transition-all active:scale-95 disabled:opacity-50"
              onClick={handleDeleteClick}
              disabled={loading}
            >
              {loading ? "Processing..." : "Deactivate account"}
            </button>
            <button 
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-xl transition-all"
              onClick={handleGoBack}
            >
              Go back
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind Modal Overlay */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-sm w-full p-8 shadow-2xl animate-scaleUp">
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Final Confirmation</h3>
            <p className="text-gray-500 text-sm text-center mb-8">
              This is your last chance to go back. Are you absolutely sure?
            </p>
            <div className="flex flex-col gap-3">
              <button 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all"
                onClick={handleConfirm}
              >
                Yes, Deactivate
              </button>
              <button 
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-lg transition-all"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

