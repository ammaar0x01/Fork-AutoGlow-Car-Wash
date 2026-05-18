import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { employeeServiceSimple } from "../../services/employeeService";
import { pageNames } from "../pageNames";

import NavbarEmployee from "../../components/NavbarEmployee";
import Footer from "../../components/Footer";


export default function EmployeeManageEmployees() {
  document.title = pageNames.e_manage_employees

  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const [managersResponse, accountantsResponse, washAttendantsResponse] =
        await Promise.all([
          employeeServiceSimple.getAllManagers(),
          employeeServiceSimple.getAllAccountants(),
          employeeServiceSimple.getAllWashAttendants(),
        ]);

      const managers = managersResponse.data.map((emp) => ({
        ...emp,
        type: EMPLOYEE_TYPES.MANAGER,
      }));
      const accountants = accountantsResponse.data.map((emp) => ({
        ...emp,
        type: EMPLOYEE_TYPES.ACCOUNTANT,
      }));
      const washAttendants = washAttendantsResponse.data.map((emp) => ({
        ...emp,
        type: EMPLOYEE_TYPES.WASH_ATTENDANT,
      }));

      const allEmployees = [...managers, ...accountants, ...washAttendants];

      setEmployees(allEmployees);
      setFilteredEmployees(allEmployees);
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Failed to fetch employees");
    } finally {
      setLoading(false);
    }
  };

  const isDuplicateEmployee = (
    userName,
    userSurname,
    currentEmployeeId = null
  ) => {
    const normalizedFirstName = userName.toLowerCase().trim();
    const normalizedLastName = userSurname.toLowerCase().trim();

    return employees.some((emp) => {
      if (currentEmployeeId && emp.userId === currentEmployeeId) {
        return false;
      }
      return (
        emp.userName.toLowerCase().trim() === normalizedFirstName &&
        emp.userSurname.toLowerCase().trim() === normalizedLastName
      );
    });
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = employees.filter(
      (emp) =>
        (emp.userName?.toLowerCase() || "").includes(term) ||
        (emp.userSurname?.toLowerCase() || "").includes(term) ||
        (emp.login?.emailAddress?.toLowerCase() || "").includes(term) ||
        (emp.position?.toLowerCase() || "").includes(term) ||
        (emp.contact?.phoneNumber || "").includes(term)
    );

    setFilteredEmployees(filtered);
  };

  const filterByStatus = (status) => {
    setActiveTab(status);
    if (status === "all") {
      setFilteredEmployees(employees);
    } else if (status === "active") {
      setFilteredEmployees(employees.filter((emp) => emp.isActive));
    } else if (status === "inactive") {
      setFilteredEmployees(employees.filter((emp) => !emp.isActive));
    }
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setShowForm(true);
  };

  const handleSubmit = async (formData) => {
    try {
      setFormLoading(true);

      const currentEmployeeId = selectedEmployee
        ? selectedEmployee.userId
        : null;
      if (
        isDuplicateEmployee(
          formData.userName,
          formData.userSurname,
          currentEmployeeId
        )
      ) {
        toast.error(
          `An employee named "${formData.userName} ${formData.userSurname}" already exists. Please use a different name.`
        );
        return;
      }

      const baseData = {
        userName: formData.userName,
        userSurname: formData.userSurname,
        isActive: formData.isActive,
        contact: formData.contact,
        address: formData.address,
        login: formData.login,
        roleDescription: "EMPLOYEE",
      };

      if (selectedEmployee) {
        baseData.userId = selectedEmployee.userId;
      }

      let apiData = { ...baseData };
      let serviceCall;

      switch (formData.type) {
        case EMPLOYEE_TYPES.MANAGER:
          apiData = {
            ...apiData,
            hireDate: formData.hireDate,
            department: formData.department,
            position: formData.position,
          };
          serviceCall = employeeServiceSimple.updateManager(apiData);
          break;

        case EMPLOYEE_TYPES.ACCOUNTANT:
          apiData = {
            ...apiData,
            employeeType: formData.employeeType,
            hasTaxFillingAuthority: formData.hasTaxFillingAuthority,
            certificationNumber: formData.certificationNumber,
          };
          serviceCall = employeeServiceSimple.updateAccountant(apiData);
          break;

        case EMPLOYEE_TYPES.WASH_ATTENDANT:
          apiData = {
            ...apiData,
            shift: formData.shift,
            hourlyRate: formData.hourlyRate,
            yearsOfExperience: formData.yearsOfExperience,
            specialization: formData.specialization,
          };
          serviceCall = employeeServiceSimple.updateWashAttendant(apiData);
          break;

        default:
          throw new Error("Unknown employee type");
      }

      await serviceCall;
      toast.success("Employee updated successfully");
      await fetchEmployees();
      setShowForm(false);
      setSelectedEmployee(null);
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Failed to update employee");
    } finally {
      setFormLoading(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedEmployee(null);
  };

  const stats = {
    total: employees.length,
    active: employees.filter((emp) => emp.isActive).length,
    managers: employees.filter((emp) => emp.type === EMPLOYEE_TYPES.MANAGER)
      .length,
    accountants: employees.filter(
      (emp) => emp.type === EMPLOYEE_TYPES.ACCOUNTANT
    ).length,
    washAttendants: employees.filter(
      (emp) => emp.type === EMPLOYEE_TYPES.WASH_ATTENDANT
    ).length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center font-sans">
        <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-sm font-bold tracking-wide text-gray-500 uppercase">Loading employees...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      
      {/* Absolute Back Button */}
      <button
        onClick={() => navigate("/employee")}
        className="absolute top-8 left-8 flex items-center justify-center 
        w-10 h-10 bg-white border border-gray-100 rounded-xl text-gray-400 
        hover:text-blue-900 shadow-sm hover:shadow transition-all group z-10 
        font-bold"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
      </button>

      {/* <NavbarEmployee /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 min-h-screen">
        
        {/* Header Block */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Employee Management</h1>
          <p className="text-gray-500 text-sm font-medium mt-1">View and manage your team members</p>
        </div>

        {/* Dynamic Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { value: stats.total, label: "Total Employees" },
            { value: stats.active, label: "Active" },
            { value: stats.managers, label: "Managers" },
            { value: stats.accountants, label: "Accountants" },
            { value: stats.washAttendants, label: "Wash Attendants" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.01)] flex flex-col justify-center">
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">{stat.value}</h3>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filter Management Console */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search employees by name, email, or position..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 focus:border-blue-600 rounded-xl outline-none text-sm font-medium transition-all"
            />
          </div>

          <div className="flex gap-2 p-1 bg-gray-50 rounded-xl border border-gray-100 shrink-0">
            {["all", "active", "inactive"].map((status) => (
              <button
                key={status}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === status
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                onClick={() => filterByStatus(status)}
              >
                {status === "all" ? "All Employees" : status}
              </button>
            ))}
          </div>
        </div>

        {/* View Switch Matrix */}
        <div className="relative">
          {showForm ? (
            <EmployeeForm
              employee={selectedEmployee}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
              loading={formLoading}
              isDuplicateEmployee={isDuplicateEmployee}
            />
          ) : (
            <EmployeeTable
              employees={filteredEmployees}
              onEdit={handleEdit}
              onRefresh={fetchEmployees}
            />
          )}
        </div>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>

      {/* <Footer /> */}

    </div>
  );
}


const EMPLOYEE_TYPES = {
  MANAGER: "Manager",
  ACCOUNTANT: "Accountant",
  WASH_ATTENDANT: "Wash Attendant",
};

const SHIFT_TYPES = {
  DAY: "DAY",
  NIGHT: "NIGHT",
  SWING: "SWING",
};

// Form Layer Modal Template
const EmployeeForm = ({
  employee,
  onSubmit,
  onCancel,
  loading,
  isDuplicateEmployee,
}) => {
  const [formData, setFormData] = useState({
    userName: "",
    userSurname: "",
    type: EMPLOYEE_TYPES.MANAGER,
    login: { emailAddress: "" },
    contact: { phoneNumber: "" },
    address: {
      streetNumber: "",
      streetName: "",
      city: "",
      postalCode: "",
    },
    isActive: true,
    hireDate: "",
    department: "",
    position: "",
    employeeType: "",
    hasTaxFillingAuthority: false,
    certificationNumber: "",
    shift: SHIFT_TYPES.DAY,
    hourlyRate: "",
    yearsOfExperience: "",
    specialization: "",
  });

  const [nameError, setNameError] = useState("");

  useEffect(() => {
    if (employee) {
      const baseData = {
        userName: employee.userName || "",
        userSurname: employee.userSurname || "",
        type: employee.type || EMPLOYEE_TYPES.MANAGER,
        login: { emailAddress: employee.login?.emailAddress || "" },
        contact: { phoneNumber: employee.contact?.phoneNumber || "" },
        address: {
          streetNumber: employee.address?.streetNumber || "",
          streetName: employee.address?.streetName || "",
          city: employee.address?.city || "",
          postalCode: employee.address?.postalCode || "",
        },
        isActive: employee.isActive !== undefined ? employee.isActive : true,
      };

      if (employee.type === EMPLOYEE_TYPES.MANAGER) {
        baseData.hireDate = employee.hireDate || "";
        baseData.department = employee.department || "";
        baseData.position = employee.position || "";
      } else if (employee.type === EMPLOYEE_TYPES.ACCOUNTANT) {
        baseData.employeeType = employee.employeeType || "";
        baseData.hasTaxFillingAuthority =
          employee.hasTaxFillingAuthority || false;
        baseData.certificationNumber = employee.certificationNumber || "";
      } else if (employee.type === EMPLOYEE_TYPES.WASH_ATTENDANT) {
        baseData.shift = employee.shift || SHIFT_TYPES.DAY;
        baseData.hourlyRate = employee.hourlyRate || "";
        baseData.yearsOfExperience = employee.yearsOfExperience || "";
        baseData.specialization = employee.specialization || "";
      }

      setFormData(baseData);
    }
  }, [employee]);

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }

    if ((field === "userName" || field === "userSurname") && nameError) {
      setNameError("");
    }
  };

  const validateName = () => {
    if (!formData.userName.trim() || !formData.userSurname.trim()) {
      return true;
    }

    const currentEmployeeId = employee ? employee.userId : null;
    if (
      isDuplicateEmployee(
        formData.userName,
        formData.userSurname,
        currentEmployeeId
      )
    ) {
      setNameError(
        `An employee named "${formData.userName} ${formData.userSurname}" already exists.`
      );
      return false;
    }

    setNameError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName()) return;

    const requiredFields = [
      "userName",
      "userSurname",
      "login.emailAddress",
      "contact.phoneNumber",
    ];
    const missingFields = requiredFields.filter((field) => {
      const value = field.includes(".")
        ? formData[field.split(".")[0]][field.split(".")[1]]
        : formData[field];
      return !value;
    });

    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (
      formData.type === EMPLOYEE_TYPES.ACCOUNTANT &&
      !formData.certificationNumber
    ) {
      toast.error("Certification number is required for accountants");
      return;
    }

    if (
      formData.type === EMPLOYEE_TYPES.WASH_ATTENDANT &&
      !formData.hourlyRate
    ) {
      toast.error("Hourly rate is required for wash attendants");
      return;
    }

    onSubmit(formData);
  };

  const renderTypeSpecificFields = () => {
    switch (formData.type) {
      case EMPLOYEE_TYPES.MANAGER:
        return (
          <div className="pt-4 border-t border-gray-50 mt-4 space-y-4">
            <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider">Manager Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Hire Date</label>
                <input
                  type="date"
                  value={formData.hireDate}
                  onChange={(e) => handleInputChange("hireDate", e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-semibold outline-none focus:border-blue-600 transition-all"
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Department</label>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => handleInputChange("department", e.target.value)}
                  placeholder="Enter department"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium outline-none focus:border-blue-600 transition-all"
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Position</label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => handleInputChange("position", e.target.value)}
                  placeholder="Enter position"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium outline-none focus:border-blue-600 transition-all"
                  disabled={loading}
                />
              </div>
            </div>
          </div>
        );

      case EMPLOYEE_TYPES.ACCOUNTANT:
        return (
          <div className="pt-4 border-t border-gray-50 mt-4 space-y-4">
            <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider">Accountant Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider after:content-['*'] after:ml-0.5 after:text-red-500">Employee Type</label>
                <select
                  value={formData.employeeType}
                  onChange={(e) => handleInputChange("employeeType", e.target.value)}
                  className={`w-full px-3 py-2 bg-gray-50 border rounded-lg text-sm font-semibold outline-none focus:border-blue-600 transition-all ${!formData.employeeType ? "border-red-200 focus:border-red-500" : "border-gray-100"}`}
                  required
                  disabled={loading}
                >
                  <option value="">Select type</option>
                  <option value="SENIOR">Senior Accountant</option>
                  <option value="JUNIOR">Junior Accountant</option>
                  <option value="INTERN">Accounting Intern</option>
                </select>
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider after:content-['*'] after:ml-0.5 after:text-red-500">Certification Number</label>
                <input
                  type="text"
                  value={formData.certificationNumber}
                  onChange={(e) => handleInputChange("certificationNumber", e.target.value)}
                  placeholder="Enter certification number"
                  className={`w-full px-3 py-2 bg-gray-50 border rounded-lg text-sm font-medium outline-none focus:border-blue-600 transition-all ${!formData.certificationNumber ? "border-red-200 focus:border-red-500" : "border-gray-100"}`}
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex items-center pb-2">
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-bold text-gray-600">
                  <input
                    type="checkbox"
                    checked={formData.hasTaxFillingAuthority}
                    onChange={(e) => handleInputChange("hasTaxFillingAuthority", e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                    disabled={loading}
                  />
                  Has Tax Filing Authority
                </label>
              </div>
            </div>
          </div>
        );

      case EMPLOYEE_TYPES.WASH_ATTENDANT:
        return (
          <div className="pt-4 border-t border-gray-50 mt-4 space-y-4">
            <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider">Wash Attendant Details</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Shift</label>
                <select
                  value={formData.shift}
                  onChange={(e) => handleInputChange("shift", e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-semibold outline-none focus:border-blue-600 transition-all"
                  disabled={loading}
                >
                  <option value={SHIFT_TYPES.DAY}>Day Shift</option>
                  <option value={SHIFT_TYPES.NIGHT}>Night Shift</option>
                  <option value={SHIFT_TYPES.SWING}>Swing Shift</option>
                </select>
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider after:content-['*'] after:ml-0.5 after:text-red-500">Hourly Rate (ZAR)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.hourlyRate}
                  onChange={(e) => handleInputChange("hourlyRate", e.target.value)}
                  placeholder="Enter hourly rate"
                  className={`w-full px-3 py-2 bg-gray-50 border rounded-lg text-sm font-semibold outline-none focus:border-blue-600 transition-all ${!formData.hourlyRate ? "border-red-200 focus:border-red-500" : "border-gray-100"}`}
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Years of Experience</label>
                <input
                  type="number"
                  value={formData.yearsOfExperience}
                  onChange={(e) => handleInputChange("yearsOfExperience", e.target.value)}
                  placeholder="Enter years"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium outline-none focus:border-blue-600 transition-all"
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Specialization</label>
                <select
                  value={formData.specialization}
                  onChange={(e) => handleInputChange("specialization", e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-semibold outline-none focus:border-blue-600 transition-all"
                  disabled={loading}
                >
                  <option value="">Select specialization</option>
                  <option value="INTERIOR">Interior Cleaning</option>
                  <option value="EXTERIOR">Exterior Cleaning</option>
                  <option value="DETAILING">Detailing</option>
                  <option value="POLISHING">Polishing</option>
                </select>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-[2rem] border border-gray-100 w-full max-w-4xl shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Modal Window Header */}
        <div className="p-6 border-b border-gray-50 flex items-center justify-between shrink-0">
          <h2 className="text-xl font-black text-gray-900 tracking-tight">Edit Employee</h2>
          <button
            className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors font-bold"
            onClick={onCancel}
            disabled={loading}
          >
            ×
          </button>
        </div>

        {/* Modal Body Container */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col space-y-1 max-w-xs">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider after:content-['*'] after:ml-0.5 after:text-red-500">Employee Type Mapping</label>
            <select
              value={formData.type}
              onChange={(e) => handleInputChange("type", e.target.value)}
              className={`px-3 py-2 bg-gray-50 border rounded-lg text-sm font-semibold outline-none focus:border-blue-600 transition-all ${!formData.type ? "border-red-200 focus:border-red-500" : "border-gray-100"}`}
              disabled={loading}
              required
            >
              <option value={EMPLOYEE_TYPES.MANAGER}>Manager</option>
              <option value={EMPLOYEE_TYPES.ACCOUNTANT}>Accountant</option>
              <option value={EMPLOYEE_TYPES.WASH_ATTENDANT}>Wash Attendant</option>
            </select>
          </div>

          <div>
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider after:content-['*'] after:ml-0.5 after:text-red-500">First Name</label>
                <input
                  type="text"
                  value={formData.userName}
                  onChange={(e) => handleInputChange("userName", e.target.value)}
                  className={`w-full px-3 py-2 bg-gray-50 border rounded-lg text-sm font-medium outline-none focus:border-blue-600 transition-all ${!formData.userName || nameError ? "border-red-200 focus:border-red-500" : "border-gray-100"}`}
                  placeholder="Enter first name"
                  required
                  disabled={loading}
                  onBlur={validateName}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider after:content-['*'] after:ml-0.5 after:text-red-500">Last Name</label>
                <input
                  type="text"
                  value={formData.userSurname}
                  onChange={(e) => handleInputChange("userSurname", e.target.value)}
                  className={`w-full px-3 py-2 bg-gray-50 border rounded-lg text-sm font-medium outline-none focus:border-blue-600 transition-all ${!formData.userSurname || nameError ? "border-red-200 focus:border-red-500" : "border-gray-100"}`}
                  placeholder="Enter last name"
                  required
                  disabled={loading}
                  onBlur={validateName}
                />
              </div>
            </div>
            {nameError && <div className="mt-2 text-xs font-semibold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100">{nameError}</div>}
          </div>

          <div>
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider after:content-['*'] after:ml-0.5 after:text-red-500">Email Address</label>
                <input
                  type="email"
                  value={formData.login.emailAddress}
                  onChange={(e) => handleInputChange("login.emailAddress", e.target.value)}
                  className={`w-full px-3 py-2 bg-gray-50 border rounded-lg text-sm font-medium outline-none focus:border-blue-600 transition-all ${!formData.login.emailAddress ? "border-red-200 focus:border-red-500" : "border-gray-100"}`}
                  placeholder="Enter email"
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider after:content-['*'] after:ml-0.5 after:text-red-500">Phone Number</label>
                <input
                  type="tel"
                  value={formData.contact.phoneNumber}
                  onChange={(e) => handleInputChange("contact.phoneNumber", e.target.value)}
                  className={`w-full px-3 py-2 bg-gray-50 border rounded-lg text-sm font-medium outline-none focus:border-blue-600 transition-all ${!formData.contact.phoneNumber ? "border-red-200 focus:border-red-500" : "border-gray-100"}`}
                  placeholder="Enter phone number"
                  required
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">Address Information</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Street Number</label>
                <input
                  type="text"
                  value={formData.address.streetNumber}
                  onChange={(e) => handleInputChange("address.streetNumber", e.target.value)}
                  placeholder="No."
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium outline-none focus:border-blue-600 transition-all"
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Street Name</label>
                <input
                  type="text"
                  value={formData.address.streetName}
                  onChange={(e) => handleInputChange("address.streetName", e.target.value)}
                  placeholder="Street"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium outline-none focus:border-blue-600 transition-all"
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider">City</label>
                <input
                  type="text"
                  value={formData.address.city}
                  onChange={(e) => handleInputChange("address.city", e.target.value)}
                  placeholder="City"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium outline-none focus:border-blue-600 transition-all"
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Postal Code</label>
                <input
                  type="text"
                  value={formData.address.postalCode}
                  onChange={(e) => handleInputChange("address.postalCode", e.target.value)}
                  placeholder="Code"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium outline-none focus:border-blue-600 transition-all"
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          {renderTypeSpecificFields()}

          <div className="pt-4 border-t border-gray-50">
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-2">Employment Status</h3>
            <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-bold text-gray-600">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => handleInputChange("isActive", e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                disabled={loading}
              />
              Active Employee Status Allocation
            </label>
          </div>
        </form>

        {/* Modal Submit Actions */}
        <div className="p-6 border-t border-gray-50 bg-gray-50/50 flex items-center justify-end gap-2 shrink-0 rounded-b-[2rem]">
          <button
            type="button"
            className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-100 text-gray-500 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors"
            disabled={loading || !!nameError}
          >
            {loading ? "Updating..." : "Update Employee"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Data Sheet Table Matrix View
const EmployeeTable = ({ employees, onEdit, onRefresh }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.01)] overflow-hidden">
      <div className="p-6 border-b border-gray-50 flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-base font-black text-gray-900 uppercase tracking-tight">Employee Registry</h2>
        <button 
          className="px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-100 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors" 
          onClick={onRefresh}
        >
          Refresh Matrix List
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/70 border-b border-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-wider">
              <th className="py-4 px-6">Name</th>
              <th className="py-4 px-6">Type</th>
              <th className="py-4 px-6">Email Address</th>
              <th className="py-4 px-6">Phone Mapping</th>
              <th className="py-4 px-6">Position / Node Details</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm font-medium text-gray-700">
            {employees.map((employee) => (
              <tr key={`${employee.type}-${employee.userId}`} className="hover:bg-gray-50/30 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-black text-gray-900">
                    {employee.userName} {employee.userSurname}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-2 py-0.5 bg-gray-100 border border-gray-200 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded-md">
                    {employee.type}
                  </span>
                </td>
                <td className="py-4 px-6 text-xs font-mono">{employee.login?.emailAddress}</td>
                <td className="py-4 px-6 text-xs">{employee.contact?.phoneNumber}</td>
                <td className="py-4 px-6 text-xs max-w-xs">
                  {employee.type === "Manager" && (
                    <div className="space-y-0.5">
                      <div className="font-bold text-gray-800">{employee.position}</div>
                      <div className="text-gray-400 font-medium">{employee.department}</div>
                      {employee.hireDate && (
                        <div className="text-[10px] font-bold text-blue-900 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded inline-block">
                          Hired: {new Date(employee.hireDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  )}
                  {employee.type === "Accountant" && (
                    <div className="space-y-0.5">
                      <div className="font-bold text-gray-800">{employee.employeeType}</div>
                      <div className="text-gray-400 font-medium">
                        {employee.hasTaxFillingAuthority ? "✓ Tax Filing Authority Granted" : "✕ No Tax Authority"}
                      </div>
                      <div className="text-[10px] font-mono text-gray-400">Cert No: {employee.certificationNumber}</div>
                    </div>
                  )}
                  {employee.type === "Wash Attendant" && (
                    <div className="space-y-0.5">
                      <div className="font-bold text-gray-800">Shift: {employee.shift}</div>
                      <div className="text-emerald-700 font-semibold">ZAR {employee.hourlyRate}/hr</div>
                      {employee.yearsOfExperience && (
                        <div className="text-gray-400 font-medium">Exp: {employee.yearsOfExperience} years</div>
                      )}
                      {employee.specialization && (
                        <div className="text-[10px] font-bold uppercase text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded inline-block">
                          {employee.specialization}
                        </div>
                      )}
                    </div>
                  )}
                </td>
                <td className="py-4 px-6">
                  <span className={`px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-md border ${
                    employee.isActive
                      ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                      : "bg-red-50 border-red-100 text-red-600"
                  }`}>
                    {employee.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button
                    className="px-3 py-1 bg-white hover:bg-gray-50 border border-gray-100 text-blue-900 font-black text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
                    onClick={() => onEdit(employee)}
                    title="Edit Employee"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {employees.length === 0 && (
        <div className="p-8 text-center text-sm font-semibold text-gray-400 bg-gray-50/50">
          No personnel entries matched the specified segment options.
        </div>
      )}
    </div>
  );
};

