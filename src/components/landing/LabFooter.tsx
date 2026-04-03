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
        <div className="flex flex-col xl:grid xl:grid-cols-[1fr_500px] items-center text-center xl:text-left py-24 px-8">
          {/* Left Side: Diagnostic Contact Grid */}
          <div className="p-16 xl:p-0 max-w-[800px] mx-auto xl:mx-0 w-full lg:px-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[2rem] md:text-[3rem] font-extrabold text-[#39FF14] mb-2">WANT TO KNOW MORE?</h2>
              <p className="text-[1.5rem] font-normal text-white mb-12">Contact Our Biomechanics Team</p>
              
              <div className="flex flex-wrap justify-center xl:justify-start gap-12 mt-8">
                {[
                  { icon: <Mail size={20} />, text: 'info@dnagtx.com' },
                  { icon: <Globe size={20} />, text: 'www.dnagtx.com' },
                  { icon: <Globe size={20} />, text: 'www.dnagtxbioinfo.com' },
                  { icon: <Phone size={20} />, text: '+971 4 566 9518' },
                  { icon: <MapPin size={20} />, text: '501, Building 49, Dubai Healthcare City, Dubai, P.O Box 505262' }
                ].map((item, id) => (
                  <div key={id} className="flex flex-col items-center gap-[0.8rem]">
                    <div className="w-[44px] h-[44px] min-w-[44px] bg-[#39FF14] rounded-full flex items-center justify-center text-black">{item.icon}</div>
                    <span className="text-[#a1a1a6] text-[1.1rem] font-medium max-w-[200px] text-center">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Elite Performance Visual */}
          <div className="hidden xl:block relative w-full h-[400px] xl:h-[600px]">
            <Image 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" 
              alt="Elite Athlete Performance" 
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-[30px] right-[30px] bg-[rgba(0,0,0,0.6)] backdrop-blur-[5px] py-2 px-4 rounded border-l-[3px] border-[#39FF14] text-[0.75rem] font-bold text-white flex items-center gap-[10px] tracking-[0.1em]">
              <Activity size={16} color="#39FF14" />
              <span>POWER | VELOCITY | HR: 188 bpm</span>
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
