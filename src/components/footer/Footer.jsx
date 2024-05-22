import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="https://github.com/Jexarx121">jexarx</Link>
      </div>
      <div className={styles.text}>
        Jexarx creative thoughts agency © All rights reserved.
      </div>
    </div>
  )
}

export default Footer;