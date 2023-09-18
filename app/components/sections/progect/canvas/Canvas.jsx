'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setSelected } from '@/redux/features/element-slice';
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
              : root.attr.className + ' ' + 'hahaha',
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
    dispatch(setSelected(e.target.getAttribute('data-id')));
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
