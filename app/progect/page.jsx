import styles from './styles.module.scss';
import Header from '../components/sections/progect/progectHeader/page';
import Canvas from '../components/sections/progect/canvas/Canvas';
import Elements from '../components/sections/progect/elements/Elements';
import Properties from '../components/sections/progect/properties/Properties';

const Progect = () => {
  return (
    <div className={styles.progect}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <div className={styles.elements}>
          <Elements />
        </div>
        <div className={styles.properties}>
          <Properties />
        </div>
        <div className={styles.workspace}>
          <div className={styles.advanced}></div>
          <div className={styles.media}></div>
          <div className={styles.document}>
            <Canvas />
          </div>
        </div>
        <div className={styles.sidebar}></div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Progect;
