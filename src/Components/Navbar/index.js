import styles from './styles.module.scss';
import Link from 'next/link'
import { useState } from 'react';
import cn from 'classnames'
// import products from '../pages/products';

export default function Navbar() {

    const [toggle, setToggle] = useState(false);
    
    function onToggle() {
        setToggle(!toggle);
    }



    return (
        <>
            <div className={styles.navbar}>
                <Link href="/"><h1>ACEHOP</h1></Link>

                <div className={cn({
                    [styles.navbarList]: toggle === false,
                    [styles.active]: toggle === true,
                })}>

                    <Link href="/" legacyBehavior><a onClick={onToggle}>Home</a></Link>
                    <Link href="/products" legacyBehavior><a onClick={onToggle}>Products</a></Link>
                    <Link href="/login" legacyBehavior><a onClick={onToggle}>Login</a></Link>
                </div>

                <div className={styles.side_menu} onClick={onToggle}>
                    <span className={styles.sidebar}></span>
                    <span className={styles.sidebar}></span>
                    <span className={styles.sidebar}></span>
                </div>
            </div>
        </>
    )
}
