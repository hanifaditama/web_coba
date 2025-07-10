import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowToSellSection from "@/components/HowToSellSection";
import CriteriaSection from "@/components/CriteriaSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ReviewsSection from "@/components/ReviewsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

import * as React from "react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <HowToSellSection />
      <CriteriaSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <BlogSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
