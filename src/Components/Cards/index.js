import React, { useState } from "react";
import styles from './cards.module.scss'
import Image from "next/image";

const Cards = ({items, AddToCart}) => {
  const {id, image, title, price} = items;
  
  return (
    <div key={id} className={styles.productcard}>
      <div className={styles.product_top}>
        <div className={styles.product_img}>
          <Image
            src={image}
            priority="true"
            alt={title}
            width="200"
            height="200"
          />
        </div>
      </div>

      <div className={styles.product_down}>
        <h2>{title}</h2>
        <p>
          $ <span>{price}</span>
        </p>
        <button name={id}>
          Add to Cart
        </button>
      </div>
      
    </div>

    
  );
};

export default Cards;
