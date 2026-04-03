'use client';

import { useState, useRef, useEffect } from 'react';
import { Microscope, Activity, ShieldCheck, Mail, Phone, User, Monitor, Calendar, ChevronDown } from 'lucide-react';
import styles from './RegistrationForm.module.css';

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
    <div className={`glass ${styles.formContainer}`}>
      <div className={styles.labHeader}>
        <Microscope size={24} color="#39FF14" />
        <h2 className={styles.formTitle}>Athlete Enrollment</h2>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputBox}>
          <User className={styles.icon} size={16} />
          <input
            required
            type="text"
            name="name"
            placeholder="FULL NAME"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputBox}>
          <Mail className={styles.icon} size={16} />
          <input
            required
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <Phone className={styles.icon} size={16} />
          <input
            required
            type="tel"
            name="phone"
            placeholder="PHONE"
            value={formData.phone}
            onChange={handleChange}
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

        <div className={styles.inputBox}>
          <Calendar 
            className={`${styles.icon} ${styles.interactiveIcon}`} 
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
          />
        </div>

        {status.message && (
          <div className={status.type === 'error' ? styles.errorMessage : styles.successMessage}>
            <Activity size={14} /> {status.message}
          </div>
        )}

        <button
          type="submit"
          className={styles.submitBtn}
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
    <div className={styles.customSelectWrapper} ref={containerRef}>
      <div 
        className={`${styles.customSelectHeader} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.iconWrapper}>{icon}</span>
        <span className={value ? styles.selectedValue : styles.placeholder}>
          {value || placeholder}
        </span>
        <ChevronDown size={16} className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`} />
      </div>
      
      {isOpen && (
        <div className={styles.optionsList}>
          {options.map((option) => (
            <div 
              key={option} 
              className={`${styles.optionItem} ${value === option ? styles.activeOption : ''}`}
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
