import React from "react";
import Hero from './Components/Hero.jsx'
import Navbar from "./Components/Navbar.jsx";
import Offers from "./Components/Offers.jsx";
import Plan from "./Components/Plan.jsx";
import Rooms from "./Components/Rooms.jsx";
import Imageslider from "./Components/Imageslider.jsx";
import Footer from "./Components/Footer.jsx"

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plan/>
      <Rooms/>
      <Imageslider/>
      <Footer/>
  </div>
  );
}

export default App;
