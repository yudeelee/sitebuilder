import styles from './styles.module.scss';
import { IoIosClose } from 'react-icons/io';

const InputNP = ({ label, change, clear, size = 'normal', value }) => {
  return (
    <div
      className={`${styles.inputNP} ${size === 'small' ? styles.small : ''}`}
    >
      {label && (
        <div
          className={`${styles.label} ${size === 'small' ? styles.small : ''}`}
        >
          {label}
        </div>
      )}
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.input} ${!value && styles.dark}`}
          value={value || ''}
          type='text'
          onChange={(e) => change(e.target.value)}
        />
        <div className={styles.clear}>
          <IoIosClose />
        </div>
      </div>
    </div>
  );
};

export default InputNP;
