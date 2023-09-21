import { useState } from 'react';
import styles from './styles.module.scss';

const SimpleSelect = ({ values, select, selected, direction = 'none' }) => {
  const [open, setOpen] = useState(false);
  if (selected === 'auto') {
    direction = 'none';
  }
  return (
    <div className={styles.simpleSelect}>
      <div
        className={`${styles.shadow} ${open ? styles.open : ''}`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`${styles.header} ${open ? styles.open : ''} ${
          styles[direction]
        }`}
        onClick={() => setOpen(!open)}
      >
        {selected}
      </div>
      <div className={`${styles.items} ${!open ? styles.hide : ''}`}>
        {values.map((val, idx) => (
          <div
            key={idx}
            className={styles.item}
            onClick={() => {
              select(val);
              setOpen(false);
            }}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleSelect;
