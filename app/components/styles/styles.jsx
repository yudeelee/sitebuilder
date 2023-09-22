'use client';

import { useSelector } from 'react-redux';

const Styles = () => {
  const classes = useSelector((state) => state.class.classes);
  let result = '';
  classes.forEach((element) => {
    result += '.' + element.name + '{ ';
    if (element?.properties?.margin) {
      result += 'margin: ' + element.properties.margin + '; ';
    }
    if (element?.properties?.padding) {
      result += 'padding: ' + element.properties.padding + '; ';
    }
    for (let key in element.properties) {
      if (key !== 'padding' && key !== 'margin') {
        result += key + ': ' + element.properties[key] + '; ';
      }
    }
    result += '}';
  });
  return <style>{result}</style>;
};

export default Styles;
