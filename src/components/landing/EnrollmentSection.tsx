'use client';

import { motion } from 'framer-motion';
import { Database } from 'lucide-react';
import RegistrationForm from '@/components/RegistrationForm';
import AthleteList from '@/components/AthleteList';
import Particles from '@/components/Particles';

interface EnrollmentSectionProps {
  refresh: boolean;
  onRegisterComplete: () => void;
}

export default function EnrollmentSection({ refresh, onRegisterComplete }: EnrollmentSectionProps) {
  return (
    <section id="enrollment" className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#000] relative overflow-hidden">
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-60">
        <Particles
          particleCount={150}
          particleSpread={8}
          speed={0.05}
          particleColors={["#007AFF", "#ffffff"]}
          moveParticlesOnHover={false}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={25}
          disableRotation={false}
        />
      </div>
      <div className="w-full max-w-[1500px] mx-auto px-8 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[650px_1fr] gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="xl:sticky xl:top-[50px] relative"
          >
            <div className="inline-block py-1 px-3 bg-[#39FF14] text-black font-extrabold text-[0.75rem] tracking-[0.1em] rounded mb-4">TECHNICAL ENROLLMENT</div>
            <RegistrationForm onComplete={onRegisterComplete} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <div className="flex items-center gap-[15px] mb-8 border-b border-[rgba(255,255,255,0.1)] pb-4">
              <Database size={20} color="#39FF14" />
              <h3 className="font-extrabold text-[1.2rem] tracking-[0.05em]">GLOBAL ATHLETE DATABASE</h3>
            </div>
            <AthleteList refresh={refresh} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
