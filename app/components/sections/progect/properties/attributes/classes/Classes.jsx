'use client';

import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useEffect, useState } from 'react';
import SelectClass from './selectClass/SelectClass';
import { insertClass } from '@/redux/features/element-slice';
import { setSelectedClass, addClass, cl } from '@/redux/features/class-slice';
import { TiPlus } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';

const psedo = ['---', ':hover', 'first-child', 'last-child'];

const Classes = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [add, setAdd] = useState(false);
  const [newClass, setNewClass] = useState('');
  const selected = useSelector((state) => state.element.selected);
  let classes = useSelector((state) => state.element.elements)
    .find((el) => el.id == selected)
    ?.attr?.className?.trim()
    .split(' ');
  if (classes?.length === 1 && classes[0] === '') classes = [];

  const selCl = useSelector((state) => state.class.selected);

  const cls = useSelector((state) => state.class.classes);
  let classNames = cls.map((cl) => cl.name);
  classNames = classNames.filter(
    (cl) => !classes.includes(cl) && cl.indexOf(newClass) !== -1
  );

  const closeAll = () => {
    setAdd(false);
    setNewClass('');
  };

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
        <button className={styles.addButton} onClick={() => setAdd(true)}>
          Add
        </button>
        <div
          className={`${styles.shadow} ${!add ? styles.hide : ''}`}
          onClick={closeAll}
        ></div>
        <div className={`${styles.newClassInput} ${!add ? styles.hide : ''}`}>
          <div className={styles.addWrapper}>
            <input
              type='text'
              placeholder='Enter new class name'
              value={newClass || ''}
              onChange={(e) => setNewClass(e.target.value)}
            />
            <button
              onClick={() => {
                if (newClass.trim() !== '') {
                  dispatch(insertClass(newClass));
                  dispatch(addClass({ name: newClass }));
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
          <div className={styles.classList}>
            {classNames.map((cl, idx) => (
              <div
                key={idx}
                className={styles.clItem}
                onClick={() => setNewClass(cl)}
              >
                {cl}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
