'use client';

import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import React, { Fragment } from 'react';

const Canvas = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.element.elements);

  const renderElements = (id = 1) => {
    const root = elements.find((el) => el.id === id);
    const childs = elements.filter((el) => el.parentId === root.id);
    console.log(childs.length);
    if (childs.length === 0) {
      return React.createElement(
        root.type,
        { ...root.attr, 'data-id': root.id },
        null
      );
    }
    return React.createElement(
      root.type,
      { ...root.attr, 'data-id': root.id },
      childs.length > 0
        ? childs.map((child, idx) => (
            <Fragment key={idx}>{renderElements(child.id)}</Fragment>
          ))
        : ''
    );
  };

  return (
    <div className={styles.canvas}>
      <div className={styles.document} style={{ width: '1200px' }}>
        {renderElements(1)}
      </div>
    </div>
  );
};

export default Canvas;
