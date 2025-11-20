// components/ThreadFeed/index.tsx
import React from 'react';
import ThreadCard from '@/components/ThreadCard';
import styles from './ThreadFeed.module.css';

interface Thread {
  id: string;
  username: string;
  timestamp: string;
  content: string;
  imageUrl?: string;
  likes: string;
  comments: string;
  reposts: string;
  verified?: boolean;
  avatarText: string;
}

interface ThreadFeedProps {
  threads: Thread[];
}

export default function ThreadFeed({ threads }: ThreadFeedProps) {
  return (
    <div className={styles.threadFeed}>
      {threads.map((thread) => (
        <ThreadCard
          key={thread.id}
          username={thread.username}
          timestamp={thread.timestamp}
          content={thread.content}
          imageUrl={thread.imageUrl}
          likes={thread.likes}
          comments={thread.comments}
          reposts={thread.reposts}
          verified={thread.verified}
          avatarText={thread.avatarText}
        />
      ))}
    </div>
  );
}