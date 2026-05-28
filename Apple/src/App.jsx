import React from "react";

import Header from "./components/Header/Header.jsx";
import HomePage from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MacBook from "./components/MacBook/MacBook.jsx";
import Iphone11 from "./components/Iphone11/Iphone11.jsx";
import Iphone from "./components/Iphone/Iphone.jsx";
import Watch from "./components/Watch/Watch.jsx";
import AirPods from "./components/AirPods/AirPods.jsx";
import MacBookPro from "./components/MacBookPro/MacBookPro.jsx";
import YouTube from "./components/YouTube/YouTube.jsx";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound.jsx";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/MacBook" element={<MacBook />} />
          <Route path="/Iphone11" element={<Iphone11 />} />
          <Route path="/Iphone" element={<Iphone />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/AirPods" element={<AirPods />} />
          <Route path="/MacBookPro" element={<MacBookPro />} />
          {/* <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* <YouTube /> */}
    </div>
  );
}

export default App;
