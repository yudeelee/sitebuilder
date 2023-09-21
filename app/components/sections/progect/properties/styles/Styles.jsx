import styles from './styles.module.scss';
import Padding from './padding/Padding';
import { useSelector } from 'react-redux';
import Width from './width/Width';

const Styles = () => {
  const selectedClass = useSelector((state) => state.class.selected);
  const cl = useSelector(
    (state) =>
      state.class.classes.find((c) => c.name === selectedClass)?.properties
  );
  return (
    <div>
      {cl && (
        <>
          <Width
            width={cl?.width}
            minWidth={cl && cl['min-width']}
            maxWidth={cl && cl['max-width']}
            height={cl?.height}
            minHeight={cl && cl['min-height']}
            maxHeight={cl && cl['max-height']}
          />
          <Padding
            padding={cl?.padding}
            paddingTop={cl && cl['padding-top']}
            paddingRight={cl && cl['padding-right']}
            paddingBottom={cl && cl['padding-bottom']}
            paddingLeft={cl && cl['padding-left']}
            margin={cl?.margin}
            marginTop={cl && cl['margin-top']}
            marginRight={cl && cl['margin-right']}
            marginBottom={cl && cl['margin-bottom']}
            marginLeft={cl && cl['margin-left']}
          />
        </>
      )}
    </div>
  );
};

export default Styles;
