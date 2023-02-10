import React, { useState } from "react";
import styles from './products.module.scss'
import Image from "next/image";
import Link from "next/link";

const Products = ({ items }) => {
  const { id, image, title, price } = items;

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
          <Link href="/products" legacyBehavior>
            Learn more
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Products;
