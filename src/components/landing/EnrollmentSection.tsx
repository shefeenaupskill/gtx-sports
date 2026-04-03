'use client';

import { motion } from 'framer-motion';
import { Database } from 'lucide-react';
import styles from '@/app/page.module.css';
import RegistrationForm from '@/components/RegistrationForm';
import AthleteList from '@/components/AthleteList';
import Particles from '@/components/Particles';

interface EnrollmentSectionProps {
  refresh: boolean;
  onRegisterComplete: () => void;
}

export default function EnrollmentSection({ refresh, onRegisterComplete }: EnrollmentSectionProps) {
  return (
    <section id="enrollment" className={styles.enrollmentSection}>
      <div className={styles.particlesOverlay}>
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
      <div className={styles.container}>
        <div className={styles.enrollmentLayout}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.formContainer}
          >
            <div className={styles.formBadge}>TECHNICAL ENROLLMENT</div>
            <RegistrationForm onComplete={onRegisterComplete} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.listContainer}
          >
            <div className={styles.dashboardHeader}>
              <Database size={20} color="#39FF14" />
              <h3>GLOBAL ATHLETE DATABASE</h3>
            </div>
            <AthleteList refresh={refresh} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
