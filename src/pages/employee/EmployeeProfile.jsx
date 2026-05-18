import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { pageNames } from '../pageNames';


export default function EmployeeProfile() {
  document.title = pageNames.e_profile;

  const [client, setClient] = useState({
    userName: '',
    userSurname: '',
    contact: { phoneNumber: '' },
    address: { streetNumber: '', streetName: '', city: '', postalCode: '' },
    login: { emailAddress: '' }
  });
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');
  const [messageType, setMessageType] = useState('error');
  const [imageUrl, setImageUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRoleDescription');

  useEffect(() => {
    const fetchUserData = async () => {
      const userEmail = localStorage.getItem('userEmail');
      const userRole = localStorage.getItem('userRoleDescription');
      if (!userEmail) {
        setStatusMessage('No user logged in');
        setMessageType('error');
        setLoading(false);
        return;
      }

      try {
        let users = [];
        if (userRole === 'CLIENT') {
          const token = localStorage.getItem('authToken');
          const response = await fetch('http://localhost:8080/mobileglow/api/customers', {
            headers: {
              'Authorization': token ? `Bearer ${token}` : '',
            },
          });
          if (response.ok) {
            users = await response.json();
          } else {
            setStatusMessage('Failed to fetch user data');
            setMessageType('error');
            return;
          }
        } else {
          const endpointTypes = [
            { url: 'http://localhost:8080/mobileglow/Manager/getAllManagers', type: 'Manager' },
            { url: 'http://localhost:8080/mobileglow/Accountant/getAllAccountants', type: 'Accountant' },
            { url: 'http://localhost:8080/mobileglow/wash-attendants/getAllWashAttendants', type: 'WashAttendant' }
          ];
          for (const { url, type } of endpointTypes) {
            try {
              const response = await fetch(url);
              if (response.ok) {
                const data = await response.json();
                users = users.concat(data.map(u => ({ ...u, employeeType: type })));
              }
            } catch (error) {
              console.error('Error fetching from', url, error);
            }
          }
        }
        
        const loggedInUser = users.find(u => u?.login?.emailAddress === userEmail);

        if (loggedInUser) {
          setClient(loggedInUser);
          if (loggedInUser.imageName) {
            let imageEndpoint = '';
            if (userRole === 'CLIENT') {
              imageEndpoint = `http://localhost:8080/mobileglow/api/customers/image/${loggedInUser.userId}`;
            } else {
              const type = loggedInUser.employeeType;
              if (type === 'Manager') {
                imageEndpoint = `http://localhost:8080/mobileglow/Manager/image/${loggedInUser.userId}`;
              } else if (type === 'Accountant') {
                imageEndpoint = `http://localhost:8080/mobileglow/Accountant/image/${loggedInUser.userId}`;
              } else if (type === 'WashAttendant') {
                imageEndpoint = `http://localhost:8080/mobileglow/wash-attendants/image/${loggedInUser.userId}`;
              }
            }
            if (imageEndpoint) {
              fetch(imageEndpoint)
                .then(response => response.blob())
                .then(blob => {
                  const url = URL.createObjectURL(blob);
                  setImageUrl(url);
                })
                .catch(error => console.error('Error fetching image:', error));
            }
          }
        } else {
          setStatusMessage('User data not found');
          setMessageType('error');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setStatusMessage('Something went wrong while fetching data');
        setMessageType('error');
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center space-y-4 font-sans">
        <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest">Loading Profile...</h2>
      </div>
    );
  }

  const initials = client.userName ? client.userName.charAt(0).toUpperCase() : '?';

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased relative p-6 md:p-12">
      
      {/* Absolute Back Button */}
      <button
        onClick={() => navigate(userRole === 'CLIENT' ? '/customer' : '/employee')}
        className="absolute top-8 left-8 flex items-center justify-center w-10 h-10 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-blue-900 shadow-sm hover:shadow transition-all group z-10 font-bold"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
      </button>

      <div className="max-w-5xl w-full mx-auto mt-12">
        <header className="mb-10 text-center md:text-left">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
            Account Management
          </span>
          <h2 className="text-4xl font-black text-gray-900 mt-4 tracking-tight">My Profile</h2>
        </header>

        {/* Status Messaging System */}
        {statusMessage && (
          <div className={`mb-6 p-4 rounded-2xl text-xs font-bold uppercase tracking-wider border ${
            messageType === 'error' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-600 border-green-100'
          }`}>
            {statusMessage}
          </div>
        )}

        {/* Master Layout Wrapper split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT SIDE - PROFILE CARD */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start">
            
            {/* Avatar Section Frame */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt="Profile" 
                  className="w-28 h-28 object-cover rounded-[2rem] border border-gray-100 shadow-inner cursor-zoom-in transition-transform hover:scale-105 duration-300" 
                  onClick={() => setIsModalOpen(true)} 
                />
              ) : (
                <div className="w-28 h-28 rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-900 text-white flex items-center justify-center text-4xl font-black shadow-lg shadow-blue-500/10">
                  {initials}
                </div>
              )}
              <button 
                className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
                onClick={() => navigate(userRole === 'CLIENT' ? '/EditCustomerProfile' : '/EditEmployeeProfile')}
              >
                Modify
              </button>
            </div>

            {/* Structured User Metadata Field Stack */}
            <div className="flex-1 w-full">
              <h3 className="text-2xl font-black text-gray-900 tracking-tight text-center md:text-left mb-6 pb-4 border-b border-gray-50">
                {client.userName} {client.userSurname}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">First name</span>
                  <span className="text-sm font-semibold text-gray-800">{client.userName || '—'}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">Last name</span>
                  <span className="text-sm font-semibold text-gray-800">{client.userSurname || '—'}</span>
                </div>

                {userRole === 'EMPLOYEE' && (
                  <>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">Employee Type</span>
                      <span className="text-sm font-semibold text-blue-600">{client.employeeType || '—'}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">Hire Date</span>
                      <span className="text-sm font-semibold text-gray-800">{client.hireDate || '—'}</span>
                    </div>
                  </>
                )}

                {userRole === 'CLIENT' && (
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">Date of Birth</span>
                    <span className="text-sm font-semibold text-gray-800">{client.customerDOB || '—'}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">Mobile number</span>
                  <span className="text-sm font-semibold text-gray-800">{client.contact.phoneNumber || '—'}</span>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">Registered Email</span>
                  <span className="text-sm font-semibold text-gray-800">{client.login.emailAddress || '—'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - ADDRESS CARD */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between self-stretch">
            <div>
              <h3 className="text-xs font-black text-gray-400 uppercase t
                racking-widest mb-6 pb-2 border-b border-gray-50 leading-tight">
                Operating Locations
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-2xl border border-gray-100/50">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg shrink-0">
                    🏠
                  </div>
                  <div className="space-y-0.5">
                    <strong className="text-xs font-black uppercase tracking-wider text-gray-900">Primary Home</strong>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                      {client.address.streetNumber
                        ? `${client.address.streetNumber} ${client.address.streetName}, ${client.address.city}, ${client.address.postalCode}`
                        : 'No home address configured.'}
                    </p>
                  </div>
                </div>

                {/* Retained your flag toggle logic layout safely block */}
                {false && (
                  <>
                    <div className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-2xl border border-gray-100/50">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg shrink-0">
                        💼
                      </div>
                      <div className="space-y-0.5">
                        <strong className="text-xs font-black uppercase tracking-wider text-gray-900">Work</strong>
                        <p className="text-xs text-gray-500 font-medium">Add a work address</p>
                      </div>
                    </div>
                    <button className="w-full mt-2 py-3 border border-dashed border-gray-200 hover:border-blue-500 hover:text-blue-600 text-gray-400 font-bold rounded-xl transition-all text-xs uppercase tracking-widest">
                      + Add Address Module
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* High-End Glassmorphism Modal for Profile Image Preview */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-blue-950/40 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white p-3 rounded-[2.5rem] shadow-2xl relative max-w-lg w-full overflow-hidden transform scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={imageUrl} alt="Full Profile" className="w-full h-auto rounded-[2rem] object-cover max-h-[70vh]" />
            <button 
              className="absolute top-6 right-6 w-8 h-8 bg-black/50 hover:bg-black text-white font-light rounded-full flex items-center justify-center transition-colors text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
