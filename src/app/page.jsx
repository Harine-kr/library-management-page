import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '../components/button/Button'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          One place to all your library needs.
        </h1>
        <p className={styles.desc}>
          Librarian.xo is a library management system that helps you manage your library with ease.
          No more manual work, no more hassle.
        </p>
        <Button url="/books" text="Search your book"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
