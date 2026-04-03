'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import styles from '@/app/page.module.css';
import Image from 'next/image';

/**
 * HeroSection - The Dynamic DNA Arrival
 * Incorporates the official GTX SPORTS branding and high-performance laboratory visuals.
 */
export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Official Branding: Powered by DNA GTX */}
      <div className={styles.poweredBy}>
        <span className={styles.poweredLabel}>Powered by</span>
        <div className={styles.poweredLogoMarkup}>
          <span className={styles.dnaText}>DNA</span>
          <span className={styles.gtxText}>GTx</span>
        </div>
      </div>

      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        {/* Main Official Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={styles.heroLogoContainer}
        >
          <Image 
            src="/logo.png" 
            alt="GTX SPORTS LOGO" 
            width={600} 
            height={150} 
            className={styles.mainLogoImage}
            style={{ height: 'auto' }}
            priority
          />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.mainTitle}
        >
          YOUR <span className={styles.glowText}>DNA</span> IS YOUR BLUEPRINT.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.heroSubText}
        >
          Elite-tier sports science and dynamic diagnostics. <br />
          Unlock biological precision in training, nutrition, and recovery.
        </motion.p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.exploreBtn}
          onClick={() => document.getElementById('enrollment')?.scrollIntoView({ behavior: 'smooth' })}
        >
          ENROLL NOW <ChevronRight size={18} />
        </motion.button>
      </div>
    </section>
  );
}
