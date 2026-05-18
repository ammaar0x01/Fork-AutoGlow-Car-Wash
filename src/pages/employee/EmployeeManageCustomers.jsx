// import React, { useState, useEffect } from 'react';

// import { customerService } from '../../services/customerService';
// import './ProfileManagement.css';


// export default function EmployeeManageCustomers(){
//     const [customers, setCustomers] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [editingCustomer, setEditingCustomer] = useState(null);
//     const [showProfile, setShowProfile] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filterActive, setFilterActive] = useState('all'); // 'all', 'active', 'inactive'
//     const [successMessage, setSuccessMessage] = useState(null);

//     useEffect(() => {
//         fetchCustomers();
//     }, []);

//     const fetchCustomers = async () => {
//         setLoading(true);
//         try {
//             const data = await customerService.getAllCustomers();
//             setCustomers(data);
//             setError(null);
//         } catch (err) {
//             setError('Failed to fetch customers');
//             console.error('Error:', err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleEdit = (customer) => {
//         setEditingCustomer({
//             ...customer,
//             editData: {
//                 userName: customer.userName || '',
//                 userSurname: customer.userSurname || '',
//                 customerDOB: customer.customerDOB || ''
//             }
//         });
//     };

//     const handleCancelEdit = () => {
//         setEditingCustomer(null);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setEditingCustomer(prev => ({
//             ...prev,
//             editData: {
//                 ...prev.editData,
//                 [name]: value
//             }
//         }));
//     };

//     const handleSaveEdit = async () => {
//         if (!editingCustomer) return;

//         try {
//             const updatedCustomer = await customerService.updateCustomer(
//                 editingCustomer.userId,
//                 editingCustomer.editData
//             );

//             // Update the local state
//             setCustomers(prev => prev.map(c =>
//                 c.userId === editingCustomer.userId ? updatedCustomer : c
//             ));

//             setEditingCustomer(null);
//             setError(null);
//             setSuccessMessage('Customer profile updated successfully!');

//             // Clear success message after 3 seconds
//             setTimeout(() => setSuccessMessage(null), 3000);
//         } catch (err) {
//             setError('Failed to update customer');
//             setSuccessMessage(null);
//             console.error('Error:', err);
//         }
//     };

//     const handleToggleStatus = async (customerId) => {
//         try {
//             const currentCustomer = customers.find(c => c.userId === customerId);
//             console.log('Current customer before toggle:', currentCustomer);
//             console.log('Current isActive value:', currentCustomer?.isActive);

//             console.log('Toggling status for customer:', customerId);
//             const updatedCustomer = await customerService.toggleCustomerStatus(customerId);
//             console.log('Received updated customer:', updatedCustomer);
//             console.log('Updated isActive value:', updatedCustomer?.isActive);

//             // Update the local state
//             setCustomers(prev => {
//                 const newCustomers = prev.map(c =>
//                     c.userId === customerId ? updatedCustomer : c
//                 );
//                 console.log('Updated customers list:', newCustomers);
//                 return newCustomers;
//             });

//             // Close edit mode if this customer was being edited
//             if (editingCustomer && editingCustomer.userId === customerId) {
//                 setEditingCustomer(null);
//             }

//             setError(null);
//             setSuccessMessage('Customer status updated successfully!');

//             // Clear success message after 3 seconds
//             setTimeout(() => setSuccessMessage(null), 3000);
//         } catch (err) {
//             console.error('Error toggling status:', err);
//             setError('Failed to update customer status');
//             setSuccessMessage(null);
//         }
//     };

//     const filteredCustomers = customers.filter(customer => {
//         const matchesSearch = customer.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             customer.userSurname?.toLowerCase().includes(searchTerm.toLowerCase());

//         if (filterActive === 'all') return matchesSearch;
//         if (filterActive === 'active') return matchesSearch && customer.isActive;
//         if (filterActive === 'inactive') return matchesSearch && !customer.isActive;

//         return matchesSearch;
//     });

//     if (loading && customers.length === 0) {
//         return (
//             <div className="loading-container">
//                 <div className="loading-spinner"></div>
//                 <p>Loading customer profiles...</p>
//             </div>
//         );
//     }

//     return (
//         <div className="profile-management">
//             <div className="header">
//                 <h1>Profile Management</h1>
//                 <p>Edit customer profiles and manage account status</p>
//             </div>

//             {error && (
//                 <div className="error-message">
//                     {error}
//                     <button onClick={() => setError(null)}>×</button>
//                 </div>
//             )}

//             {successMessage && (
//                 <div className="success-message">
//                     {successMessage}
//                     <button onClick={() => setSuccessMessage(null)}>×</button>
//                 </div>
//             )}

//             <div className="controls">
//                 <div className="search-filter">
//                     <input
//                         type="text"
//                         placeholder="Search by name or surname..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="search-input"
//                     />

//                     <select
//                         value={filterActive}
//                         onChange={(e) => setFilterActive(e.target.value)}
//                         className="filter-select"
//                     >
//                         <option value="all">All Customers</option>
//                         <option value="active">Active Only</option>
//                         <option value="inactive">Inactive Only</option>
//                     </select>
//                 </div>
//             </div>

//             <div className="customers-grid">
//                 {filteredCustomers.map(customer => (
//                     <div className="customer-card" key={customer.userId}>
//                         <div className="customer-header">
//                             <h3>{customer.userName} {customer.userSurname}</h3>
//                             <span className={`status-badge ${customer.isActive ? 'active' : 'inactive'}`}>
//                 {customer.isActive ? 'Active' : 'Inactive'}
//               </span>
//                         </div>

//                         <div className="customer-details">
//                             {editingCustomer && editingCustomer.userId === customer.userId ? (
//                                 // Edit Mode
//                                 <div className="edit-form">
//                                     <div className="form-group">
//                                         <label>First Name:</label>
//                                         <input
//                                             type="text"
//                                             name="userName"
//                                             value={editingCustomer.editData.userName}
//                                             onChange={handleInputChange}
//                                             className="edit-input"
//                                         />
//                                     </div>
//                                     <div className="form-group">
//                                         <label>Last Name:</label>
//                                         <input
//                                             type="text"
//                                             name="userSurname"
//                                             value={editingCustomer.editData.userSurname}
//                                             onChange={handleInputChange}
//                                             className="edit-input"
//                                         />
//                                     </div>
//                                     <div className="form-group">
//                                         <label>Date of Birth:</label>
//                                         <input
//                                             type="date"
//                                             name="customerDOB"
//                                             value={editingCustomer.editData.customerDOB || ''}
//                                             onChange={handleInputChange}
//                                             className="edit-input"
//                                         />
//                                     </div>
//                                 </div>
//                             ) : (
//                                 // View Mode
//                                 <div className="customer-info">
//                                     <div className="info-item">
//                                         <span className="label">ID:</span>
//                                         <span className="value">{customer.userId}</span>
//                                     </div>
//                                     <div className="info-item">
//                                         <span className="label">Role:</span>
//                                         <span className="value">{customer.roleDescription || 'N/A'}</span>
//                                     </div>
//                                     {customer.customerDOB && (
//                                         <div className="info-item">
//                                             <span className="label">Date of Birth:</span>
//                                             <span className="value">{new Date(customer.customerDOB).toLocaleDateString()}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                             )}
//                         </div>

//                         <div className="customer-actions">
//                             {editingCustomer && editingCustomer.userId === customer.userId ? (
//                                 // Edit Mode Actions
//                                 <>
//                                     <button
//                                         className="btn btn-success"
//                                         onClick={handleSaveEdit}
//                                     >
//                                         Save
//                                     </button>
//                                     <button
//                                         className="btn btn-secondary"
//                                         onClick={handleCancelEdit}
//                                     >
//                                         Cancel
//                                     </button>
//                                 </>
//                             ) : (
//                                 // View Mode Actions
//                                 <>
//                                     <button
//                                         className="btn btn-outline"
//                                         onClick={() => handleEdit(customer)}
//                                     >
//                                         Edit Profile
//                                     </button>
//                                     <button
//                                         className={`btn ${customer.isActive ? 'btn-warning' : 'btn-success'}`}
//                                         onClick={() => handleToggleStatus(customer.userId)}
//                                     >
//                                         {customer.isActive ? 'Deactivate' : 'Activate'}
//                                     </button>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {filteredCustomers.length === 0 && !loading && (
//                 <div className="empty-state">
//                     <div className="empty-icon">👤</div>
//                     <h3>No customers found</h3>
//                     <p>{searchTerm ? `No customers match "${searchTerm}"` : 'No customers in the system'}</p>
//                 </div>
//             )}
//         </div>
//     );
// };


// newer1
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { customerService } from '../../services/customerService';

import { pageNames } from '../pageNames';


export default function EmployeeManageCustomers(){
    document.title = pageNames.e_manage_customers

    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editingCustomer, setEditingCustomer] = useState(null);
    const [showProfile, setShowProfile] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterActive, setFilterActive] = useState('all'); // 'all', 'active', 'inactive'
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        setLoading(true);
        try {
            const data = await customerService.getAllCustomers();
            setCustomers(data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch customers');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (customer) => {
        setEditingCustomer({
            ...customer,
            editData: {
                userName: customer.userName || '',
                userSurname: customer.userSurname || '',
                customerDOB: customer.customerDOB || ''
            }
        });
    };

    const handleCancelEdit = () => {
        setEditingCustomer(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditingCustomer(prev => ({
            ...prev,
            editData: {
                ...prev.editData,
                [name]: value
            }
        }));
    };

    const handleSaveEdit = async () => {
        if (!editingCustomer) return;

        try {
            const updatedCustomer = await customerService.updateCustomer(
                editingCustomer.userId,
                editingCustomer.editData
            );

            setCustomers(prev => prev.map(c =>
                c.userId === editingCustomer.userId ? updatedCustomer : c
            ));

            setEditingCustomer(null);
            setError(null);
            setSuccessMessage('Customer profile updated successfully!');

            setTimeout(() => setSuccessMessage(null), 3000);
        } catch (err) {
            setError('Failed to update customer');
            setSuccessMessage(null);
            console.error('Error:', err);
        }
    };

    const handleToggleStatus = async (customerId) => {
        try {
            const currentCustomer = customers.find(c => c.userId === customerId);
            console.log('Current customer before toggle:', currentCustomer);
            console.log('Current isActive value:', currentCustomer?.isActive);

            console.log('Toggling status for customer:', customerId);
            const updatedCustomer = await customerService.toggleCustomerStatus(customerId);
            console.log('Received updated customer:', updatedCustomer);
            console.log('Updated isActive value:', updatedCustomer?.isActive);

            setCustomers(prev => {
                const newCustomers = prev.map(c =>
                    c.userId === customerId ? updatedCustomer : c
                );
                console.log('Updated customers list:', newCustomers);
                return newCustomers;
            });

            if (editingCustomer && editingCustomer.userId === customerId) {
                setEditingCustomer(null);
            }

            setError(null);
            setSuccessMessage('Customer status updated successfully!');

            setTimeout(() => setSuccessMessage(null), 3000);
        } catch (err) {
            console.error('Error toggling status:', err);
            setError('Failed to update customer status');
            setSuccessMessage(null);
        }
    };

    const filteredCustomers = customers.filter(customer => {
        const matchesSearch = customer.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.userSurname?.toLowerCase().includes(searchTerm.toLowerCase());

        if (filterActive === 'all') return matchesSearch;
        if (filterActive === 'active') return matchesSearch && customer.isActive;
        if (filterActive === 'inactive') return matchesSearch && !customer.isActive;

        return matchesSearch;
    });

    if (loading && customers.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center font-sans">
                <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-sm font-bold tracking-wide text-gray-500 uppercase">Loading customer profiles...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 relative p-6 md:p-12">
            
            {/* Absolute Back Button */}
            <button
                onClick={() => navigate("/employee")}
                className="absolute top-8 left-8 flex items-center justify-center w-10 h-10 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-blue-900 shadow-sm hover:shadow transition-all group z-10 font-bold"
                title="Go back to employee section"
            >
                <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            </button>

            {/* Header */}
            <div className="max-w-7xl mx-auto mt-12 mb-10 text-center md:text-left">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">Customer Management</h1>
                <p className="text-gray-500 text-sm font-medium mt-1">Edit customer profiles and manage account status</p>
            </div>

            {/* Alerts Block */}
            <div className="max-w-7xl mx-auto space-y-3 mb-6">
                {error && (
                    <div className="p-4 bg-red-50 border border-red-100 text-red-700 text-sm font-semibold rounded-2xl flex items-center justify-between shadow-sm animate-fadeIn">
                        <span>{error}</span>
                        <button onClick={() => setError(null)} className="text-lg leading-none hover:text-red-900 transition-colors">×</button>
                    </div>
                )}

                {successMessage && (
                    <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold rounded-2xl flex items-center justify-between shadow-sm animate-fadeIn">
                        <span>{successMessage}</span>
                        <button onClick={() => setSuccessMessage(null)} className="text-lg leading-none hover:text-emerald-900 transition-colors">×</button>
                    </div>
                )}
            </div>

            {/* Controls Filter Area */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <input
                        type="text"
                        placeholder="Search by name or surname..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none text-sm font-medium transition-all"
                    />

                    <select
                        value={filterActive}
                        onChange={(e) => setFilterActive(e.target.value)}
                        className="px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none text-sm font-semibold text-gray-600 transition-all sm:w-48"
                    >
                        <option value="all">All Customers</option>
                        <option value="active">Active Only</option>
                        <option value="inactive">Inactive Only</option>
                    </select>
                </div>
            </div>

            {/* Customers Profile Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCustomers.map(customer => (
                    <div className="bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.01)] rounded-[2rem] p-6 flex flex-col justify-between transform transition-all hover:shadow-md" key={customer.userId}>
                        <div>
                            <div className="flex items-start justify-between gap-2 mb-4">
                                <h3 className="text-lg font-black text-gray-900 tracking-tight leading-tight">
                                    {customer.userName} {customer.userSurname}
                                </h3>
                                <span className={`shrink-0 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg border ${
                                    customer.isActive 
                                        ? 'bg-emerald-50 border-emerald-100 text-emerald-700' 
                                        : 'bg-red-50 border-red-100 text-red-600'
                                }`}>
                                    {customer.isActive ? 'Active' : 'Inactive'}
                                </span>
                            </div>

                            <div className="py-4 border-t border-b border-gray-50 my-2">
                                {editingCustomer && editingCustomer.userId === customer.userId ? (
                                    // Edit Mode Form Layout
                                    <div className="space-y-3">
                                        <div className="flex flex-col space-y-1">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">First Name</label>
                                            <input
                                                type="text"
                                                name="userName"
                                                value={editingCustomer.editData.userName}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 bg-gray-50 border border-gray-100 focus:border-blue-600 rounded-lg outline-none text-sm font-medium transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Last Name</label>
                                            <input
                                                type="text"
                                                name="userSurname"
                                                value={editingCustomer.editData.userSurname}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 bg-gray-50 border border-gray-100 focus:border-blue-600 rounded-lg outline-none text-sm font-medium transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Date of Birth</label>
                                            <input
                                                type="date"
                                                name="customerDOB"
                                                value={editingCustomer.editData.customerDOB || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 bg-gray-50 border border-gray-100 focus:border-blue-600 rounded-lg outline-none text-sm font-semibold transition-all"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    // View Mode Readout Layout
                                    <div className="space-y-2 text-xs font-semibold text-gray-600">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 uppercase font-bold text-[10px] tracking-wider">System ID:</span>
                                            <span className="font-mono text-gray-900 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{customer.userId}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 uppercase font-bold text-[10px] tracking-wider">Account Role:</span>
                                            <span className="text-gray-800">{customer.roleDescription || 'N/A'}</span>
                                        </div>
                                        {customer.customerDOB && (
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-400 uppercase font-bold text-[10px] tracking-wider">Date of Birth:</span>
                                                <span className="text-gray-800">{new Date(customer.customerDOB).toLocaleDateString()}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Card Action Matrix Block */}
                        <div className="flex items-center gap-2 mt-4 pt-2">
                            {editingCustomer && editingCustomer.userId === customer.userId ? (
                                <>
                                    <button
                                        onClick={handleSaveEdit}
                                        className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancelEdit}
                                        className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => handleEdit(customer)}
                                        className="flex-1 py-2 border border-gray-100 bg-white hover:bg-gray-50 text-gray-700 text-xs font-black uppercase tracking-wider rounded-xl shadow-sm transition-all"
                                    >
                                        Edit Profile
                                    </button>
                                    <button
                                        onClick={() => handleToggleStatus(customer.userId)}
                                        className={`flex-1 py-2 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all ${
                                            customer.isActive 
                                                ? 'bg-amber-600 hover:bg-amber-500' 
                                                : 'bg-emerald-600 hover:bg-emerald-500'
                                        }`}
                                    >
                                        {customer.isActive ? 'Deactivate' : 'Activate'}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty Search/Filter State Display */}
            {filteredCustomers.length === 0 && !loading && (
                <div className="max-w-md mx-auto text-center mt-16 p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm animate-fadeIn">
                    <div className="text-4xl mb-3">👤</div>
                    <h3 className="text-base font-black text-gray-900 uppercase tracking-tight">No customers found</h3>
                    <p className="text-gray-400 text-xs font-medium mt-1">
                        {searchTerm ? `No structural customer vectors match "${searchTerm}"` : 'No custom profile entries loaded inside the database cluster.'}
                    </p>
                </div>
            )}
        </div>
    );
}

