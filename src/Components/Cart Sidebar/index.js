import cn from "classnames";
import styles from "./styles.module.scss";
import {  useEffect, useState } from "react";
import { CartSvg, Close } from "public/svg";
import CartCards from "./Cart Cards/index,";
import { toggle, noOfItems } from "@/Redux/toggleSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const toggleValue = useSelector((state) => state.toggle.value)
  const noOfItemsValue = useSelector((state) => state.toggle.noOfItems)
  const [cartItems, setCartItems] = useState([]);
  const [total_price, setTotal_price] = useState(0);
  const dispatch = useDispatch();
  
  // Set the total number of items present in the cart in navbar
  useEffect(() => {
     let CartData = localStorage.getItem("cart");
     let parseCartData = JSON.parse(CartData);

     setCartItems(JSON.parse(CartData));
     dispatch(noOfItems(parseCartData.length))

  }, [cartItems])

  const handleChange = (item, d) => {
    const ind = cartItems.indexOf(item);
    const arr = cartItems;

    if(arr[ind].amount == undefined){
      arr[ind].amount = 1;
    }
    arr[ind].amount += d;

    // if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCartItems([...arr]);
    localStorage.setItem("cart", JSON.stringify(arr))
  }

  function removeItem(id){
    const arr = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart",JSON.stringify(arr))
    setCartItems(arr);
  }

  function handlePrice(){
    let price =0;
    cartItems.map((item) => (price += item.amount * item.price));
    setTotal_price(price);
  }

  useEffect(() => {
    handlePrice();
  })

  return (
    <div
      className={cn({
        [styles.cartSidebar]: toggleValue === false,
        [styles.cartSidebar_active]: toggleValue === true,
      })}
    >
      <div className={styles.cart_top_side}>

        <button className={styles.cart_top_side_close_button} onClick={() => dispatch(toggle())}>
          <Close />
        </button>

        <section className={styles.cartLogo}>
          <CartSvg />
          <p>{noOfItemsValue}</p>
        </section>

        <h2>Cart</h2>

      </div>

      <div className={styles.clicked_products}>
        {cartItems.map((items) => {
          return (
            <CartCards key={items.id} items={items} 
            handleChange={handleChange} 
            removeItem={removeItem} 
            handlePrice={handlePrice}
            />
          );
        })}
      </div>

      <section className={styles.total_price}>
        <p>Total</p>
        <p>
          $ <span>{total_price.toFixed(2)}</span>
        </p>
      </section>
    </div>
  );
}
