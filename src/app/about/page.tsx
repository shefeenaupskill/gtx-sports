'use client';

import { motion } from 'framer-motion';
import { Microscope, Dna, Activity, Zap, Globe, Heart, Monitor } from 'lucide-react';
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
    icon: <Dna className="text-[#39FF14]" size={24} />,
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
    icon: <Microscope className="text-[#39FF14]" size={24} />,
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
    icon: <Zap className="text-[#39FF14]" size={24} />,
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
    icon: <Activity className="text-[#39FF14]" size={24} />,
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
    <div className="min-h-screen bg-[#050505] text-white">
      {/* 🚀 Header: The Scientific Mission */}
      <section className="pt-12 pb-32 text-center bg-[radial-gradient(circle_at_top,rgba(57,255,20,0.05)_0%,transparent_60%)]">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-10 text-[0.85rem] font-bold tracking-[0.1em] border border-[rgba(255,255,255,0.1)] rounded-full px-10 py-5 w-max mx-auto bg-[rgba(255,255,255,0.02)] backdrop-blur-md"
            style={{ marginBottom: '4rem', display: 'flex', gap: '2rem' }}
          >
            <Link href="/" className="hover:text-[#39FF14] transition-colors">HOME</Link>
            <span style={{ color: '#555' }}>/</span>
            <span className="hover:text-[#39FF14] transition-colors" style={{ color: '#fff' }}>ABOUT US</span>
          </motion.nav>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[3rem] xl:text-[4.5rem] font-black tracking-tighter mb-8"
          >
            THE INVISIBLE <span className="text-[#39FF14]">BARRIERS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[1.5rem] text-[#a1a1a6] max-w-[800px] mx-auto leading-relaxed"
          >
            Generic training programs fail to account for an individual&apos;s unique genetic makeup. 
            A one-size-fits-all strategy does not deliver optimal results for high-performance athletes.
          </motion.p>
        </div>
      </section>

      {/* 🛑 The Invisible Barriers Grid */}
      <section className="py-32" style={{ backgroundColor: '#080808' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-[2.5rem] font-extrabold mb-16 text-center">BARRICADES TO ELITE PERFORMANCE</h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            {INVISIBLE_BARRIERS.map((barrier, id) => (
              <motion.div 
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: id * 0.1 }}
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] p-12 rounded-[20px] text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(57,255,20,0.03)] hover:border-[rgba(57,255,20,0.2)]"
              >
                <span className="text-[#a1a1a6] text-[1.1rem] font-semibold leading-[1.6]">{barrier}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧪 The Mult-Omics Science */}
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-[2.5rem] font-extrabold mb-16 text-center">THE MULT-OMICS LABORATORY</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {THE_SCIENCE.map((sci, id) => (
              <motion.div 
                key={id}
                initial={{ opacity: 0, x: id % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] p-16 rounded-[32px] relative overflow-hidden before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-[#39FF14]"
              >
                <div className="flex items-center gap-5 mb-8">
                  {sci.icon}
                  <h3 className="text-[1.8rem] font-extrabold uppercase">{sci.title}</h3>
                </div>
                <ul className="list-none p-0 m-0">
                  {sci.items.map((item, idx) => (
                    <li key={idx} className="mb-5 pl-5 relative text-[#a1a1a6] before:content-['▶'] before:absolute before:left-0 before:text-[0.7rem] before:top-[5px] before:text-[#39FF14]">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ The Performance Edge */}
      <section className="py-32" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-[2.5rem] font-extrabold mb-16 text-center">YOUR GENETIC EDGE</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {BENEFITS.map((benefit, id) => (
              <motion.div 
                key={id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: id * 0.05 }}
                className="bg-[rgba(57,255,20,0.08)] border border-[#39FF14] text-white py-4 px-8 rounded-full font-bold text-[1.1rem]"
              >
                {benefit}
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-16 bg-black border border-[rgba(255,255,255,0.05)] rounded-[24px] text-center">
            <h3 className="text-[1.8rem] font-extrabold uppercase mb-12">GLOBAL HEALTHCARE SOLUTIONS</h3>
            <div className="flex justify-around mt-12 flex-wrap gap-8">
              <div className="flex flex-col gap-2.5 font-extrabold text-[#39FF14] items-center">
                <Globe size={24} />
                <span>BIO INFO & AI</span>
                <span className="text-[#555] text-[0.8rem]">Complex Data Mapping</span>
              </div>
              <div className="flex flex-col gap-2.5 font-extrabold text-[#39FF14] items-center">
                <Monitor size={24} />
                <span>MULTI-OMICS</span>
                <span className="text-[#555] text-[0.8rem]">Holistic Biology</span>
              </div>
              <div className="flex flex-col gap-2.5 font-extrabold text-[#39FF14] items-center">
                <Heart size={24} />
                <span>MOLECULAR</span>
                <span className="text-[#555] text-[0.8rem]">Cellular Efficiency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LabFooter />
    </div>
  );
}
