import React, { useState } from 'react'
import styles from '../styles/login.module.scss'
import { isEmail } from 'validator';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setAdmin, setSignin } from '@/Redux/toggleSlice';


const login = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    let obj = [
        {
            user: "admin",
            email: "jhon@gmail.com",
            password: "jhon123"
        }, {
            user: "customer",
            email: "smith@gmail.com",
            password: "smit123"
        }
    ]
    const [logError, setLogError] = useState(null);
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const { email, password } = values;

    const [error, setError] = useState({
        email: "",
        password: ""
    })


    const inputHandler = (e) => {
        let val = e.target.value;
        setValues({ ...values, [e.target.name]: val });

        // Validate the input and set the error message in the errors state
        switch (e.target.name) {
            case 'email':
                if (!val) {
                    setError((errors) => ({ ...errors, email: 'Email is required' }));
                } else if (!isEmail(val)) {
                    setError((errors) => ({ ...errors, email: 'Email is invalid' }));
                } else {
                    setError((errors) => ({ ...errors, email: '' }));
                }
                break;
            case 'password':
                if (!val) {
                    setError((errors) => ({ ...errors, password: 'password is required' }));
                } else if (val.length < 6) {
                    setError((errors) => ({ ...errors, password: 'password must be at least 6 characters' }));
                } else {
                    setError((errors) => ({ ...errors, password: '' }));
                }
                break;
            default:
                break;
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        // Check if any fields are blank
        const hasBlankFields = Object.values(values).some((value) => value === '');
        if (hasBlankFields) {
            alert('Please fill in all the fields');
            return;
        }

        // Check if any errors exist in the errors state
        const hasErrors = Object.values(error).some((error) => error !== '');
        if (hasErrors) {
            alert('Please fix the errors in the form');
            return;
        }

        let localData = sessionStorage.getItem("userData");
        let parseLocalData;
        if (localData) {
            parseLocalData = JSON.parse(localData);
            console.log(parseLocalData);
        } else {
            parseLocalData = [obj];
        }

        if (email == "admin@gmail.com" && password == "admin123") {
            sessionStorage.setItem("authedAdmin", "LOGGED IN")
            dispatch(setSignin());
            dispatch(setAdmin());
            router.push('/')
            return;
        }


        for (let i = 0; i < parseLocalData.length; i++) {

            if (parseLocalData[i].email === email && parseLocalData[i].password === password) {
                setLogError(null)
                sessionStorage.setItem("authedUser", "LOGGED IN")
                dispatch(setSignin());
                router.push('/')
                if (parseLocalData[i].user === "admin") {
                    router.push('/')
                }
                break;
            } else {
                setLogError("Email or password is incorrect")
            }
        }


    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className={styles.body}>

                <form className={styles.loginBox} onSubmit={onSubmit}>
                    <h1>Login</h1>

                    <div className={styles.inputBox}>
                        <p>Email<span>*</span></p>
                        <input type='text' id='text1' name="email" spellCheck="false" placeholder='admin@gmail.com' onChange={inputHandler} value={email} />
                        <span className={styles.error}>{error.email}</span>
                    </div>

                    <div className={styles.inputBox}>
                        <p>Password<span>*</span></p>
                        <input type='text' id='text1' name="password" spellCheck="false" placeholder='admin123' onChange={inputHandler} value={password} />
                        <span className={styles.error}>{error.password || logError}</span>
                    </div>

                    <button>Login</button>
                    <div className='text-white-300 font-semibold mt-4'>Don't have an account? <Link href="/register" legacyBehavior><span className='text-teal-300 underline underline-offset-4 hover:no-underline cursor-pointer'>Register Here</span></Link></div>

                </form>
            </div>
        </>
    )
}

export default login