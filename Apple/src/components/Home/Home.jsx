import React from "react";
import MacBook from "../MacBook/MacBook.jsx";
import Iphone11 from "../Iphone11/Iphone11.jsx";
import Iphone from "../Iphone/Iphone.jsx";
import Watch from "../Watch/Watch.jsx";
import AirPods from "../AirPods/AirPods.jsx";
import MacBookPro from "../MacBookPro/MacBookPro.jsx";
import YouTube from "../YouTube/YouTube.jsx";

// Home.jsx
function HomePage() {
  return (
    <div>
      <MacBook />
      <Iphone11 />
      <Iphone />
      <Watch />
      <AirPods />
      <MacBookPro />
      <cart />
      <YouTube />
    </div>
  );
}

export default HomePage;
