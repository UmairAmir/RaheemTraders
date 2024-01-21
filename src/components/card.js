import styles from '../styles/Card.module.css';
import React from 'react';

function Card({ heading, description, image, listItems }) {
  return (
    <div className={styles.container}>
      <div className={styles.iconDiv}>
        <img src={image} alt="Card" />
      </div>
      
      <div className={styles.cardContent}>
        <h1>{heading}</h1>
        <p>{description}</p>
        <ul>
          {listItems && listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
