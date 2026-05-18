import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

import { pageNames } from "../pageNames";


export default function CustomerConfirm() {
  document.title = pageNames.c_confirm;
  
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Booking data (passed from previous pages)
  const {
    cart = [],
    totalPrice = 0,
    selectedDateTime,
    selectedVehicle,
    serviceIds,
    selectedService = null,
    otherDetails = "",
  } = location.state || {};

  // 🧾 Booking state
  const [washAttendant, setWashAttendant] = useState(null);
  const [loadingAttendant, setLoadingAttendant] = useState(true);
  const [attendantError, setAttendantError] = useState(null);

  // 👤 Customer info
  const [customer, setCustomer] = useState(null);
  const [customerError, setCustomerError] = useState(null);
  const [address, setAddress] = useState(null);
  const [addressError, setAddressError] = useState(null);

  // 💳 Card info
  const [cards, setCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState("");
  const [cardError, setCardError] = useState(null);

  // 📧 Email
  const [customerEmail, setCustomerEmail] = useState("");

  // 💰 Payment
  const [paymentOption, setPaymentOption] = useState("PREPAID");

  // ✅ Popup
  const [showPopup, setShowPopup] = useState(false);

  // 🧍 Fetch wash attendant
  useEffect(() => {
    fetch("http://localhost:8080/mobileglow/wash-attendants/random")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch wash attendant");
        return res.json();
      })
      .then((data) => {
        setWashAttendant(data);
        setLoadingAttendant(false);
      })
      .catch((error) => {
        setAttendantError(error.message);
        setLoadingAttendant(false);
      });
  }, []);

  // 👤 Fetch customer
  useEffect(() => {
    const userId = localStorage.getItem("userId") || "5";
    fetch(`http://localhost:8080/mobileglow/api/customers/read/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch customer");
        return res.json();
      })
      .then((data) => setCustomer(data))
      .catch((error) => setCustomerError(error.message));
  }, []);

  // 🏠 Fetch address
  useEffect(() => {
    if (customer?.address?.addressID) {
      fetch(
        `http://localhost:8080/mobileglow/api/address/read/${customer.address.addressID}`
      )
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch address");
          return res.json();
        })
        .then(setAddress)
        .catch((error) => setAddressError(error.message));
    }
  }, [customer]);

  // 💳 Fetch cards
  useEffect(() => {
    const userId = localStorage.getItem("userId") || "5";
    fetch(`http://localhost:8080/mobileglow/api/cards/customer/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cards");
        return res.json();
      })
      .then((data) => setCards(Array.isArray(data) ? data : []))
      .catch((err) => setCardError(err.message));
  }, []);

  // 📧 Fetch email
  useEffect(() => {
    const userId = localStorage.getItem("userId") || "5";
    fetch(`http://localhost:8080/mobileglow/Login/byUser/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch login email");
        return res.json();
      })
      .then((data) => {
        if (data?.emailAddress) setCustomerEmail(data.emailAddress);
      })
      .catch((err) => console.error("❌ Login email fetch error:", err));
  }, []);

  // 📨 EmailJS setup
  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_w4p7dmi",
    TEMPLATE_ID: "template_j6sgwxj",
    PUBLIC_KEY: "skFnK8AxbQ2kQ_6CI",
  };

  const sendBookingConfirmation = (bookingData) => {
    if (!customerEmail) return;

    const emailParams = {
      to_name: `${customer?.userName || ""} ${
        customer?.userSurname || ""
      }`.trim(),
      email: customerEmail,
      booking_date: new Date(selectedDateTime).toLocaleDateString(),
      booking_time: new Date(selectedDateTime).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      vehicle: `${selectedVehicle?.carMake || ""} ${
        selectedVehicle?.carModel || ""
      }`.trim(),
      total_price: `R ${totalPrice || "0.00"}`,
      attendant_name: washAttendant
        ? `${washAttendant.userName} ${washAttendant.userSurname}`
        : "Assigned at service time",
      services: cart.map((s) => s.serviceName).join(", "),
    };

    emailjs
      .send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        emailParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(() => console.log("✅ Booking confirmation email sent"))
      .catch((err) => console.error("❌ Email failed:", err));
  };

  const saveBooking = async () => {
    if (!washAttendant || !selectedVehicle || !selectedDateTime) {
      alert("Missing booking information");
      return;
    }

    if (paymentOption === "PREPAID") {
      if (cards.length === 0) {
        alert("You must add a payment card before confirming your booking.");
        return;
      }
      if (!selectedCardId) {
        alert("Please select a card before confirming your booking.");
        return;
      }
    }

    const cleaningServicesPayload =
      serviceIds && serviceIds.length > 0
        ? serviceIds
        : cart.map((service) => ({ cleaningServiceId: service.id }));

    if (typeof selectedDateTime !== "string") {
      alert("Invalid booking date/time format.");
      return;
    }

    const payload = {
      cleaningServices: cleaningServicesPayload,
      vehicle: { vehicleID: selectedVehicle.vehicleID },
      washAttendant: {
        userId:
          washAttendant.userId || washAttendant.userID || washAttendant.id,
      },
      bookingDateTime: selectedDateTime,
      card: paymentOption === "PREPAID" ? { cardId: selectedCardId } : null,
      tipAdd: false,
      paymentOption,
      paymentStatus: paymentOption === "PREPAID" ? "PAID" : "PENDING",
    };

    try {
      const res = await fetch("http://localhost:8080/mobileglow/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(await res.text());
      const result = await res.json();
      console.log("✅ Booking saved:", result);

      if (paymentOption === "PREPAID") {
        try {
          const paymentPayload = {
            booking: { bookingId: result.bookingId },
            paymentAmount: totalPrice,
            paymentMethod: "CARD",
            paymentStatus: "PAID",
            card: { cardId: selectedCardId },
          };

          const payRes = await fetch(
            "http://localhost:8080/mobileglow/api/payments",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(paymentPayload),
            }
          );

          if (!payRes.ok) throw new Error(await payRes.text());
          console.log("💰 Payment successfully recorded in database");
        } catch (payErr) {
          console.error("❌ Failed to record payment:", payErr);
        }
      }

      setShowPopup(true);
      sendBookingConfirmation(result);
    } catch (err) {
      alert("Failed to save booking: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-24 pb-12">
       {/* Absolute Back Button */}
      <button
        // onClick={() => navigate('/customer')}
        onClick={() => navigate('/customer/booking1')}

        className="absolute top-8 left-8 flex items-center justify-center 
        w-10 h-10 bg-white border border-gray-100 rounded-xl text-gray-400 
        hover:text-blue-900 shadow-sm hover:shadow transition-all group z-10 font-bold"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
      </button>      

      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-xs font-semibold tracking-wide uppercase text-gray-400 mb-6">
        <a href="/customer" className="hover:text-blue-950 transition-colors">Home</a>
        <span>•</span>
        <a href="/customer/booking" className="hover:text-blue-950 transition-colors">Select a service</a>
        <span>•</span>
        <span className="text-gray-900 font-bold">Review & Confirm</span>
      </div>

      <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-8">Review and Confirm</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT WORKSPACE PANEL */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.01)] space-y-6">
            <h3 className="text-xs font-black uppercase tracking-wider text-gray-900 border-b border-gray-50 pb-3">
              Payment Method
            </h3>
            
            <div className="flex flex-col space-y-3">
              <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${
                paymentOption === "PREPAID" ? "border-blue-900 bg-blue-50/20" : "border-gray-100 hover:bg-gray-50/50"
              }`}>
                <input
                  type="radio"
                  name="paymentOption"
                  value="PREPAID"
                  checked={paymentOption === "PREPAID"}
                  onChange={() => setPaymentOption("PREPAID")}
                  className="w-4 h-4 text-blue-900 focus:ring-blue-900 border-gray-300"
                />
                <span className="text-sm font-bold text-gray-900">Pay Now (Secure Online Payment)</span>
              </label>

              <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${
                paymentOption === "ON_SITE" ? "border-blue-900 bg-blue-50/20" : "border-gray-100 hover:bg-gray-50/50"
              }`}>
                <input
                  type="radio"
                  name="paymentOption"
                  value="ON_SITE"
                  checked={paymentOption === "ON_SITE"}
                  onChange={() => setPaymentOption("ON_SITE")}
                  className="w-4 h-4 text-blue-900 focus:ring-blue-900 border-gray-300"
                />
                <span className="text-sm font-bold text-gray-900">Pay at Premises</span>
              </label>
            </div>

            {/* 💳 Card Selection Handler Layout Frame */}
            {paymentOption === "PREPAID" && (
              <div className="pt-4 border-t border-gray-50 space-y-3">
                {cardError ? (
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wide">Error loading card info</p>
                ) : cards.length > 0 ? (
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Select a saved card:</label>
                    <select
                      value={selectedCardId}
                      onChange={(e) => setSelectedCardId(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-blue-900 transition-all"
                    >
                      <option value="">-- Select Card --</option>
                      {cards.map((card) => (
                        <option key={card.cardId} value={card.cardId}>
                          {card.cardHolderName} •••• {card.cardNumber.slice(-4)} (Exp {card.expiryDate})
                        </option>
                      ))}
                    </select>
                    
                    <div className="pt-2">
                      <button
                        className="text-xs font-black text-blue-900 uppercase tracking-wider hover:text-blue-800 transition-colors"
                        onClick={() =>
                          navigate("/my-cards", {
                            state: { cart, totalPrice, selectedDateTime, selectedVehicle, serviceIds, selectedService, otherDetails },
                          })
                        }
                      >
                        ➕ Manage Payment Methods
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50/60 rounded-xl p-4 border border-dashed border-gray-200 text-center space-y-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">No saved cards found.</p>
                    <button
                      className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                      onClick={() =>
                        navigate("/my-cards", {
                          state: { cart, totalPrice, selectedDateTime, selectedVehicle, serviceIds, selectedService, otherDetails },
                        })
                      }
                    >
                      Manage Payment Methods
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cancellation & Operational Warnings Info Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.01)]">
              <h3 className="text-[10px] font-black uppercase tracking-wider text-gray-900 border-b border-gray-50 pb-2 mb-2">
                Cancellation Policy
              </h3>
              <p className="text-xs font-medium text-gray-500 leading-relaxed">
                Please cancel within <strong className="text-gray-900">24 hours</strong> of your scheduled appointment time slots.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.01)] text-xs font-medium text-gray-400 space-y-1.5">
              <p>24-hour cancellation policy applies dynamically.</p>
              <p>You may be held accountable for dynamic expenses incurred for changes less than 24 hours prior.</p>
              <p className="text-gray-500 font-semibold border-t border-gray-50 pt-1.5 mt-1.5">Therapeutic clean service space — zero tolerance framework.</p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL SUMMARY CARD */}
        <div className="lg:col-span-5 bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.02)] space-y-6 sticky top-24">
          <div>
            <h3 className="text-xl font-black tracking-tight text-gray-900">MobileGlow Car Wash</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-900 mt-0.5">Parklands, Cape Town</p>
          </div>

          {selectedDateTime && (
            <div className="bg-gray-50/70 rounded-2xl p-4 border border-gray-100/50 flex flex-col space-y-1">
              <span className="text-sm font-black text-gray-900">
                {new Date(selectedDateTime).toLocaleDateString()}
              </span>
              <span className="text-xs font-bold text-gray-500">
                {new Date(selectedDateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          )}

          <div className="border-t border-gray-100 pt-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-gray-400 uppercase tracking-wider font-bold">Vehicle Matrix</span>
              <span className="text-gray-900 font-black">
                {selectedVehicle ? `${selectedVehicle.carMake} ${selectedVehicle.carModel}` : "N/A"}
              </span>
            </div>

            {washAttendant && !loadingAttendant && (
              <div className="flex items-center justify-between text-xs font-medium border-t border-gray-50 pt-2">
                <span className="text-gray-400 uppercase tracking-wider font-bold">Attendant Assignment</span>
                <span className="text-gray-900 font-black">{washAttendant.userName} {washAttendant.userSurname}</span>
              </div>
            )}
          </div>

          {/* Service Render Stack */}
          <div className="border-t border-gray-100 pt-4 space-y-3">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-gray-400">Selected Services</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
              {cart.map((service) => (
                <div key={service.id} className="flex justify-between items-center text-xs font-bold text-gray-900 bg-gray-50/30 border border-gray-50 p-2.5 rounded-xl">
                  <span className="truncate max-w-[200px]">{service.serviceName}</span>
                  <span className="text-gray-500 font-mono">R {service.priceOfService}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Ledger Layout Module */}
          <div className="border-t border-gray-100 pt-4 space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-gray-400">
              <span>Subtotal Cost</span>
              <span className="font-mono">R {totalPrice}</span>
            </div>

            <div className="border-t border-gray-100 pt-4 flex justify-between items-end">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-gray-900 block">Total Due</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mt-0.5">
                  {paymentOption === "PREPAID" ? "Pay with Secure Card" : "Pay at Premises Venue"}
                </span>
              </div>
              <span className="text-3xl font-black text-gray-900 tracking-tight font-mono">R {totalPrice}</span>
            </div>
          </div>

          <button
            onClick={saveBooking}
            disabled={showPopup}
            className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider shadow-sm transition-all ${
              showPopup 
                ? "bg-emerald-600 text-white cursor-default" 
                : "bg-blue-900 hover:bg-blue-800 text-white active:scale-[0.98]"
            }`}
          >
            {showPopup ? "Booking Made!" : "Confirm Booking"}
          </button>
        </div>
      </div>

      {/* Global Success Confirmation Dialog Frame */}
      {showPopup && washAttendant && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-[2rem] border border-gray-100 w-full max-w-sm shadow-2xl p-6 sm:p-8 space-y-5 text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xl mx-auto border border-emerald-100">
              ✓
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 tracking-tight">Booking Confirmed!</h2>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider mt-0.5">System pipeline allocation complete</p>
            </div>
            <p className="text-sm font-medium text-gray-500 leading-relaxed">
              Wash Attendant <strong className="text-gray-900">{washAttendant.userName} {washAttendant.userSurname}</strong> has been allocated to fulfill your detailing request.
            </p>
            <button 
              onClick={() => setShowPopup(false)}
              className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors"
            >
              Close Ledger View
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

