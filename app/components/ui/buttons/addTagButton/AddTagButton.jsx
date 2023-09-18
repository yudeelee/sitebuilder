import styles from './styles.module.scss';
import { BiCodeBlock } from 'react-icons/bi';
import { BsTextParagraph } from 'react-icons/bs';
import { LuHeading1 } from 'react-icons/lu';
import { BsCardImage } from 'react-icons/bs';

const icons = {
  div: <BiCodeBlock />,
  p: <BsTextParagraph />,
  h1: <LuHeading1 />,
  img: <BsCardImage />,
};

const AddTagButton = ({ click, icon = 'div' }) => {
  return (
    <button className={styles.AddTagButton} onClick={click}>
      {icons[icon]}
    </button>
  );
};

export default AddTagButton;
