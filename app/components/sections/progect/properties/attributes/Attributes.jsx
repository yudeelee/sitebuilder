import { useSelector } from 'react-redux';
import Classes from './classes/Classes';
import styles from './styles.module.scss';

const Attributes = () => {
  return (
    <div className={styles.attributes}>
      <Classes />
    </div>
  );
};

export default Attributes;
