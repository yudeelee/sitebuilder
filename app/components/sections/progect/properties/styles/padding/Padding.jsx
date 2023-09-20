import SectionHeader from '@/app/components/ui/sectionHeader/SectionHeader';
import styles from './styles.module.scss';
import { useState } from 'react';
import InputNP from '@/app/components/ui/inputs/inputNP/InputNP';
import { useDispatch } from 'react-redux';
import { setProperty } from '@/redux/features/class-slice';
import { IoMdArrowDropdown } from 'react-icons/io';

const Padding = ({
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [paddingOpen, setPaddingOpen] = useState(false);
  const [marginOpen, setMarginOpen] = useState(false);
  return (
    <div className={styles.padding}>
      <SectionHeader
        title='Padding Margin'
        open={open}
        click={() => setOpen(!open)}
      />
      <div className={`${styles.body} ${!open ? styles.hide : ''}`}>
        <div className={styles.paddingAll}>
          <div className={styles.paddingAllWrapper}>
            <InputNP
              value={padding}
              label='Padding'
              change={(value) =>
                dispatch(setProperty({ propName: 'padding', propValue: value }))
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
            <InputNP
              size='small'
              value={paddingTop}
              //   label='Top'
              change={(value) =>
                dispatch(
                  setProperty({ propName: 'padding-top', propValue: value })
                )
              }
            />
          </div>
          <div className={styles.middle}>
            <div className={styles.left}>
              <InputNP
                size='small'
                value={paddingLeft}
                // label='Left'
                change={(value) =>
                  dispatch(
                    setProperty({ propName: 'padding-left', propValue: value })
                  )
                }
              />
            </div>
            <div className={styles.right}>
              <InputNP
                size='small'
                value={paddingRight}
                // label='Right'
                change={(value) =>
                  dispatch(
                    setProperty({ propName: 'padding-right', propValue: value })
                  )
                }
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <InputNP
              size='small'
              value={paddingBottom}
              //   label='Bottom'
              change={(value) =>
                dispatch(
                  setProperty({ propName: 'padding-bottom', propValue: value })
                )
              }
            />
          </div>
        </div>
        <div className={styles.paddingAll}>
          <div className={styles.paddingAllWrapper}>
            <InputNP
              value={margin}
              label='Margin'
              change={(value) =>
                dispatch(setProperty({ propName: 'margin', propValue: value }))
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
          <div className={styles.top}>
            <InputNP
              size='small'
              value={marginTop}
              //   label='Top'
              change={(value) =>
                dispatch(
                  setProperty({ propName: 'margin-top', propValue: value })
                )
              }
            />
          </div>
          <div className={styles.middle}>
            <div className={styles.left}>
              <InputNP
                size='small'
                value={marginLeft}
                // label='Left'
                change={(value) =>
                  dispatch(
                    setProperty({ propName: 'margin-left', propValue: value })
                  )
                }
              />
            </div>
            <div className={styles.right}>
              <InputNP
                size='small'
                value={marginRight}
                // label='Right'
                change={(value) =>
                  dispatch(
                    setProperty({ propName: 'margin-right', propValue: value })
                  )
                }
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <InputNP
              size='small'
              value={marginBottom}
              //   label='Bottom'
              change={(value) =>
                dispatch(
                  setProperty({ propName: 'margin-bottom', propValue: value })
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Padding;
