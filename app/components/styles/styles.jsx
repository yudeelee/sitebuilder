'use client';

import { useSelector } from 'react-redux';

const Styles = () => {
  const classes = useSelector((state) => state.class.classes);
  let result = '';
  classes.forEach((element) => {
    result += '.' + element.name + '{ ';
    for (let key in element.properties) {
      if (key.indexOf('padding') !== -1 || key.indexOf('margin') !== -1) {
        result += key + ': ' + element.properties[key] + 'px !important; ';
      }
    }
    result += '}';
  });
  return <style>{result}</style>;
};

export default Styles;
