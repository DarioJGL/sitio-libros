import Image from 'next/image';
import styles from './Card.module.css';
import Link from 'next/link';

export default function Card({
  title,
  author,
  cover,
  description,
  src_html,
  src_pdf,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={cover}
          alt={`Portada del libro ${title}`}
          className={styles.image}
          priority={false}
          width={300}
          height={478}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.author}>{author}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.links}>
        <Link
          className={styles.link}
          href={src_html}
        >
          ver html
        </Link>
        <Link
          className={styles.link}
          href={src_pdf}
        >
          ver pdf
        </Link>
      </div>
    </article>
  );
}
