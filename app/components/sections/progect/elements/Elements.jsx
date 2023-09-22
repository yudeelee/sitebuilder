'use client';

import AddTagButton from '@/app/components/ui/buttons/addTagButton/AddTagButton';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { insertElement } from '@/redux/features/element-slice';

const Elements = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.element.selected);
  const addEl = (type) => {
    dispatch(
      insertElement({
        type: type,
        attr: {},
        parentId: +selected,
      })
    );
  };
  return (
    <div className={styles.tags}>
      <AddTagButton icon='div' click={() => addEl('div')} />
      <AddTagButton icon='h1' click={() => addEl('h1')} />
      <AddTagButton icon='p' click={() => addEl('p')} />
      <AddTagButton icon='img' click={() => addEl('img')} />
    </div>
  );
};

export default Elements;
