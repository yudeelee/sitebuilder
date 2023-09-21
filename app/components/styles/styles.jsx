'use client';

import { useSelector } from 'react-redux';

const Styles = () => {
  const classes = useSelector((state) => state.class.classes);
  let result = '';
  classes.forEach((element) => {
    result += '.' + element.name + '{ ';
    if (element?.properties?.margin) {
      result += 'margin: ' + element.properties.margin + ' !important; ';
    }
    if (element?.properties?.padding) {
      result += 'padding: ' + element.properties.padding + ' !important; ';
    }
    for (let key in element.properties) {
      if (key !== 'padding' && key !== 'margin') {
        result += key + ': ' + element.properties[key] + ' !important; ';
      }
    }
    result += '}';
  });
  return <style>{result}</style>;
};

export default Styles;
