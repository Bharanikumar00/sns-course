
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AIFeatures: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection
        badge="AI-Powered Learning"
        title="Revolutionizing Education with"
        highlightedText="Artificial Intelligence"
        description="Discover how our AI-powered learning platform personalizes education, automates administrative tasks, and provides deep insights into learning patterns."
        variant="quaternary"
      >
        <a href="#" className="btn-primary">
          Explore AI Features
        </a>
        <a href="#" className="btn-secondary">
          Book a Demo
        </a>
      </HeroSection>
      
      <Footer />
    </div>
  );
};

export default AIFeatures;
