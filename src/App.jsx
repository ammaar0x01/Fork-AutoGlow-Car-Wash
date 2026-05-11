import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Pages --- 
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import All from "./pages/_temp/All";


export default function App() {
  return (
    <Router>
      <Routes>
        {/* --- Public */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        

        {/* --- Error route */}

        {/* --- Unauth route? */}

        {/* --- Customer */}
        

        {/* --- Employee / Business */}


        {/* --- Less important / Testing */}
        <Route path="/temp/all" element={<All />} />

      </Routes>
    </Router>
  );
}
