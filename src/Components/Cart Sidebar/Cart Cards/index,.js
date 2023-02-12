import React from 'react'
import { Close } from 'public/svg';
import styles from './cartCards.module.scss'

const CartCards = ({ items, handleChange, removeItem, handlePrice }) => {

    const { id, images, title, price, amount, category } = items;

    //increse the value, amount in the obj and handle the price    
    function increase(e) {
        e.currentTarget.previousElementSibling.innerHTML++;
        handleChange(items, 1);
        handlePrice();
    }

    //decrease the value, amount in the obj and handle the price
    async function decrease(e) {
        let val = e.currentTarget.nextElementSibling.innerHTML;
        if (val <= 1) {
            await removeItem(id);
            return;
        }
        e.currentTarget.nextElementSibling.innerHTML--;

        handleChange(items, -1);
        handlePrice();
    }

    return (
        <section key={id} className={styles.cart_products}>
            <div className={styles.image_bg}>
                <img src={images[0]} />
            </div>
            <h2>{title}</h2>

            <div className={styles.cart_price}>
                <button className={styles.close_button} onClick={() => removeItem(id)}>
                    <Close className={styles.close_svg} />
                </button>

                <div className={styles.price_as}>
                    <p>$<span>{price}</span></p>
                    <div className={styles.plus_minus}>
                        <button onClick={decrease}>-</button>
                        <span>1</span>
                        <button onClick={increase}>+</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CartCards