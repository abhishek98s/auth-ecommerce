import styles from './styles.module.scss';
import Link from 'next/link'
import { useState } from 'react';
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { setAdmin, setSignin } from '@/Redux/toggleSlice';

export default function Navbar() {
    const signin = useSelector((state) => state.toggle.signin);
    const admin = useSelector((state) => state.toggle.admin)
    const dispatch = useDispatch();

    const [toggle, setToggle] = useState(false);

    function onToggle(e) {
        setToggle(!toggle);

        if(e.target.name == "logout"){
            sessionStorage.removeItem("authedUser");
            sessionStorage.removeItem("authedAdmin");
            dispatch(setSignin());

            if(admin){
                dispatch(setAdmin());
            }
        }
    }


    return (
        <>
            <div className={styles.navbar}>
                <Link href="/"><h1>AESOP</h1></Link>

                <div className={cn({
                    [styles.navbarList]: toggle === false,
                    [styles.active]: toggle === true,
                })}>

                    <Link href="/" legacyBehavior><a onClick={onToggle}>Home</a></Link>
                    <Link href="/products" legacyBehavior><a onClick={onToggle}>Products</a></Link>
                    {!signin && <Link href="/login" legacyBehavior><a onClick={onToggle}>Login</a></Link>}
                    {!signin && <Link href="/register" legacyBehavior><a onClick={onToggle}>Register</a></Link>}
                    {admin && <Link href="/order" legacyBehavior><a onClick={onToggle}>Order</a></Link>}
                    {signin && <Link href="/" legacyBehavior><a onClick={onToggle} name="logout">Logout</a></Link>}
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
