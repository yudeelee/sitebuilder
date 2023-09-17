import Link from 'next/link';
import Block from '../../ui/block/Block';
import styles from './styles.module.scss';

const AdminMenu = () => {
  return (
    <div className={styles.menu}>
      <Block padding={20} border={20}>
        <ul>
          <li>
            <Link href='/admin/services'>Послуги</Link>
          </li>
          <li>
            <Link href='/admin/courses'>Курси</Link>
          </li>
        </ul>
      </Block>
    </div>
  );
};

export default AdminMenu;
