'use client';

import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Modular Landing Page Components
import HeroSection from '@/components/landing/HeroSection';
import FeatureShowcase from '@/components/landing/FeatureShowcase';
import EnrollmentSection from '@/components/landing/EnrollmentSection';
import LabFooter from '@/components/landing/LabFooter';

/**
 * GTX Sports Dynamics Lab - Main Landing Page
 * Performance-driven architecture for sports science data visualization.
 */
export default function Home() {
  const [refresh, setRefresh] = useState(false);
  
  // High-performance scroll tracking for the global progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleRegisterComplete = () => {
    setRefresh(prev => !prev);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-['Outfit',sans-serif] overflow-x-hidden">
      {/* Visual Identity: Global Sci-Fi Progress Indicator */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#39FF14] origin-left z-[1000]" style={{ scaleX }} />

      {/* 01: Hero DNA Arrival */}
      <HeroSection />

      {/* 02: Biological Feature Matrix */}
      <FeatureShowcase />

      {/* 03: Lab Enrollment & Live Athlete Database */}
      <EnrollmentSection 
        refresh={refresh} 
        onRegisterComplete={handleRegisterComplete} 
      />

      {/* 04: Lab Footer */}
      <LabFooter />
    </main>
  );
}
