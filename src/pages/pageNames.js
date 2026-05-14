
export const pageNames = {
    home: "Kleen Masheens", 
    about: "About Us | Kleen Masheens", 
    contact: "Contact Us | Kleen Masheens", 

    services: "Services | Kleen Masheens", 
    s_interior: "Interior Care", 
    s_exterior: "Exterior Wash", 
    s_full: "Full Detailing", 
    s_protection: "Protection Services", 


    role: "Role Selection", 
    login: "Login", 
    signup: "Sign Up", 

    employee: "Employee", 

    customer: "Customer", 

}

function pageTitle(){ }


const pageRoutes = {
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