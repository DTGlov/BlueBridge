import React,{useEffect} from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'

import LandingSec from "./components/LandingSection/LandingSec";
import Navbar from "./components/Navbar/Navbar";
import FirstSection from "./components/Sections/FirstSection";
import SecondSection from "./components/Sections/SecondSection";
import ThirdSection from "./components/Sections/ThirdSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";

function App() {
  useEffect(() => {
    Aos.init({duration:2000})
  }, []);
  return (
    <div className="app">
      <Navbar/>
      <LandingSec />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ContactSection />
      <Footer />
      <Copyright/>
    </div>
  );
}

export default App;
