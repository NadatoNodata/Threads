import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className={styles.desktopNav}>
        <div className={styles.navLogo}>
          <a href="#" className={styles.navItem}>
            <svg viewBox="0 0 24 24" className={styles.filled}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6a4 4 0 0 1 4 4c0 2-1 3.5-2.5 4.5S11 16 11 18" stroke="#ffffff" strokeWidth="2.5" />
              <circle cx="12" cy="10" r="4" fill="#ffffff" />
              <path d="M16 10h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" stroke="#ffffff" strokeWidth="2" fill="none" />
            </svg>
          </a>
        </div>
        
        <div className={styles.navItems}>
          <a href="#" className={`${styles.navItem} ${styles.active}`}>
            <svg viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </a>
          
          <a href="#" className={styles.navItem}>
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </a>
          
          <a href="#" className={styles.navItem}>
            <svg viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </a>
          
          <a href="#" className={styles.navItem}>
            <svg viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </a>
          
          <a href="#" className={styles.navItem}>
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855" />
            </svg>
          </a>
        </div>
        
        <div className={styles.navMenu}>
          <a href="#" className={styles.navItem}>
            <svg viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className={styles.mobileNav}>
        <div className={styles.mobileNavItems}>
          <a href="#" className={`${styles.mobileNavItem} ${styles.active}`}>
            <svg viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </a>
          
          <a href="#" className={styles.mobileNavItem}>
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </a>
          
          <a href="#" className={`${styles.mobileNavItem} ${styles.plusBtn}`}>
            <svg viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </a>
          
          <a href="#" className={styles.mobileNavItem}>
            <svg viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </a>
          
          <a href="#" className={styles.mobileNavItem}>
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855" />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
}