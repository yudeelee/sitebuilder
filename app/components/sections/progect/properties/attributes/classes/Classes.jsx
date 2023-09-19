'use client';

import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import SelectClass from './selectClass/SelectClass';
import { insertClass } from '@/redux/features/element-slice';
import { setSelectedClass } from '@/redux/features/class-slice';
import { TiPlus } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';

const psedo = ['---', ':hover', 'first-child', 'last-child'];

const Classes = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [add, setAdd] = useState(false);
  const [newClass, setNewClass] = useState('');
  const selected = useSelector((state) => state.element.selected);
  const classes = useSelector((state) => state.element.elements)
    .find((el) => el.id == selected)
    ?.attr?.className?.split(' ');

  const selCl = useSelector((state) => state.class.selected);

  return (
    <div className={styles.classes}>
      <div className={styles.header}>
        Classes
        <div
          className={`${styles.open} ${!open ? styles.hide : ''}`}
          onClick={() => setOpen(!open)}
        >
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className={`${styles.body} ${!open ? styles.hide : ''}`}>
        <SelectClass values={classes} selected={selCl} />
        {/* <select>
          {psedo?.map((cl, idx) => (
            <option key={idx} value={cl}>
              {cl}
            </option>
          ))}
        </select> */}
        <button className={styles.addButton} onClick={() => setAdd(true)}>
          Add
        </button>
        <div
          className={`${styles['new-ClassInput']} ${!add ? styles.hide : ''}`}
        >
          <input
            type='text'
            placeholder='Enter new class name'
            onChange={(e) => setNewClass(e.target.value)}
          />
          <button
            onClick={() => {
              if (newClass.trim() !== '') {
                dispatch(insertClass(newClass));
                dispatch(setSelectedClass(newClass));
                setNewClass('');
                setAdd(false);
              }
            }}
          >
            <TiPlus />
          </button>
          <button onClick={() => setAdd(false)}>
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Classes;
