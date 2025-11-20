// components/CreateThreadInput/index.tsx
'use client';

import React, { useState } from 'react';
import styles from './CreateThreadInput.module.css';

interface CreateThreadInputProps {
  avatarText?: string;
  placeholder?: string;
}

export default function CreateThreadInput({
  avatarText = 'U',
  placeholder = 'Có gì mới?',
}: CreateThreadInputProps) {
  const [value, setValue] = useState('');

  return (
    <div className={styles.createThreadContainer}>
      <div className={styles.createThreadWrapper}>
        <div className={styles.createAvatar}>
          <div className={styles.avatar}>{avatarText}</div>
        </div>

        <div className={styles.createInputSection}>
          <div className={styles.inputWrapper}>
            <textarea
              className={styles.threadInput}
              placeholder={placeholder}
              rows={1}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>

        <button
          className={`${styles.postButton} ${value.trim() ? styles.active : ''}`}
          disabled={!value.trim()}
        >
          Đăng
        </button>
      </div>
    </div>
  );
}
