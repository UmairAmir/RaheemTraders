// HexagonsComponent.jsx

import React from 'react';
import styles from '../styles/Commitment.module.css';

const Commitment = () => {
  return (
    <div className={styles.hexagonsContainer}>
      <div className={styles.hexagonTopLeft}>
        <p>Text for top left hexagon</p>
      </div>
      <div className={styles.hexagonBottomRight}>
        <p>Text for bottom right hexagon</p>
        <h2>Heading on top of the hexagon</h2>
      </div>
    </div>
  );
};

export default Commitment;
