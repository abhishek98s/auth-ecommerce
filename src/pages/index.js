import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from '../Components/Landing Page'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setApiData } from '@/Redux/toggleSlice'

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/products`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default function Home({data}) {
  const [items, setItem ]= useState('');
  const dispatch = useDispatch();
  dispatch(setApiData(data));

  useEffect(() => {
    // Perform localStorage action
    setItem(localStorage.getItem('token'))
  }, [])
  
  if(items){
    alert("yes")
  }
  return (
    <>
      <Head>
        <title>ACEHOP - Online Marketplace for shopping</title>
      </Head>
      <LandingPage />
    </>
  )
}
