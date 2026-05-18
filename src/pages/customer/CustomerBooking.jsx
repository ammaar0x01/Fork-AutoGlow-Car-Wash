// import React, { useState, useEffect } from "react";
// import { ToggleButton, ToggleButtonGroup } from "@mui/material";
// import { useNavigate, Link } from "react-router-dom";
// import { FaStar, FaTrash } from "react-icons/fa";

// // import "./Booking.css";
// import NavbarCustomer from "../../components/NavbarCustomer";
// import Footer from "../../components/Footer";

// import { pageNames } from "../pageNames";


// export default function CustomerBooking() {
//   document.title = pageNames.c_booking

//   const categories = [
//     "Exterior Wash",
//     "Interior Care",
//     "Full Detailing",
//     "Protection Services",
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("Exterior Wash");
//   const [services, setServices] = useState([]);
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:8080/mobileglow/api/cleaningservice/getAll")
//       .then((res) => res.json())
//       .then((data) => setServices(data))
//       .catch((err) => console.error("Error fetching services:", err));
//   }, []);

//   const handleCategoryChange = (event, newCategory) => {
//     if (newCategory) setSelectedCategory(newCategory);
//   };

//   const filteredServices = Array.isArray(services)
//     ? services.filter(
//         (s) =>
//           s.category?.trim().toLowerCase() ===
//           selectedCategory.trim().toLowerCase()
//       )
//     : [];

//   const addToCart = (service) => {
//     const normalized = { ...service, id: service.cleaningServiceId };
//     if (!cart.some((item) => item.id === normalized.id)) {
//       setCart([...cart, normalized]);
//     }
//   };

//   const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

//   const totalPrice = cart.reduce((sum, item) => sum + item.priceOfService, 0);

//   const handleContinue = () => {
//     if (cart.length === 0) return;
//     const serviceIds = cart.map((s) => ({ cleaningServiceId: s.id }));
//     const state = { cart, totalPrice, serviceIds };
//     sessionStorage.setItem("bookingData", JSON.stringify(state));
//     navigate("/bookingtwo", { state });
//   };

//   return (
//     <>
//       <div className="booking-layout app-content">
//         {/* Header */}
//         <div className="booking-header">
//           <div className="breadcrumb">
//             <Link to="/LandingCustomer" className="breadcrumb-link">
//               Home
//             </Link>
//             <span className="dot">•</span>
//             <strong>Select a service</strong>
//           </div>

//           <h1 className="main-title">Select a service</h1>

//           <div className="business-info-inline">
//             <span className="rating">
//               <strong>4.8</strong>
//             </span> 

//               <span className="stars">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </span>
//               <span>•</span>
//               <span>Open until 17:00</span>
//               <span>•</span>
//               <span>Cape Town</span>
//            </div>

//             {/* Optional banner area */}
//             <div className="bookingpage-banner">
//               <p>
//                 Select from our premium range of wash and detailing services —
//                 designed to make your car look showroom new.
//               </p>
//             </div>
          
//           {/* Panels */}
//           <section className="bookingpage-panels">
//             {/* Left */}
//             <div className="bookingpage-left">
//               <ToggleButtonGroup
//                 value={selectedCategory}
//                 exclusive
//                 onChange={handleCategoryChange}
//                 className="bookingpage-categories"
//               >
//                 {categories.map((cat) => (
//                   <ToggleButton
//                     key={cat}
//                     value={cat}
//                     className="bookingpage-category"
//                   >
//                     {cat}
//                   </ToggleButton>
//                 ))}
//               </ToggleButtonGroup>

//               <div className="bookingpage-service-list">
//                 {filteredServices.length === 0 ? (
//                   <p>No services available for this category</p>
//                 ) : (
//                   filteredServices.map((service) => (
//                     <div
//                       key={service.cleaningServiceId}
//                       className="bookingpage-service-card"
//                     >
//                       <div>
//                         <h5>{service.serviceName.replace(/_/g, " ")}</h5>
//                         <p className="bookingpage-duration">
//                           Duration: {service.duration}h
//                         </p>
//                         <p className="bookingpage-price">
//                           R {service.priceOfService}
//                         </p>
//                       </div>
//                       <button
//                         className={`bookingpage-add-btn ${
//                           cart.some((i) => i.id === service.cleaningServiceId)
//                             ? "bookingpage-added"
//                             : ""
//                         }`}
//                         onClick={() => {
//                           cart.some((i) => i.id === service.cleaningServiceId)
//                             ? removeFromCart(service.cleaningServiceId)
//                             : addToCart(service);
//                         }}
//                       >
//                         {cart.some((i) => i.id === service.cleaningServiceId)
//                           ? "✓ Selected"
//                           : "Add Service"}
//                       </button>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>

//             {/* Right */}
//             <aside className="bookingpage-right">
//               <h3>🧽 Your Selection</h3>
//               {cart.length === 0 ? (
//                 <p className="bookingpage-empty">No services selected yet</p>
//               ) : (
//                 <ul>
//                   {cart.map((item) => (
//                     <li key={item.id} className="bookingpage-cart-item">
//                       <span>
//                         {item.serviceName.replace(/_/g, " ")} – R{" "}
//                         {item.priceOfService}
//                       </span>
//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="bookingpage-remove-btn"
//                       >
//                         <FaTrash />
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               <div className="bookingpage-total">
//                 <strong>Total:</strong> R {totalPrice.toFixed(2)}
//               </div>

//               <button
//                 onClick={handleContinue}
//                 disabled={cart.length === 0}
//                 className="bookingpage-continue-btn"
//               >
//                 Continue
//               </button>
//             </aside>
//           </section>
//         </div>
        
//       </div>

//       <Footer />
//     </>
//   )
// }

// newer1 

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaStar, FaTrash } from "react-icons/fa";

import NavbarCustomer from "../../components/NavbarCustomer";
import Footer from "../../components/Footer";

import { pageNames } from "../pageNames";

export default function CustomerBooking() {
  document.title = pageNames.c_booking;

  const categories = [
    "Exterior Wash",
    "Interior Care",
    "Full Detailing",
    "Protection Services",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Exterior Wash");
  const [services, setServices] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/mobileglow/api/cleaningservice/getAll")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  const filteredServices = Array.isArray(services)
    ? services.filter(
        (s) =>
          s.category?.trim().toLowerCase() ===
          selectedCategory.trim().toLowerCase()
      )
    : [];

  const addToCart = (service) => {
    const normalized = { ...service, id: service.cleaningServiceId };
    if (!cart.some((item) => item.id === normalized.id)) {
      setCart([...cart, normalized]);
    }
  };

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const totalPrice = cart.reduce((sum, item) => sum + item.priceOfService, 0);

  const handleContinue = () => {
    if (cart.length === 0) return;
    const serviceIds = cart.map((s) => ({ cleaningServiceId: s.id }));
    const state = { cart, totalPrice, serviceIds };
    sessionStorage.setItem("bookingData", JSON.stringify(state));
    navigate("/bookingtwo", { state });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-800">
      {/* <NavbarCustomer /> */}

 {/* Absolute Back Button */}
      <button
        onClick={() => navigate('/customer')}
        className="absolute top-8 left-8 flex items-center justify-center 
        w-10 h-10 bg-white border border-gray-100 rounded-xl text-gray-400 
        hover:text-blue-900 shadow-sm hover:shadow transition-all group z-10 font-bold"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
      </button>      

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-semibold tracking-wide uppercase text-gray-400 mb-6">
          <Link to="/customer" className="hover:text-blue-950 transition-colors">
            Home
          </Link>
          <span>•</span>
          <span className="text-gray-900 font-bold">Select a service</span>
        </div>

        {/* Header Title Section */}
        <div className="space-y-3 mb-8">
          <h1 className="text-3xl font-black tracking-tight text-gray-900">Select a service</h1>
          
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-gray-500">
            <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md font-black">4.8</span>
            <div className="flex text-amber-400 text-xs space-x-0.5">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <span>•</span>
            <span>Open until 17:00</span>
            <span>•</span>
            <span className="text-gray-900 font-bold">Cape Town</span>
          </div>
        </div>

        {/* Marketing Banner */}
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-6 mb-8 shadow-sm">
          <p className="text-sm sm:text-base font-medium opacity-90 leading-relaxed max-w-2xl">
            Select from our premium range of wash and detailing services — designed to make your car look showroom new.
          </p>
        </div>

        {/* Interactive Layout Workspace Workspace Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Category Selector and Dynamic Service Cards Stack */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category Navigation Ribbon (Native Tailwind UI replacement for MUI) */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-gray-200/60 rounded-xl">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex-1 min-w-[120px] text-center py-2.5 px-3 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-150 ${
                      isActive
                        ? "bg-white text-gray-950 shadow-sm"
                        : "text-gray-500 hover:text-gray-900 hover:bg-white/40"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Service Selection Cards Render Pipeline */}
            <div className="space-y-3">
              {filteredServices.length === 0 ? (
                <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    No services available for this category
                  </p>
                </div>
              ) : (
                filteredServices.map((service) => {
                  const isSelected = cart.some((i) => i.id === service.cleaningServiceId);
                  return (
                    <div
                      key={service.cleaningServiceId}
                      className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.01)] flex flex-col sm:flex-row justify-between sm:items-center gap-4 transition-all hover:border-gray-200"
                    >
                      <div className="space-y-1">
                        <h5 className="font-black text-gray-900 text-base tracking-tight">
                          {service.serviceName.replace(/_/g, " ")}
                        </h5>
                        <div className="flex items-center space-x-2 text-xs font-bold text-gray-400">
                          <span>Duration: {service.duration}h</span>
                        </div>
                        <p className="text-lg font-black text-gray-900 font-mono pt-1">
                          R {service.priceOfService}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          isSelected ? removeFromCart(service.cleaningServiceId) : addToCart(service);
                        }}
                        className={`sm:w-32 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-[0.98] ${
                          isSelected
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : "bg-blue-900 hover:bg-blue-800 text-white"
                        }`}
                      >
                        {isSelected ? "✓ Selected" : "Add Service"}
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* RIGHT SIDE: Floating Dynamic Checkout Invoice Control Frame */}
          <aside className="lg:col-span-5 bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.02)] space-y-6 lg:sticky lg:top-24">
            <h3 className="text-xs font-black uppercase tracking-wider text-gray-900 border-b border-gray-50 pb-3">
              🧽 Your Selection
            </h3>

            {cart.length === 0 ? (
              <div className="py-8 text-center space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">No services selected yet</p>
                <p className="text-xs text-gray-400 max-w-[200px] mx-auto leading-normal">
                  Add items from the menu options panel to construct your order.
                </p>
              </div>
            ) : (
              <ul className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center text-xs font-bold text-gray-900 bg-gray-50/50 border border-gray-100/60 p-3 rounded-xl"
                  >
                    <span className="truncate max-w-[220px]">{item.serviceName.replace(/_/g, " ")}</span>
                    <div className="flex items-center space-x-3 ml-2 shrink-0">
                      <span className="font-mono text-gray-500">R {item.priceOfService}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <FaTrash className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Pricing Total Row Ledger */}
            <div className="border-t border-gray-100 pt-4 flex justify-between items-end">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-gray-900 block">Total Est</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mt-0.5">
                  VAT Inclusive Metrics
                </span>
              </div>
              <span className="text-3xl font-black text-gray-900 tracking-tight font-mono">
                R {totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleContinue}
              disabled={cart.length === 0}
              className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider shadow-sm transition-all ${
                cart.length === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-blue-900 hover:bg-blue-800 text-white active:scale-[0.98]"
              }`}
            >
              Continue
            </button>
          </aside>

        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
