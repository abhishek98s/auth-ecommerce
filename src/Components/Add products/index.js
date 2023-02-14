import React, { useState } from 'react'
import styles from './add.module.scss'

const AddProduct = ({ setProductData }) => {
    const [values, setValues] = useState({
        name: "",
        price: ""
    })

    const { name, price } = values;

    const inputHandler = (e) => {
        let val = e.target.value;
        setValues({ ...values, [e.target.name]: val });
    }


    const onSubmit = (e) => {
        e.preventDefault();

        // Check if any fields are blank
        const hasBlankFields = Object.values(values).some((value) => value === '');
        if (hasBlankFields) {
            alert('Please fill in all the fields');
            return;
        }

        setValues((values) => ({ ...values, name: '' }));
        setValues((values) => ({ ...values, price: '' }));
        
        let localData = localStorage.getItem("apiData");
        if(localData){
            let parseLocalData = JSON.parse(localData);

            let addToLocal = {
                id: parseLocalData.length + 1,
                title: values.name,
                price: Number(values.price)
            }

            parseLocalData.push(addToLocal);

            setProductData(parseLocalData)

            localStorage.setItem("apiData", JSON.stringify(parseLocalData))

            
        }
    }



    return (
        <article className={styles.addItems}>
            <h2>Add Products</h2>

            <div className={styles.inputBox}>
                <p>Name<span>*</span></p>
                <input type='text' id='text1' name='name' onChange={inputHandler} value={name} spellCheck="false" placeholder='Name'  />
            </div>

            <div className={styles.inputBox}>
                <p>Price<span>*</span></p>
                <input type='number' id='text1' name="price" onChange={inputHandler} value={price} spellCheck="false" placeholder='Price' />
            </div>

            <button className='bg-blue-500 w-full h-9 text-white px-3 text-base py-1 rounded-xl hover:bg-blue-600' onClick={onSubmit}>Add</button>
        </article>


    )

}

export default AddProduct