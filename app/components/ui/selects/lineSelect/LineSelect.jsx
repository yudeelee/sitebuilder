import { useState } from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '@/redux/features/popup-slice';

const LineSelect = ({
  values,
  select,
  selected,
  direction = 'none',
  popupName,
}) => {
  let borderLinePopup = useSelector((state) => state.popup.popups[popupName]);

  const dispatch = useDispatch();
  if (!borderLinePopup) borderLinePopup = false;
  return (
    <div className={styles.simpleSelect}>
      <div
        className={`${styles.header} ${borderLinePopup ? styles.open : ''} ${
          styles[direction]
        }`}
        onClick={() => dispatch(togglePopup(popupName))}
      >
        {selected}
      </div>
      <div className={`${styles.items} ${!borderLinePopup ? styles.hide : ''}`}>
        {values.map((val, idx) => (
          <div
            key={idx}
            className={styles.item}
            onClick={() => {
              select(val);
              dispatch(togglePopup(popupName));
            }}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineSelect;
