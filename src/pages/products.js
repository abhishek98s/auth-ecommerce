import React, { useEffect, useState } from 'react'
import Cards from '@/Components/Cards'
import styles from '@/styles/products.module.scss'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()

    // Pass data to the page via propswwwww
    return { props: { data } }
}


function Products({ data }) {
    const [productData, setProductData] = useState([]);
    const [from, setFrom] = useState(20);
    const [to, setTo] = useState(50);
    useEffect(() => {
        setProductData(data);
    }, []);

    const filterData = async (category) => {

        if (!category) {
            const res = await fetch(`https://fakestoreapi.com/products`)
            const data = await res.json()
            setProductData(data)
        } else {
            const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            const data = await res.json()

            setProductData(data)
        }
    }

    const filterAll = () => filterData();
    const filterMen = () => filterData("men's clothing");
    const filterWomen = () => filterData("women's clothing");
    const filterJewelery = () => filterData("jewelery");
    const filterElectornics = () => filterData("electronics");


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

    const filterPriceRange = async() => {
        await setProductData(data);
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
                            <li onClick={filterMen}>Men's Clothing</li>
                            <li onClick={filterWomen}>Women's Clothing</li>
                            <li onClick={filterJewelery}>Jewelery</li>
                            <li onClick={filterElectornics}>Electronics</li>
                        </ul>
                    </div>

                    <h3>Range</h3>
                    <form className={styles.range}>
                        <input type='number' spellCheck='false' name='from' onChange={inputHandler}  />

                        <input type='number' spellCheck='false' name='to' onChange={inputHandler}  />
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