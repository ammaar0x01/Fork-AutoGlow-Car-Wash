
import React from "react";
import { Link } from "react-router-dom";

import { pageNames, pageRoutes } from "../pageNames";


export default function Meta() {
    document.title = ";)"

    const space = "\n    "
    const space1 = "\n        "
    // const space1 = " " * 30 
    
    // --- add something related to local/session storage? 

    // <div className="flex flex-col items-center justify-center h-screen 
    //         bg-black text-white px-4">

    return (
        <div className="h-screen bg-black text-white font-light p-4">
            <pre className="p-3 text-orange-300">
            {"{"}
                
                {space}"started": "2026-05-0d", 
                {space}"updated": "2026-05-17", 
                {space}"version": "0.3", 
                {space}"status": "work-in-progress", 

                {space}"routes": [
                    {space1}# Public
                    {/* make a comment a different color, use '//' or '#' */}

                    {space1}"/", 
                    {space1}"/about", 
                    {space1}"/services", 
                    {space1}"/contact", 
                    {space1}


                    {space1}// Account-related

                    {space1}// Customer

                    {space1}// Employee

                    {space1}// Other

                
                {space}
                ]


{/* loop through and display, and add hyperlinks to open in a NEW tab */}
                {/* {pageRoutes._metadata} */}

            <br />
            { "}"}
            </pre>
        </div>
    )
};
