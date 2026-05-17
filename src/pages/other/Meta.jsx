
import React from "react";
import { Link } from "react-router-dom";


export default function Meta() {
    document.title = ";)"

    const space = "\n    "
    
    // <div className="flex flex-col items-center justify-center h-screen 
    //         bg-black text-white px-4">

    return (
        <div className="h-screen bg-black text-white font-light p-4">
            <pre className="p-3 text-orange-300">
            {"{"}
                
                {space}"started": "2026-05-dd", 
                {space}"updated": "2026-05-17", 
                {space}"version": "0.3", 
                {space}"status": "work-in-progress", 

            <br />
            { "}"}
            </pre>
        </div>
    )
};
