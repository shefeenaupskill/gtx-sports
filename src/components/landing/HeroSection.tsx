'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

/**
 * HeroSection - The Dynamic DNA Arrival
 * Incorporates the official GTX SPORTS branding and high-performance laboratory visuals.
 */
export default function HeroSection() {
  return (
    <section className="h-screen relative flex items-center justify-center bg-[linear-gradient(rgba(5,5,5,0.4),rgba(5,5,5,0.9)),url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')] bg-cover bg-center text-center">
      {/* Official Branding: Powered by DNA GTX */}
      <div className="absolute top-[40px] right-[60px] z-[100] flex flex-col items-end gap-[5px]">
        <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[#a1a1a6] opacity-80">Powered by</span>
        <div className="flex items-center gap-[5px] font-black text-[1.4rem]">
          <span className="text-white">DNA</span>
          <span className="text-[#39FF14]">GTx</span>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] pointer-events-none" />
      <div className="relative z-10 w-full max-w-[900px] px-4">
        {/* Main Official Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <Image 
            src="/logo.png" 
            alt="GTX SPORTS LOGO" 
            width={600} 
            height={150} 
            className="max-w-full drop-shadow-[0_0_20px_rgba(57,255,20,0.2)]"
            style={{ height: 'auto' }}
            priority
          />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[2.8rem] md:text-[4.5rem] leading-[1] font-extrabold mb-8 tracking-[-0.03em]"
        >
          YOUR <span className="text-[#39FF14] [text-shadow:0_0_20px_rgba(57,255,20,0.5)]">DNA</span> IS YOUR BLUEPRINT.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[1.4rem] text-[#a1a1a6] mb-12 font-light"
        >
          Elite-tier sports science and dynamic diagnostics. <br />
          Unlock biological precision in training, nutrition, and recovery.
        </motion.p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent text-[#39FF14] border-2 border-[#39FF14] py-[1.2rem] px-[2.5rem] text-[1.1rem] font-bold rounded-full cursor-pointer flex items-center justify-center gap-[10px] mx-auto transition-all duration-300 hover:bg-[#39FF14] hover:text-black hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]"
          onClick={() => document.getElementById('enrollment')?.scrollIntoView({ behavior: 'smooth' })}
        >
          ENROLL NOW <ChevronRight size={18} />
        </motion.button>
      </div>
    </section>
  );
}
