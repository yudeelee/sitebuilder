import { useRef, useState } from 'react';
import SimpleSelect from '../../selects/simpleSelect/SimpleSelect';
import styles from './styles.module.scss';
import { IoIosClose } from 'react-icons/io';

const InputNP = ({ label, change, clear, size = 'normal', value }) => {
  const [number, poin] = rebuild(value);
  const [sel, setSel] = useState(poin);
  const inp = useRef();
  return (
    <div
      className={`${styles.inputNP} ${size === 'small' ? styles.small : ''}`}
    >
      {label && (
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
              onChange={(e) => change(e.target.value + sel)}
            />
          )}
          <SimpleSelect
            values={['px', '%', 'auto']}
            selected={sel}
            direction='left'
            select={(val) => {
              setSel(val);
              if (val !== 'auto') {
                // if (inp.current?.value !== '') {
                change(inp.current?.value + val);
                // }
              } else {
                change(val);
              }
            }}
          />
        </div>
        <div className={styles.clear}>
          <IoIosClose />
        </div>
      </div>
    </div>
  );
};

export default InputNP;

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
