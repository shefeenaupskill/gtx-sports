'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Activity, Gauge, Calendar, Database, Monitor, Trash2 } from 'lucide-react';

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
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to permanently strip this record from the DNA registry?")) return;
    
    setDeletingId(id);
    try {
      const res = await fetch(`/api/athletes?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      
      setAthletes((prev) => {
        const nextAthletes = prev.filter(a => a.id !== id);
        const newTotalPages = Math.ceil(nextAthletes.length / itemsPerPage);
        if (currentPage > newTotalPages && newTotalPages > 0) {
          setCurrentPage(newTotalPages);
        }
        return nextAthletes;
      });
    } catch (err) {
      console.error('Error deleting athlete', err);
      alert('Failed to delete genetic record.');
    } finally {
      setDeletingId(null);
    }
  };

  const validAthletes = Array.isArray(athletes) ? athletes : [];
  const totalPages = Math.ceil(validAthletes.length / itemsPerPage);
  
  const currentAthletes = validAthletes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
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
      <div className="p-6 border-b border-[rgba(255,255,255,0.05)] flex items-center gap-3">
        <Database size={20} color="#39FF14" />
        <h3 className="text-[1.1rem] font-extrabold uppercase tracking-[0.1em] text-white">DNA REGISTRY</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[rgba(255,255,255,0.05)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#39FF14]">
        <AnimatePresence mode="popLayout">
          {currentAthletes.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-[300px] flex flex-col items-center justify-center gap-[15px] text-[#a1a1a6] font-extrabold text-[0.8rem] opacity-50"
            >
              <Database size={32} opacity={0.2} />
              <p>NO GENETIC DATA FOUND</p>
            </motion.div>
          ) : (
            currentAthletes.map((athlete) => (
              <motion.div 
                key={athlete.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row justify-between sm:items-center mb-2 transition-all duration-300 hover:bg-[rgba(57,255,20,0.03)] hover:border-[rgba(57,255,20,0.2)] hover:translate-x-[3px] gap-3 sm:gap-4"
              >
                <div className="flex items-center gap-2.5 min-w-[200px]">
                  <div className="w-[36px] h-[36px] bg-[rgba(57,255,20,0.08)] rounded-lg flex items-center justify-center shrink-0">
                    <User size={15} color="#39FF14" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[0.8rem] text-white tracking-[0.02em]">{athlete.name}</div>
                    <div className="text-[0.7rem] text-[#a1a1a6] font-light">{athlete.email}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.05em] text-[#a1a1a6]">
                    <Activity size={12} color="#39FF14" />
                    <span>{athlete.sportType}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.05em] text-[#a1a1a6]">
                    <Gauge size={12} color="#007AFF" />
                    <span>{athlete.experienceLevel}</span>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-1.5 relative pr-10 mt-2 sm:mt-0 min-w-[140px]">
                  <div className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.05em] text-[#39FF14] whitespace-nowrap">
                    <Monitor size={12} color="#39FF14" className="shrink-0" />
                    <span>{athlete.testType}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.05em] text-[#a1a1a6] whitespace-nowrap">
                    <Calendar size={12} color="#a1a1a6" className="shrink-0" />
                    <span>{new Date(athlete.testDate).toLocaleDateString()}</span>
                  </div>
                  <button 
                    onClick={() => handleDelete(athlete.id)}
                    disabled={deletingId === athlete.id}
                    title="Delete Record"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center bg-[rgba(255,59,48,0.1)] text-[#ff3b30] hover:bg-[#ff3b30] hover:text-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {deletingId === athlete.id ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-3.5 h-3.5 border-2 border-inherit border-t-transparent rounded-full" />
                    ) : (
                      <Trash2 size={12} />
                    )}
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="p-4 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="text-[0.75rem] font-bold text-[#a1a1a6] cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 hover:text-white transition-colors"
          >
            PREVIOUS
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-6 h-6 rounded-full cursor-pointer text-[0.7rem] font-bold flex items-center justify-center transition-colors ${currentPage === idx + 1 ? 'bg-[#39FF14] text-black' : 'bg-[rgba(255,255,255,0.05)] text-[#a1a1a6] hover:bg-[rgba(255,255,255,0.1)]'}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="text-[0.75rem] font-bold text-[#a1a1a6] cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 hover:text-white transition-colors"
          >
            NEXT
          </button>
        </div>
      )}
    </div>
  );
}
