import React, { useState } from 'react';


export default function PasswordReset() {
  document.title = "Reset your password"
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [strength, setStrength] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const checkStrength = (value) => {
    if (value.length === 0) return "";
    if (value.length < 6) return "Very weak";
    if (value.match(/[A-Z]/) && value.match(/[0-9]/) && value.length >= 8)
      return "Strong";
    if (value.length >= 8) return "Medium";
    return "Weak";
  };

  const getStrengthColor = () => {
    switch (strength) {
      case "Strong": return "text-green-500";
      case "Medium": return "text-yellow-500";
      case "Weak": return "text-orange-500";
      case "Very weak": return "text-red-500";
      default: return "text-gray-400";
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(checkStrength(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirm) {
      setError("Passwords do not match!");
      return;
    }

    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      setError("User not logged in!");
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:8080/mobileglow/Login/change-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : '',
        },
        body: JSON.stringify({
          email: userEmail,
          currentPassword: currentPassword,
          newPassword: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Password changed successfully!");
        setCurrentPassword("");
        setPassword("");
        setConfirm("");
        setStrength("");
        
        localStorage.removeItem('authToken');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userRoleDescription');
        localStorage.removeItem('userId');
        
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else {
        setError(data.message || "Failed to change password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12
      bg-gradient-to-r from-purple-600 via-purple-800 to-purple-950
    ">
    {/* <div className="min-h-screen from-bg-purple-500 to-bg-purple-300 flex items-center justify-center px-4 py-12"> */}
     
     
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Change Password</h2>
          <p className="text-sm text-gray-500">
            Enter your current password and choose a new one.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm animate-pulse">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-3 bg-green-50 border-l-4 border-green-500 text-green-700 text-sm">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5 relative">
            <label className="text-sm font-semibold text-gray-700">New Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="••••••••"
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />
            {strength && (
              <div className="absolute right-3 top-9 text-[10px] font-bold uppercase tracking-wider">
                <span className={getStrengthColor()}>{strength}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Confirm New Password</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[rgba(12,45,72,1)] hover:bg-[rgba(12,45,72,0.9)] text-white font-bold py-3.5 rounded-lg shadow-lg transition-all transform active:scale-95"
          >
            Change Password
          </button>


          <button
                       onClick={() => window.location.href = "/"}
                      //  go back to prvious page 

            className="w-full 
              bg-red-800
              hover:bg-red-600
              text-white 
              font-bold py-3.5 rounded-lg shadow-lg 
              transition-all transform active:scale-95"
          >
            Go back
          </button>
        </form>
      </div>
    </div>
  );
}
