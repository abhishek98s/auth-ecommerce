import React, { useEffect, useState } from 'react'
import Cards from '@/Components/Cards'
import styles from '@/styles/products.module.scss'
import { CartSvg } from 'public/svg'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '@/Redux/toggleSlice.js'
import Cart from '@/Components/Cart Sidebar'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://dummyjson.com/products`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}


function Products({ data }) {
    const toggleValue = useSelector((state) => state.toggle.value);
    const dispatch = useDispatch()

    const [productData, setProductData] = useState([]);
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    function setLocalData() {
        let localData = localStorage.getItem("apiData");
        if (localData) {
            setProductData(JSON.parse(localData))                                                    //Get api data from the localStorage to get avoid duplicate GET request
        } else {
            let localData = localStorage.setItem("apiData", JSON.stringify(data.products));          //Store the api data if not already stored
            setProductData(JSON.parse(localData))
        }
    }
    useEffect(() => {
        setLocalData();
    }, []);

    const filterData = async (category) => {

        if (!category) {
            setLocalData();
        } else {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`)
            const data = await res.json()

            setProductData(data.products)
        }
    }

    const filterAll = () => filterData();
    const filterSmartphones = () => filterData("smartphones");
    const filterWomen = () => filterData("laptops");
    const filterJewelery = () => filterData("fragrances");
    const filterElectornics = () => filterData("skincare");


    const inputHandler = (e) => {
        let val = e.target.value;

        switch (e.target.name) {
            case 'from':
                setFrom(val)
                break;
            case 'to':
                setTo(val)
                break;

            default:
                break;
        }
    }

    const filterPriceRange = async () => {
        await setProductData(data.products);
        let pricefrom = Number(from);
        let priceto = Number(to);
        let filterdata = productData.filter((item) => item.price > pricefrom && item.price < priceto);
        setProductData(filterdata);
    }
    return (
        <>
            <div className={styles.titleBox} >
             
                    <div className={styles.shoppingcart} onClick={() => dispatch(toggle())}>
                        <CartSvg />
                        <p>0</p>
                    </div>
                
            </div>

            <section className={styles.main}>
                <article className={styles.filterBox} >
                    <h2>Filter</h2>

                    <div className={styles.category}>
                        <h3>Category</h3>

                        <ul>
                            <li onClick={filterAll}>All</li>
                            <li onClick={filterSmartphones}>Smartphones</li>
                            <li onClick={filterWomen}>Laptops</li>
                            <li onClick={filterJewelery}>Fragrances</li>
                            <li onClick={filterElectornics}>Skincare</li>
                        </ul>
                    </div>

                    <h3>Range</h3>
                    <form className={styles.range}>
                        <input type='number' spellCheck='false' name='from' placeholder='From' onChange={inputHandler} />

                        <input type='number' spellCheck='false' name='to' placeholder='To' onChange={inputHandler} />
                    </form>
                    <button onClick={filterPriceRange}>Filter</button>
                </article>

                <article className={styles.productBox}>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                        <table className='w-full text-left' >
                            <thead className="text-xs text-gray-700 uppercase bg-blue-500/[.8]">
                                <tr>
                                    <th className="px-6 py-4">
                                        Product name
                                    </th>
                                    <th className="px-6 py-4">
                                        Category
                                    </th>
                                    <th className="px-6 py-4">
                                        Price
                                    </th>
                                    <th className="px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {productData.map((item) => (
                                    <Cards items={item} />
                                ))}

                            </tbody>
                        </table>
                    </div>

                </article>
                {toggleValue &&
                <Cart />
                }

            </section>
        </>
    )
}

export default Products