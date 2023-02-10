import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from '../Components/Landing Page'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [items, setItem ]= useState('');

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
