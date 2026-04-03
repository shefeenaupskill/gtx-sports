'use client';

import { motion } from 'framer-motion';
import { Dna, Gauge, Smartphone, Zap } from 'lucide-react';
import styles from '@/app/page.module.css';
import Particles from '@/components/Particles';

const FEATURES = [
  { icon: <Zap color="#39FF14" />, text: "Eat smarter based on genetics" },
  { icon: <Dna color="#39FF14" />, text: "Train better for your muscle type" },
  { icon: <Gauge color="#39FF14" />, text: "Recover faster from intense loads" },
  { icon: <Smartphone color="#39FF14" />, text: "Optimized performance dashboard" }
];

export default function FeatureShowcase() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.particlesOverlay}>
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
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.featuresHeader}
        >
          <h2 className={styles.sectionHeading}>WHAT IF YOUR DNA COULD TELL YOU HOW TO...</h2>
        </motion.div>

        <div className={styles.featuresGrid}>
          {FEATURES.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: "rgba(57, 255, 20, 0.05)" }}
              className={styles.featureCard}
            >
              <div className={styles.iconBox}>{item.icon}</div>
              <p className={styles.featureText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
