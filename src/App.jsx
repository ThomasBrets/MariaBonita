import React, { useState } from "react";

// Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import FoodDetails from "./pages/FoodDetails.jsx";
import Events from "./pages/Events.jsx"

// React router
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:menu/:id" element={<FoodDetails />} />
        <Route path="/events" element={<Events />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
