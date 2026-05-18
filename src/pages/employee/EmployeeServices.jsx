import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../../services/api';

import NavbarEmployee from "../../components/NavbarEmployee";
import Footer from "../../components/Footer";

import { pageNames } from '../pageNames';


export default function EmployeeServices(){
    document.title = pageNames.e_services 

    // ========================================
    // HOOKS & STATE
    // ========================================
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [validationPopup, setValidationPopup] = useState({ show: false, message: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedServices, setSelectedServices] = useState(new Set());
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [deleteType, setDeleteType] = useState('single');
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [errorDetails, setErrorDetails] = useState({ title: '', message: '', type: 'error' });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData] = useState({
        serviceName: '',
        category: '',
        newCategory: '',
        priceOfService: '',
        duration: ''
    });

    // ========================================
    // AUTHENTICATION
    // ========================================
    const getAuthToken = () => {
        return localStorage.getItem('authToken') || localStorage.getItem('token');
    };

    // ========================================
    // EFFECTS
    // ========================================
    useEffect(() => {
        const token = getAuthToken();
        console.log('Auth token status:', token ? 'Present' : 'Missing');
        
        if (!token) {
            setError('Authentication required. Please log in first.');
            return;
        }
        
        fetchServices();
    }, []);

    // ========================================
    // ERROR HANDLING
    // ========================================
    const displayErrorPopup = (title, message, type = 'error') => {
        setErrorDetails({ title, message, type });
        setShowErrorPopup(true);
        setError(null);
    };

    const closeErrorPopup = () => {
        setShowErrorPopup(false);
        setErrorDetails({ title: '', message: '', type: 'error' });
    };

    const displaySuccessPopup = (message) => {
        setSuccessMessage(message);
        setShowSuccessPopup(true);
    };

    const closeSuccessPopup = () => {
        setShowSuccessPopup(false);
        setSuccessMessage('');
    };

    // ========================================
    // API FUNCTIONS
    // ========================================
    const fetchServices = async () => {
        setLoading(true);
        try {
            const data = await cleaningServiceService.getAllCleaningServices();
            setServices(data);
            setError(null);
        } catch (err) {
            console.error('Error fetching services:', err);
            if (err.response?.status === 401) {
                displayErrorPopup(
                    'Authentication Required',
                    'Please log in to access service management. You will be redirected to the login page.',
                    'auth'
                );
            } else if (err.response?.status === 403) {
                displayErrorPopup(
                    'Access Denied',
                    'You do not have permission to access service management. Please contact support.',
                    'error'
                );
            } else if (err.response?.status >= 500) {
                displayErrorPopup(
                    'Server Error',
                    'Our servers are experiencing issues. Please try again later or contact support if the problem persists.',
                    'error'
                );
            } else {
                displayErrorPopup(
                    'Failed to Load Services',
                    err.response?.data?.message || 'Unable to fetch services. Please check your connection and try again.',
                    'error'
                );
            }
        } finally {
            setLoading(false);
        }
    };

    // ========================================
    // FORM HANDLERS
    // ========================================
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const resetForm = () => {
        setFormData({
            serviceName: '',
            category: '',
            newCategory: '',
            priceOfService: '',
            duration: ''
        });
        setEditingService(null);
        setShowForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (!editingService) {
                const isDuplicate = services.some(service =>
                    service.serviceName.toLowerCase() === formData.serviceName.toLowerCase()
                );

                if (isDuplicate) {
                    setValidationPopup({
                        show: true,
                        message: 'Service already exists with this name'
                    });
                    resetForm();
                    setLoading(false);
                    return;
                }
            }

            const { newCategory, ...backendData } = formData;
            const processedData = {
                ...backendData,
                category: formData.category === 'new' ? formData.newCategory : formData.category,
                priceOfService: parseFloat(formData.priceOfService),
                duration: parseFloat(formData.duration)
            };

            if (processedData.duration < 0.5 || processedData.duration > 5) {
                setValidationPopup({
                    show: true,
                    message: 'Duration must be between 0.5 and 5 hours'
                });
                setLoading(false);
                return;
            }

            if (editingService) {
                await cleaningServiceService.updateCleaningService(editingService.cleaningServiceId, processedData);
                setError(null);
                resetForm();
                fetchServices();
                displaySuccessPopup('Service updated successfully!');
            } else {
                const result = await cleaningServiceService.createCleaningService(processedData);
                if (result.success) {
                    setError(null);
                    resetForm();
                    fetchServices();
                    displaySuccessPopup('Service created successfully!');
                } else if (result.error === 'DUPLICATE') {
                    setValidationPopup({ show: true, message: result.message });
                    resetForm();
                } else {
                    setError('Failed to create service');
                }
            }
        } catch (err) {
            console.error('Error in handleSubmit:', err);
            if (err.response?.status === 400) {
                displayErrorPopup(
                    'Invalid Service Data',
                    err.response?.data?.message || 'Please check your service information and try again.',
                    'error'
                );
            } else if (err.response?.status === 409) {
                displayErrorPopup(
                    'Service Already Exists',
                    'A service with this name already exists. Please use a different name.',
                    'error'
                );
            } else {
                displayErrorPopup(
                    'Failed to Save Service',
                    err.response?.data?.message || 'Unable to save the service. Please try again.',
                    'error'
                );
            }
        } finally {
            setLoading(false);
        }
    };

    // ========================================
    // SERVICE ACTIONS
    // ========================================
    const handleEdit = (service) => {
        setEditingService(service);
        setFormData({
            serviceName: service.serviceName || '',
            category: service.category || '',
            newCategory: '',
            priceOfService: service.priceOfService || '',
            duration: service.duration || ''
        });
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        setDeleteTarget(id);
        setDeleteType('single');
        setShowDeletePopup(true);
    };

    const confirmDelete = async () => {
        setLoading(true);
        try {
            if (deleteType === 'single') {
                await cleaningServiceService.deleteCleaningService(deleteTarget);
                displaySuccessPopup('Service deleted successfully!');
            }
            setError(null);
            fetchServices();
        } catch (err) {
            console.error('Error in confirmDelete:', err);
            displayErrorPopup('Failed to Delete Service', 'Unable to delete the service.', 'error');
        } finally {
            setLoading(false);
            setShowDeletePopup(false);
            setDeleteTarget(null);
        }
    };

    const handleServiceAction = (service, action) => {
        if (action === 'edit') {
            handleEdit(service);
        } else if (action === 'delete') {
            handleDelete(service.cleaningServiceId);
        }
    };

    // ========================================
    // SEARCH & FILTER FUNCTIONS
    // ========================================
    const getUniqueCategories = () => {
        return services
            .map(service => service.category)
            .filter(category => category && category.trim() !== '')
            .filter((category, index, self) => self.indexOf(category) === index)
            .sort();
    };

    const filteredServices = services.filter(service =>
        service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (service.category && service.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // ========================================
    // RENDER HELPERS (TAILWIND STYLE)
    // ========================================
    const renderLoadingState = () => (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center font-sans">
            <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-sm font-bold tracking-wide text-gray-500 uppercase">Loading services database...</p>
        </div>
    );

    const renderErrorMessage = () => (
        <div className="max-w-7xl mx-auto mx-6 mt-6 p-4 bg-red-50 border border-red-100 text-red-700 text-sm font-semibold rounded-2xl flex items-center justify-between shadow-sm">
            <span>{error}</span>
            <button onClick={() => setError(null)} className="text-lg leading-none hover:text-red-900 transition-colors">×</button>
        </div>
    );

    const renderServiceForm = () => (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_30px_70px_rgba(0,0,0,0.15)] max-w-lg w-full overflow-hidden transform transition-all">
                <div className="px-8 py-6 bg-gray-50/70 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-xl font-black text-gray-900 tracking-tight">
                        {editingService ? 'Modify Existing Service' : 'Add New Service Node'}
                    </h2>
                    <button onClick={resetForm} className="p-2 text-gray-400 hover:text-gray-900 text-2xl transition-colors">×</button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div className="flex flex-col space-y-1.5">
                        <label htmlFor="serviceName" className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Service Title *</label>
                        <input
                            type="text"
                            id="serviceName"
                            name="serviceName"
                            value={formData.serviceName}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., Exterior Wash & Wax"
                            className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none text-sm font-medium transition-all"
                        />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <label htmlFor="category" className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Operational Cluster Category *</label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none text-sm font-semibold text-gray-600 transition-all"
                        >
                            <option value="">Select a category...</option>
                            <option value="EXTERIOR WASH">EXTERIOR WASH</option>
                            <option value="INTERIOR CARE">INTERIOR CARE</option>
                            <option value="FULL DETAILING">FULL DETAILING</option>
                            <option value="PROTECTION SERVICES">PROTECTION SERVICES</option>
                            {getUniqueCategories().filter(cat => 
                                !['EXTERIOR WASH', 'INTERIOR CARE', 'FULL DETAILING', 'PROTECTION SERVICES'].includes(cat)
                            ).map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                            <option value="new">+ Add New Category</option>
                        </select>
                        {formData.category === 'new' && (
                            <input
                                type="text"
                                name="newCategory"
                                value={formData.newCategory || ''}
                                onChange={handleInputChange}
                                placeholder="Enter custom category label..."
                                className="w-full mt-2 px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none text-sm font-medium transition-all"
                            />
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="priceOfService" className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Price Point (ZAR) *</label>
                            <input
                                type="number"
                                id="priceOfService"
                                name="priceOfService"
                                value={formData.priceOfService}
                                onChange={handleInputChange}
                                required
                                min="0"
                                step="0.01"
                                placeholder="150.00"
                                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none text-sm font-semibold transition-all"
                            />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="duration" className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Duration Allotment (Hours) *</label>
                            <input
                                type="number"
                                id="duration"
                                name="duration"
                                value={formData.duration}
                                onChange={handleInputChange}
                                required
                                min="0.5"
                                max="5"
                                step="0.5"
                                placeholder="1.5"
                                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none text-sm font-semibold transition-all"
                            />
                        </div>
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-50 mt-6">
                        <button type="button" onClick={resetForm} className="px-5 py-3 border border-gray-100 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-gray-50 transition-colors">
                            Dismiss
                        </button>
                        <button type="submit" disabled={loading} className="px-5 py-3 bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50">
                            {loading ? 'Processing...' : (editingService ? 'Apply Matrix Updates' : 'Deploy Service Node')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    const renderServiceTable = () => (
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
                <h2 className="text-sm font-black text-gray-900 tracking-tight uppercase">Operational Service Catalogue</h2>
                <button onClick={fetchServices} className="px-4 py-2 border border-gray-100 bg-white hover:bg-gray-50 text-gray-700 text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-sm">
                    Re-index Catalogue
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                        <tr className="bg-gray-50/60 border-b border-gray-100 text-[11px] font-black uppercase tracking-widest text-gray-400">
                            <th className="py-5 px-6">Service Nomenclature</th>
                            <th className="py-5 px-4">Cluster Category</th>
                            <th className="py-5 px-4">Time Bound Metrics</th>
                            <th className="py-5 px-4">Cost Basis</th>
                            <th className="py-5 px-6 text-right">Actions Matrix</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 text-sm font-medium text-gray-700">
                        {filteredServices.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="py-16 text-center text-gray-400 font-medium">
                                    No tracked structural items intersect with your filtration bounds.
                                </td>
                            </tr>
                        ) : (
                            filteredServices.map(service => (
                                <tr key={service.cleaningServiceId} className="hover:bg-gray-50/40 transition-colors">
                                    <td className="py-5 px-6 font-bold text-gray-900">{service.serviceName}</td>
                                    <td className="py-5 px-4">
                                        <span className="px-2.5 py-1 bg-gray-100/80 text-gray-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                                            {service.category || 'UNASSIGNED'}
                                        </span>
                                    </td>
                                    <td className="py-5 px-4 font-semibold text-gray-500">{service.duration} HR</td>
                                    <td className="py-5 px-4 font-bold text-gray-900">R {service.priceOfService}</td>
                                    <td className="py-5 px-6 text-right">
                                        <div className="inline-flex gap-2">
                                            <button
                                                onClick={() => handleServiceAction(service, 'edit')}
                                                className="px-3 py-1.5 bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-700 rounded-lg text-xs font-black uppercase tracking-wider transition-all border border-gray-100 focus:outline-none"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleServiceAction(service, 'delete')}
                                                className="px-3 py-1.5 bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-lg text-xs font-black uppercase tracking-wider transition-all border border-gray-100 focus:outline-none"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );

    // Dynamic Generic Popup Frame Helper
    const renderModalTemplate = (title, description, actionButtons) => (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl max-w-sm w-full p-6 text-center space-y-4">
                <h3 className="text-base font-black text-gray-900 tracking-tight uppercase">{title}</h3>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">{description}</p>
                <div className="flex items-center justify-center gap-2 pt-2">{actionButtons}</div>
            </div>
        </div>
    );

    const renderDeletePopup = () => renderModalTemplate(
        "Purge Action Warning",
        "Are you sure you want to permanently delete this cleaning service resource configuration?",
        <>
            <button onClick={() => setShowDeletePopup(false)} disabled={loading} className="px-4 py-2 border border-gray-100 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-gray-50 transition-colors">Abort</button>
            <button onClick={confirmDelete} disabled={loading} className="px-4 py-2 bg-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-red-500 transition-colors">Confirm Purge</button>
        </>
    );

    const renderErrorPopup = () => renderModalTemplate(
        errorDetails.title,
        errorDetails.message,
        errorDetails.type === 'auth' ? (
            <button onClick={() => { closeErrorPopup(); navigate('/login'); }} className="px-4 py-2 bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-blue-800 transition-colors">Authorize Session</button>
        ) : (
            <button onClick={closeErrorPopup} className="px-4 py-2 bg-gray-900 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-gray-800 transition-colors">Acknowledge</button>
        )
    );

    const renderSuccessPopup = () => renderModalTemplate(
        "Operation Validated",
        successMessage,
        <button onClick={closeSuccessPopup} className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-emerald-500 transition-colors">Complete</button>
    );

    const renderValidationPopup = () => renderModalTemplate(
        "Validation Check Failed",
        validationPopup.message,
        <button onClick={() => setValidationPopup({ show: false, message: '' })} className="px-4 py-2 bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-amber-500 transition-colors">Dismiss Error</button>
    );

    // ========================================
    // MAIN RENDER
    // ========================================
    if (loading && services.length === 0) {
        return renderLoadingState();
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-800">
            {/* <NavbarEmployee/> */}
            
            <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-12 md:py-16 min-h-screen">
                
                {/* Absolute Back Button */}
      <button
        onClick={() => navigate("/employee")}
        className="absolute top-8 left-8 flex items-center justify-center w-10 h-10 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-blue-900 shadow-sm hover:shadow transition-all group z-10 font-bold"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
      </button>

                {/* Module Header Container */}
                <section className="mb-10 border-b border-gray-200/60 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 mt-9">
                    <div className="flex items-start gap-4">
                        {/* <button
                            onClick={() => navigate(-1)}
                            className="p-3 bg-white hover:bg-gray-100 text-gray-700 border border-gray-100 rounded-xl transition-all shadow-sm group"
                            title="Go back to dashboard"
                        >
                            <span className="inline-block transition-transform group-hover:-translate-x-0.5 font-bold text-xs">← Back</span>
                        </button> */}
                        
                        <div>
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                Service Matrix
                            </span>
                            <h1 className="text-3xl font-black text-gray-900 tracking-tight mt-1">Manage Services</h1>
                            <p className="text-gray-500 text-sm font-medium mt-0.5">Configure operational catalogs, processing intervals, and core price vectors.</p>
                        </div>
                    </div>
                    
                    <button
                        onClick={() => setShowForm(true)}
                        disabled={loading}
                        className="w-full md:w-auto px-5 py-3.5 bg-blue-900 text-white flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest transition-all shadow-md hover:bg-blue-800 rounded-2xl disabled:opacity-50"
                    >
                        + Create New Service
                    </button>
                </section>

                {/* Search Bar Block */}
                <div className="w-full mb-8">
                    <input
                        type="text"
                        placeholder="Search services by nomenclature or tracking class tags..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full px-5 py-3.5 bg-white border border-gray-100 focus:border-blue-600 shadow-[0_10px_30px_rgba(0,0,0,0.01)] rounded-2xl outline-none text-sm font-medium transition-all"
                    />
                </div>

                {/* Secondary Render Components */}
                {error && renderErrorMessage()}
                {showForm && renderServiceForm()}
                {renderServiceTable()}

                {/* Notification / Validation Popup Stack */}
                {showDeletePopup && renderDeletePopup()}
                {validationPopup.show && renderValidationPopup()}
            </main>
            
            {/* <Footer /> */}
            {showErrorPopup && renderErrorPopup()}
            {showSuccessPopup && renderSuccessPopup()}
        </div>
    );
}

// ========================================
// API CONFIGURATION
// ========================================
const CLEANING_SERVICE_API = '/api/cleaningservice';

const cleaningServiceService = {
    getAllCleaningServices: async () => {
        try {
            console.log('Fetching all cleaning services...');
            const response = await apiClient.get(`${CLEANING_SERVICE_API}/getAll`);
            return response.data;
        } catch (error) {
            console.error('Error fetching cleaning services:', error);
            throw error;
        }
    },

    getCleaningServiceById: async (id) => {
        try {
            const response = await apiClient.get(`${CLEANING_SERVICE_API}/read/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching cleaning service ${id}:`, error);
            throw error;
        }
    },

    createCleaningService: async (serviceData) => {
        try {
            const response = await apiClient.post(`${CLEANING_SERVICE_API}/create`, serviceData);
            return { success: true, data: response.data };
        } catch (error) {
            console.error('Error creating cleaning service:', error);
            if (error.response?.status === 400 && error.response?.data?.message?.includes('already exists')) {
                return { success: false, error: 'DUPLICATE', message: 'Service already exists with this name' };
            }
            throw error;
        }
    },

    updateCleaningService: async (id, serviceData) => {
        try {
            const response = await apiClient.put(`${CLEANING_SERVICE_API}/update/${id}`, serviceData);
            return response.data;
        } catch (error) {
            console.error(`Error updating cleaning service ${id}:`, error);
            throw error;
        }
    },

    deleteCleaningService: async (id) => {
        try {
            const response = await apiClient.delete(`${CLEANING_SERVICE_API}/delete/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting cleaning service ${id}:`, error);
            throw error;
        }
    }
};

