// import React, { useEffect, useState } from "react";
// import { BsThreeDotsVertical } from "react-icons/bs";

// import NavbarCustomer from "../../components/NavbarCustomer";
// import Footer from "../../components/Footer";
// import "./BookingHistory.css";
// import { pageNames } from "../pageNames";


// export default function BookingHistory() {

//   document.title = pageNames.c_booking_history

//   const [bookings, setBookings] = useState([]);
//   const [paymentStatusMap, setPaymentStatusMap] = useState({});
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 👤 Get logged-in customer ID (from JWT or localStorage)
//   const userId = localStorage.getItem("userId");

//   const fetchBookings = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(
//         `http://localhost:8080/mobileglow/api/bookings/customer/${userId}`
//       );
//       if (!res.ok) throw new Error("Failed to fetch bookings");

//       const data = await res.json();
//       setBookings(data);

//       // Get payment status for each booking
//       const statusMap = {};
//       for (const booking of data) {
//         const res2 = await fetch(
//           `http://localhost:8080/mobileglow/api/bookings/${booking.bookingId}/payment-status`
//         );
//         const isPaid = await res2.json();
//         statusMap[booking.bookingId] = isPaid;
//       }
//       setPaymentStatusMap(statusMap);
//     } catch (err) {
//       console.error("❌ Failed to load bookings:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (userId) fetchBookings();
//   }, [userId]);

//   // Split bookings into upcoming and past
//   const now = new Date();
//   const upcomingBookings = bookings.filter(
//     (b) => new Date(b.bookingDateTime) >= now
//   );
//   const pastBookings = bookings.filter(
//     (b) => new Date(b.bookingDateTime) < now
//   );

//   const cancelBooking = async (bookingId) => {
//     if (!window.confirm("Cancel this booking?")) return;
//     try {
//       const res = await fetch(
//         `http://localhost:8080/mobileglow/api/bookings/${bookingId}/cancel`,
//         { method: "PUT", headers: { "Content-Type": "application/json" } }
//       );
//       if (!res.ok) throw new Error("Failed to cancel booking");
//       alert("Booking cancelled successfully!");
//       fetchBookings();
//     } catch (err) {
//       console.error(err);
//       alert("Error cancelling booking.");
//     }
//   };

//   // if (loading)
//   //   return (
//   //     <div className="customer-bookings-container">
//   //       {/* <NavbarCustomer /> */}
        
//   //       <main className="cb-content">
//   //         <h2>Loading your bookings...</h2>
//   //       </main>

//   //       {/* <Footer /> */}
//   //     </div>
//   //   );

//   return (
//     <div className="customer-bookings-container">
//       {/* <NavbarCustomer /> */}

//       <main className="cb-content app-content">
//         <h1>My Bookings</h1>
//         <p>View and manage your previous and upcoming car wash bookings.</p>

//         {/* UPCOMING BOOKINGS */}
//         <section className="cb-section">
//           <h2>Upcoming Bookings</h2>
//           {upcomingBookings.length === 0 ? (
//             <p>No upcoming bookings found.</p>
//           ) : (
//             <div className="em-table">
//               <div className="em-table-header">
//                 <div>ID</div>
//                 <div>Date</div>
//                 <div>Time</div>
//                 <div>Vehicle</div>
//                 <div>Attendant</div>
//                 <div>Status</div>
//                 <div>Actions</div>
//               </div>
//               {upcomingBookings.map((booking) => {

//               console.log(
//                   "Booking:",
//                   booking.bookingId,
//                   "Cancelled:",
//                   booking.cancelled
//                 ); // 👈 Add this line here

//                 const dateObj = new Date(booking.bookingDateTime);
//                 const date = dateObj.toLocaleDateString();
//                 const time = dateObj.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });
//                 const isPaid = paymentStatusMap[booking.bookingId];
//                 return (
//                   <div
// className={`em-table-row ${booking.cancelled ? "cancelled-row" : ""}`}
//                     key={booking.bookingId}
//                   >
//                     <div>{booking.bookingId}</div>
//                     <div>{date}</div>
//                     <div>{time}</div>
//                     <div>
//                       {booking.vehicle?.carMake} {booking.vehicle?.carModel}
//                     </div>
//                     <div>
//                       {booking.washAttendant
//                         ? `${booking.washAttendant.userName} ${booking.washAttendant.userSurname}`
//                         : "Not Assigned"}
//                     </div>
//                     <div>
//                       <span className={`status-tag ${isPaid ? "paid" : "not-paid"}`}>
//                         {isPaid ? "PAID" : "NOT PAID"}
//                       </span>
//                     </div>
//                     <div>
//                       <div className="dropdown-wrapper">
//                         {/* Disable actions if cancelled */}
//                         {booking.cancelled === 1 ? (
//                           <span style={{ color: "#888" }}>Cancelled</span>
//                         ) : (
//                           <>
//                             <button
//                               className="dropdown-toggle"
//                               onClick={() =>
//                                 setActiveDropdown(
//                                   activeDropdown === booking.bookingId
//                                     ? null
//                                     : booking.bookingId
//                                 )
//                               }
//                             >
//                               <BsThreeDotsVertical size={18} />
//                             </button>
//                             {activeDropdown === booking.bookingId && (
//                               <div className="dropdown-menu">
//                                 {!isPaid && (
//                                   <button
//                                     onClick={() =>
//                                       (window.location.href = `/payment/${booking.bookingId}`)
//                                     }
//                                   >
//                                     Pay
//                                   </button>
//                                 )}
//                                 <button onClick={() => cancelBooking(booking.bookingId)}>
//                                   Cancel
//                                 </button>
//                               </div>
//                             )}
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </section>

//         {/* PAST BOOKINGS */}
//         <section className="cb-section">
//           <h2>Past Bookings</h2>
//           {pastBookings.length === 0 ? (
//             <p>No past bookings yet.</p>
//           ) : (
//             <div className="em-table">
//               <div className="em-table-header">
//                 <div>ID</div>
//                 <div>Date</div>
//                 <div>Time</div>
//                 <div>Vehicle</div>
//                 <div>Attendant</div>
//                 <div>Status</div>
//               </div>
//               {pastBookings.map((booking) => {
//                 const dateObj = new Date(booking.bookingDateTime);
//                 const date = dateObj.toLocaleDateString();
//                 const time = dateObj.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });
//                 const isPaid = paymentStatusMap[booking.bookingId];
//                 return (
//                   <div className="em-table-row" key={booking.bookingId}>
//                     <div>{booking.bookingId}</div>
//                     <div>{date}</div>
//                     <div>{time}</div>
//                     <div>
//                       {booking.vehicle?.carMake} {booking.vehicle?.carModel}
//                     </div>
//                     <div>
//                       {booking.washAttendant
//                         ? `${booking.washAttendant.userName} ${booking.washAttendant.userSurname}`
//                         : "Not Assigned"}
//                     </div>
//                     <div>
//                       <span
//                         className={`status-tag ${isPaid ? "paid" : "not-paid"}`}
//                       >
//                         {isPaid ? "PAID" : "NOT PAID"}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </section>
//       </main>


//       {/* <Footer /> */}
//     </div>
//   );
// };


// newer1
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import NavbarCustomer from "../../components/NavbarCustomer";
import Footer from "../../components/Footer";
import { pageNames } from "../pageNames";

export default function CustomerBookingHistory() {
  document.title = pageNames.c_booking_history;

  const [bookings, setBookings] = useState([]);
  const [paymentStatusMap, setPaymentStatusMap] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [loading, setLoading] = useState(true);

  // 👤 Get logged-in customer ID (from JWT or localStorage)
  const userId = localStorage.getItem("userId");

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:8080/mobileglow/api/bookings/customer/${userId}`
      );
      if (!res.ok) throw new Error("Failed to fetch bookings");

      const data = await res.json();
      setBookings(data);

      // Get payment status for each booking
      const statusMap = {};
      for (const booking of data) {
        const res2 = await fetch(
          `http://localhost:8080/mobileglow/api/bookings/${booking.bookingId}/payment-status`
        );
        const isPaid = await res2.json();
        statusMap[booking.bookingId] = isPaid;
      }
      setPaymentStatusMap(statusMap);
    } catch (err) {
      console.error("❌ Failed to load bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) fetchBookings();
  }, [userId]);

  // Split bookings into upcoming and past
  const now = new Date();
  const upcomingBookings = bookings.filter(
    (b) => new Date(b.bookingDateTime) >= now
  );
  const pastBookings = bookings.filter(
    (b) => new Date(b.bookingDateTime) < now
  );

  const cancelBooking = async (bookingId) => {
    if (!window.confirm("Cancel this booking?")) return;
    try {
      const res = await fetch(
        `http://localhost:8080/mobileglow/api/bookings/${bookingId}/cancel`,
        { method: "PUT", headers: { "Content-Type": "application/json" } }
      );
      if (!res.ok) throw new Error("Failed to cancel booking");
      alert("Booking cancelled successfully!");
      fetchBookings();
    } catch (err) {
      console.error(err);
      alert("Error cancelling booking.");
    }
  };

  // Close dynamic action menus on window click
  useEffect(() => {
    const handleOutsideClick = () => setActiveDropdown(null);
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-800">
      {/* <NavbarCustomer /> */}

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 pt-24 pb-12 space-y-12">
        
        {/* Workspace Title Frame */}
        <div className="space-y-1.5">
          <h1 className="text-3xl font-black tracking-tight text-gray-900">My Bookings</h1>
          <p className="text-sm font-medium text-gray-500">
            View and manage your previous and upcoming car wash bookings.
          </p>
        </div>

        {/* ========================================================= */}
        {/* UPCOMING BOOKINGS SECTION                                 */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-3">
            Upcoming Bookings
          </h2>
          
          {upcomingBookings.length === 0 ? (
            <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">
              No upcoming bookings found.
            </div>
          ) : (
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.01)]">
              
              {/* Header Row */}
              <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50/70 border-b border-gray-100 p-4 text-[10px] font-black uppercase tracking-wider text-gray-400">
                <div className="col-span-1">ID</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-1">Time</div>
                <div className="col-span-3">Vehicle</div>
                <div className="col-span-3">Attendant</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-1 text-right">Actions</div>
              </div>

              {/* Data Rows Stack */}
              <div className="divide-y divide-gray-50">
                {upcomingBookings.map((booking) => {
                  console.log("Booking:", booking.bookingId, "Cancelled:", booking.cancelled);

                  const dateObj = new Date(booking.bookingDateTime);
                  const date = dateObj.toLocaleDateString();
                  const time = dateObj.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  });
                  const isPaid = paymentStatusMap[booking.bookingId];
                  const isCancelled = booking.cancelled === 1;

                  return (
                    <div
                      key={booking.bookingId}
                      className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center p-4 text-xs font-bold transition-colors hover:bg-gray-50/40 ${
                        isCancelled ? "bg-gray-50/80 opacity-60 line-through text-gray-400" : "text-gray-900"
                      }`}
                    >
                      {/* Mobile Column Mapping Framework */}
                      <div className="col-span-1 font-mono text-gray-400 md:text-gray-900">
                        <span className="md:hidden font-sans font-black uppercase text-[10px] tracking-wider block mb-0.5">ID:</span>
                        #{booking.bookingId}
                      </div>
                      <div className="col-span-2">
                        <span className="md:hidden font-black uppercase text-[10px] tracking-wider text-gray-400 block mb-0.5">Date:</span>
                        {date}
                      </div>
                      <div className="col-span-1 font-mono text-gray-600 md:text-gray-900">
                        <span className="md:hidden font-sans font-black uppercase text-[10px] tracking-wider text-gray-400 block mb-0.5">Time:</span>
                        {time}
                      </div>
                      <div className="col-span-3">
                        <span className="md:hidden font-black uppercase text-[10px] tracking-wider text-gray-400 block mb-0.5">Vehicle:</span>
                        {booking.vehicle ? `${booking.vehicle.carMake} ${booking.vehicle.carModel}` : "N/A"}
                      </div>
                      <div className="col-span-3 truncate">
                        <span className="md:hidden font-black uppercase text-[10px] tracking-wider text-gray-400 block mb-0.5">Attendant:</span>
                        {booking.washAttendant ? `${booking.washAttendant.userName} ${booking.washAttendant.userSurname}` : "Not Assigned"}
                      </div>
                      <div className="col-span-1">
                        <span className="md:hidden font-black uppercase text-[10px] tracking-wider text-gray-400 block mb-0.5">Status:</span>
                        <span className={`inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded ${
                          isPaid 
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                            : "bg-amber-50 text-amber-700 border border-amber-100"
                        }`}>
                          {isPaid ? "PAID" : "NOT PAID"}
                        </span>
                      </div>
                      
                      {/* Interactive Control Dropdowns Frame */}
                      <div className="col-span-1 text-left md:text-right pt-2 md:pt-0 border-t border-dashed border-gray-100 md:border-none flex justify-end">
                        <div className="relative inline-block text-left" onClick={(e) => e.stopPropagation()}>
                          {isCancelled ? (
                            <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 bg-gray-200/50 px-2 py-1 rounded">
                              Cancelled
                            </span>
                          ) : (
                            <>
                              <button
                                onClick={() => setActiveDropdown(activeDropdown === booking.bookingId ? null : booking.bookingId)}
                                className="p-2 hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded-xl transition-colors"
                              >
                                <BsThreeDotsVertical size={16} />
                              </button>
                              
                              {activeDropdown === booking.bookingId && (
                                <div className="absolute right-0 mt-1 w-28 bg-white border border-gray-100 rounded-xl shadow-xl z-20 overflow-hidden divide-y divide-gray-50 animate-in fade-in slide-in-from-top-1 duration-100">
                                  {!isPaid && (
                                    <button
                                      onClick={() => (window.location.href = `/payment/${booking.bookingId}`)}
                                      className="w-full text-left px-4 py-2.5 text-xs font-bold text-blue-900 hover:bg-gray-50 transition-colors"
                                    >
                                      Pay Now
                                    </button>
                                  )}
                                  <button
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      cancelBooking(booking.bookingId);
                                    }}
                                    className="w-full text-left px-4 py-2.5 text-xs font-bold text-red-600 hover:bg-gray-50 transition-colors"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* ========================================================= */}
        {/* PAST BOOKINGS SECTION                                     */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-3">
            Past Bookings
          </h2>

          {pastBookings.length === 0 ? (
            <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">
              No past bookings yet.
            </div>
          ) : (
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.01)]">
              
              {/* Header Row */}
              <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50/70 border-b border-gray-100 p-4 text-[10px] font-black uppercase tracking-wider text-gray-400">
                <div className="col-span-1">ID</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-1">Time</div>
                <div className="col-span-3">Vehicle</div>
                <div className="col-span-4">Attendant</div>
                <div className="col-span-1 text-right">Status</div>
              </div>

              {/* Data Rows Stack */}
              <div className="divide-y divide-gray-50">
                {pastBookings.map((booking) => {
                  const dateObj = new Date(booking.bookingDateTime);
                  const date = dateObj.toLocaleDateString();
                  const time = dateObj.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  });
                  const isPaid = paymentStatusMap[booking.bookingId];

                  return (
                    <div
                      key={booking.bookingId}
                      className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center p-4 text-xs font-bold text-gray-900 transition-colors hover:bg-gray-50/40"
                    >
                      <div className="col-span-1 font-mono text-gray-400 md:text-gray-900">
                        <span className="md:hidden font-sans font-black uppercase text-[10px] tracking-wider block mb-0.5">ID:</span>
                        #{booking.bookingId}
                      </div>
                      <div className="col-span-2">
                        <span className="md:hidden font-black uppercase text-[10px] tracking-wider text-gray-400 block mb-0.5">Date:</span>
                        {date}
                      </div>
                      <div className="col-span-1 font-mono text-gray-600 md:text-gray-900">
                        <span className="md:hidden font-sans font-black uppercase text-[10px] tracking-wider text-gray-400 block mb-0.5">Time:</span>
                        {time}
                      </div>
                      <div className="col-span-3">
                        <span className="md:hidden font-black uppercase text-[10px] tracking-wider text-gray-400 block mb-0.5">Vehicle:</span>
                        {booking.vehicle ? `${booking.vehicle.carMake} ${booking.vehicle.carModel}` : "N/A"}
                      </div>
                      <div className="col-span-4 truncate">
                        <span className="md:hidden font-black uppercase text-[10px] tracking-wider text-gray-400 block mb-0.5">Attendant:</span>
                        {booking.washAttendant ? `${booking.washAttendant.userName} ${booking.washAttendant.userSurname}` : "Not Assigned"}
                      </div>
                      <div className="col-span-1 text-left md:text-right">
                        <span className="md:hidden font-black uppercase text-[10px] tracking-wider text-gray-400 block mb-0.5">Status:</span>
                        <span className={`inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded ${
                          isPaid 
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                            : "bg-amber-50 text-amber-700 border border-amber-100"
                        }`}>
                          {isPaid ? "PAID" : "NOT PAID"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>

      </main>

      {/* <Footer /> */}
    </div>
  );
}
