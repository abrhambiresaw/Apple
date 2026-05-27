import React from "react";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MacBook from "./components/MacBook/MacBook.jsx";
import Iphone11 from "./components/Iphone11/Iphone11.jsx";
import Iphone from "./components/Iphone/Iphone.jsx";
import Watch from "./components/Watch/Watch.jsx";
import AirPods from "./components/AirPods/AirPods.jsx";
import MacBookPro from "./components/MacBookPro/MacBookPro.jsx";
import YouTube from "./components/YouTube/YouTube.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="MacBook" element={<MacBook />} />
        <Route path="Iphone11" element={<Iphone11 />} />
        <Route path="Iphone" element={<Iphone />} />
        <Route path="Watch" element={<Watch />} />
        <Route path="AirPods" element={<AirPods />} />
        <Route path="MacBookPro" element={<MacBookPro />} />
        
      </Routes>
      {/* <YouTube /> */}
      <Footer />
    </div>
  );
}

export default App;
