import styles from './styles.module.scss';
import { IoMdArrowDropdown } from 'react-icons/io';

const SectionHeader = ({ open, title, click }) => {
  return (
    <div className={styles.header}>
      {title}
      <div
        className={`${styles.open} ${!open ? styles.hide : ''}`}
        onClick={click}
      >
        <IoMdArrowDropdown />
      </div>
    </div>
  );
};

export default SectionHeader;
