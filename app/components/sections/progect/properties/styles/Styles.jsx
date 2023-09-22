import st from './styles.module.scss';
import Padding from './padding/Padding';
import { useSelector } from 'react-redux';
import Width from './width/Width';
import Border from './border/Border';

const Styles = () => {
  const selectedClass = useSelector((state) => state.class.selected);
  const cl = useSelector(
    (state) =>
      state.class.classes.find((c) => c.name === selectedClass)?.properties
  );
  return (
    <div className={st.st}>
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
          <Border
            border={cl?.border}
            borderTop={cl && cl['border-top']}
            borderRight={cl && cl['border-right']}
            borderBottom={cl && cl['border-bottom']}
            borderLeft={cl && cl['border-left']}
            borderRadius={cl && cl['border-radius']}
            borderRadiusTopLeft={cl && cl['border-top-left-radius']}
            borderRadiusTopRight={cl && cl['border-top-right-radius']}
            borderRadiusBottomLeft={cl && cl['border-bottom-left-radius']}
            borderRadiusBottomRight={cl && cl['border-bottom-right-radius']}
          />
        </>
      )}
    </div>
  );
};

export default Styles;
