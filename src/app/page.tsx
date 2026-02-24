"use client"

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DevicesSection from "@/components/DevicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Developer } from "@/components/developer/Developer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <DevicesSection />
        <ProcessSection />
        <WhyChooseSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <Developer />
    </div>
  );
};

export default Home;