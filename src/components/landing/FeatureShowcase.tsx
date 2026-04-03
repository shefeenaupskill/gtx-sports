'use client';

import { motion } from 'framer-motion';
import { Dna, Gauge, Smartphone, Zap } from 'lucide-react';
import Particles from '@/components/Particles';

const FEATURES = [
  { icon: <Zap color="#39FF14" />, text: "Eat smarter based on genetics" },
  { icon: <Dna color="#39FF14" />, text: "Train better for your muscle type" },
  { icon: <Gauge color="#39FF14" />, text: "Recover faster from intense loads" },
  { icon: <Smartphone color="#39FF14" />, text: "Optimized performance dashboard" }
];

export default function FeatureShowcase() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-60">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#39FF14", "#ffffff"]}
          moveParticlesOnHover
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={80}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>
      <div className="w-full max-w-[1500px] mx-auto px-8 xl:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[2.5rem] font-extrabold mb-16 max-w-[700px]">WHAT IF YOUR DNA COULD TELL YOU HOW TO...</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {FEATURES.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: "rgba(57, 255, 20, 0.05)" }}
              className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] p-12 lg:p-8 rounded-[20px] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(57,255,20,0.05)]"
            >
              <div className="mb-6">{item.icon}</div>
              <p className="text-[1.2rem] font-medium leading-[1.4]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
