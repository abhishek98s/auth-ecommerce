import React, { useEffect, useState } from 'react'
import Cards from '@/Components/Cards'
import styles from '@/styles/products.module.scss'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://dummyjson.com/products`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}


function Products({ data }) {
    const [productData, setProductData] = useState([]);
    console.log(data.products)
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    useEffect(() => {
        setProductData(data.products);
    }, []);

    const filterData = async (category) => {

        if (!category) {
            const res = await fetch(`https://dummyjson.com/products`)
            const data = await res.json()
            setProductData(data.products)
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
            <h1 className={styles.title}>Products</h1>

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
                    {productData.map((item) => (
                        <Cards items={item} />
                    ))}
                </article>

            </section>
        </>
    )
}

export default Products