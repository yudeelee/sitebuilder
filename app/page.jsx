'use client';

import Header from './components/sections/header/Header';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
    </div>
  );
}
