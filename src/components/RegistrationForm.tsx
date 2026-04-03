'use client';

import { useState, useRef, useEffect } from 'react';
import { Microscope, Activity, ShieldCheck, Mail, Phone, User, Monitor, Calendar, ChevronDown } from 'lucide-react';

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

const SPORT_TYPES = ['Athletics', 'Football', 'Basketball', 'Tennis', 'Swimming', 'Cycling', 'Gymnastics'];
const EXPERIENCE_LEVELS = ['Beginner', 'Intermediate', 'Professional'];
const TEST_TYPES = ['VO2 Max Test', 'Body Composition', 'Sprint Acceleration', 'Lactate Threshold', 'Agility Drill'];

export default function RegistrationForm({ onComplete }: { onComplete: () => void }) {
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sportType: '',
    experienceLevel: '',
    testType: '',
    testDate: '',
  });

  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      const res = await fetch('/api/athletes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setStatus({ type: 'success', message: 'GENETIC WORKBOOK REGISTERED' });
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          sportType: '',
          experienceLevel: '',
          testType: '',
          testDate: '',
        });
        onComplete();
        setStatus({ type: 'idle' });
      }, 2000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Registration failed';
      setStatus({ type: 'error', message });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCustomSelect = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="glass p-6 md:p-10 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-3xl md:rounded-[32px]">
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <Microscope size={24} color="#39FF14" />
        <h2 className="text-[1.25rem] md:text-[1.5rem] font-extrabold uppercase tracking-[0.05em] text-white">Athlete Enrollment</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
        <div className="relative flex items-center">
          <User className="absolute left-[14px] text-[#39FF14] opacity-70" size={16} />
          <input
            required
            type="text"
            name="name"
            placeholder="FULL NAME"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-4 pr-4 pl-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl md:rounded-[14px] text-white font-sans text-[0.9rem] md:text-[1rem] transition-all duration-200 focus:outline-none focus:border-[#39FF14] focus:bg-[rgba(255,255,255,0.08)] autofill:shadow-[inset_0_0_0px_1000px_#1a1a1a] autofill:[-webkit-text-fill-color:white]"
          />
        </div>

        <div className="relative flex items-center">
          <Mail className="absolute left-[14px] text-[#39FF14] opacity-70" size={16} />
          <input
            required
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-4 pr-4 pl-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl md:rounded-[14px] text-white font-sans text-[0.9rem] md:text-[1rem] transition-all duration-200 focus:outline-none focus:border-[#39FF14] focus:bg-[rgba(255,255,255,0.08)] autofill:shadow-[inset_0_0_0px_1000px_#1a1a1a] autofill:[-webkit-text-fill-color:white]"
          />
        </div>
        <div className="relative flex items-center">
          <Phone className="absolute left-[14px] text-[#39FF14] opacity-70" size={16} />
          <input
            required
            type="tel"
            name="phone"
            placeholder="PHONE"
            value={formData.phone}
            onChange={handleChange}
            className="w-full py-4 pr-4 pl-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl md:rounded-[14px] text-white font-sans text-[0.9rem] md:text-[1rem] transition-all duration-200 focus:outline-none focus:border-[#39FF14] focus:bg-[rgba(255,255,255,0.08)] autofill:shadow-[inset_0_0_0px_1000px_#1a1a1a] autofill:[-webkit-text-fill-color:white]"
          />
        </div>

        <CustomSelect 
          name="sportType"
          value={formData.sportType}
          placeholder="SPORT TYPE"
          options={SPORT_TYPES}
          icon={<Activity size={16} />}
          onChange={handleCustomSelect}
        />

        <CustomSelect 
          name="experienceLevel"
          value={formData.experienceLevel}
          placeholder="EXPERIENCE"
          options={EXPERIENCE_LEVELS}
          icon={<ShieldCheck size={16} />}
          onChange={handleCustomSelect}
        />

        <CustomSelect 
          name="testType"
          value={formData.testType}
          placeholder="DIAGNOSTIC TEST"
          options={TEST_TYPES}
          icon={<Monitor size={16} />}
          onChange={handleCustomSelect}
        />

        <div className="relative flex flex-col z-0">
          <label className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[rgba(255,255,255,0.4)] mb-1.5 pl-1">Test Date</label>
          <div className="relative flex items-center">
            <Calendar 
              className="absolute left-[14px] text-[#39FF14] opacity-70 cursor-pointer transition-transform duration-200 hover:scale-110 hover:opacity-100 z-10" 
              size={16} 
              onClick={() => dateInputRef.current?.showPicker()}
            />
            <input
              ref={dateInputRef}
              required
              type="date"
              name="testDate"
              value={formData.testDate}
              onChange={handleChange}
              className="relative w-full py-4 pr-8 pl-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl md:rounded-[14px] text-white font-sans text-[0.9rem] md:text-[1rem] transition-all duration-200 focus:outline-none focus:border-[#39FF14] focus:bg-[rgba(255,255,255,0.08)] autofill:shadow-[inset_0_0_0px_1000px_#1a1a1a] autofill:[-webkit-text-fill-color:white]"
            />
          </div>
        </div>

        {status.message && (
          <div className={status.type === 'error' ? "bg-[rgba(255,59,48,0.1)] text-[#ff3b30] p-4 rounded-lg border border-[rgba(255,59,48,0.2)] text-[0.8rem] font-semibold flex items-center gap-2" : "bg-[rgba(57,255,20,0.1)] text-[#39FF14] p-4 rounded-lg border border-[rgba(57,255,20,0.2)] text-[0.8rem] font-semibold flex items-center gap-2"}>
            <Activity size={14} /> {status.message}
          </div>
        )}

        <button
          type="submit"
          className="mt-2 md:mt-4 bg-[#39FF14] text-black border-none p-4 md:p-[1.2rem] rounded-xl md:rounded-[12px] font-extrabold text-[0.85rem] md:text-[0.9rem] uppercase tracking-[0.1em] cursor-pointer transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] disabled:opacity-50"
          disabled={status.type === 'loading'}
        >
          {status.type === 'loading' ? 'PROCESSING...' : 'INITIALIZE REGISTRATION'}
        </button>
      </form>
    </div>
  );
}

function CustomSelect({ name, value, placeholder, options, icon, onChange }: {
  name: string;
  value: string;
  placeholder: string;
  options: string[];
  icon: React.ReactNode;
  onChange: (name: string, value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative w-full ${isOpen ? 'z-[100]' : 'z-10'}`} ref={containerRef}>
      <div 
        className={`w-full py-4 pr-4 pl-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl md:rounded-[14px] text-white text-[0.9rem] md:text-[1rem] cursor-pointer flex items-center justify-between transition-all duration-200 hover:border-[#39FF14] hover:bg-[rgba(255,255,255,0.08)] ${isOpen ? 'border-[#39FF14] bg-[rgba(255,255,255,0.08)]' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="absolute left-[14px] text-[#39FF14] opacity-70 flex items-center">{icon}</span>
        <span className={value ? "text-white" : "text-[rgba(255,255,255,0.4)]"}>
          {value || placeholder}
        </span>
        <ChevronDown size={16} className={`text-[rgba(255,255,255,0.4)] transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#0f0f0f] border border-[rgba(255,255,255,0.1)] rounded-[14px] overflow-hidden z-[100] shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-[slideIn_0.2s_ease]">
          {options.map((option) => (
            <div 
              key={option} 
              className={`py-[12px] px-[16px] md:py-[14px] md:px-[20px] text-[rgba(255,255,255,0.7)] cursor-pointer transition-all duration-200 text-[0.9rem] md:text-[0.95rem] hover:bg-[rgba(57,255,20,0.1)] hover:text-[#39FF14] ${value === option ? 'bg-[rgba(57,255,20,0.15)] text-[#39FF14] font-semibold' : ''}`}
              onClick={() => {
                onChange(name, option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
