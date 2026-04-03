'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Activity, Gauge, Calendar, Database, Search } from 'lucide-react';

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
      <div className="h-[400px] flex flex-col items-center justify-center gap-5 text-[#a1a1a6] font-extrabold text-[0.8rem] tracking-[0.1em]">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-[40px] h-[40px] border-4 border-[rgba(57,255,20,0.1)] border-t-[#39FF14] rounded-full"
        />
        <p>ACCESSING DNA RECORDS...</p>
      </div>
    );
  }

  return (
    <div className="glass h-[570px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[24px] flex flex-col">
      <div className="p-6 border-b border-[rgba(255,255,255,0.05)]">
        <div className="bg-[rgba(255,255,255,0.05)] rounded-full py-2.5 px-5 flex items-center gap-3">
          <Search size={16} color="rgba(255,255,255,0.4)" />
          <input 
            type="text" 
            placeholder="FILTER ATHLETES..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none text-white text-[0.8rem] font-bold tracking-[0.1em] w-full focus:outline-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[rgba(255,255,255,0.05)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#39FF14]">
        <AnimatePresence mode="popLayout">
          {filteredAthletes.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-[300px] flex flex-col items-center justify-center gap-[15px] text-[#a1a1a6] font-extrabold text-[0.8rem] opacity-50"
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
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-[1.2rem] flex flex-col sm:flex-row justify-between sm:items-center mb-[0.8rem] transition-all duration-300 hover:bg-[rgba(57,255,20,0.03)] hover:border-[rgba(57,255,20,0.2)] hover:translate-x-[5px] gap-4 sm:gap-0"
              >
                <div className="flex items-center gap-[15px] min-w-[250px]">
                  <div className="w-[44px] h-[44px] bg-[rgba(57,255,20,0.08)] rounded-xl flex items-center justify-center shrink-0">
                    <User size={18} color="#39FF14" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[0.95rem] text-white tracking-[0.02em]">{athlete.name}</div>
                    <div className="text-[0.8rem] text-[#a1a1a6] font-light">{athlete.email}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.05em] text-[#a1a1a6]">
                    <Activity size={14} color="#39FF14" />
                    <span>{athlete.sportType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.05em] text-[#a1a1a6]">
                    <Gauge size={14} color="#007AFF" />
                    <span>{athlete.experienceLevel}</span>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end">
                  <div className="bg-[rgba(255,255,255,0.05)] py-1 px-2.5 rounded-md text-[0.7rem] font-extrabold text-[#39FF14] uppercase tracking-[0.05em] mb-1.5 inline-block">{athlete.testType}</div>
                  <div className="text-[0.75rem] text-[#a1a1a6] flex items-center gap-[5px]">
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
