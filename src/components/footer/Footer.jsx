import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className=''>©2023 Libriarian.xo. All rights reserved.</div>
        <div className={styles.social}>
            <Image src='/1.png' width={30} className={styles.icon} height={30} alt='facebook'/>
            <Image src='/2.png' width={30} className={styles.icon} height={30} alt='facebook'/>
            <Image src='/3.png' width={30} className={styles.icon} height={30} alt='facebook'/>
            <Image src='/4.png' width={30} className={styles.icon} height={30} alt='facebook'/>
        </div>
    </div>
  )
}

export default Footer