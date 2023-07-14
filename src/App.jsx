import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import SwiperSection from "./components/SwiperSection";

function App() {
  return (
    <div className=" overflow-hidden">
      <Header />
      <Hero />
      <SecondSection />
      <ThirdSection />
      <SwiperSection />
      <img src="./assets/Footer.png" />
    </div>
  );
}

export default App;
