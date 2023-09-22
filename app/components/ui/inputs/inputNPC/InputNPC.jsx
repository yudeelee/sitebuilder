import { useRef, useState } from 'react';
import SimpleSelect from '../../selects/simpleSelect/SimpleSelect';
import styles from './styles.module.scss';
import { IoIosClose } from 'react-icons/io';
import LineSelect from '../../selects/lineSelect/LineSelect';
import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '@/redux/features/popup-slice';

const InputNPC = ({ label, change, clear, size = 'normal', value }) => {
  const dispatch = useDispatch();
  const pickerPopup = useSelector(
    (state) => state.popup.popups[label + 'picker']
  );
  const valarr = value?.split(' ') || [];
  const [number, poin] = rebuild(valarr[0]);
  const [sel, setSel] = useState(poin);
  if (!valarr[1]) valarr[1] = 'solid';
  const [lin, setLin] = useState(valarr[1]);
  if (!valarr[2]) valarr[2] = '#000';
  const [col, setCol] = useState(valarr[2]);
  const inp = useRef();
  return (
    <div
      className={`${styles.inputNP} ${size === 'small' ? styles.small : ''}`}
    >
      {size !== 'small' && (
        <div
          className={`${styles.label} ${size === 'small' ? styles.small : ''}`}
        >
          {label}
        </div>
      )}
      <div className={styles.right}>
        <div className={styles.inputWrapper}>
          {sel !== 'auto' && (
            <input
              ref={inp}
              className={`${styles.input} ${!number && styles.dark}`}
              value={number || ''}
              type='text'
              onChange={(e) =>
                change(e.target.value + 'px' + ' ' + lin + ' ' + col)
              }
            />
          )}
          {/* <SimpleSelect
            values={['px', '%', 'auto']}
            selected={sel}
            direction='full'
            select={(val) => {
              setSel(val);
              if (val !== 'auto') {
                // if (inp.current?.value !== '') {
                change(inp.current?.value + val + ' ' + lin + ' ' + col);
                // }
              } else {
                change(val);
              }
            }}
          /> */}
          <LineSelect
            values={[
              'solid',
              'dotted',
              'dashed',
              'double',
              'groove',
              'ridge',
              'inset',
              'outset',
            ]}
            popupName={label}
            selected={lin}
            select={(val) => {
              setLin(val);
              if (val !== 'auto') {
                // if (inp.current?.value !== '') {
                change(inp.current?.value + 'px' + ' ' + val + ' ' + col);
                // }
              } else {
                change(val);
              }
            }}
          />
          <div
            className={styles.color}
            onClick={() => dispatch(togglePopup(label + 'picker'))}
          >
            <div
              className={styles.colorInner}
              style={{ backgroundColor: col }}
            ></div>
            <div
              className={`${styles.picker} ${
                pickerPopup ? styles.pickerShow : ''
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <SketchPicker
                color={col}
                onChangeComplete={(color) => {
                  setCol(color.hex);
                  change(
                    inp.current?.value + 'px' + ' ' + lin + ' ' + color.hex
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.clear}>
          <IoIosClose />
        </div>
      </div>
    </div>
  );
};

export default InputNPC;

const rebuild = (val) => {
  if (val) {
    if (val[val?.length - 1] === 'x') {
      let number = val.substring(0, val.length - 2);
      const ppp = val.substring(val.length - 2);
      if (number == 'undefined') number = '';
      return [number, ppp];
    }
    if (val[val?.length - 1] === '%') {
      let number = val.substring(0, val.length - 1);
      const ppp = val.substring(val.length - 1);
      if (number == 'undefined') number = '';
      return [number, ppp];
    }
    return ['', 'auto'];
  }
  return ['', 'px'];
};
