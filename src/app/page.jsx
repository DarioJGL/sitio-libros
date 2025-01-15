'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Card from '@/ui/Card/Card';
import booksData from '@/data/books.json';
import Link from 'next/link';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = booksData.books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Libros</h1>
        <p className={styles.description}>
          Bienvenido a la biblioteca virtual. Aquí encontrarás una colección de
          libros disponibles para leer directamente en tu navegador.
        </p>
        <div className={styles.description}>
          <p>Creado por:</p>
          <Link href="https://devguti.site/sobre-mi">DevGuti</Link>
        </div>

        <div className={styles.search}>
          <input
            type="search"
            placeholder="Buscar por título o autor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
            aria-label="Búsqueda de libros"
          />
        </div>

        <div className={styles.grid}>
          {filteredBooks.map((book) => (
            <Card
              key={book.id}
              title={book.title}
              author={book.author}
              cover="/portadas-libro.jpg"
              description={book.description}
              src={book.src}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
