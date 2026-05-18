import React, { useState } from "react";
import NavbarEmployee from "../../components/NavbarEmployee";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

import { pageNames } from "../pageNames";


// Mock Data for analytical rendering
const employeeMetrics = [
  { id: 1, name: "Sipho Mnisi", role: "Detailing Specialist", jobsCompleted: 142, rating: 4.9, efficiency: "94%", status: "Optimal" },
  { id: 2, name: "Amara Oke", role: "Mobile Unit Driver / Tech", jobsCompleted: 128, rating: 4.7, efficiency: "89%", status: "Optimal" },
  { id: 3, name: "Devon Klein", role: "Detailing Specialist", jobsCompleted: 96, rating: 4.5, efficiency: "81%", status: "Stable" },
  { id: 4, name: "Thabo Mokoena", role: "Apprentice Valet", jobsCompleted: 64, rating: 4.8, efficiency: "76%", status: "Training" },
];

const businessKpis = {
  monthlyRevenue: "R 184,250",
  revenueGrowth: "+14.2% vs last month",
  targetCompletionRate: "91.4%",
  customerRetention: "88%",
  activeFleetUnits: "6 / 6 Operational",
};

export default function EmployeePerformance() {
    document.title = pageNames.e_performance

     const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("business"); // "business" | "employees"

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      {/* <NavbarEmployee /> */}

  {/* Absolute Back Button */}
      <button
        onClick={() => navigate('/employee')}
        className="absolute top-8 left-8 flex items-center justify-center w-10 h-10 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-blue-900 shadow-sm hover:shadow transition-all group z-10 font-bold"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
      </button>

      {/* Main Container Workspace */}
      <div className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 pt-24 pb-12">
        
        {/* Header Action Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-5 mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Performance Terminal</h2>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-1">
              Real-time workspace logistics & personnel analytics
            </p>
          </div>

          {/* Context Switching Tab Controls */}
          <div className="flex bg-gray-200/60 p-1 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab("business")}
              className={`px-5 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === "business"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Business Overview
            </button>
            <button
              onClick={() => setActiveTab("employees")}
              className={`px-5 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === "employees"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Employee Metrics
            </button>
          </div>
        </div>

        {/* CONDITION 1: BUSINESS VIEW CONTEXT */}
        {activeTab === "business" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Top-Level KPI Metric Deck */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Gross Monthly Revenue</span>
                <div className="mt-2">
                  <span className="text-2xl font-black text-gray-900 tracking-tight">{businessKpis.monthlyRevenue}</span>
                  <span className="block text-[11px] font-bold text-emerald-600 mt-0.5">{businessKpis.revenueGrowth}</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Target Fulfilment Rate</span>
                <div className="mt-2">
                  <span className="text-2xl font-black text-gray-900 tracking-tight">{businessKpis.targetCompletionRate}</span>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-blue-900 h-1.5 rounded-full" style={{ width: businessKpis.targetCompletionRate }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Customer Retention</span>
                <div className="mt-2">
                  <span className="text-2xl font-black text-gray-900 tracking-tight">{businessKpis.customerRetention}</span>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-blue-900 h-1.5 rounded-full" style={{ width: businessKpis.customerRetention }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Mobile Dispatch Fleet Status</span>
                <div className="mt-2">
                  <span className="text-2xl font-black text-gray-900 tracking-tight">{businessKpis.activeFleetUnits}</span>
                  <span className="block text-[11px] font-bold text-emerald-600 mt-0.5">100% Core Efficiency Allocation</span>
                </div>
              </div>
            </div>

            {/* Strategic Target & Summary Graphs Visual Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.01)] lg:col-span-2 space-y-4">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">Operational Target Trajectory</h3>
                <div className="h-48 bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  [ Operational Data Metric Graph Overlay Placeholder ]
                </div>
              </div>

              <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.01)] space-y-4">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">Active Strategic Operations</h3>
                <div className="space-y-3">
                  <div className="p-3.5 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-700">Water-Recycling Target</span>
                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-900 font-bold rounded-md text-[10px] uppercase">Active</span>
                  </div>
                  <div className="p-3.5 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-700">Peak Transit Congestion Mitigation</span>
                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-900 font-bold rounded-md text-[10px] uppercase">Active</span>
                  </div>
                  <div className="p-3.5 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-700">Corporate Fleet Expansion</span>
                    <span className="px-2.5 py-0.5 bg-amber-50 text-amber-800 font-bold rounded-md text-[10px] uppercase">Planning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONDITION 2: EMPLOYEE ROSTER MATRIX VIEW */}
        {activeTab === "employees" && (
          <div className="bg-white border border-gray-100 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.01)] overflow-hidden animate-in fade-in duration-200">
            <div className="p-6 border-b border-gray-50">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">Personnel Performance Ledger</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/70 border-b border-gray-100">
                    <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider pl-6">Operator Name</th>
                    <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Functional Designation</th>
                    <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider text-center">Jobs Finalized</th>
                    <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider text-center">Avg Rating</th>
                    <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider text-center">Efficiency Score</th>
                    <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider text-right pr-6">Status Marker</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {employeeMetrics.map((emp) => (
                    <tr key={emp.id} className="hover:bg-gray-50/40 transition-colors">
                      <td className="p-4 pl-6 text-sm font-bold text-gray-900">{emp.name}</td>
                      <td className="p-4 text-xs font-semibold text-gray-500">{emp.role}</td>
                      <td className="p-4 text-sm font-bold text-gray-900 text-center">{emp.jobsCompleted}</td>
                      <td className="p-4 text-sm font-black text-blue-950 text-center">★ {emp.rating}</td>
                      <td className="p-4 text-sm font-bold text-gray-900 text-center">
                        <span className="px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-mono">{emp.efficiency}</span>
                      </td>
                      <td className="p-4 text-right pr-6">
                        <span className={`inline-block px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-md ${
                          emp.status === "Optimal" 
                            ? "bg-emerald-50 text-emerald-700" 
                            : emp.status === "Stable" 
                            ? "bg-blue-50 text-blue-900" 
                            : "bg-amber-50 text-amber-800"
                        }`}>
                          {emp.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* <Footer /> */}
    </div>
  );
}

