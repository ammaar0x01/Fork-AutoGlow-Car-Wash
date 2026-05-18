import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import NavbarCustomer from "../../components/NavbarCustomer";
import Footer from "../../components/Footer";
import { pageNames } from "../pageNames";

export default function CustomerBookingVehicle() {
  document.title = pageNames.c_booking;

  const location = useLocation();
  const navigate = useNavigate();

  const {
    cart = [],
    totalPrice = 0,
    selectedDateTime = null,
    serviceIds = [],
  } = location.state || {};

  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [hasConflict, setHasConflict] = useState(false);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  // ✅ Fetch vehicles for this logged-in customer
  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:8080/mobileglow/api/vehicle/customer/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch vehicles");
        return response.json();
      })
      .then((data) => setVehicles(Array.isArray(data) ? data : []))
      .catch((error) => console.error("Error fetching vehicles:", error));
  }, [userId, token]);

  // ✅ Check for booking conflict
  const handleVehicleChange = async (event) => {
    const vehicleId = event.target.value;
    setSelectedVehicleId(vehicleId);
    setHasConflict(false);

    if (!vehicleId || !selectedDateTime) return;

    try {
      const dateObj = new Date(selectedDateTime);
      const formattedDateTime = `${dateObj.getFullYear()}-${String(
        dateObj.getMonth() + 1
      ).padStart(2, "0")}-${String(dateObj.getDate()).padStart(
        2,
        "0"
      )}T${String(dateObj.getHours()).padStart(2, "0")}:${String(
        dateObj.getMinutes()
      ).padStart(2, "0")}:00`;

      const response = await fetch(
        `http://localhost:8080/mobileglow/api/bookings/check-conflict?vehicleId=${vehicleId}&bookingDateTime=${encodeURIComponent(
          formattedDateTime
        )}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to check booking conflict");
      const conflict = await response.json();
      setHasConflict(conflict);

      if (conflict) {
        alert("⚠️ This vehicle is already booked at the selected time.");
      }
    } catch (error) {
      console.error("Error checking conflict:", error);
    }
  };

  const selectedVehicle = vehicles.find(
    (v) => String(v.vehicleID) === selectedVehicleId
  );

  // ✅ Continue to Confirm page
  const handleContinue = () => {
    if (!selectedVehicleId || !selectedVehicle) {
      alert("Please select a vehicle!");
      return;
    }

    navigate("/confirm", {
      state: {
        cart,
        totalPrice,
        selectedDateTime,
        selectedVehicle,
        serviceIds,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-800">
      {/* <NavbarCustomer /> */}

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 pt-24 pb-12">
        
        {/* Breadcrumb Navigation Ribbon */}
        <div className="flex flex-wrap items-center space-x-2 text-xs font-semibold tracking-wide uppercase text-gray-400 mb-6">
          <Link to="/customer" className="hover:text-blue-950 transition-colors">
            Home
          </Link>
          <span>•</span>
          <Link
            to="/customer/booking"
            className="hover:text-blue-950 transition-colors"
            state={{ cart, totalPrice }}
          >
            Select a service
          </Link>
          <span>•</span>
          <Link
            to="/customer/booking1"
            className="hover:text-blue-950 transition-colors"
            state={{ cart, totalPrice, selectedDateTime, serviceIds }}
          >
            Select a date and time
          </Link>
          <span>•</span>
          <span className="text-gray-900 font-bold">Select vehicle</span>
        </div>

        <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-8">Select Vehicle</h2>

        {/* Layout Workspace Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Vehicle Selection Panel */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.01)] space-y-6">
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-wider text-gray-900 block">
                Select your vehicle
              </label>
              
              <select
                onChange={handleVehicleChange}
                value={selectedVehicleId}
                className="w-full bg-gray-50/70 border border-gray-100 rounded-xl px-4 py-3.5 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-950/20 transition-all appearance-none cursor-pointer"
              >
                <option value="">Select Vehicle</option>
                {vehicles.length > 0 ? (
                  vehicles.map((vehicle) => (
                    <option
                      key={vehicle.vehicleID}
                      value={String(vehicle.vehicleID)}
                    >
                      {vehicle.carMake} {vehicle.carModel}
                    </option>
                  ))
                ) : (
                  <option disabled>No vehicles available</option>
                )}
              </select>
            </div>

            <button
              onClick={() =>
                navigate("/customer/vehicles", {
                  state: { cart, totalPrice, selectedDateTime, serviceIds },
                })
              }
              className="w-full sm:w-auto px-5 py-3 border border-gray-200 hover:border-gray-900 rounded-xl text-xs font-black uppercase tracking-wider text-gray-900 bg-white hover:bg-gray-50 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>➕</span> Add New Vehicle
            </button>

            {hasConflict && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3">
                <span className="text-sm">⚠️</span>
                <p className="text-xs font-bold text-red-700">
                  This vehicle is already booked at the selected time.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: Booking Summary Invoice Context */}
          <aside className="lg:col-span-5 bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.02)] space-y-6 lg:sticky lg:top-24">
            
            <div className="grid grid-cols-1 gap-6 text-xs">
              
              {/* Selected Services Subsection */}
              <div className="space-y-2">
                <h4 className="font-black uppercase tracking-wider text-gray-400 text-[10px]">
                  Selected Services
                </h4>
                <ul className="space-y-2 max-h-32 overflow-y-auto pr-1">
                  {cart.map((item, index) => (
                    <li key={index} className="flex justify-between items-center font-bold text-gray-900 bg-gray-50/60 border border-gray-100/50 p-2.5 rounded-xl">
                      <span className="truncate max-w-[180px]">{item.serviceName.replace(/_/g, " ")}</span>
                      <span className="font-mono text-gray-500 ml-2 shrink-0">R {item.priceOfService}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Vehicle Display Frame */}
              <div className="space-y-1.5 border-t border-gray-50 pt-4">
                <h4 className="font-black uppercase tracking-wider text-gray-400 text-[10px]">
                  Target Vehicle
                </h4>
                <p className="font-bold text-gray-900 bg-gray-50/60 border border-gray-100/50 p-3 rounded-xl">
                  {selectedVehicle
                    ? `${selectedVehicle.carMake} ${selectedVehicle.carModel}`
                    : "Not selected"}
                </p>
              </div>

              {/* Date & Time Segment */}
              <div className="space-y-1.5 border-t border-gray-50 pt-4">
                <h4 className="font-black uppercase tracking-wider text-gray-400 text-[10px]">
                  Date & Time Placement
                </h4>
                <p className="font-bold text-gray-900 bg-gray-50/60 border border-gray-100/50 p-3 rounded-xl">
                  {selectedDateTime
                    ? new Date(selectedDateTime).toLocaleString([], {
                        dateStyle: "medium",
                        timeStyle: "short"
                      })
                    : "Not selected"}
                </p>
              </div>

              {/* Total Ledger Pricing Break */}
              <div className="border-t border-gray-100 pt-4 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-900 block">Total Est</span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide block mt-0.5">
                    VAT Inclusive Metrics
                  </span>
                </div>
                <span className="text-3xl font-black text-gray-900 tracking-tight font-mono">
                  R {totalPrice}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleContinue}
                disabled={!selectedVehicleId || hasConflict}
                className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider shadow-sm transition-all ${
                  !selectedVehicleId || hasConflict
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-blue-900 hover:bg-blue-800 text-white active:scale-[0.98]"
                }`}
              >
                Continue
              </button>
            </div>
          </aside>

        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}


