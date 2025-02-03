import React from 'react';
import styles from './CardItem.module.css';
import PublicIcon from '../icons/IconPublic.jsx';
// import RoleIcon from '../icons/IconRole.jsx';
// import ActionsButtons from './ActionsButtons.jsx';

export default function CardItem({ item }) {
  const modificationDate = new Intl.DateTimeFormat('fr-FR').format(new Date(item.modificationDate));

  return (
    <article className={styles['card-item']}>
      <header className={styles['card-header']}>
        <input className={styles['card-header-checkbox']} type="checkbox"/>
        <p className={styles['card-author']}>
          {/* <RoleIcon iconClass={item.iconClass} /> */}
          <span className={`${styles.title} ${styles['title-size-1']}`}>{item.userName}</span>
        </p>
      </header>
      <main>
        <figure className={styles['card-media']}>
          {item.image ? (
            <img src={`./src/assets/${item.image}`} alt="Miniature Google Map" />
          ) : (
            <PublicIcon />
          )}
        </figure>
        <section className={styles['card-content']}>
          <h2 className={`${styles.title} ${styles['title-size-2']}`}>{item.name}</h2>
          <p className={styles['line-clamp']}>{item.description}</p>
          <div className={styles['card-content-meta']}>
            <div>
              <p className={`${styles.title} ${styles['title-size-3']}`}>Modifié le</p>
              <p>{modificationDate}</p>
            </div>
            <div className={styles['to-right']}>
              <p className={`${styles.title} ${styles['title-size-3']}`}>Application</p>
              <p>Mon application</p>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles['card-actions']}>
        {/* <ActionsButtons /> */}
      </footer>
    </article>
  );
}