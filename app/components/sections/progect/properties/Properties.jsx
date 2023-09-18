'use client';

import { useState } from 'react';
import styles from './styles.module.scss';
import Attributes from './attributes/Attributes';
import Styles from './styles/Styles';

const Properties = () => {
  const [bookmark, setBookmark] = useState('attributes');
  return (
    <div className={styles.properties}>
      <div className={styles.header}>
        <button
          className={`${styles.headerButton} ${
            bookmark === 'styles' ? styles.active : ''
          }`}
          onClick={() => setBookmark('styles')}
        >
          Styles
        </button>
        <button
          className={`${styles.headerButton} ${
            bookmark === 'attributes' ? styles.active : ''
          }`}
          onClick={() => setBookmark('attributes')}
        >
          Attributes
        </button>
      </div>
      {bookmark === 'attributes' ? <Attributes /> : <Styles />}
    </div>
  );
};

export default Properties;
