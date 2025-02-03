import React from 'react';
import styles from './CardsList.module.css';
import CardItem from '../CardItem/CardItem.jsx';



export default function CardsList({ items }) {
  return(
    <section className={styles['cards-list']}>
      <h2 className="sr-only">Liste des cartes</h2>

      { items.map((item) => (<CardItem key={ item.id } item={ item }/>)) }
    </section>
  );
}