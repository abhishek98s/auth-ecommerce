import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export default function LandingPage() {
  return (
    <>
      <main className={styles.backgroundimg}>

        <h1 className={styles.slogen}>
          Cool and Exciting Products
        </h1>

        <p>Place to buy the products of your choice</p>

        <div className={styles.button} >
          {/* <button>Learn More</button> */}
        </div>

      </main>
    </>
  )
}