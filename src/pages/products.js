import React, { useEffect, useState } from 'react'
import Cards from '@/Components/Cards'
import styles from '@/styles/products.module.scss'
import { CartSvg } from 'public/svg'
import { useSelector, useDispatch } from 'react-redux'
import { toggle, noOfItems } from '@/Redux/toggleSlice.js'
import Cart from '@/Components/Cart Sidebar'
import AddProduct from '@/Components/Add products'
import withAuth from '@/Auth/auth'


function Products({ data }) {
    const toggleValue = useSelector((state) => state.toggle.value);
    const noOfItemsValue = useSelector((state) => state.toggle.noOfItems);
    const items = useSelector((state) => state.toggle.items)
    console.log(items)
    const dispatch = useDispatch();

    const [productData, setProductData] = useState([]);
    const [filterData, setFilterData] = useState("");
    const [from, setFrom] = useState();
    const [to, setTo] = useState();


    useEffect(() => {
        function setLocalData() {
            let localData = localStorage.getItem("apiData");
            if (localData) {
                setProductData(JSON.parse(localData))                                     //Get api data from the localStorage to get avoid duplicate GET request
            } else {
                localStorage.setItem("apiData", JSON.stringify(items.products));          //Store the api data if not already stored
                setProductData(items.products)
            }
        }
        setLocalData();
    }, []);

    // const filterData = async (category) => {

    //     if (!category) {
    //         setLocalData();
    //     } else {
    //         const res = await fetch(`https://dummyjson.com/products/category/${category}`)
    //         const data = await res.json()

    //         setProductData(data.products)
    //     }
    // }

    // filter the data and show it accordingly

    // const filterAll = () => filterData();
    // const filterSmartphones = () => filterData("smartphones");
    // const filterWomen = () => filterData("laptops");
    // const filterJewelery = () => filterData("fragrances");
    // const filterElectornics = () => filterData("skincare");

    function filter_func(productData) {
        if (!filterData) {
            return productData;
        }
        return productData.category === filterData;
    }

    const filterAll = () => setFilterData("");
    const filterSmartphones = () => setFilterData("smartphones");
    const filterWomen = () => setFilterData("laptops");
    const filterJewelery = () => setFilterData("fragrances");
    const filterElectornics = () => setFilterData("skincare");



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
                    <p>{noOfItemsValue}</p>
                </div>
            </div>

            <section className={styles.main}>
                <div className={styles.filterAdd}>
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

                    <AddProduct styles={styles} setProductData={setProductData} />
                </div>

                <article className={styles.productBox}>

                    {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
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
                            <tbody> */}

                    {productData
                        .filter((productData) => {
                            return filter_func(productData);
                        })
                        .map((item) => (
                            <Cards key={item.id} items={item} setProductData={setProductData}/>
                        ))}

                    {/* </tbody>
                        </table>
                    </div> */}

                </article>
                {toggleValue &&
                    <Cart />
                }

            </section>
        </>
    )
}

export default withAuth(Products)