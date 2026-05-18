// import React, { useState, useEffect, useRef } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";

// import NavbarCustomer from "../../components/NavbarCustomer";
// import Footer from "../../components/Footer";
// import "./BookingTwo.css";


// export default function BookingTwo(){
//   const location = useLocation();
//   const navigate = useNavigate();

//   const savedBookingData =
//     JSON.parse(sessionStorage.getItem("bookingData")) || {};
//   const {
//     cart = [],
//     totalPrice = 0,
//     selectedDateTime = null,
//     serviceIds = [],
//   } = location.state || savedBookingData;

//   const initialDateTime = selectedDateTime ? new Date(selectedDateTime) : null;

//   const [selectedDate, setSelectedDate] = useState(
//     initialDateTime
//       ? new Date(
//           initialDateTime.getFullYear(),
//           initialDateTime.getMonth(),
//           initialDateTime.getDate()
//         )
//       : null
//   );

//   const [selectedTime, setSelectedTime] = useState(
//     initialDateTime
//       ? new Date(
//           1970,
//           0,
//           1,
//           initialDateTime.getHours(),
//           initialDateTime.getMinutes(),
//           initialDateTime.getSeconds()
//         )
//       : null
//   );

//   const [unavailableTimes, setUnavailableTimes] = useState([]);
//   const [visibleMonth, setVisibleMonth] = useState("");
//   const scrollRef = useRef(null);
//   const INITIAL_BUFFER = 30;
//   const [days, setDays] = useState([]);
//   const latestDateRef = useRef(null);

//   // Load initial days
//   useEffect(() => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const generated = [];
//     for (let offset = 0; offset <= INITIAL_BUFFER; offset++) {
//       const d = new Date(today);
//       d.setDate(today.getDate() + offset);
//       generated.push(d);
//     }

//     setDays(generated);
//     latestDateRef.current = generated[generated.length - 1];

//     setVisibleMonth(
//       today.toLocaleDateString("en-US", { month: "long", year: "numeric" })
//     );

//     setTimeout(() => {
//       if (scrollRef.current) {
//         const child = scrollRef.current.children[0];
//         if (child) {
//           child.scrollIntoView({ behavior: "auto", inline: "start" });
//         }
//       }
//     }, 50);
//   }, []);

//   // Fetch unavailable times
//   useEffect(() => {
//     if (!selectedDate) {
//       setUnavailableTimes([]);
//       return;
//     }

//     const fetchUnavailableTimes = async () => {
//       const formattedDate = selectedDate.toLocaleDateString("en-CA");
//       try {
//         const response = await fetch(
//           `http://localhost:8080/mobileglow/api/bookings/unavailable-timeslots?date=${formattedDate}`
//         );
//         if (!response.ok) throw new Error("Failed to fetch unavailable slots");

//         const data = await response.json();
//         const times = data.map((timeStr) => {
//           const [hour, minute] = timeStr.split(":").map(Number);
//           const dateObj = new Date(selectedDate);
//           dateObj.setHours(hour, minute, 0, 0);
//           return dateObj;
//         });
//         setUnavailableTimes(times);
//       } catch (error) {
//         console.error("Fetch error:", error);
//         setUnavailableTimes([]);
//       }
//     };

//     fetchUnavailableTimes();
//   }, [selectedDate]);

//   // Infinite scroll days
//   const extendDays = () => {
//     setDays((prevDays) => {
//       const newDays = [];
//       for (let i = 1; i <= 15; i++) {
//         const nextDay = new Date(latestDateRef.current);
//         nextDay.setDate(nextDay.getDate() + i);
//         newDays.push(nextDay);
//       }
//       latestDateRef.current = newDays[newDays.length - 1];
//       return [...prevDays, ...newDays];
//     });
//   };

//   const onScroll = () => {
//     if (!scrollRef.current) return;
//     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//     if (scrollLeft + clientWidth >= scrollWidth - 100) {
//       extendDays();
//     }

//     const children = Array.from(scrollRef.current.children);
//     const containerRect = scrollRef.current.getBoundingClientRect();
//     const firstVisible = children.find((child) => {
//       const rect = child.getBoundingClientRect();
//       return rect.left >= containerRect.left;
//     });

//     if (firstVisible?.dataset?.date) {
//       const date = new Date(firstVisible.dataset.date);
//       const monthStr = date.toLocaleDateString("en-US", {
//         month: "long",
//         year: "numeric",
//       });
//       setVisibleMonth(monthStr);
//     }
//   };

//   const generateTimeSlots = () => {
//     const slots = [];
//     if (!selectedDate) return slots;
//     for (let h = 8; h <= 17; h++) {
//       for (let m = 0; m < 60; m += 15) {
//         const t = new Date(selectedDate);
//         t.setHours(h, m, 0, 0);
//         slots.push(t);
//       }
//     }
//     return slots;
//   };

//   const timeSlots = generateTimeSlots();

//   const formatTime = (date) =>
//     date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

//   const handleContinue = () => {
//     if (!selectedDate || !selectedTime) {
//       alert("Please select both a date and time!");
//       return;
//     }

//     const year = selectedDate.getFullYear();
//     const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
//     const day = String(selectedDate.getDate()).padStart(2, "0");
//     const hours = String(selectedTime.getHours()).padStart(2, "0");
//     const minutes = String(selectedTime.getMinutes()).padStart(2, "0");

//     const localDateTimeStr = `${year}-${month}-${day}T${hours}:${minutes}:00`;

//     const serviceIds = cart.map((s) => ({ cleaningServiceId: s.id }));

//     sessionStorage.setItem(
//       "bookingData",
//       JSON.stringify({
//         cart,
//         totalPrice,
//         selectedDateTime: localDateTimeStr,
//         serviceIds,
//       })
//     );

//     navigate("/bookingvehicle", {
//       state: {
//         cart,
//         totalPrice,
//         selectedDateTime: localDateTimeStr,
//         serviceIds,
//       },
//     });
//   };

//   return (
//     <>
//       {/* Full-width sticky header */}
//       <NavbarCustomer />

//       <div className="booking-two-infinite-container app-content">
//         <div className="breadcrumb">
//           <Link to="/" className="breadcrumb-link">
//             Home
//           </Link>
//           <span className="booking-breadcrumb-dot">•</span>
//           <Link
//             to="/booking"
//             className="breadcrumb-link"
//             state={{ cart, totalPrice }}
//           >
//             Select a service
//           </Link>
//           <span className="booking-breadcrumb-dot">•</span>
//           <strong>Select a date and time</strong>
//         </div>

//         <h2 className="booking-page-heading">Select Date & Time</h2>

//         <div className="panel-container">
//           {/* Left Panel */}
//           <div className="left-panel">
//             <div className="visible-month-header">{visibleMonth}</div>

//             <div
//               className="date-scroll-container"
//               ref={scrollRef}
//               onScroll={onScroll}
//             >
//               {days.map((day, idx) => {
//                 const isSelected =
//                   selectedDate &&
//                   day.toDateString() === selectedDate.toDateString();
//                 return (
//                   <div
//                     key={idx}
//                     data-date={day.toISOString()}
//                     className={`date-item ${isSelected ? "selected" : ""}`}
//                     onClick={() => {
//                       setSelectedDate(day);
//                       setSelectedTime(null);
//                     }}
//                   >
//                     <div className="day-short">
//                       {day.toLocaleDateString("en-US", { weekday: "short" })}
//                     </div>
//                     <div className="date-num">{day.getDate()}</div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="time-selector-vertical">
//               <label>Select a time:</label>
//               {!selectedDate ? (
//                 <div className="no-date-selected">
//                   <p>Please select a date to view available times.</p>
//                 </div>
//               ) : (
//                 <div className="time-list">
//                   {timeSlots.length > 0 ? (
//                     timeSlots.map((time, idx) => {
//                       const isSelected =
//                         selectedTime &&
//                         time.getHours() === selectedTime.getHours() &&
//                         time.getMinutes() === selectedTime.getMinutes();
//                       const isUnavailable = unavailableTimes.some(
//                         (unavailable) => unavailable.getTime() === time.getTime()
//                       );

//                       return (
//                         <div
//                           key={idx}
//                           className={`time-block ${
//                             isSelected ? "selected" : ""
//                           } ${isUnavailable ? "disabled" : ""}`}
//                           onClick={() => {
//                             if (!isUnavailable) setSelectedTime(time);
//                           }}
//                         >
//                           {formatTime(time)}
//                           {isUnavailable && (
//                             <span className="fully-booked-label">
//                               Fully booked
//                             </span>
//                           )}
//                         </div>
//                       );
//                     })
//                   ) : (
//                     <p>No available times for this date.</p>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Panel */}
//           <div className="right-panel">
//             <div className="date-time-business-info">
//               <h3>MobileGlow Car Wash</h3>
//               <p>4.9 ⭐ (32)</p>
//               <p>Parklands, Cape Town</p>
//             </div>

//             <div className="summary-section">
//               <h4>Selected Services</h4>
//               <ul>
//                 {cart.map((s, i) => (
//                   <li key={i}>
//                     {s.serviceName.replace(/_/g, " ")} — R {s.priceOfService}
//                   </li>
//                 ))}
//               </ul>

//               <h4>Date & Time</h4>
//               <p>
//                 {selectedDate && selectedTime
//                   ? `${selectedDate.toDateString()} at ${formatTime(
//                       selectedTime
//                     )}`
//                   : "Not selected"}
//               </p>

//               <div className="total-price">
//                 <strong>Total:</strong> R {totalPrice}
//               </div>
//             </div>

//             <div className="right-panel-continue">
//               <button
//                 className="continue-btn"
//                 onClick={handleContinue}
//                 disabled={!selectedDate || !selectedTime}
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Full-width footer */}
//       <Footer />
//     </>
//   );
// };


// newer1

import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import NavbarCustomer from "../../components/NavbarCustomer";
import Footer from "../../components/Footer";


export default function CustomerBooking1() {
  document.title = "Booking2"
  
  const location = useLocation();
  const navigate = useNavigate();

  const savedBookingData =
    JSON.parse(sessionStorage.getItem("bookingData")) || {};
  const {
    cart = [],
    totalPrice = 0,
    selectedDateTime = null,
    serviceIds = [],
  } = location.state || savedBookingData;

  const initialDateTime = selectedDateTime ? new Date(selectedDateTime) : null;

  const [selectedDate, setSelectedDate] = useState(
    initialDateTime
      ? new Date(
          initialDateTime.getFullYear(),
          initialDateTime.getMonth(),
          initialDateTime.getDate()
        )
      : null
  );

  const [selectedTime, setSelectedTime] = useState(
    initialDateTime
      ? new Date(
          1970,
          0,
          1,
          initialDateTime.getHours(),
          initialDateTime.getMinutes(),
          initialDateTime.getSeconds()
        )
      : null
  );

  const [unavailableTimes, setUnavailableTimes] = useState([]);
  const [visibleMonth, setVisibleMonth] = useState("");
  const scrollRef = useRef(null);
  const INITIAL_BUFFER = 30;
  const [days, setDays] = useState([]);
  const latestDateRef = useRef(null);

  // Load initial days
  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const generated = [];
    for (let offset = 0; offset <= INITIAL_BUFFER; offset++) {
      const d = new Date(today);
      d.setDate(today.getDate() + offset);
      generated.push(d);
    }

    setDays(generated);
    latestDateRef.current = generated[generated.length - 1];

    setVisibleMonth(
      today.toLocaleDateString("en-US", { month: "long", year: "numeric" })
    );

    setTimeout(() => {
      if (scrollRef.current) {
        const child = scrollRef.current.children[0];
        if (child) {
          child.scrollIntoView({ behavior: "auto", inline: "start" });
        }
      }
    }, 50);
  }, []);

  // Fetch unavailable times
  useEffect(() => {
    if (!selectedDate) {
      setUnavailableTimes([]);
      return;
    }

    const fetchUnavailableTimes = async () => {
      const formattedDate = selectedDate.toLocaleDateString("en-CA");
      try {
        const response = await fetch(
          `http://localhost:8080/mobileglow/api/bookings/unavailable-timeslots?date=${formattedDate}`
        );
        if (!response.ok) throw new Error("Failed to fetch unavailable slots");

        const data = await response.json();
        const times = data.map((timeStr) => {
          const [hour, minute] = timeStr.split(":").map(Number);
          const dateObj = new Date(selectedDate);
          dateObj.setHours(hour, minute, 0, 0);
          return dateObj;
        });
        setUnavailableTimes(times);
      } catch (error) {
        console.error("Fetch error:", error);
        setUnavailableTimes([]);
      }
    };

    fetchUnavailableTimes();
  }, [selectedDate]);

  // Infinite scroll days
  const extendDays = () => {
    setDays((prevDays) => {
      const newDays = [];
      for (let i = 1; i <= 15; i++) {
        const nextDay = new Date(latestDateRef.current);
        nextDay.setDate(nextDay.getDate() + i);
        newDays.push(nextDay);
      }
      latestDateRef.current = newDays[newDays.length - 1];
      return [...prevDays, ...newDays];
    });
  };

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollLeft + clientWidth >= scrollWidth - 100) {
      extendDays();
    }

    const children = Array.from(scrollRef.current.children);
    const containerRect = scrollRef.current.getBoundingClientRect();
    const firstVisible = children.find((child) => {
      const rect = child.getBoundingClientRect();
      return rect.left >= containerRect.left;
    });

    if (firstVisible?.dataset?.date) {
      const date = new Date(firstVisible.dataset.date);
      const monthStr = date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
      setVisibleMonth(monthStr);
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    if (!selectedDate) return slots;
    for (let h = 8; h <= 17; h++) {
      for (let m = 0; m < 60; m += 15) {
        const t = new Date(selectedDate);
        t.setHours(h, m, 0, 0);
        slots.push(t);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const handleContinue = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and time!");
      return;
    }

    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0");
    const hours = String(selectedTime.getHours()).padStart(2, "0");
    const minutes = String(selectedTime.getMinutes()).padStart(2, "0");

    const localDateTimeStr = `${year}-${month}-${day}T${hours}:${minutes}:00`;

    const serviceIds = cart.map((s) => ({ cleaningServiceId: s.id }));

    sessionStorage.setItem(
      "bookingData",
      JSON.stringify({
        cart,
        totalPrice,
        selectedDateTime: localDateTimeStr,
        serviceIds,
      })
    );

    // navigate("/bookingvehicle", {
    navigate("/customer/booking/confirm", {

      state: {
        cart,
        totalPrice,
        selectedDateTime: localDateTimeStr,
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
          <span className="text-gray-900 font-bold">Select a date and time</span>
        </div>

        <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-8">Select Date & Time</h2>

        {/* Layout Workspace Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Interactive Horizon Calendar and Time Slots Card Stream */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.01)] space-y-8">
            
            <div className="space-y-4">
              <div className="text-xs font-black uppercase tracking-wider text-gray-400">
                {visibleMonth}
              </div>

              {/* Horizontal Endless-Scroll Selection Bar */}
              <div
                className="flex overflow-x-auto gap-3 pb-3 scrollbar-none snap-x scroll-smooth"
                ref={scrollRef}
                onScroll={onScroll}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {days.map((day, idx) => {
                  const isSelected =
                    selectedDate &&
                    day.toDateString() === selectedDate.toDateString();
                  return (
                    <div
                      key={idx}
                      data-date={day.toISOString()}
                      onClick={() => {
                        setSelectedDate(day);
                        setSelectedTime(null);
                      }}
                      className={`flex-shrink-0 w-16 py-3 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all snap-center border active:scale-[0.96] ${
                        isSelected
                          ? "bg-blue-950 text-white border-blue-950 shadow-md shadow-blue-950/10"
                          : "bg-gray-50/70 text-gray-700 border-gray-100 hover:bg-gray-100/70"
                      }`}
                    >
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? "text-blue-200" : "text-gray-400"}`}>
                        {day.toLocaleDateString("en-US", { weekday: "short" })}
                      </span>
                      <span className="text-base font-black tracking-tight mt-0.5">
                        {day.getDate()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Vertical Time Frame Pipeline Selector */}
            <div className="space-y-4 border-t border-gray-50 pt-6">
              <label className="text-xs font-black uppercase tracking-wider text-gray-900 block">
                Select a time
              </label>

              {!selectedDate ? (
                <div className="bg-gray-50/50 border border-dashed border-gray-200/80 rounded-2xl p-8 text-center">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Please select a date to view available times.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[380px] overflow-y-auto pr-1">
                  {timeSlots.length > 0 ? (
                    timeSlots.map((time, idx) => {
                      const isSelected =
                        selectedTime &&
                        time.getHours() === selectedTime.getHours() &&
                        time.getMinutes() === selectedTime.getMinutes();
                      const isUnavailable = unavailableTimes.some(
                        (unavailable) => unavailable.getTime() === time.getTime()
                      );

                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            if (!isUnavailable) setSelectedTime(time);
                          }}
                          className={`py-3 px-4 rounded-xl text-center font-mono text-xs font-bold border transition-all flex flex-col items-center justify-center ${
                            isUnavailable
                              ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed line-through"
                              : isSelected
                              ? "bg-blue-950 text-white border-blue-950 shadow-sm"
                              : "bg-white text-gray-900 border-gray-100 hover:border-gray-200 cursor-pointer"
                          }`}
                        >
                          <span>{formatTime(time)}</span>
                          {isUnavailable && (
                            <span className="text-[8px] font-sans font-black uppercase tracking-wide text-red-400 mt-0.5 not-allowed no-underline block">
                              Fully booked
                            </span>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-xs text-gray-400 font-bold col-span-full py-4 text-center">
                      No available times for this date.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANEL: Sticky Booking Invoice Manifest Framework */}
          <aside className="lg:col-span-5 bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.02)] space-y-6 lg:sticky lg:top-24">
            
            {/* Corporate Location Block */}
            <div className="border-b border-gray-50 pb-4 space-y-1">
              <h3 className="text-base font-black tracking-tight text-gray-900">MobileGlow Car Wash</h3>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-gray-500">
                <span className="text-amber-500">4.9 ⭐</span>
                <span>(32 reviews)</span>
                <span>•</span>
                <span>Parklands, Cape Town</span>
              </div>
            </div>

            {/* Dynamic Breakdown Workspace Invoice */}
            <div className="space-y-5 text-xs">
              <div className="space-y-2">
                <h4 className="font-black uppercase tracking-wider text-gray-400 text-[10px]">
                  Selected Services
                </h4>
                <ul className="space-y-2 max-h-32 overflow-y-auto pr-1">
                  {cart.map((s, i) => (
                    <li key={i} className="flex justify-between items-center font-bold text-gray-900 bg-gray-50/60 border border-gray-100/50 p-2.5 rounded-xl">
                      <span className="truncate max-w-[180px]">{s.serviceName.replace(/_/g, " ")}</span>
                      <span className="font-mono text-gray-500 ml-2 shrink-0">R {s.priceOfService}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5 border-t border-gray-50 pt-4">
                <h4 className="font-black uppercase tracking-wider text-gray-400 text-[10px]">
                  Date & Time Placement
                </h4>
                <p className="font-bold text-gray-900 bg-gray-50/60 border border-gray-100/50 p-3 rounded-xl">
                  {selectedDate && selectedTime
                    ? `${selectedDate.toDateString()} at ${formatTime(selectedTime)}`
                    : "Not selected yet"}
                </p>
              </div>

              {/* Ledger Total Pricing Metrics Frame */}
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
                disabled={!selectedDate || !selectedTime}
                className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider shadow-sm transition-all ${
                  !selectedDate || !selectedTime
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

