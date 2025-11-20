import CreateThreadInput from '@/components/CreateThreadInput';
import ThreadFeed from '@/components/ThreadFeed';
import mockData from '@/lib/mockData.json';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <CreateThreadInput avatarText="U" />
      <ThreadFeed threads={mockData.threads} />
    </div>
  );
}