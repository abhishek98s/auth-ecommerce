import React, { useEffect, useState } from 'react'
import styles from '../styles/login.module.scss'
import { isEmail } from 'validator';
import Head from 'next/head';
import { useRouter } from 'next/router';


const login = () => {
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
        if(localData){
            let parseLocalData = JSON.parse(localData);

            let addToLocal = {
                email: values.email,
                password: values.password
            }

            parseLocalData.push(addToLocal);

            sessionStorage.setItem("userData", JSON.stringify(parseLocalData))
            router.push('/login')
        } else {
            let addToLocal = {
                email: values.email,
                password: values.password
            }
            let arr = [addToLocal]
            sessionStorage.setItem("userData", JSON.stringify(arr));   
            router.push('/login')
        }


    }

    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <div className={styles.body}>

                <form className={styles.loginBox} onSubmit={onSubmit}>
                    <h1>Register</h1>

                    <div className={styles.inputBox}>
                        <p>Email<span>*</span></p>
                        <input type='text' id='text1' name="email" spellCheck="false" placeholder='example@gmail.com' onChange={inputHandler} value={email} />
                        <span className={styles.error}>{error.email}</span>
                    </div>

                    <div className={styles.inputBox}>
                        <p>Password<span>*</span></p>
                        <input type='text' id='text1' name="password" spellCheck="false" placeholder='password' onChange={inputHandler} value={password} />
                        <span className={styles.error}>{error.password || logError}</span>
                    </div>

                    <button>Register</button>
                </form>
            </div>
        </>
    )
}

export default login