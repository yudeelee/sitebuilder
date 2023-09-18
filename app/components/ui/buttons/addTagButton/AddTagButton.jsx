import styles from './styles.module.scss';
import { BiCodeBlock } from 'react-icons/bi';

const icons = {
  div: <BiCodeBlock />,
};

const AddTagButton = ({ click, icon = 'div' }) => {
  return (
    <button className={styles.AddTagButton} onClick={click}>
      {icons[icon]}
    </button>
  );
};

export default AddTagButton;
