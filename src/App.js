import React from "react";
import Hero from './Components/Hero.jsx'
import Navbar from "./Components/Navbar.jsx";
import Offers from "./Components/Offers.jsx";
import Plan from "./Components/Plan.jsx";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plan/>
  </div>
  );
}

export default App;
