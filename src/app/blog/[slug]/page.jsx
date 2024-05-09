import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/21758771/pexels-photo-21758771/free-photo-of-hot-air-balloon-flying-in-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src="https://images.pexels.com/photos/21758771/pexels-photo-21758771/free-photo-of-hot-air-balloon-flying-in-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt='' className={styles.avatar}
           width={50} height={50}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </div>
      </div>
    </div>
  )
};

export default SinglePostPage;