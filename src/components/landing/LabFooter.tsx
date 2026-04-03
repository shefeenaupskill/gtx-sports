'use client';

import { Mail, Globe, Phone, MapPin, Activity } from 'lucide-react';
import styles from '@/app/page.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

/**
 * LabFooter - Professional Biometric Contact & Logistics
 * Displays Dubai HQ information alongside elite athlete performance visuals.
 */
export default function LabFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLayout}>
        {/* Left Side: Diagnostic Contact Grid */}
        <div className={styles.footerContact}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.footerHeading}>WANT TO KNOW MORE?</h2>
            <p className={styles.footerSubHeading}>Contact Our Biomechanics Team</p>
            
            <div className={styles.contactDetails}>
              {[
                { icon: <Mail size={20} />, text: 'info@dnagtx.com' },
                { icon: <Globe size={20} />, text: 'www.dnagtx.com' },
                { icon: <Globe size={20} />, text: 'www.dnagtxbioinfo.com' },
                { icon: <Phone size={20} />, text: '+971 4 566 9518' },
                { icon: <MapPin size={20} />, text: '501, Building 49, Dubai Healthcare City, Dubai, P.O Box 505262' }
              ].map((item, id) => (
                <div key={id} className={styles.contactItem}>
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <span className={styles.itemText}>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Elite Performance Visual */}
        <div className={styles.footerImageWrap}>
          <Image 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" 
            alt="Elite Athlete Performance" 
            className={styles.footerImage}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.imageOverlay} />
          <div className={styles.performanceIndicator}>
            <Activity size={16} color="#39FF14" />
            <span>POWER | VELOCITY | HR: 188 bpm</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Legal & Identity */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomFlex}>
            <div className={styles.footerLogo}>GTX PERFORMANCE LABS</div>
            <div className={styles.footerNav}>
              <Link href="/about" className={styles.aboutLink}>ABOUT US</Link>
            </div>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} DNA GTX Sports Dynamics Lab. Powered by Science.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
