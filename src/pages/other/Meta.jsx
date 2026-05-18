import React from "react";
import { Link } from "react-router-dom";

import { pageRoutes } from "../pageNames";

export default function Meta() {
    document.title = "Developer Metadata | MobileGlow";

    // Intentional formatting spaces to keep the raw JSON look clean
    const space = "\n    ";
    const indent2 = "        ";
    const indent3 = "            ";

    // Helper arrays to group your pageRoutes keys by section
    const publicRoutes = ['root', 'home', 'about', 'contact', 'services', 's_interior', 's_exterior', 's_full', 's_protection'];
    const accountRoutes = ['role', 'login', 'signup', 'address', 'deactivate', 'change_password'];
    const employeeRoutes = [
        'employee', 'e_home', 'e_profile', 'e_profile_edit', 'e_payment', 
        'e_bookings', 'e_services', 'e_manage_employees', 'e_manage_customers', 'e_performance'
    ];
    const customerRoutes = [
        'customer', 'c_home', 'c_profile', 'c_profile_edit', 'c_vehicles', 
        'c_booking', 'c_booking1', 'c_booking_history', 'c_booking_vehicle', 'c_booking_confirm'
    ];
    const otherRoutes = ['_metadata'];

    // Helper component to render a group of routes with clickability
    const RenderRouteGroup = ({ keys, comment }) => {
        return (
            <>
                {/* Section Comment with a distinct code-comment color */}
                <span className="text-gray-500">{indent2}// {comment}</span>
                {"\n"}
                {keys.map((key, index) => {
                    const routePath = pageRoutes[key];
                    if (!routePath) return null;
                    
                    return (
                        <span key={key}>
                            {indent2}"{key}": "
                            <Link 
                                to={routePath} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors cursor-pointer"
                            >
                                {routePath}
                            </Link>
                            "
                            {index === keys.length - 1 && comment === "Other" ? "" : ","}
                            {"\n"}
                        </span>
                    );
                })}
            </>
        );
    };

    return (
        <div className="h-screen bg-neutral-950 text-gray-300 font-mono text-sm p-6 overflow-y-auto select-none">
            {/* Top Toolbar */}
            <div className="flex items-center gap-2 mb-4 border-b border-neutral-800 pb-3 text-xs text-gray-500">
                <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
                <span className="ml-2 tracking-widest uppercase text-[10px] font-black text-blue-500">Live Router Manifest</span>
            </div>

            <pre className="leading-relaxed">
                <span className="text-amber-500 font-bold">{"{"}</span>
                
                {space}"<span className="text-blue-400">started</span>": "<span className="text-orange-300">2026-05-01</span>", 
                {space}"<span className="text-blue-400">updated</span>": "<span className="text-orange-300">2026-05-18</span>", 
                {space}"<span className="text-blue-400">version</span>": "<span className="text-orange-300">0.3</span>", 
                {space}"<span className="text-blue-400">status</span>": "<span className="text-amber-400/90 animate-pulse">work-in-progress</span>", 

                {space}"<span className="text-blue-400">routes</span>": {"{\n"}

                {/* 1. Public Routes */}
                <RenderRouteGroup keys={publicRoutes} comment="Public Pages" />
                {"\n"}

                {/* 2. Account-Related */}
                <RenderRouteGroup keys={accountRoutes} comment="Account & Authentication" />
                {"\n"}

                {/* 3. Customer Dashboard */}
                <RenderRouteGroup keys={customerRoutes} comment="Customer Engine" />
                {"\n"}

                {/* 4. Employee Dashboard */}
                <RenderRouteGroup keys={employeeRoutes} comment="Employee Engine" />
                {"\n"}

                {/* 5. Other */}
                <RenderRouteGroup keys={otherRoutes} comment="Other" />

                {/* {space}{"}"} */}
                {"    }"}

                {"\n"}
                <span className="text-amber-500 font-bold">{"}"}</span>
            </pre>
        </div>
    );
}
