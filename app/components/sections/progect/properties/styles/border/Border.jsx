import SectionHeader from '@/app/components/ui/sectionHeader/SectionHeader';
import styles from './styles.module.scss';
import { useState } from 'react';
import InputNPC from '@/app/components/ui/inputs/inputNPC/InputNPC';
import { useDispatch } from 'react-redux';
import { setProperty } from '@/redux/features/class-slice';
import { IoMdArrowDropdown } from 'react-icons/io';
import InputNP from '@/app/components/ui/inputs/inputNP/InputNP';

const Border = ({
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  borderRadiusTopLeft,
  borderRadiusTopRight,
  borderRadiusBottomLeft,
  borderRadiusBottomRight,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [paddingOpen, setPaddingOpen] = useState(false);
  const [marginOpen, setMarginOpen] = useState(false);
  return (
    <div className={styles.padding}>
      <SectionHeader title='Border' open={open} click={() => setOpen(!open)} />
      <div className={`${styles.body} ${!open ? styles.hide : ''}`}>
        <div className={styles.paddingAll}>
          <div className={styles.paddingAllWrapper}>
            <InputNPC
              value={border}
              label='Border'
              change={(value) =>
                dispatch(setProperty({ propName: 'border', propValue: value }))
              }
            />
          </div>
          <div
            className={`${styles.open} ${!paddingOpen ? styles.hide : ''}`}
            onClick={() => setPaddingOpen(!paddingOpen)}
          >
            <IoMdArrowDropdown />
          </div>
        </div>
        <div
          className={`${styles.paddingEach} ${!paddingOpen ? styles.hide : ''}`}
        >
          <div className={styles.top}>
            <InputNPC
              size='small'
              value={borderTop}
              label='borderTop'
              change={(value) =>
                dispatch(
                  setProperty({ propName: 'border-top', propValue: value })
                )
              }
            />
          </div>
          <div className={styles.middle}>
            <div className={styles.left}>
              <InputNPC
                size='small'
                value={borderLeft}
                label='borderLeft'
                change={(value) =>
                  dispatch(
                    setProperty({ propName: 'border-left', propValue: value })
                  )
                }
              />
            </div>
            <div className={styles.right}>
              <InputNPC
                size='small'
                value={borderRight}
                label='borderRight'
                change={(value) =>
                  dispatch(
                    setProperty({ propName: 'border-right', propValue: value })
                  )
                }
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <InputNPC
              size='small'
              value={borderBottom}
              label='borderBottom'
              change={(value) =>
                dispatch(
                  setProperty({ propName: 'border-bottom', propValue: value })
                )
              }
            />
          </div>
        </div>
        <div className={styles.paddingAll}>
          <div className={styles.paddingAllWrapper}>
            <InputNP
              value={borderRadius}
              label='Border-radius'
              change={(value) =>
                dispatch(
                  setProperty({ propName: 'border-radius', propValue: value })
                )
              }
            />
          </div>
          <div
            className={`${styles.open} ${!marginOpen ? styles.hide : ''}`}
            onClick={() => setMarginOpen(!marginOpen)}
          >
            <IoMdArrowDropdown />
          </div>
        </div>
        <div
          className={`${styles.paddingEach} ${!marginOpen ? styles.hide : ''}`}
        >
          <div className={styles.middle}>
            <div className={styles.left}>
              <InputNP
                size='small'
                value={borderRadiusTopLeft}
                //   label='Top'
                change={(value) =>
                  dispatch(
                    setProperty({
                      propName: 'border-top-left-radius',
                      propValue: value,
                    })
                  )
                }
              />
            </div>
            <div className={styles.right}>
              <InputNP
                size='small'
                value={borderRadiusTopRight}
                // label='Right'
                change={(value) =>
                  dispatch(
                    setProperty({
                      propName: 'border-top-right-radius',
                      propValue: value,
                    })
                  )
                }
              />
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.left}>
              <InputNP
                size='small'
                value={borderRadiusBottomLeft}
                // label='Left'
                change={(value) =>
                  dispatch(
                    setProperty({
                      propName: 'border-bottom-left-radius',
                      propValue: value,
                    })
                  )
                }
              />
            </div>
            <div className={styles.right}>
              <InputNP
                size='small'
                value={borderRadiusBottomRight}
                //   label='Bottom'
                change={(value) =>
                  dispatch(
                    setProperty({
                      propName: 'border-bottom-right-radius',
                      propValue: value,
                    })
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Border;
