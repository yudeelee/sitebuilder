import styles from './styles.module.scss';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { HiOutlineArrowSmUp } from 'react-icons/hi';
import { HiOutlineArrowSmDown } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { setSelectedClass } from '@/redux/features/class-slice';
import { setSelectedCl, deleteClass } from '@/redux/features/element-slice';
import { useDispatch } from 'react-redux';

const SelectClass = ({
  values = [],
  selected,
  select,
  edit,
  del,
  up,
  down,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const removeClass = (cl) => {
    // console.log(values[values.length - 1]);
    // console.log(values[values.length - 2]);
    if (cl === selected) {
      if (cl == values[values.length - 1] && values.length > 1) {
        dispatch(setSelectedCl(values[values.length - 2]));
        dispatch(setSelectedClass(values[values.length - 2]));
        dispatch(deleteClass(cl));
        return;
      }
      if (cl == values[values.length - 1] && values.length <= 1) {
        dispatch(setSelectedCl(null));
        dispatch(setSelectedClass(null));
        dispatch(deleteClass(cl));
        return;
      }
      dispatch(setSelectedCl(values[values.length - 1]));
      dispatch(setSelectedClass(values[values.length - 1]));
      dispatch(deleteClass(cl));
      return;
    }
    dispatch(deleteClass(cl));
  };

  return (
    <div className={styles.selectClass}>
      <div
        className={`${styles.selected} ${open ? styles.hide : ''}`}
        onClick={() => setOpen(!open)}
      >
        {selected || 'No classes'}
        {values.length > 0 && (
          <div className={`${styles.open} ${!open ? styles.hide : ''}`}>
            <IoMdArrowDropdown />
          </div>
        )}
      </div>
      {values.length > 0 && (
        <div className={`${styles.list} ${open ? styles.hide : ''}`}>
          {values.map((val, idx) => (
            <div
              key={idx}
              className={styles.item}
              onClick={() => {
                dispatch(setSelectedCl(val));
                dispatch(setSelectedClass(val));
                setOpen(false);
              }}
            >
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
                <div
                  className={styles.itemButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeClass(val);
                  }}
                >
                  <MdOutlineDeleteOutline />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectClass;
