import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { employeeService } from "../../services/employeeService";
import api from "../../services/api";

import { pageNames } from "../pageNames";

export default function CustomerProfileEdit() {
  document.title = pageNames.c_profile_edit;

  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    userName: "",
    userSurname: "",
    employeeType: "",
    hireDate: "",
    contact: { phoneNumber: "" },
    address: { streetNumber: "", streetName: "", city: "", postalCode: "" },
    login: { emailAddress: "" },
    imageFile: null,
    imagePreviewUrl: null,
  });
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');
  const [messageType, setMessageType] = useState('error');

  useEffect(() => {
    const fetchUserData = async () => {
      const userEmail = localStorage.getItem('userEmail');
      if (!userEmail) {
        setStatusMessage('No user logged in');
        setMessageType('error');
        setLoading(false);
        return;
      }

      try {
        let users = [];
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
        const loggedInUser = users.find(u => u.login.emailAddress === userEmail);
        if (loggedInUser) {
          setEmployee({ ...loggedInUser, userId: loggedInUser.userId });
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

  const handleChange = (e, section, field) => {
    if (section) {
      setEmployee({
        ...employee,
        [section]: { ...employee[section], [field]: e.target.value },
      });
    } else {
      setEmployee({ ...employee, [field]: e.target.value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployee({
        ...employee,
        imageFile: file,
        imagePreviewUrl: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in employee) {
        if (key === "imageFile") continue;
        if (typeof employee[key] === "object" && employee[key] !== null) {
          for (const subKey in employee[key]) {
            formData.append(`${key}.${subKey}`, employee[key][subKey]);
          }
        } else {
          formData.append(key, employee[key]);
        }
      }
      if (employee.imageFile) {
        formData.append("imageFile", employee.imageFile);
      }

      await employeeService.updateEmployee(formData);

      setStatusMessage('Profile updated successfully');
      setMessageType('success');
      
      // Fixed navigation reference to route cleanly back into internal workplace views
      setTimeout(() => navigate("/employee/profile"), 1500);
    } catch (error) {
      console.error('Error updating profile:', error);
      setStatusMessage('Failed to update profile');
      setMessageType('error');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center space-y-4 font-sans">
        <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-950 rounded-full animate-spin"></div>
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest">Loading Profile...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased relative p-6 md:p-12 flex flex-col items-center">
      
      {/* Absolute Back Button */}
      <button
        onClick={() => navigate("/customer")}

        className="absolute top-8 left-8 flex items-center justify-center w-10 h-10 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-blue-900 shadow-sm hover:shadow transition-all group z-10 font-bold"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
      </button>

      <div className="max-w-2xl w-full mx-auto mt-12">
        <header className="mb-10 text-center">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
            Data Alteration Module
          </span>
          <h2 className="text-4xl font-black text-gray-900 mt-4 tracking-tight">Edit Profile</h2>
        </header>

        {/* Status Notification Banners */}
        {statusMessage && (
          <div className={`mb-6 p-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-center border ${
            messageType === 'error' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-600 border-green-100'
          }`}>
            {statusMessage}
          </div>
        )}

        {/* Form Container Element */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col gap-6"
        >
          {/* Identity Grid Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">First Name</label>
              <input
                type="text"
                value={employee.userName}
                onChange={(e) => handleChange(e, null, "userName")}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none font-medium text-sm transition-all focus:bg-white"
                placeholder="Enter first name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Last Name</label>
              <input
                type="text"
                value={employee.userSurname}
                onChange={(e) => handleChange(e, null, "userSurname")}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none font-medium text-sm transition-all focus:bg-white"
                placeholder="Enter last name"
              />
            </div>
          </div>

          {/* Read Only Meta Inputs Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Employee Type (Locked)</label>
              <select
                value={employee.employeeType}
                disabled
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 text-gray-400 rounded-xl outline-none font-medium text-sm cursor-not-allowed appearance-none"
              >
                <option value="">Select type</option>
                <option value="Accountant">Accountant</option>
                <option value="Manager">Manager</option>
                <option value="WashAttendant">Wash Attendant</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Hire Date</label>
              <input
                type="date"
                value={employee.hireDate}
                onChange={(e) => handleChange(e, null, "hireDate")}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none font-medium text-sm transition-all focus:bg-white"
              />
            </div>
          </div>

          {/* Communications Inputs Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Mobile Number</label>
              <input
                type="text"
                value={employee.contact.phoneNumber}
                onChange={(e) => handleChange(e, "contact", "phoneNumber")}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none font-medium text-sm transition-all focus:bg-white"
                placeholder="Enter mobile number"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                value={employee.login.emailAddress}
                onChange={(e) => handleChange(e, "login", "emailAddress")}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none font-medium text-sm transition-all focus:bg-white"
                placeholder="Enter email"
              />
            </div>
          </div>

          {/* Address Line 1 Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col space-y-2 md:col-span-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Street No.</label>
              <input
                type="text"
                value={employee.address.streetNumber}
                onChange={(e) => handleChange(e, "address", "streetNumber")}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none font-medium text-sm transition-all focus:bg-white"
                placeholder="No."
              />
            </div>
            <div className="flex flex-col space-y-2 md:col-span-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Street Name</label>
              <input
                type="text"
                value={employee.address.streetName}
                onChange={(e) => handleChange(e, "address", "streetName")}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none font-medium text-sm transition-all focus:bg-white"
                placeholder="Enter street name"
              />
            </div>
          </div>

          {/* Address Line 2 Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">City</label>
              <input
                type="text"
                value={employee.address.city}
                onChange={(e) => handleChange(e, "address", "city")}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none font-medium text-sm transition-all focus:bg-white"
                placeholder="Enter city"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Postal Code</label>
              <input
                type="text"
                value={employee.address.postalCode}
                onChange={(e) => handleChange(e, "address", "postalCode")}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none font-medium text-sm transition-all focus:bg-white"
                placeholder="Enter postal code"
              />
            </div>
          </div>

          {/* Avatar Management Row Component */}
          <div className="pt-4 border-t border-gray-50 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 w-full flex flex-col space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Profile Avatar Asset</label>
              <label className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100/70 border border-dashed border-gray-200 hover:border-blue-500 rounded-xl cursor-pointer flex items-center justify-center text-xs font-bold text-gray-500 uppercase tracking-wider transition-colors">
                <span>Choose Image Asset</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {employee.imagePreviewUrl && (
              <div className="w-20 h-20 rounded-2xl bg-gray-50 border border-gray-100 p-1 flex items-center justify-center shrink-0 shadow-sm animate-fadeIn">
                <img
                  src={employee.imagePreviewUrl}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            )}
          </div>

          {/* Action Trigger Submit Frame */}
          <button 
            type="submit" 
            className="w-full mt-4 py-4 px-6 rounded-xl bg-gradient-to-r from-blue-900 to-blue-950 hover:from-blue-600 hover:to-blue-900 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-950/10 active:scale-[0.99] transition-all"
          >
            Save Profile Modifications
          </button>
        </form>
      </div>
    </div>
  );
}

