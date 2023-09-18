import styles from './styles.module.scss';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { HiOutlineArrowSmUp } from 'react-icons/hi';
import { HiOutlineArrowSmDown } from 'react-icons/hi';

const SelectClass = ({
  values = [],
  selected,
  select,
  edit,
  del,
  up,
  down,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.selectClass}>
      <div
        className={`${styles.selected} ${open ? styles.hide : ''}`}
        onClick={() => setOpen(!open)}
      >
        {selected}
        <div className={`${styles.open} ${!open ? styles.hide : ''}`}>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className={`${styles.list} ${open ? styles.hide : ''}`}>
        {values.map((val, idx) => (
          <div key={idx} className={styles.item}>
            {val}
            <div className={styles.buttons}>
              {idx === values.length - 1 ? (
                ''
              ) : (
                <div className={styles.itemButton}>
                  <HiOutlineArrowSmDown />
                </div>
              )}
              {idx === 0 ? (
                <div className={styles.itemButtonEmpty}></div>
              ) : (
                <div className={styles.itemButton}>
                  <HiOutlineArrowSmUp />
                </div>
              )}
              <div className={styles.itemButton}>
                <MdModeEditOutline />
              </div>
              <div className={styles.itemButton}>
                <MdOutlineDeleteOutline />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectClass;
