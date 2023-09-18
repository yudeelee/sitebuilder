'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setSelected, setSelectedCl } from '@/redux/features/element-slice';
import { setSelectedClass } from '@/redux/features/class-slice';
import styles from './styles.module.scss';
import React, { Fragment } from 'react';

const Canvas = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.element.elements);
  const selected = useSelector((state) => state.element.selected);

  const renderElements = (id = 1) => {
    const root = elements.find((el) => el.id === id);
    if (root.id === selected) {
      root.attr.className += ' ' + 'selected';
    }
    const childs = elements.filter((el) => el.parentId === root.id);
    if (childs.length === 0) {
      return React.createElement(
        root.type,
        {
          ...root.attr,
          'data-id': root.id,
          className:
            root.id == selected
              ? root.attr.className + ' ' + styles.selected
              : root.attr.className,
        },
        null
      );
    }
    return React.createElement(
      root.type,
      {
        ...root.attr,
        'data-id': root.id,
        className:
          root.id == selected
            ? root.attr.className + ' ' + styles.selected
            : root.attr.className,
      },
      childs.length > 0
        ? childs.map((child, idx) => (
            <Fragment key={idx}>{renderElements(child.id)}</Fragment>
          ))
        : ''
    );
  };

  const select = (e) => {
    const element = elements.find(
      (el) => el.id == e.target.getAttribute('data-id')
    );
    dispatch(setSelected(e.target.getAttribute('data-id')));
    if (element.selectedClass) {
      dispatch(setSelectedClass(element.selectedClass));
    } else if (element.attr.className) {
      const selectedClass = element.attr.className.split(' ')[0];
      dispatch(setSelectedClass(selectedClass));
      dispatch(
        setSelectedCl({
          cl: selectedClass,
          id: e.target.getAttribute('data-id'),
        })
      );
    }
    console.log(elements);
  };

  return (
    <div className={styles.canvas}>
      <div
        className={styles.document}
        style={{ width: '1200px' }}
        onClick={(e) => select(e)}
      >
        {renderElements(1)}
      </div>
    </div>
  );
};

export default Canvas;
