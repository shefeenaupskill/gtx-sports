'use client';

import { motion } from 'framer-motion';
import { Microscope, Dna, Activity, Zap, Globe, Heart, Monitor } from 'lucide-react';
import styles from './about.module.css';
import pageStyles from '@/app/page.module.css';
import LabFooter from '@/components/landing/LabFooter';
import Link from 'next/link';

const INVISIBLE_BARRIERS = [
  'CONSTANT FATIGUE DESPITE "DOING EVERYTHING RIGHT"',
  'RECURRING MINOR INJURIES WITH NO CLEAR EXPLANATION',
  'BLOATING AND ENERGY CRASHES AFTER MEALS',
  'PERFORMANCE PLATEAUS DESPITE INCREASING LOAD',
  'DEBILITATING GUT ISSUES AND METABOLIC INEFFICIENCY'
];

const THE_SCIENCE = [
  {
    icon: <Dna className={styles.scienceIcon} size={24} />,
    title: 'Genome Analysis',
    items: [
      'Whole Genome Sequencing',
      'Disease Risk Profiling & Prevention',
      'Allergy and Immune Response Analysis',
      'Genetic Performance Optimization',
      'Lifestyle & Environmental Sensitivity'
    ]
  },
  {
    icon: <Microscope className={styles.scienceIcon} size={24} />,
    title: 'Metagenomic Nutrition',
    items: [
      'Gut Microbiome Sequencing',
      'Digestive Efficiency & Nutrient Absorption',
      'Gut-Immunity Axis Evaluation',
      'Personalized Metagenomic Nutrition',
      'Energy Metabolism Enhancement'
    ]
  },
  {
    icon: <Zap className={styles.scienceIcon} size={24} />,
    title: 'Metabolomics Lab',
    items: [
        'Energy Production & Utilization',
        'Muscle Performance & Adaptation',
        'Fatigue & Recovery Status',
        'Hydration & Electrolyte Balance',
        'Inflammation Monitoring'
    ]
  },
  {
    icon: <Activity className={styles.scienceIcon} size={24} />,
    title: 'Precision Bio-Info',
    items: [
        'Multi-Omics Integrated Solutions',
        'Bio-Info & AI Diagnostic Modeling',
        'Molecular & Cellular Solutions',
        'Real-time Performance Insight',
        'Genetic Injury Protocol'
    ]
  }
];

const BENEFITS = [
    'Nutritional Needs', 'Performance Optimization', 'Sleep Optimization', 
    'Training Recommendation', 'Injury Recovery Protocol', 'Your Genetic Edge'
];

export default function AboutPage() {
  return (
    <div className={styles.main}>
      {/* 🚀 Header: The Scientific Mission */}
      <section className={styles.hero}>
        <div className={pageStyles.container}>
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={pageStyles.nav}
            style={{ marginBottom: '4rem', display: 'flex', gap: '2rem' }}
          >
            <Link href="/" className={styles.aboutLink}>HOME</Link>
            <span style={{ color: '#555' }}>/</span>
            <span className={styles.aboutLink} style={{ color: '#fff' }}>ABOUT US</span>
          </motion.nav>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.title}
          >
            THE INVISIBLE <span>BARRIERS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.subtitle}
          >
            Generic training programs fail to account for an individual&apos;s unique genetic makeup. 
            A one-size-fits-all strategy does not deliver optimal results for high-performance athletes.
          </motion.p>
        </div>
      </section>

      {/* 🛑 The Invisible Barriers Grid */}
      <section className={styles.section} style={{ backgroundColor: '#080808' }}>
        <div className={pageStyles.container}>
          <h2 className={styles.sectionTitle}>BARRICADES TO ELITE PERFORMANCE</h2>
          <div className={styles.invisibleBarriers}>
            {INVISIBLE_BARRIERS.map((barrier, id) => (
              <motion.div 
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: id * 0.1 }}
                className={styles.barrierCard}
              >
                <span className={styles.barrierText}>{barrier}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧪 The Mult-Omics Science */}
      <section className={styles.section}>
        <div className={pageStyles.container}>
          <h2 className={styles.sectionTitle}>THE MULT-OMICS LABORATORY</h2>
          <div className={styles.scienceGrid}>
            {THE_SCIENCE.map((sci, id) => (
              <motion.div 
                key={id}
                initial={{ opacity: 0, x: id % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={styles.scienceCard}
              >
                <div className={styles.scienceHeader}>
                  {sci.icon}
                  <h3 className={styles.scienceTitle}>{sci.title}</h3>
                </div>
                <ul className={styles.scienceDetails}>
                  {sci.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ The Performance Edge */}
      <section className={styles.section} style={{ backgroundColor: '#0a0a0a' }}>
        <div className={pageStyles.container}>
          <h2 className={styles.sectionTitle}>YOUR GENETIC EDGE</h2>
          <div className={styles.benefitsList}>
            {BENEFITS.map((benefit, id) => (
              <motion.div 
                key={id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: id * 0.05 }}
                className={styles.benefitBadge}
              >
                {benefit}
              </motion.div>
            ))}
          </div>

          <div className={styles.solutionsBox}>
            <h3 className={styles.scienceTitle}>GLOBAL HEALTHCARE SOLUTIONS</h3>
            <div className={styles.solutionsGrid}>
              <div className={styles.solutionItem}>
                <Globe size={24} />
                <span>BIO INFO & AI</span>
                <span className={styles.solutionLabel}>Complex Data Mapping</span>
              </div>
              <div className={styles.solutionItem}>
                <Monitor size={24} />
                <span>MULTI-OMICS</span>
                <span className={styles.solutionLabel}>Holistic Biology</span>
              </div>
              <div className={styles.solutionItem}>
                <Heart size={24} />
                <span>MOLECULAR</span>
                <span className={styles.solutionLabel}>Cellular Efficiency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LabFooter />
    </div>
  );
}
