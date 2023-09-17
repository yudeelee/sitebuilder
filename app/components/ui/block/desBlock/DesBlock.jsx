import styles from './styles.module.scss';

const DesBlock = ({ children, title, reverse }) => {
  return (
    <div className={styles.desblock}>
      <div className={styles.headblock}>
        <div className={styles.leftdecor}>
          <div className={styles.innerblock}></div>
        </div>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.rightdecor}>
          <div className={styles.innerblock}></div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div
        className={`${styles.bodyblock} ${
          reverse === 'true' ? styles.reverse : ''
        }`}
      >
        <div className={styles.verline_wrapper}>
          <div className={styles.verline}></div>
          <div className={styles.whitedecor}></div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      <div
        className={`${styles.footer} ${
          reverse === 'true' ? styles.reverse : ''
        }`}
      >
        <div className={styles.bottomleftdecor}>
          <div className={styles.innerblock}></div>
        </div>
        <div className={styles.whitedecor}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default DesBlock;
