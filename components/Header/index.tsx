// components/Header/index.tsx
'use client';

import React, { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [activeTab, setActiveTab] = useState<'for-you' | 'following'>('following');

  return (
    <>
      {/* Desktop Header */}
      <header className={styles.desktopHeader}>
        <button className={styles.dropdownButton}>
          <span className={styles.dropdownText}>Đang theo dõi</span>
          <svg className={styles.dropdownIcon} viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <button className={styles.desktopMenuButton}>
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </header>

      {/* Mobile Header */}
      <header className={styles.mobileHeader}>
        <div className={styles.mobileHeaderTop}>
          <div className={styles.mobileLogo}>@</div>
          <button className={styles.mobileMenuButton}>
            <svg viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
        <nav className={styles.mobileTabs}>
          <button
            className={`${styles.mobileTab} ${activeTab === 'for-you' ? styles.active : ''}`}
            onClick={() => setActiveTab('for-you')}
          >
            Dành cho bạn
          </button>
          <button
            className={`${styles.mobileTab} ${activeTab === 'following' ? styles.active : ''}`}
            onClick={() => setActiveTab('following')}
          >
            Đang theo dõi
          </button>
        </nav>
      </header>
    </>
  );
}