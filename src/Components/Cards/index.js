import React, { useState } from "react";
import styles from './cards.module.scss'
import Image from "next/image";

const Cards = ({ items, AddToCart }) => {
  const { id, images, title, price, category } = items;

  return (
    // <div key={id} className={styles.productcard}>
    //   <div className={styles.product_top}>
    //     <div className={styles.product_img}>
    //       <Image
    //         src={images[0]}
    //         priority="true"
    //         alt={title}
    //         width="200"
    //         height="200"
    //       />
    //     </div>
    //   </div>

    //   <div className={styles.product_down}>
    //     <h2>{title}</h2>
    //     <p>
    //       $ <span>{price}</span>
    //     </p>
    //     <button name={id}>
    //       Add to Cart
    //     </button>
    //   </div>

    // </div>
    <tr key={id} class="odd:bg-violet-200/[.7]">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {title}
      </th>
      <td class="px-6 py-4">
        {category}
      </td>
      <td class="px-6 py-4">
        {price}
      </td>
      <td class="px-6 py-4">
        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
      </td>
    </tr>


  );
};

export default Cards;
