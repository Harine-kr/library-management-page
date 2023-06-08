"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import booksJson from "../../../books.json";

const Page = () => {
  const [books, setBooks] = useState(booksJson);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    
    console.log(booksJson);
    console.log(books);
  }, [books]);

  const searchItem = (e) => {
    setSearchTerm(e.target.value);
    const result = books.filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setBooks(result);
  };

  

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Books Available in the Library</h1>

        <div className={styles.searchBar}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => searchItem(e)}
            placeholder="Search by Title"
            className={styles.searchInput}
          />
          
        </div>
        <div className={styles.bookCount}>
        </div>

        <div className={styles.bookGrid}>
          {books.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Subject: {book.subject}</p>
              <p>Publish Date: {book.publishDate}</p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Page;
