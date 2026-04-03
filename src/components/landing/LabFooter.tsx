'use client';

import { Mail, Globe, Phone, MapPin, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * LabFooter - Professional Biometric Contact & Logistics
 * Displays Dubai HQ information alongside elite athlete performance visuals.
 */
export default function LabFooter() {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  return (
    <footer className="bg-[#000] border-t border-[rgba(255,255,255,0.05)] overflow-hidden">
      {!isAboutPage && (
        <div className="flex flex-col xl:grid xl:grid-cols-[1fr_500px] items-center text-center py-24 px-8">
          {/* Left Side: Diagnostic Contact Grid */}
          <div className="p-16 xl:p-0 max-w-[800px] mx-auto w-full lg:px-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-[2rem] md:text-[3rem] font-extrabold text-[#39FF14] mb-2 text-center">WANT TO KNOW MORE?</h2>
              <p className="text-[1.5rem] font-normal text-white mb-12 text-center">Contact Our Biomechanics Team</p>
              
              <div className="flex flex-col items-center gap-8 md:gap-10 mt-10 w-full">
                {/* Top Row: 3 Icons */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
                  {[
                    { icon: <Mail size={20} />, text: 'info@dnagtx.com' },
                    { icon: <Globe size={20} />, text: 'www.dnagtx.com' },
                    { icon: <Globe size={20} />, text: 'www.dnagtxbioinfo.com' },
                  ].map((item, id) => (
                    <div key={id} className="flex flex-col items-center gap-[0.8rem] w-full max-w-[150px] md:max-w-[200px]">
                      <div className="w-[44px] h-[44px] min-w-[44px] bg-[#39FF14] rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-transform duration-300 hover:scale-110">{item.icon}</div>
                      <span className="text-[#a1a1a6] text-[0.9rem] md:text-[1rem] font-medium text-center break-words w-full">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Row: 2 Icons */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
                  {[
                    { icon: <Phone size={20} />, text: '+971 4 566 9518' },
                    { icon: <MapPin size={20} />, text: '501, Building 49, Dubai Healthcare City, Dubai, P.O Box 505262' }
                  ].map((item, id) => (
                    <div key={id} className="flex flex-col items-center gap-[0.8rem] w-full max-w-[150px] md:max-w-[200px]">
                      <div className="w-[44px] h-[44px] min-w-[44px] bg-[#39FF14] rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-transform duration-300 hover:scale-110">{item.icon}</div>
                      <span className="text-[#a1a1a6] text-[0.9rem] md:text-[1rem] font-medium text-center break-words w-full">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Animated Bio-Tech Visual */}
          <div className="hidden xl:flex relative w-full h-[400px] xl:h-[600px] bg-[#050505] items-center justify-center overflow-hidden border-l border-[rgba(255,255,255,0.05)]">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            {/* DNA Double Helix Animation */}
            <div className="absolute inset-0 flex items-center justify-center gap-1 sm:gap-2 opacity-70">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="relative flex items-center justify-center h-[300px] w-[15px] sm:w-[25px]">
                  {/* Connecting bar */}
                  <motion.div 
                    animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.1, 0.5, 0.1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: i * 0.15 }}
                    className="absolute w-[2px] h-[100px] bg-gradient-to-b from-[#39FF14] to-white/50"
                  />
                  {/* Top Helix Node */}
                  <motion.div
                    animate={{ y: [-50, 50, -50], scale: [1, 0.5, 1], zIndex: [10, 0, 10] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: i * 0.15 }}
                    className="absolute w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-[#39FF14] rounded-full shadow-[0_0_15px_#39FF14]"
                  />
                  {/* Bottom Helix Node */}
                  <motion.div
                    animate={{ y: [50, -50, 50], scale: [0.5, 1, 0.5], zIndex: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: i * 0.15 }}
                    className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full shadow-[0_0_10px_#fff]"
                  />
                </div>
              ))}
            </div>
            
            {/* Center Node */}
            <div className="relative z-10 bg-[rgba(0,0,0,0.6)] backdrop-blur-md border border-[#39FF14]/30 p-8 rounded-2xl flex flex-col items-center">
              <Activity size={48} className="text-[#39FF14] mb-4" />
              <div className="text-white font-extrabold tracking-[0.2em] mb-1">SYSTEMS ACTIVE</div>
              <div className="text-[#a1a1a6] text-[0.8rem] tracking-[0.1em]">AWAITING BIOMETRIC INPUT</div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-[30px] right-[30px] z-20 bg-[rgba(0,0,0,0.6)] backdrop-blur-[5px] py-2 px-4 rounded border-l-[3px] border-[#39FF14] text-[0.75rem] font-bold text-white flex items-center gap-[10px] tracking-[0.1em]">
              <Activity size={16} color="#39FF14" />
              <span>SCANNING FREQUENCY | ACTIVE</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Bar: Legal & Identity */}
      <div className="py-8 bg-[#050505] border-t border-[rgba(255,255,255,0.05)]">
        <div className="w-full max-w-[1500px] mx-auto px-8 xl:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="font-extrabold text-[1.2rem] text-[#39FF14]">GTX PERFORMANCE LABS</div>
            <div className="flex gap-8">
              {isAboutPage ? (
                <Link href="/" className="text-white font-extrabold text-[0.9rem] no-underline tracking-[0.1em] transition-colors duration-300 hover:text-[#39FF14]">HOME</Link>
              ) : (
                <Link href="/about" className="text-white font-extrabold text-[0.9rem] no-underline tracking-[0.1em] transition-colors duration-300 hover:text-[#39FF14]">ABOUT US</Link>
              )}
            </div>
            <p className="text-[#555] text-[0.8rem]">
              &copy; {new Date().getFullYear()} DNA GTX Sports Dynamics Lab. Powered by Science.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
