
// export const pageNames = {
//     home: "Kleen Masheens", 
//     about: "About Us | Kleen Masheens", 
//     contact: "Contact Us | Kleen Masheens", 

//     services: "Services | Kleen Masheens", 
//     s_interior: "Interior Care", 
//     s_exterior: "Exterior Wash", 
//     s_full: "Full Detailing", 
//     s_protection: "Protection Services", 


//     role: "Role Selection", 
//     login: "Login", 
//     signup: "Sign Up", 

//     employee: "Employee", 

//     customer: "Customer", 

// }

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


export const pageRoutes = {
    // --- Public 
    root: "/", 
    home: "/home", 
    about: "/about", 
    contact: "/contact", 

    services: "/services", 
    s_interior: "/interior",
    // or 
    // s_interior: "/services/interior", 
    s_exterior: "/exterior", 
    s_full: "/full-detailing", 
    s_protection: "/protection", 

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
    // or 
    // employee_home: "/employee/home", 
    e_profile: "/employee/profile", 
    e_profile_edit: "/employee/edit-profile", 
    e_profile_manage: "/employee/manage-profile", // ? same as edit profile
    e_payment: "/employee/payment", 
    e_bookings: "/employee/bookings", 
    e_cleaning: "/employee/cleaning", 
    e_management: "/employee/management", // ?  
    e_performance: "/employee/performance", 


    // --- Customer 
    customer: "/customer", 
    c_home: "/customer/home", 
    c_profile: "/customer/home", 
    c_profile_edit: "/customer/home", 
    c_vehicle: "/customer/home", 
    c_booking: "/customer/home", 
    c_booking_history: "/customer/home", 
    c_deactivate_account: "/customer/home", 
    c_password_reset: "/customer/home", 
    c_confirm: "/customer/home", 


    // --- Other 
    _metadata: "/_metadata",
}