'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Activity, Gauge, Calendar, Database, Search } from 'lucide-react';
import styles from './AthleteList.module.css';

interface Athlete {
  id: number;
  name: string;
  email: string;
  phone: string;
  sportType: string;
  experienceLevel: string;
  testType: string;
  testDate: string;
  createdAt: string;
}

export default function AthleteList({ refresh }: { refresh: boolean }) {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAthletes();
  }, [refresh]);

  const fetchAthletes = async () => {
    try {
      const res = await fetch('/api/athletes');
      const data = await res.json();
      setAthletes(data);
    } catch {
      console.error('Failed to fetch athletes');
    } finally {
      setLoading(false);
    }
  };

  const filteredAthletes = Array.isArray(athletes) 
    ? athletes.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className={styles.loader}
        />
        <p>ACCESSING DNA RECORDS...</p>
      </div>
    );
  }

  return (
    <div className={`glass ${styles.container}`}>
      <div className={styles.topBar}>
        <div className={styles.searchBox}>
          <Search size={16} color="rgba(255,255,255,0.4)" />
          <input 
            type="text" 
            placeholder="FILTER ATHLETES..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.listWrapper}>
        <AnimatePresence mode="popLayout">
          {filteredAthletes.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.emptyState}
            >
              <Database size={32} opacity={0.2} />
              <p>NO GENETIC DATA FOUND</p>
            </motion.div>
          ) : (
            filteredAthletes.map((athlete) => (
              <motion.div 
                key={athlete.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={styles.athleteRow}
              >
                <div className={styles.athleteMain}>
                  <div className={styles.avatarBox}>
                    <User size={18} color="#39FF14" />
                  </div>
                  <div>
                    <div className={styles.name}>{athlete.name}</div>
                    <div className={styles.email}>{athlete.email}</div>
                  </div>
                </div>

                <div className={styles.stats}>
                  <div className={styles.statItem}>
                    <Activity size={14} color="#39FF14" />
                    <span>{athlete.sportType}</span>
                  </div>
                  <div className={styles.statItem}>
                    <Gauge size={14} color="#007AFF" />
                    <span>{athlete.experienceLevel}</span>
                  </div>
                </div>

                <div className={styles.testInfo}>
                  <div className={styles.testBadge}>{athlete.testType}</div>
                  <div className={styles.date}>
                    <Calendar size={12} /> {new Date(athlete.testDate).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
