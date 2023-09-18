import { useSelector } from 'react-redux';
import styles from './style.module.scss';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';

const psedo = ['---', ':hover', 'first-child', 'last-child'];

const Classes = () => {
  const [open, setOpen] = useState(true);
  const selected = useSelector((state) => state.element.selected);
  const classes = useSelector((state) => state.element.elements)
    .find((el) => el.id == selected)
    ?.attr?.className?.split(' ');

  const selCl = useSelector((state) => state.class.selected);

  return (
    <div className={styles.classes}>
      <div className={styles.header}>
        {selCl || 'Classes'}
        <div
          className={`${styles.open} ${!open ? styles.hide : ''}`}
          onClick={() => setOpen(!open)}
        >
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className={`${styles.body} ${!open ? styles.hide : ''}`}>
        <select>
          {classes?.map((cl, idx) => (
            <option key={idx} value={cl}>
              {cl}
            </option>
          ))}
        </select>
        <select>
          {psedo?.map((cl, idx) => (
            <option key={idx} value={cl}>
              {cl}
            </option>
          ))}
        </select>
        <button className={styles.addButton}>Add</button>
      </div>
    </div>
  );
};

export default Classes;
