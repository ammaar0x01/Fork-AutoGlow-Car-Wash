// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { MdFilterList } from "react-icons/md";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { BsThreeDotsVertical } from "react-icons/bs";

// import NavbarEmployee from "../../components/NavbarEmployee";
// import Footer from "../../components/Footer";

// // import "./ManageBookings.css";


// export default function EmployeeManageBookings() {
//   const navigate = useNavigate();

//   const [bookings, setBookings] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [editedBooking, setEditedBooking] = useState({});
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [paymentStatusMap, setPaymentStatusMap] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");

//   const [filterStatus, setFilterStatus] = useState("");
//   const [filterTip, setFilterTip] = useState("");
//   const [filterStartDate, setFilterStartDate] = useState("");
//   const [filterEndDate, setFilterEndDate] = useState("");
//   const [filterAttendant, setFilterAttendant] = useState("");

//   const [showFilters, setShowFilters] = useState(false);
//   const [userVehicles, setUserVehicles] = useState([]);

//   const toggleDropdown = (id) => {
//     setActiveDropdown((prev) => (prev === id ? null : id));
//   };

//   const fetchBookings = async () => {
//     try {
//       const res = await fetch("http://localhost:8080/mobileglow/api/bookings");
//       const data = await res.json();
//       setBookings(data);

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
//       console.error("Failed to fetch bookings or payment statuses:", err);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const filteredBookings = bookings.filter((booking) => {
//     const search = searchTerm.toLowerCase();

//     const id = booking.bookingId?.toString().toLowerCase() || "";
//     const date = new Date(booking.bookingDateTime)
//       .toLocaleDateString()
//       .toLowerCase();
//     const time = new Date(booking.bookingDateTime)
//       .toLocaleTimeString()
//       .toLowerCase();
//     const carMake = booking.vehicle?.carMake?.toLowerCase() || "";
//     const carModel = booking.vehicle?.carModel?.toLowerCase() || "";
//     const attendantName = booking.washAttendant?.userName?.toLowerCase() || "";
//     const attendantSurname =
//       booking.washAttendant?.userSurname?.toLowerCase() || "";

//     const matchesSearch =
//       id.includes(search) ||
//       date.includes(search) ||
//       time.includes(search) ||
//       carMake.includes(search) ||
//       carModel.includes(search) ||
//       attendantName.includes(search) ||
//       attendantSurname.includes(search);

//     if (!matchesSearch) return false;

//     const status = paymentStatusMap[booking.bookingId] ? "PAID" : "NOT_PAID";
//     if (filterStatus && filterStatus !== status) return false;

//     if (filterTip === "true" && !booking.tipAdd) return false;
//     if (filterTip === "false" && booking.tipAdd) return false;

//     const bookingDate = new Date(booking.bookingDateTime);
//     if (filterStartDate && bookingDate < new Date(filterStartDate))
//       return false;
//     if (filterEndDate && bookingDate > new Date(filterEndDate)) return false;

//     const attendantFullName = (
//       booking.washAttendant?.userName +
//       " " +
//       booking.washAttendant?.userSurname
//     )
//       .toLowerCase()
//       .trim();
//     if (
//       filterAttendant &&
//       !attendantFullName.includes(filterAttendant.toLowerCase().trim())
//     )
//       return false;

//     return true;
//   });
//   return (
//     <div className="manage-bookings-container">
//       <NavbarEmployee />
//       <main className="em-bookings-form-container app-content">
//         <section className="section-header">
//           <h1>Manage Bookings</h1>
//           <p>Easily view, update, and track all your bookings in one place.</p>
//         </section>

//         <div className="em-controls">
//           <div className="manage-bookings-search">
//             <input
//               type="text"
//               placeholder="Search bookings..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <button
//             className="em-primary-btn filter-toggle-btn"
//             onClick={() => setShowFilters((prev) => !prev)}
//           >
//             <span className="filter-button-content">
//               <MdFilterList size={20} />
//               <span>Filter</span>
//               <span
//                 className={`chevron-icon ${
//                   showFilters ? "rotate-up" : "rotate-down"
//                 }`}
//               >
//                 {showFilters ? <FaChevronUp /> : <FaChevronDown />}
//               </span>
//             </span>
//           </button>
//         </div>

//         {showFilters && (
//           <div
//             className={`em-filters-wrapper ${
//               showFilters ? "expanded" : "collapsed"
//             }`}
//           >
//             <div className="em-filters">
//               <select
//                 value={filterStatus}
//                 onChange={(e) => setFilterStatus(e.target.value)}
//               >
//                 <option value="">All Statuses</option>
//                 <option value="PAID">Paid</option>
//                 <option value="NOT_PAID">Not Paid</option>
//               </select>

//               <select
//                 value={filterTip}
//                 onChange={(e) => setFilterTip(e.target.value)}
//               >
//                 <option value="">Tip Added</option>
//                 <option value="true">Yes</option>
//                 <option value="false">No</option>
//               </select>

//               <input
//                 type="date"
//                 value={filterStartDate}
//                 onChange={(e) => setFilterStartDate(e.target.value)}
//               />
//               <input
//                 type="date"
//                 value={filterEndDate}
//                 onChange={(e) => setFilterEndDate(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Filter by Attendant"
//                 value={filterAttendant}
//                 onChange={(e) => setFilterAttendant(e.target.value)}
//               />
//             </div>
//           </div>
//         )}

//         <div className="em-table">
//           <div className="em-table-header">
//             <div>ID</div>
//             <div>Date</div>
//             <div>Time</div>
//             <div>Tip</div>
//             <div>Vehicle</div>
//             <div>Attendant</div>
//             <div>Status</div>
//             <div>Actions</div>
//           </div>

//           {filteredBookings.length === 0 ? (
//             <div className="em-empty-state">
//               <h3>No Bookings Found</h3>
//               <p>Try adjusting your filters or search term.</p>
//             </div>
//           ) : (
//             filteredBookings.map((booking) => {
//               const isEditing = booking.bookingId === editingId;
//               const dateObj = new Date(booking.bookingDateTime);
//               const date = dateObj.toLocaleDateString();
//               const time = dateObj.toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               });

//               return (
// <div
//   className={`em-table-row ${booking.cancelled ? "cancelled-row" : ""}`}
//   key={booking.bookingId}
// >                  <div>{booking.bookingId}</div>
//                   <div>
//                     {isEditing ? (
//                       <input
//                         type="date"
//                         value={new Date(editedBooking.bookingDateTime)
//                           .toISOString()
//                           .slice(0, 10)}
//                         onChange={(e) => {
//                           const newDate = e.target.value;
//                           const oldDateTime = new Date(
//                             editedBooking.bookingDateTime
//                           );
//                           const updatedDateTime = new Date(newDate);
//                           updatedDateTime.setHours(oldDateTime.getHours());
//                           updatedDateTime.setMinutes(oldDateTime.getMinutes());
//                           setEditedBooking((prev) => ({
//                             ...prev,
//                             bookingDateTime: updatedDateTime.toISOString(),
//                           }));
//                         }}
//                       />
//                     ) : (
//                       date
//                     )}
//                   </div>
//                   <div>
//                     {isEditing ? (
//                       <input
//                         type="time"
//                         value={new Date(editedBooking.bookingDateTime)
//                           .toISOString()
//                           .slice(11, 16)}
//                         onChange={(e) => {
//                           const [hours, minutes] = e.target.value.split(":");
//                           const updatedDateTime = new Date(
//                             editedBooking.bookingDateTime
//                           );
//                           updatedDateTime.setHours(hours);
//                           updatedDateTime.setMinutes(minutes);
//                           setEditedBooking((prev) => ({
//                             ...prev,
//                             bookingDateTime: updatedDateTime.toISOString(),
//                           }));
//                         }}
//                       />
//                     ) : (
//                       time
//                     )}
//                   </div>
//                   <div>
//                     {isEditing ? (
//                       <input
//                         type="checkbox"
//                         checked={booking.tipAdd}
//                         disabled
//                       />
//                     ) : booking.tipAdd ? (
//                       "Yes"
//                     ) : (
//                       "No"
//                     )}
//                   </div>
//                   <div>
//                     {isEditing ? (
//                       <select
//                         value={editedBooking.vehicle?.vehicleId || ""}
//                         onChange={(e) => {
//                           const selectedVehicle = userVehicles.find(
//                             (v) => v.vehicleId === e.target.value
//                           );
//                           setEditedBooking((prev) => ({
//                             ...prev,
//                             vehicle: selectedVehicle,
//                           }));
//                         }}
//                       >
//                         <option value="">Select a vehicle</option>
//                         {userVehicles.map((vehicle) => (
//                           <option
//                             key={vehicle.vehicleId}
//                             value={vehicle.vehicleId}
//                           >
//                             {vehicle.carMake} {vehicle.carModel}
//                           </option>
//                         ))}
//                       </select>
//                     ) : (
//                       `${booking.vehicle?.carMake || ""} ${
//                         booking.vehicle?.carModel || ""
//                       }`
//                     )}
//                   </div>
//                   <div>
//                     {isEditing ? (
//                       <input
//                         type="text"
//                         value={`${booking.washAttendant?.userName || ""} ${
//                           booking.washAttendant?.userSurname || ""
//                         }`}
//                         disabled
//                       />
//                     ) : (
//                       `${booking.washAttendant?.userName || ""} ${
//                         booking.washAttendant?.userSurname || ""
//                       }`
//                     )}
//                   </div>
//                   <div>
//                     <span
//                       className={`status-tag ${
//                         paymentStatusMap[booking.bookingId]
//                           ? "paid"
//                           : "not-paid"
//                       }`}
//                     >
//                       {paymentStatusMap[booking.bookingId]
//                         ? "PAID"
//                         : "NOT PAID"}
//                     </span>
//                   </div>
//                   <div className="edit-buttons">
//                     {isEditing ? (
//                       <>
//                         <button
//                           className="em-primary-btn"
//                           onClick={async () => {
//                             const res = await fetch(
//                               `http://localhost:8080/mobileglow/api/bookings/${editingId}`,
//                               {
//                                 method: "PUT",
//                                 headers: { "Content-Type": "application/json" },
//                                 body: JSON.stringify({
//                                   ...editedBooking,
//                                   bookingId: editingId,
//                                 }),
//                               }
//                             );
//                             if (res.ok) {
//                               await fetchBookings();
//                               setEditingId(null);
//                               setEditedBooking({});
//                             }
//                           }}
//                         >
//                           Save
//                         </button>
//                         <button
//                           className="cancel-btn"
//                           onClick={() => setEditingId(null)}
//                         >
//                           Cancel
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <div className="dropdown-wrapper">
//                           <button
//                             className="dropdown-toggle"
//                             onClick={() =>
//                               setActiveDropdown(
//                                 activeDropdown === booking.bookingId
//                                   ? null
//                                   : booking.bookingId
//                               )
//                             }
//                           >
//                             <BsThreeDotsVertical size={18} />
//                           </button>

//                           {activeDropdown === booking.bookingId && (
//                             <div className="dropdown-menu">
//                               <button
//                                 onClick={async () => {
//                                   console.log(
//                                     "Edit clicked, booking:",
//                                     booking
//                                   );

//                                   setEditingId(booking.bookingId);
//                                   setEditedBooking({ ...booking });
//                                   setActiveDropdown(null); // Close dropdown

//                                   try {
//                                     // Access customerId from booking.vehicle.customer.userId (adjust casing if needed)
//                                     const customerId =
//                                       booking.vehicle?.customer?.userId ||
//                                       booking.vehicle?.customer?.userID;

//                                     if (!customerId) {
//                                       console.error(
//                                         "Customer ID not found in booking.vehicle.customer"
//                                       );
//                                       return;
//                                     }

//                                     const res = await fetch(
//                                       `http://localhost:8080/mobileglow/api/vehicle/customer/${customerId}`
//                                     );

//                                     if (!res.ok) {
//                                       throw new Error(
//                                         "Failed to fetch customer's vehicles"
//                                       );
//                                     }

//                                     const vehicles = await res.json();
//                                     setUserVehicles(vehicles); // Save vehicles in state
//                                   } catch (err) {
//                                     console.error(
//                                       "Failed to fetch customer's vehicles:",
//                                       err
//                                     );
//                                   }
//                                 }}
//                               >
//                                 Edit
//                               </button>
//                               <button
//                                 onClick={async () => {
//                                   if (
//                                     window.confirm(
//                                       "Are you sure you want to cancel this booking?"
//                                     )
//                                   ) {
//                                     try {
//                                       const res = await fetch(
//                                         `http://localhost:8080/mobileglow/api/bookings/${booking.bookingId}/cancel`,
//                                         {
//                                           method: "PUT",
//                                           headers: {
//                                             "Content-Type": "application/json",
//                                           },
//                                         }
//                                       );
//                                       if (!res.ok) {
//                                         throw new Error(
//                                           "Failed to cancel booking."
//                                         );
//                                       }
//                                       alert("Booking cancelled successfully.");
//                                       await fetchBookings();
//                                     } catch (err) {
//                                       console.error(err);
//                                       alert("Error cancelling booking.");
//                                     }
//                                   }
//                                   setActiveDropdown(null);
//                                 }}
//                               >
//                                 Cancel
//                               </button>

//                               <button
//                                 onClick={() => {
//                                   navigate(`/payment/${booking.bookingId}`);
//                                   setActiveDropdown(null);
//                                 }}
//                               >
//                                 Pay
//                               </button>
//                             </div>
//                           )}
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };


// newer1 

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdFilterList } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import NavbarEmployee from "../../components/NavbarEmployee";
import Footer from "../../components/Footer";

import { pageNames } from "../pageNames";


export default function EmployeeManageBookings() {
  document.title = pageNames.e_bookings || "Manage Bookings";
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedBooking, setEditedBooking] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [paymentStatusMap, setPaymentStatusMap] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const [filterStatus, setFilterStatus] = useState("");
  const [filterTip, setFilterTip] = useState("");
  const [filterStartDate, setFilterStartDate] = useState("");
  const [filterEndDate, setFilterEndDate] = useState("");
  const [filterAttendant, setFilterAttendant] = useState("");

  const [showFilters, setShowFilters] = useState(false);
  const [userVehicles, setUserVehicles] = useState([]);

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:8080/mobileglow/api/bookings");
      const data = await res.json();
      setBookings(data);

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
      console.error("Failed to fetch bookings or payment statuses:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const filteredBookings = bookings.filter((booking) => {
    const search = searchTerm.toLowerCase();

    const id = booking.bookingId?.toString().toLowerCase() || "";
    const date = new Date(booking.bookingDateTime).toLocaleDateString().toLowerCase();
    const time = new Date(booking.bookingDateTime).toLocaleTimeString().toLowerCase();
    const carMake = booking.vehicle?.carMake?.toLowerCase() || "";
    const carModel = booking.vehicle?.carModel?.toLowerCase() || "";
    const attendantName = booking.washAttendant?.userName?.toLowerCase() || "";
    const attendantSurname = booking.washAttendant?.userSurname?.toLowerCase() || "";

    const matchesSearch =
      id.includes(search) ||
      date.includes(search) ||
      time.includes(search) ||
      carMake.includes(search) ||
      carModel.includes(search) ||
      attendantName.includes(search) ||
      attendantSurname.includes(search);

    if (!matchesSearch) return false;

    const status = paymentStatusMap[booking.bookingId] ? "PAID" : "NOT_PAID";
    if (filterStatus && filterStatus !== status) return false;

    if (filterTip === "true" && !booking.tipAdd) return false;
    if (filterTip === "false" && booking.tipAdd) return false;

    const bookingDate = new Date(booking.bookingDateTime);
    if (filterStartDate && bookingDate < new Date(filterStartDate)) return false;
    if (filterEndDate && bookingDate > new Date(filterEndDate)) return false;

    const attendantFullName = (
      booking.washAttendant?.userName + " " + booking.washAttendant?.userSurname
    ).toLowerCase().trim();
    if (filterAttendant && !attendantFullName.includes(filterAttendant.toLowerCase().trim())) return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-800">
      {/* <NavbarEmployee /> */}
      
      {/* Absolute Back Button */}
      <button
        onClick={() => navigate('/employee')}
        className="absolute top-8 left-8 flex items-center justify-center 
        w-10 h-10 bg-white border border-gray-100 rounded-xl text-gray-400 
        hover:text-blue-900 shadow-sm hover:shadow transition-all group z-10 font-bold"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
      </button>      
   

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-12 md:py-16 mt-9 min-h-screen">
 

        {/* Module Header Container */}
        <section className="mb-10 border-b border-gray-200/60 pb-6">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
            Operations Center
          </span>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight mt-3">Manage Bookings</h1>
          <p className="text-gray-500 text-sm font-medium mt-1">Easily view, update, and track operational bookings inside your system cluster.</p>
        </section>

        {/* Global Toolbar Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Search bookings by ID, client vehicle or wash operator..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3.5 bg-white border border-gray-100 focus:border-blue-600 shadow-[0_10px_30px_rgba(0,0,0,0.01)] rounded-2xl outline-none text-sm font-medium transition-all"
            />
          </div>
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className={`w-full sm:w-auto px-5 py-3.5 border rounded-2xl flex items-center justify-center gap-2.5 text-xs font-black uppercase tracking-widest transition-all ${
              showFilters 
                ? "bg-blue-900 text-white border-transparent shadow-md" 
                : "bg-white text-gray-700 border-gray-100 hover:bg-gray-50 shadow-sm"
            }`}
          >
            <MdFilterList size={18} />
            <span>Filter Panels</span>
            <span className="transition-transform duration-200">
              {showFilters ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </span>
          </button>
        </div>

        {/* Collapsible Filtration Settings Shelf */}
        {showFilters && (
          <div className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] mb-8 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Settlement Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-100 rounded-xl outline-none text-xs font-semibold text-gray-600 focus:border-blue-600"
                >
                  <option value="">All Statuses</option>
                  <option value="PAID">Paid</option>
                  <option value="NOT_PAID">Not Paid</option>
                </select>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Gratuity Grids</label>
                <select
                  value={filterTip}
                  onChange={(e) => setFilterTip(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-100 rounded-xl outline-none text-xs font-semibold text-gray-600 focus:border-blue-600"
                >
                  <option value="">Tip Added</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Start Bound</label>
                <input
                  type="date"
                  value={filterStartDate}
                  onChange={(e) => setFilterStartDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-100 rounded-xl outline-none text-xs font-semibold text-gray-600 focus:border-blue-600"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">End Bound</label>
                <input
                  type="date"
                  value={filterEndDate}
                  onChange={(e) => setFilterEndDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-100 rounded-xl outline-none text-xs font-semibold text-gray-600 focus:border-blue-600"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Attendant Field</label>
                <input
                  type="text"
                  placeholder="Attendant name..."
                  value={filterAttendant}
                  onChange={(e) => setFilterAttendant(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-100 rounded-xl outline-none text-xs font-medium text-gray-600 focus:border-blue-600"
                />
              </div>
            </div>
          </div>
        )}

        {/* Unified Responsive Ledger Matrix Container */}
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              
              {/* Table Column Grid Headers */}
              <thead>
                <tr className="bg-gray-50/70 border-b border-gray-100 text-[11px] font-black uppercase tracking-widest text-gray-400">
                  <th className="py-5 px-6">ID</th>
                  <th className="py-5 px-4">Date</th>
                  <th className="py-5 px-4">Time</th>
                  <th className="py-5 px-4">Tip</th>
                  <th className="py-5 px-4">Vehicle Identity</th>
                  <th className="py-5 px-4">Attendant</th>
                  <th className="py-5 px-4">Status</th>
                  <th className="py-5 px-6 text-right">Actions</th>
                </tr>
              </thead>

              {/* Data Row Loop Fields */}
              <tbody className="divide-y divide-gray-50 text-sm font-medium text-gray-700">
                {filteredBookings.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="py-16 text-center">
                      <div className="max-w-xs mx-auto space-y-2">
                        <h3 className="text-base font-black text-gray-900 tracking-tight">No Bookings Found</h3>
                        <p className="text-gray-400 text-xs font-medium">Try modifying your search terms or adjustments configuration parameters.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredBookings.map((booking) => {
                    const isEditing = booking.bookingId === editingId;
                    const dateObj = new Date(booking.bookingDateTime);
                    const date = dateObj.toLocaleDateString();
                    const time = dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

                    return (
                      <tr 
                        key={booking.bookingId}
                        className={`hover:bg-gray-50/30 transition-colors ${
                          booking.cancelled ? "bg-red-50/30 opacity-60 line-through text-gray-400" : ""
                        }`}
                      >
                        {/* ID */}
                        <td className="py-5 px-6 font-bold text-gray-900">#{booking.bookingId}</td>

                        {/* Date field */}
                        <td className="py-5 px-4">
                          {isEditing ? (
                            <input
                              type="date"
                              value={new Date(editedBooking.bookingDateTime).toISOString().slice(0, 10)}
                              onChange={(e) => {
                                const newDate = e.target.value;
                                const oldDateTime = new Date(editedBooking.bookingDateTime);
                                const updatedDateTime = new Date(newDate);
                                updatedDateTime.setHours(oldDateTime.getHours());
                                updatedDateTime.setMinutes(oldDateTime.getMinutes());
                                setEditedBooking((prev) => ({
                                  ...prev,
                                  bookingDateTime: updatedDateTime.toISOString(),
                                }));
                              }}
                              className="px-2 py-1 border border-gray-200 rounded-md bg-white text-xs"
                            />
                          ) : date}
                        </td>

                        {/* Time field */}
                        <td className="py-5 px-4">
                          {isEditing ? (
                            <input
                              type="time"
                              value={new Date(editedBooking.bookingDateTime).toISOString().slice(11, 16)}
                              onChange={(e) => {
                                const [hours, minutes] = e.target.value.split(":");
                                const updatedDateTime = new Date(editedBooking.bookingDateTime);
                                updatedDateTime.setHours(hours);
                                updatedDateTime.setMinutes(minutes);
                                setEditedBooking((prev) => ({
                                  ...prev,
                                  bookingDateTime: updatedDateTime.toISOString(),
                                }));
                              }}
                              className="px-2 py-1 border border-gray-200 rounded-md bg-white text-xs"
                            />
                          ) : time}
                        </td>

                        {/* Tip status */}
                        <td className="py-5 px-4">
                          {isEditing ? (
                            <input type="checkbox" checked={booking.tipAdd} disabled className="rounded text-blue-600 focus:ring-0" />
                          ) : booking.tipAdd ? (
                            <span className="text-emerald-600 font-semibold text-xs">Yes</span>
                          ) : (
                            <span className="text-gray-400 text-xs">No</span>
                          )}
                        </td>

                        {/* Vehicle identification */}
                        <td className="py-5 px-4 font-semibold text-gray-900">
                          {isEditing ? (
                            <select
                              value={editedBooking.vehicle?.vehicleId || ""}
                              onChange={(e) => {
                                const selectedVehicle = userVehicles.find((v) => v.vehicleId === e.target.value);
                                setEditedBooking((prev) => ({ ...prev, vehicle: selectedVehicle }));
                              }}
                              className="px-2 py-1 border border-gray-200 rounded-md bg-white text-xs"
                            >
                              <option value="">Select a vehicle</option>
                              {userVehicles.map((vehicle) => (
                                <option key={vehicle.vehicleId} value={vehicle.vehicleId}>
                                  {vehicle.carMake} {vehicle.carModel}
                                </option>
                              ))}
                            </select>
                          ) : (
                            `${booking.vehicle?.carMake || ""} ${booking.vehicle?.carModel || ""}`
                          )}
                        </td>

                        {/* Attendant data info block */}
                        <td className="py-5 px-4 text-xs font-semibold text-gray-500">
                          {booking.washAttendant?.userName 
                            ? `${booking.washAttendant.userName} ${booking.washAttendant.userSurname || ""}`
                            : "Unassigned"}
                        </td>

                        {/* Financial tag badges */}
                        <td className="py-5 px-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                            paymentStatusMap[booking.bookingId]
                              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                              : "bg-amber-50 text-amber-700 border-amber-100"
                          }`}>
                            {paymentStatusMap[booking.bookingId] ? "PAID" : "UNPAID"}
                          </span>
                        </td>

                        {/* Actions Control Node */}
                        <td className="py-5 px-6 text-right relative">
                          {isEditing ? (
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={async () => {
                                  const res = await fetch(`http://localhost:8080/mobileglow/api/bookings/${editingId}`, {
                                    method: "PUT",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ ...editedBooking, bookingId: editingId }),
                                  });
                                  if (res.ok) {
                                    await fetchBookings();
                                    setEditingId(null);
                                    setEditedBooking({});
                                  }
                                }}
                                className="px-3 py-1 bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-blue-800 transition-colors"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => setEditingId(null)}
                                className="px-3 py-1 bg-gray-100 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-gray-200 transition-colors"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <div className="inline-block text-left">
                              <button
                                onClick={() => toggleDropdown(booking.bookingId)}
                                className="p-2 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all"
                              >
                                <BsThreeDotsVertical size={16} />
                              </button>

                              {/* Absolute Menu Flyout Frame */}
                              {activeDropdown === booking.bookingId && (
                                <div className="absolute right-6 mt-2 w-40 bg-white border border-gray-100 rounded-2xl shadow-xl z-30 py-2 divide-y divide-gray-50 text-left animate-fadeIn">
                                  <div className="py-1">
                                    <button
                                      onClick={async () => {
                                        setEditingId(booking.bookingId);
                                        setEditedBooking({ ...booking });
                                        setActiveDropdown(null);
                                        try {
                                          const customerId = booking.vehicle?.customer?.userId || booking.vehicle?.customer?.userID;
                                          if (!customerId) return;
                                          const res = await fetch(`http://localhost:8080/mobileglow/api/vehicle/customer/${customerId}`);
                                          if (res.ok) {
                                            const vehicles = await res.json();
                                            setUserVehicles(vehicles);
                                          }
                                        } catch (err) {
                                          console.error("Failed to fetch customer vehicles:", err);
                                        }
                                      }}
                                      className="w-full px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors block text-left"
                                    >
                                      Edit Booking
                                    </button>
                                  </div>
                                  <div className="py-1">
                                    <button
                                      onClick={() => {
                                        navigate(`/payment/${booking.bookingId}`);
                                        setActiveDropdown(null);
                                      }}
                                      className="w-full px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors block text-left"
                                    >
                                      Process Payment
                                    </button>
                                    <button
                                      onClick={async () => {
                                        if (window.confirm("Are you sure you want to cancel this booking?")) {
                                          try {
                                            const res = await fetch(`http://localhost:8080/mobileglow/api/bookings/${booking.bookingId}/cancel`, {
                                              method: "PUT",
                                              headers: { "Content-Type": "application/json" },
                                            });
                                            if (res.ok) {
                                              alert("Booking cancelled successfully.");
                                              await fetchBookings();
                                            }
                                          } catch (err) {
                                            console.error(err);
                                          }
                                        }
                                        setActiveDropdown(null);
                                      }}
                                      className="w-full px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50/50 transition-colors block text-left"
                                    >
                                      Cancel Booking
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    
    </div>
  );
}

