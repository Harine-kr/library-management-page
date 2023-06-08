"use client"

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Button from '../button/Button'

const links = [
    {
        id:1,
        title:"Home",
        url:"/",
    },
    {
        id:2,
        title:"About",
        url:"/about",
    },
    {
        id:2,
        title:"Books",
        url:"/books",
    },
    
    {
        id:4,
        title:"Contact",
        url:"/contact",
    },
    
];

const Navbar = () => {
  return (
    
    <div className={styles.container}>
        <Link href='/' className={styles.logo}>Librarian.xo</Link>
        <div className={styles.links}>
              {links.map((link) => (<Link key={link.id} href={link.url} className={styles.link}>
                  {link.title}
              </Link>))}
        </div>
        <Button url="/" text="Logout"/>
        
    </div>
  )
}

export default Navbar