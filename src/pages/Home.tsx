import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import HealthPackages from "../components/HealthPackages";
import NetworkSpread from "../components/NetworkSpread";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HealthPackages />
      <NetworkSpread />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
