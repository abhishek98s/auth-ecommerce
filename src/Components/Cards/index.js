import React, { useState } from "react";
import styles from './cards.module.scss'
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { noOfItems } from "@/Redux/toggleSlice";

const Cards = ({ items }) => {
  const noOfItemsValue = useSelector((state) => state.toggle.noOfItems);
  const dispatch = useDispatch();

  const { id, images, title, price, category } = items;

  const AddToCart = () => {
    let cart = localStorage.getItem("cart");

    if (cart) {
      let cartData = JSON.parse(localStorage.getItem("cart"));

      // Avoid duplication in the cart
      for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].id == items.id) {
          return;
        }
      }


      if (items.amount == undefined) {
        items.amount = 1;
      }

      let arr = cartData;
      arr.push(items);
      dispatch(noOfItems(arr.length))
      localStorage.setItem("cart", JSON.stringify(arr));


    } else {
      let arr = [];
      if (items.amount == undefined) {
        items.amount = 1;
      }
      arr.push(items);
      localStorage.setItem("cart", JSON.stringify(arr));
    }
  }

  return (
    <div key={id} className={styles.productcard}>
      <div className={styles.product_top}>
        <div className={styles.product_img}>
          <Image
            src={images[0]}
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
        <button onClick={AddToCart} name={id}>
          Buy
        </button>
      </div>

    </div>
    // <tr className="odd:bg-blue-600/[.2]">
    //   <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //     {title}
    //   </th>
    //   <td className="px-6 py-2">
    //     {category}
    //   </td>
    //   <td className="px-6 py-2">
    //     $ {price}
    //   </td>
    //   <td className="px-6 py-2">
    //     <button onClick={AddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Buy</button>
    //   </td>
    // </tr>
  );
};

export default Cards;
