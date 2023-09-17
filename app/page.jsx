'use client';

import styles from './page.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '@/redux/features/first-slice';

export default function Home() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.first.name);
  return (
    <div className={styles.home}>
      <h1>{name}</h1>
      <input type='text' onChange={(e) => dispatch(setName(e.target.value))} />
    </div>
  );
}
