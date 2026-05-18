
export const pageNames = {
    // --- Public Pages
    home: "Kleen Masheens", 
    about: "About Us | MobileGlow", 
    contact: "Contact Us | MobileGlow", 
    services: "Our Detailing Services | MobileGlow", 
    s_interior: "Premium Interior Care | MobileGlow", 
    s_exterior: "Advanced Exterior Wash | MobileGlow", 
    s_full: "Complete Showroom Detailing | MobileGlow", 
    s_protection: "Paint & Ceramic Protection | MobileGlow", 

    // --- Account & Authentication 
    role: "Select Your Profile | MobileGlow", 
    login: "Account Login | MobileGlow", 
    signup: "Create Your Account | MobileGlow", 
    address: "Configure Service Address | MobileGlow", 
    deactivate: "Deactivate Account | MobileGlow", 
    change_password: "Change your Password | MobileGlow", 


    // --- Employee Dashboard Engine
    employee: "Staff Portal | MobileGlow", 
    e_home: "Employee Dashboard | MobileGlow", 
    e_profile: "Staff Profile View | MobileGlow", 
    e_profile_edit: "Modify Staff Profile | MobileGlow", 
    e_profile_manage: "Manage Credentials | MobileGlow", 
    e_manage_customers: "Manage Customers | MobileGlow", 
    e_manage_employees: "Manage Employees | MobileGlow", 

    e_payment: "Earnings & Payroll Tracking | MobileGlow", 
    e_bookings: "Assigned Service Bookings | MobileGlow", 
    e_cleaning: "Active Cleaning Checklist | MobileGlow", 
    e_services: "Services | MobileGlow", 

    e_management: "Operations Management | MobileGlow", 
    e_performance: "Staff Performance Analytics | MobileGlow", 

    // --- Customer Dashboard Engine
    customer: "Client Hub | MobileGlow", 
    c_home: "Customer Dashboard | MobileGlow", 
    c_profile: "My Profile Details | MobileGlow", 
    c_profile_edit: "Edit Profile Info | MobileGlow", 
    c_vehicle: "My Vehicles | MobileGlow", 
    c_booking: "Schedule New Detailing | MobileGlow", 
    c_booking_history: "Past Services & Invoices | MobileGlow", 
    c_deactivate_account: "Account Closure Request | MobileGlow", 
    c_password_reset: "Secure Password Update | MobileGlow", 
    c_confirm: "Booking Confirmation | MobileGlow", 

    // --- Other
    _metadata: "System Manifest & Live Router | Developer Diagnostics",
}

// function setPageTitle(){ }
function pageTitle(){ }


// --- 36 routes --- // 
export const pageRoutes = {
    // --- Public 
    root: "/", 
    home: "/", 
    about: "/about", 
    contact: "/contact", 

    services: "/services", 
    s_exterior: "/services/exterior", 
    s_interior: "/services/interior",
    s_full: "/services/full-detailing", 
    s_protection: "/services/protection", 

    // --- Account related 
    role: "/role", 
    login: "/login", 
    signup: "/sign-up", 
    // or 
    // create_account: "/create-account", 
    address: "/address", 
    deactivate: "/deactivate-account", 
    change_password: "/change-password", 

    // --- Employee 
    employee: "/employee", 
    e_home: "/employee/home", 
    e_profile: "/employee/profile", 
    e_profile_edit: "/employee/profile-edit", 
    // e_profile_manage: "/employee/manage-profile", // ? same as edit profile
    e_payment: "/employee/payments", 
    e_bookings: "/employee/bookings", 
    e_services: "/employee/services", 
    e_manage_employees: "/employee/manage-employees", 
    e_manage_customers: "/employee/manage-customers", 
    e_performance: "/employee/performance", 


    // --- Customer 
    customer: "/customer", 
    c_home: "/customer/home", 
    c_profile: "/customer/profile", 
    c_profile_edit: "/customer/profile-edit", 
    c_vehicles: "/customer/vehicles", 

    c_booking: "/customer/booking", 
    c_booking1: "/customer/booking1", 
    c_booking_history: "/customer/booking/history", 
    c_booking_vehicle: "/customer/booking/vehicle", 
    c_booking_confirm: "/customer/booking/confirm", 


    // --- Other 
    _metadata: "/_metadata",
}
