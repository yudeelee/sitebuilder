'use client';

import SectionHeader from '@/app/components/ui/sectionHeader/SectionHeader';
import styles from './styles.module.scss';
import { useState } from 'react';
import InputNP from '@/app/components/ui/inputs/inputNP/InputNP';
import { useDispatch } from 'react-redux';
import { setProperty } from '@/redux/features/class-slice';

const Width = ({ width, minWidth, maxWidth, height, minHeight, maxHeight }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.width}>
      <SectionHeader
        title='Width Height'
        open={open}
        click={() => setOpen(!open)}
      />
      <div className={`${styles.wrapper} ${!open ? styles.hide : ''}`}>
        <InputNP
          value={width}
          label='Width'
          change={(value) =>
            dispatch(setProperty({ propName: 'width', propValue: value }))
          }
        />
        <InputNP
          value={minWidth}
          label='Min-width'
          change={(value) =>
            dispatch(setProperty({ propName: 'min-width', propValue: value }))
          }
        />
        <InputNP
          value={maxWidth}
          label='Max-width'
          change={(value) =>
            dispatch(setProperty({ propName: 'max-width', propValue: value }))
          }
        />
        <InputNP
          value={height}
          label='Height'
          change={(value) =>
            dispatch(setProperty({ propName: 'height', propValue: value }))
          }
        />
        <InputNP
          value={minHeight}
          label='Min-height'
          change={(value) =>
            dispatch(setProperty({ propName: 'min-height', propValue: value }))
          }
        />
        <InputNP
          value={maxHeight}
          label='Max-height'
          change={(value) =>
            dispatch(setProperty({ propName: 'max-height', propValue: value }))
          }
        />
      </div>
    </div>
  );
};

export default Width;
