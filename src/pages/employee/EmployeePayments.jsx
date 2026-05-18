import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import NavbarEmployee from "../../components/NavbarEmployee";
import Footer from "../../components/Footer";

import { pageNames } from "../pageNames";


export default function EmployeePayments(){
  document.title = pageNames.e_payment

  const { bookingId } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [cards, setCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("CASH");
  const [paymentStatus, setPaymentStatus] = useState("PAID");
  const [tipAdd, setTipAdd] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolderName: "",
    cvv: "",
    expiryDate: "",
  });
  const [message, setMessage] = useState(""); // ✅ success popup

  // --- Fetch booking + linked customer ---
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/mobileglow/api/bookings/${bookingId}`
        );
        if (!res.ok) throw new Error("Failed to fetch booking");
        const data = await res.json();
        setBooking(data);
        console.log("🧾 [DEBUG] Booking fetched:", data);

        if (data.vehicle?.vehicleID) {
          const vehRes = await fetch(
            `http://localhost:8080/mobileglow/api/vehicle/${data.vehicle.vehicleID}`
          );
          if (vehRes.ok) {
            const vehicleData = await vehRes.json();
            console.log("🚗 [DEBUG] Vehicle full data:", vehicleData);
            if (vehicleData.customer) {
              setCustomer(vehicleData.customer);
              fetchCardsForCustomer(vehicleData.customer.userId);
            }
          }
        }

        setTipAdd(Boolean(data.tipAdd));
      } catch (err) {
        console.error("❌ Error fetching booking:", err);
      }
    };

    const fetchCardsForCustomer = async (custId) => {
      if (!custId) return;
      try {
        const res = await fetch(
          `http://localhost:8080/mobileglow/api/cards/customer/${custId}`
        );
        if (!res.ok) return;
        const data = await res.json();
        console.log("💳 [DEBUG] fetched cards:", data);
        setCards(Array.isArray(data) ? data : []);
        if (data.length > 0)
          setSelectedCardId(data[0].cardId || data[0].cardID);
      } catch (err) {
        console.error("❌ Error fetching cards:", err);
      }
    };

    fetchBooking();
  }, [bookingId]);

  // --- Calculate amount with tip ---
  useEffect(() => {
    if (!booking) return;
    const baseCost = Number(booking.bookingCost || 0);
    const amountWithTip = tipAdd ? baseCost * 1.1 : baseCost;
    setPaymentAmount(amountWithTip.toFixed(2));
  }, [tipAdd, booking]);

  // --- Process payment ---
  const processPayment = async (card = null) => {
    try {
      setLoading(true);
      const payload = {
        paymentAmount: Number(paymentAmount),
        paymentMethod,
        paymentStatus,
        booking: { bookingId: parseInt(bookingId, 10) },
        ...(card ? { card } : {}),
      };

      console.log("📤 [DEBUG] Sending payment payload:", payload);

      const res = await fetch("http://localhost:8080/mobileglow/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      if (!res.ok) throw new Error(text);

      setMessage("✅ Payment successful!");
      setTimeout(() => navigate("/manage-bookings"), 1200);
    } catch (err) {
      console.error("❌ [ERROR] processPayment:", err);
      alert(`Payment failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmPayment = async () => {
    if (paymentMethod === "CARD") {
      if (selectedCardId) {
        const cardObj = cards.find(
          (c) => String(c.cardId) === String(selectedCardId)
        );
        if (cardObj) return processPayment(cardObj);
      }
      setShowCardModal(true);
      return;
    }
    await processPayment();
  };

  // --- Save card only ---
  const handleSaveCard = async () => {
    const customerId = customer?.userId;
    if (!customerId) {
      alert("Missing customer info.");
      return;
    }

    const cardPayload = {
      ...cardDetails,
      customer: { userId: customerId },
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/mobileglow/api/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cardPayload),
      });

      const text = await res.text();
      if (!res.ok) throw new Error(text);
      const savedCard = JSON.parse(text);

      setCards((prev) => [savedCard, ...prev]);
      setSelectedCardId(savedCard.cardId);
      setShowCardModal(false);
      setCardDetails({ cardNumber: "", cardHolderName: "", cvv: "", expiryDate: "" });
      setMessage("✅ Card saved successfully!");
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      alert(`Creating card failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const formatCardLabel = (c) => {
    const num = c.cardNumber;
    const last4 = num ? num.slice(-4) : "----";
    return `${c.cardHolderName} •••• ${last4} (Exp ${c.expiryDate})`;
  };



  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center font-sans">
        <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-sm font-bold tracking-wide text-gray-500 uppercase">Loading booking info...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      {/* <NavbarEmployee /> */}
      
      <div className="flex-grow max-w-2xl w-full mx-auto px-4 sm:px-6 pt-24 pb-12 min-h-screen">
        
        {/* Main Form Box Container */}
        <div className="bg-white border border-gray-100 rounded-[2rem] 
          shadow-[0_15px_40px_rgba(0,0,0,0.01)] p-6 sm:p-10 space-y-6">

          <div className="border-b border-gray-50 pb-4">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Payment Settlement</h2>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-1">Process single booking payment records</p>
          </div>

          {/* Vehicle Display Row */}
          <div className="flex flex-col space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Assigned Vehicle</label>
            <p className="px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-900">
              {booking.vehicle?.carMake} {booking.vehicle?.carModel}
            </p>
          </div>

          {/* Core Calculation Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Base Booking Cost</label>
              <p className="px-4 py-3 bg-gray-50/50 border border-gray-100 text-gray-500 rounded-xl text-sm font-semibold">
                R {booking.bookingCost}
              </p>
            </div>

            {/* Toggle Switch Block */}
            <div className="flex flex-col space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Service Tip Allocation</label>
              <label className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl cursor-pointer select-none h-[46px]">
                <span className="text-xs font-bold text-gray-600">Apply standard 10% tip</span>
                <input 
                  type="checkbox" 
                  checked={tipAdd} 
                  onChange={(e) => setTipAdd(e.target.checked)}
                  className="w-4 h-4 text-blue-900 border-gray-200 rounded focus:ring-blue-900"
                />
              </label>
            </div>
          </div>

          {/* Strategy Payment Select Option */}
          <div className="flex flex-col space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Payment Method</label>
            <select 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-blue-900 transition-all"
            >
              <option value="CASH">CASH SYSTEM</option>
              <option value="CARD">CREDIT / DEBIT CARD</option>
            </select>
          </div>

          {/* Conditional Card Vault Stream */}
          {paymentMethod === "CARD" && customer && (
            <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">
                Saved Cards for {customer.userName}:
              </label>

              {cards.length > 0 ? (
                <div className="space-y-2">
                  {cards.map((c) => (
                    <label 
                      key={c.cardId || c.cardID} 
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all bg-white ${
                        String(selectedCardId) === String(c.cardId || c.cardID)
                          ? "border-blue-900 ring-1 ring-blue-900/10"
                          : "border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      <input
                        type="radio"
                        id={`card-${c.cardId || c.cardID}`}
                        name="savedCard"
                        checked={String(selectedCardId) === String(c.cardId || c.cardID)}
                        onChange={() => setSelectedCardId(c.cardId || c.cardID)}
                        className="w-4 h-4 text-blue-900 border-gray-200 focus:ring-blue-900"
                      />
                      <span className="text-xs font-medium text-gray-700">{formatCardLabel(c)}</span>
                    </label>
                  ))}
                  
                  <button
                    type="button"
                    onClick={() => setShowCardModal(true)}
                    className="mt-2 text-xs font-black text-blue-900 uppercase tracking-wider hover:text-blue-800 transition-colors flex items-center gap-1"
                  >
                    + Add another card
                  </button>
                </div>
              ) : (
                <div className="text-center py-4 space-y-2">
                  <p className="text-xs font-medium text-gray-400">No saved cards found for this account register.</p>
                  <button 
                    type="button"
                    onClick={() => setShowCardModal(true)}
                    className="px-4 py-2 bg-white hover:bg-gray-100 border border-gray-100 rounded-xl text-xs font-black uppercase tracking-wider text-gray-700 shadow-sm transition-colors"
                  >
                    Add new token card
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Amount Calculation Lock View */}
          <div className="flex flex-col space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Settlement Amount (ZAR)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">R</span>
              <input 
                type="number" 
                value={paymentAmount} 
                readOnly 
                className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-black text-gray-900 tracking-tight outline-none"
              />
            </div>
          </div>

          {/* Form Processing Commit Button */}
          <button
            onClick={handleConfirmPayment}
            disabled={loading}
            className="w-full py-4 bg-blue-900 hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors disabled:opacity-50"
          >
            {loading ? "Processing transaction..." : "Confirm Payment"}
          </button>
        </div>
      </div>

      {/* Vault Card Entry Modal Overlay Frame */}
      {showCardModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-[2rem] border border-gray-100 w-full max-w-md shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-150">
            <div>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">Add Card Details</h3>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider mt-0.5">Secure peripheral credentials gateway</p>
            </div>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium outline-none focus:border-blue-900 transition-all"
              />
              <input
                type="text"
                placeholder="Card Holder Name"
                value={cardDetails.cardHolderName}
                onChange={(e) => setCardDetails({ ...cardDetails, cardHolderName: e.target.value })}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium outline-none focus:border-blue-900 transition-all"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="CVV"
                  maxLength="4"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium outline-none focus:border-blue-900 transition-all"
                />
                <input
                  type="month"
                  placeholder="Expiry Date"
                  value={cardDetails.expiryDate}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium outline-none focus:border-blue-900 transition-all text-gray-500"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button 
                onClick={() => setShowCardModal(false)} 
                className="flex-1 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-100 text-gray-500 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveCard} 
                disabled={loading}
                className="flex-1 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save details"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Toast Success Stream Flash */}
      {message && (
        <div className="fixed bottom-8 right-8 z-50 bg-gray-900 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-xl flex items-center gap-2 border border-gray-800 animate-in slide-in-from-bottom-5 duration-200">
          {message}
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
}

